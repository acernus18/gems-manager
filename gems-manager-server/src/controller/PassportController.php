<?php


namespace GemsManager\Controller;


class PassportController
{
    public function check(): array
    {
        return [
            "errorCode" => isset($_SESSION["user"]) ? 0 : -1,
            "message" => isset($_SESSION["user"]) ? "success" : "fail",
            "value" => isset($_SESSION["user"]) ? $_SESSION["user"] : [],
        ];
    }

    public function login(): array
    {
        $post = json_decode(file_get_contents("php://input"), true);
        $username = addslashes($post["username"]);
        $password = addslashes($post["password"]);
        $token = sha1(sprintf("%s&%s&secret", $username, $password));

        // zuriel&ltl19940912&secret
        if ($token === "b5ca928167363761d3f101c1f715b478b52a7ae6") {
            $_SESSION["user"] = [
                "username" => $username,
                "authorities" => ["administration"],
            ];
        }

        return $this->check();
    }

    public function logout(): array
    {
        unset($_SESSION["user"]);
        return [
            "errorCode" => 0,
            "message" => "success",
            "value" => null,
        ];
    }
}