import { StartFunc as StartFuncAddOnModalSaveButtonId } from "./AddOnModalSaveButtonId/EntryFile.js";
// import { StartFunc as StartFuncToAddOns } from "./ToAddOns/EntryFile.js";
import { StartFunc as StartFuncTableFooterAddOnSelectId } from "./TableFooterAddOnSelectId/entryFile.js";

let StartFunc = () => {
    StartFuncAddOnModalSaveButtonId();
    // StartFuncToAddOns();
    StartFuncTableFooterAddOnSelectId();

    jFLocalEndFunc();
    $("#TableFooterItemNameId").focus();
};

let jFLocalEndFunc = () => {
    var event = new Event('change');
    let jVarLocalTableFooterCategoryId = document.getElementById('TableFooterAddOnSelectId');

    if (jVarLocalTableFooterCategoryId === null === false) {
        jVarLocalTableFooterCategoryId.dispatchEvent(event)
    };
};

export { StartFunc };