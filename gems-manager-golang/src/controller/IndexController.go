package controller

import (
	"gems-manager/src/repository"
	"net/http"
)

func QuerySalesRecords(w http.ResponseWriter, r *http.Request) {
	value, e := get("value", r)
	if e != nil && e.Error() == "parameter_not_exist" {
		if e = fail(w, -1, e); e != nil {
			panic(e)
		}
		return
	}
	data, e := repository.SelectSaleRecordByID(value.(string))
	if e != nil {
		panic(e)
	}
	if e = success(w, data); e != nil {
		panic(e)
	}
}
