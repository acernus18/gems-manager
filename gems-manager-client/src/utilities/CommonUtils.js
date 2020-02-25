
export default {
    OpenFileSelector: openFileSelector,

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

