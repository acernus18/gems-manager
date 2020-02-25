<?php


namespace GemsManager\Controller;


use GemsManager\Repository\SalesRepository;

class SearchController
{
    public function querySalesRecords(): array
    {
        $result = [
            "errorCode" => 0,
            "message" => "success",
            "value" => null,
        ];

        if (!isset($_GET["key"]) || !isset($_GET["value"])) {
            $result["errorCode"] = 1;
            $result["message"] = "Invalid Parameters";
        } else {
            $key = $_GET["key"];
            $value = $_GET["value"];
            $salesRepository = new SalesRepository();

            switch ($key) {
                case "client":
                    $result["value"] = $salesRepository->listSalesRecordsByClient($value);
                    break;
                case "gemID":
                    $result["value"] = $salesRepository->selectSaleRecordByID($value);
                    break;
                default:
                    $result["errorCode"] = 2;
                    $result["message"] = "Invalid Search Key";
                    break;
            }
        }

        // Remove H:i:s information
        for ($i = 0; $i < count($result["value"]); $i++) {
            $result["value"][$i]["sold_time"] = date("Y-m-d", strtotime($result["value"][$i]["sold_time"]));
        }

        return $result;
    }

}