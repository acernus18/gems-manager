package model

import (
	"github.com/go-sql-driver/mysql"
)

type SalesRecord struct {
	ID        int            `db:"id"`
	Digest    string         `db:"digest"`
	SoldID    string         `db:"sold_id"`
	SoldTime  mysql.NullTime `db:"sold_time"`
	SoldTo    string         `db:"sold_to"`
	GemID     string         `db:"gem_id"`
	GemInfo   string         `db:"gem_info"`
	GemType   int            `db:"gem_type"`
	Number    int            `db:"number"`
	Weight    float64        `db:"weight"`
	UnitCost  float64        `db:"unit_cost"`
	UnitPrice float64        `db:"unit_price"`
	RealPrice float64        `db:"real_price"`
}
