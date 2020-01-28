<?php


namespace GemsManager\Controller;


class HealthController
{
    public function healthCheck()
    {
        return ["errorCode" => 0, "message" => "success", "value" => "ok"];
    }
}