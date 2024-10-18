<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $senha = isset($_POST['senha']) ? $_POST['senha'] : '';

    if (!empty($nome) && !empty($email) && !empty($senha)) {

        $senhaHash = password_hash($senha, PASSWORD_BCRYPT); 

        $host = "localhost";
        $dbname = "cadastro_colina";
        $user = "root";  
        $password = "";  

        $conn = new mysqli($host, $user, $password, $dbname);

        if ($conn->connect_error) {
            die("Falha na conexão: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM usuários WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $_SESSION['erro'] = "Já existe um usuário com este email.";
            header("Location: cadastro.php"); 
            exit();
        } else {

            $sql = "INSERT INTO usuários (nome, email, senha) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $nome, $email, $senhaHash);

            if ($stmt->execute()) {
                $_SESSION['sucesso'] = "Usuário cadastrado com sucesso! Faça login.";
                header("Location: Login.php"); 
                exit();
            } else {
                echo "Erro ao cadastrar: " . $conn->error;
            }
        }

        $stmt->close();
        $conn->close();
    } else {
        $_SESSION['erro'] = "Todos os campos são obrigatórios.";
        header("Location: cadastro.php");
        exit();
    }
}
?>