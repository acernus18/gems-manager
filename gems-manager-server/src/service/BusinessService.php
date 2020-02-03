<?php declare(strict_types=1);


namespace GemsManager\Service;


class BusinessService
{
    public function decode(string $code): int
    {
        $CodeMapper = ["V", "H", "K", "L", "M", "N", "R", "S", "T", "U"];
        $RepeatMapper = ["B", "C", "D", "E", "F"];

        $result = 0;
        for ($i = 0; $i < strlen($code); $i++) {
            if (in_array($code[$i], $CodeMapper)) {
                $result = $result * 10 + array_search($code[$i], $CodeMapper);
            } elseif (in_array($code[$i], $RepeatMapper)) {
                $result *= (array_search($code[$i], $RepeatMapper) + 2 - strlen(strval($result))) * 10;
                break;
            }
        }
        return $result;
    }

    public function parse(string $name): array
    {
        $result = [];
        if (preg_match("/^.*?\W?([VHKLMNRSTUCDEF]+)\W?.*$/", $name, $matches)) {
            $result["code"] = $matches[1];
        }

        if (preg_match("/^.*(\d+\.\d+).*$/", $name, $matches)) {
            $result["weight"] = $matches[1];
        }

        if (preg_match("/^\s*([^VHKLMNRSTUCDEF\s]+).*$/", $name, $matches)) {
            $result["name"] = $matches[1];
        }

        if (array_key_exists("code", $result)) {
            $result["cost"] = $this->decode($result["code"]);
        }

        return $result;
    }
}