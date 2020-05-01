<?php declare(strict_types=1);

namespace GemsManager\Repository;


use PDO;
use PDOException;

abstract class BaseRepository
{
    protected function connect(): PDO
    {
        $host = "db";
        $port = "3306";
        $dbname = "db_gems_manager";
        $charset = "utf8";
        $dataSourceName = "mysql:host=$host;dbname=$dbname;port=$port;charset=$charset";
        return new PDO($dataSourceName, "root", "dev#pass");
    }

    protected function transactional(callable $callback): array
    {
        $result = [];
        $connection = $this->connect();
        $connection->beginTransaction();
        try {
            $result = $callback($connection);
            $connection->commit();
        } catch (PDOException $exception) {
            $connection->rollBack();
            error_log($exception->getMessage());
        }
        $connection = null;
        return $result;
    }

    protected function insert(string $statement, array $parameters): array
    {
        return $this->transactional(function (PDO $connection) use ($statement, $parameters) {
            $result = [];
            $executor = $connection->prepare($statement);
            foreach ($parameters as $parameter) {
                $executor->execute($parameter);
                $result[] = $connection->lastInsertId();
            }
            return $result;
        });
    }

    protected function query(string $statement, array $parameters = null): array
    {
        return $this->transactional(function (PDO $connection) use ($statement, $parameters) {
            $statement = $connection->prepare($statement);
            $statement->execute($parameters);
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        });
    }
}