export default {
    OpenFileSelector: openFileSelector,
    DetectMobile: detectMobile,
    IdentifyBrowser: identifyBrowser,
    ExportArrayToCSV: exportArrayToCSV,
}

function openFileSelector() {
    return new Promise(resolve => {
        let input = document.createElement("input");
        input.type = "file";
        input.click();
        input.onchange = () => {
            let file = input.files[0];
            resolve(file);
        }
    });
}

function exportArrayToCSV(elements, filename = "result.csv") {
    let content = elements.map(e => e.join(",")).join("\n");
    let blob = new Blob([content], {type: "text/csv;charset=utf-8;"});

    let link = document.createElement("a");
    if (link.download !== undefined) {
        let url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some(toMatchItem => navigator.userAgent.match(toMatchItem));
}

function identifyBrowser() {
    let userAgent = navigator.userAgent.toLowerCase();
    // let version = (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1];
    let result = null;
    if (/webkit/.test(userAgent)) {
        result = "webkit";
    } else if (/opera/.test(userAgent)) {
        result = "opera";
    } else if (/msie/.test(userAgent) && !/opera/.test(userAgent)) {
        result = "msie";
    } else if (/mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)) {
        result = "mozilla";
    } else if (/tencenttraveler/.test(userAgent)) {
        result = "TT";
    } else if (/chrome/.test(userAgent)) {
        result = "chrome";
    } else if (/firefox/.test(userAgent)) {
        result = "firefox";
    } else if (/safari/.test(userAgent)) {
        result = "safari";
    }
    // else if (/msie/.test(userAgent) && version.substr(0, 1) === '6') {
    //     result = "ie6";
    // }
    return result;
}