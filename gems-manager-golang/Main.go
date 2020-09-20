package main

import (
	"gems-manager/src/controller"
	"net/http"
)

func main() {
	http.HandleFunc("/index", controller.QuerySalesRecords)
	if e := http.ListenAndServe(":8080", nil); e != nil {
		panic(e)
	}
}
