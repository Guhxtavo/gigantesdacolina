<?php
session_start(); // Iniciar a sessão para armazenar o login

// Verificar se o formulário foi enviado via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar os dados do formulário
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    // Verificar se os campos não estão vazios
    if (!empty($email) && !empty($senha)) {
        // Conectar ao banco de dados
        $host = "localhost";
        $user = "root";       // Usuário do MySQL
        $password = "";       // Senha do MySQL
        $dbname = "cadastro_colina";  // Nome do banco de dados

        // Criar a conexão com o banco de dados
        $conn = new mysqli($host, $user, $password, $dbname);

        // Verificar se a conexão falhou
        if ($conn->connect_error) {
            die("Falha na conexão com o banco de dados: " . $conn->connect_error);
        }

        // Buscar o usuário com o email informado
        $sql = "SELECT * FROM usuarios WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Verificar se o email existe no banco de dados
        if ($result->num_rows > 0) {
            $usuario = $result->fetch_assoc();  // Pegar os dados do usuário

            // Verificar se a senha fornecida corresponde à senha criptografada no banco
            if (password_verify($senha, $usuario['senha'])) {
                // Login bem-sucedido, salvar dados na sessão
                $_SESSION['nome'] = $usuario['nome'];
                $_SESSION['email'] = $usuario['email'];
                $_SESSION['logado'] = true;

                // Redirecionar para a página protegida do site
                header("Location: site_protegido.php");
                exit;
            } else {
                echo "Senha incorreta!";
            }
        } else {
            echo "Usuário não encontrado!";
        }

        // Fechar a conexão com o banco de dados
        $stmt->close();
        $conn->close();
    } else {
        echo "Todos os campos são obrigatórios!";
    }
}
?>