export default {
    GetJSON: getJSON,
    PostJSON: postJSON,
}

function getJSON(url, data = null) {
    let parameter = "";
    if (data !== null) {
        parameter = "?";
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                parameter += `${key}=${data[key]}&`
            }
        }
        if (parameter.endsWith("&")) {
            parameter = parameter.substr(0, parameter.length - 1);
        }
    }

    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.onloadend = function () {
            resolve(JSON.parse(request.responseText));
        };
        request.open("GET", url + parameter);
        request.send();
    });
}

function postJSON(url, data) {
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.onloadend = function () {
            resolve(JSON.parse(request.responseText));
        };
        request.send(JSON.stringify(data));
    });
}