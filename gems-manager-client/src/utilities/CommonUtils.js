import JQuery from "jquery";
import * as X from "xlsx";

export default {
    HttpRequest: httpRequest,
    OpenFileSelector: openFileSelector,
    LoadExcelToJSON: loadExcelToJSON,
    ExportJSONToExcel: exportJSONToExcel,
}

function httpRequest(options) {
    JQuery.ajax(options);
}

function openFileSelector(fileHandler) {
    let input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = () => {
        let file = input.files[0];
        fileHandler(file);
    }
}

function loadExcelToJSON(file, callback) {
    let reader = new FileReader();
    reader.onload = () => {
        let workBook = X.read(reader.result, {type: "binary"});

        let result = [];
        for (let i = 0; i < workBook.SheetNames[0].length; i++) {
            let temp = X.utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[i]]);
            if (temp.length !== 0) {
                result.push(temp);
            }
        }
        callback(result);
    };
    reader.readAsBinaryString(file);
}

function exportJSONToExcel(object, filename = "output.xlsx") {
    let workBook = X.utils.book_new();
    let sheet = X.utils.json_to_sheet(object);
    X.utils.book_append_sheet(workBook, sheet);
    X.writeFile(workBook, filename, {bookType: 'xlsx', type: 'array'});
}