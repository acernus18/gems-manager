<?php declare(strict_types=1);


namespace GemsManager\Repository;


class SalesRepository extends BaseRepository
{
    private function generateDigest(array $record): string
    {
        $t = $record["sold_id"];
        $c = $record["sold_to"];
        $i = $record["gem_id"];
        $w = strval(floatval($record["weight"]));
        $p = strval(floatval($record["unit_price"]));
        return md5(sprintf("%s%s%s%s%s", $t, $c, $i, $w, $p));
    }

    private function generateInsertValues(array $record)
    {
        return [
            null,
            $this->generateDigest($record),
            $record["sold_id"],
            $record["sold_time"],
            $record["sold_to"],
            $record["gem_id"],
            $record["gem_info"],
            $record["gem_type"],
            $record["number"],
            $record["weight"],
            $record["unit_price"],
            $record["real_price"],
        ];
    }

    public function salesRecordExists(array $record): bool
    {
        $check = "select count(1) as c from tb_sales_record where digest = ?";
        $checkResult = $this->query($check, [$this->generateDigest($record)]);
        return $checkResult[0]["c"] !== 0;
    }

    public function listSalesRecordsByClient(string $client): array
    {
        $statement = "select * from tb_sales_record where sold_to like ?";
        return $this->query($statement, ["%${client}%"]);
    }

    public function selectSaleRecordByID(string $ID): array
    {
        $statement = "select * from tb_sales_record where gem_id = ?";
        return $this->query($statement, [$ID]);
    }
}