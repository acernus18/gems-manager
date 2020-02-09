export default {
    QuerySalesRecords: querySalesRecords,
}

const URL = {
    "querySalesRecords": "/api/search/querySalesRecords",
};

async function querySalesRecords(key, value) {
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.onloadend = function () {
            resolve(JSON.parse(request.responseText));
        };
        request.open("GET", URL["querySalesRecords"] + `?key=${key}&value=${value}`);
        request.send();
    });
}