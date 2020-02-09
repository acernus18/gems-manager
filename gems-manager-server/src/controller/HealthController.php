<?php declare(strict_types=1);


namespace GemsManager\Controller;


class HealthController
{
    public function healthCheck()
    {
        return ["errorCode" => 0, "message" => "success", "value" => "ok"];
    }

    public function checkServerStatus()
    {
        $result = ["errorCode" => 1, "message" => "fail", "value" => "fail"];
        $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

        if (socket_connect($socket, "lisimin16.eicp.net", 35890)) {
            $result = ["errorCode" => 0, "message" => "success", "value" => "success"];
        }

        socket_close($socket);
        return $result;
    }
}