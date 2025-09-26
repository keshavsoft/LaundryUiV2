import { StartFunc as StartFuncHeader } from "./Header/entryFile.js";
import { StartFunc as StartFuncItemAdd } from "./ItemAdd/EntryFile.js";

let StartFunc = () => {
    StartFuncHeader();
    StartFuncItemAdd();
    jFLocalEndFunc()
};
let jFLocalEndFunc = () => {
    var event = new Event('change');
    let jVarLocalTableFooterCategoryId = document.getElementById('TableFooterCategoryId');

    if (jVarLocalTableFooterCategoryId === null === false) {
        document.getElementById("TableFooterCategoryId").dispatchEvent(event)
    };
};

export { StartFunc };