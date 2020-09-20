package controller

import (
	"encoding/json"
	"errors"
	"net/http"
)

func get(name string, r *http.Request) (interface{}, error) {
	values, present := r.URL.Query()[name]
	if present && len(values) != 0 {
		return values[0], nil
	}
	return nil, errors.New("parameter_not_exist")
}

func outputJSON(w http.ResponseWriter, data interface{}) error {
	bytes, e := json.Marshal(data)
	if e != nil {
		return e
	}

	w.Header().Set("Content-Type", "application/json")
	if _, e = w.Write(bytes); e != nil {
		return e
	}

	return nil
}

func success(w http.ResponseWriter, data interface{}) error {
	result := map[string]interface{}{}
	result["error_code"] = 0
	result["message"] = "success"
	result["data"] = data
	if e := outputJSON(w, result); e != nil {
		return e
	}
	return nil
}

func fail(w http.ResponseWriter, code int, e error) error {
	result := map[string]interface{}{}
	result["error_code"] = code
	result["message"] = e.Error()
	if e := outputJSON(w, result); e != nil {
		return e
	}
	return nil
}
