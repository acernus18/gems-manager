import AJAXUtils from "./AJAXUtils";

export default {
    QuerySalesRecords: querySalesRecords,
}

async function querySalesRecords(key, value) {
    let parameter = {
        "key": key,
        "value": value,
    };
    return await AJAXUtils.GetJSON("/api/search/querySalesRecords", parameter);
}