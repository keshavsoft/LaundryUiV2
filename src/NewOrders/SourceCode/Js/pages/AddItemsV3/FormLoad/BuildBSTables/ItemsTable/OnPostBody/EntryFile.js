import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";
import { StartFunc as StartFuncTableFooterCategoryId } from "./TableFooterCategoryId/EntryFile.js";
import { StartFunc as StartFuncTableFooterItemNameId } from "./TableFooterItemNameId/EntryFile.js";
import { StartFunc as StartFuncTableFooterItemNameSearchButtonId } from "./TableFooterItemNameSearchButtonId/EntryFile.js";

let StartFunc = () => {
    jFLocalShowToday();
    StartFuncTableFooterSaveButtonId();
    StartFuncTableFooterCategoryId();
    StartFuncTableFooterItemNameId();
    StartFuncTableFooterItemNameSearchButtonId();

    jFLocalEndFunc();

    $("#TableFooterItemNameId").focus();
};

let jFLocalEndFunc = () => {
    var event = new Event('change');
    let jVarLocalTableFooterCategoryId = document.getElementById('TableFooterCategoryId');

    if (jVarLocalTableFooterCategoryId === null === false) {
        document.getElementById("TableFooterCategoryId").dispatchEvent(event)
    };
};

const jFLocalShowToday = () => {
    var today = new Date();
    var ddToday = String(today.getDate()).padStart(2, '0');
    var mmToday = String(today.getMonth() + 1).padStart(2, '0');
    var yyyyToday = today.getFullYear();
    var formattedToday = yyyyToday + '-' + mmToday + '-' + ddToday;

    today.setDate(today.getDate() + 7);
    var ddNextWeek = String(today.getDate()).padStart(2, '0');
    var mmNextWeek = String(today.getMonth() + 1).padStart(2, '0');
    var yyyyNextWeek = today.getFullYear();
    var formattedNextWeek = yyyyNextWeek + '-' + mmNextWeek + '-' + ddNextWeek;

    let jVarLocalTableFooterdateInputId = document.getElementById('TableFooterdateInputId');

    if (jVarLocalTableFooterdateInputId === null === false) {
        jVarLocalTableFooterdateInputId.value = formattedNextWeek;
        jVarLocalTableFooterdateInputId.setAttribute("min", formattedToday);

    };
};

export { StartFunc };