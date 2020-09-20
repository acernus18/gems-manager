package repository

import (
	"database/sql"
	"github.com/go-sql-driver/mysql"
)

func NewMySQL() (*sql.DB, error) {
	config := mysql.Config{
		Net:                  "tcp",
		Addr:                 "120.78.175.39:30001",
		User:                 "root",
		Passwd:               "dev#pass",
		DBName:               "db_jewelry",
		AllowNativePasswords: true,
	}
	return sql.Open("mysql", config.FormatDSN())
}
