import AJAXUtils from "./AJAXUtils";

export default {
    QuerySalesRecords: querySalesRecords,
    QueryServerStatus: queryServerStatus,
    Login: login,
}

async function querySalesRecords(key, value) {
    let parameter = {
        "key": key,
        "value": value,
    };
    let result = await AJAXUtils.GetJSON("/api/search/querySalesRecords", parameter);
    return result["value"];
}

async function queryServerStatus() {
    let result = await AJAXUtils.GetJSON("/api/health/checkServerStatus");
    return result["value"];
}

async function login(username = null, password = null) {
    let authorities = [];

    if (username === null || password === null || username === "" || password === "") {
        if (sessionStorage.getItem("user") !== null) {
            authorities = JSON.parse(sessionStorage.getItem("user"))["authorities"];
        } else {
            await AJAXUtils.GetJSON("/api/passport/logout");
        }
    } else {
        let result = await AJAXUtils.PostJSON("/api/passport/login", {"username": username, "password": password});
        if (result["errorCode"] === 0) {
            sessionStorage.setItem("user", JSON.stringify(result["value"]));
            authorities = result["value"]["authorities"];
        }
    }

    return authorities;
}