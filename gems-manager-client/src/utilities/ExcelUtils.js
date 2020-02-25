import * as X from "xlsx";

export default {
    LoadExcelToJSON: loadExcelToJSON,
    ExportJSONToExcel: exportJSONToExcel,
}

function loadExcelToJSON(file) {
    return new Promise(resolve => {
        let reader = new FileReader();
        reader.onload = () => {
            let workBook = X.read(reader.result, {type: "binary"});
            let result = X.utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]]);
            resolve(result);
        };
        reader.readAsBinaryString(file);
    });
}

function exportJSONToExcel(object, filename = "output.xlsx") {
    let workBook = X.utils.book_new();
    let sheet = X.utils.json_to_sheet(object);
    X.utils.book_append_sheet(workBook, sheet);
    X.writeFile(workBook, filename, {bookType: 'xlsx', type: 'array'});
}