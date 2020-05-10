import * as X from "xlsx";

export default {
    LoadExcelToJSON: loadExcelToJSON,
    ExportJSONToExcel: exportJSONToExcel,
    FormatDate: formatDate,
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

function formatDate(excelTime) {
    let time = new Date((excelTime - 1) * 24 * 3600000 + 1);
    time.setYear(time.getFullYear() - 70);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    month = month.toString().length < 2 ? '0' + month : month;
    date = date.toString().length < 2 ? '0' + date : date;
    return year + "-" + month + "-" + date;
}