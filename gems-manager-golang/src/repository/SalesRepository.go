package repository

import "gems-manager/src/model"

func SelectSaleRecordByID(gemID string) ([]model.SalesRecord, error) {
	db, e := NewMySQL()
	if e != nil {
		return nil, e
	}

	rows, e := db.Query("select * from tb_sales_record where gem_id = ?", gemID)
	if e != nil {
		return nil, e
	}

	result := make([]model.SalesRecord, 0)
	if rows.Next() {
		temp := model.SalesRecord{}
		e = rows.Scan(
			&temp.ID, &temp.Digest, &temp.SoldID, &temp.SoldTime,
			&temp.SoldTo, &temp.GemID, &temp.GemInfo, &temp.GemType, &temp.Number,
			&temp.Weight, &temp.UnitCost, &temp.UnitPrice, &temp.RealPrice,
		)

		if e != nil {
			return nil, e
		}

		result = append(result, temp)
	}

	return result, nil
}
