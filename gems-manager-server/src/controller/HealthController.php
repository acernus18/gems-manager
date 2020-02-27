<?php declare(strict_types=1);


namespace GemsManager\Controller;


use GemsManager\Service\BusinessService;

class HealthController
{
    public function healthCheck()
    {
        return ["errorCode" => 0, "message" => "success", "value" => "ok"];
    }

    public function checkServerStatus()
    {
        $businessService = new BusinessService();
        $result = ["errorCode" => 1, "message" => "fail", "value" => "fail"];
        if ($businessService->checkServer()) {
            $result = ["errorCode" => 0, "message" => "success", "value" => "success"];
        }
        return $result;
    }

    public function test()
    {
        return simplexml_load_file("resources/mapper.xml");
    }
}