<?php declare(strict_types=1);


namespace GemsManager\Repository;


class SalesRepository extends BaseRepository
{
    public function listSalesRecordsByClient(string $client): array
    {
        $statement = "select * from tb_gem_sold_list where sold_to like ?";
        return $this->query($statement, ["%${client}%"]);
    }

    public function selectSaleRecordByID(string $ID): array
    {
        $statement = "select * from tb_gem_sold_list where gem_id = ?";
        return $this->query($statement, [$ID]);
    }
}