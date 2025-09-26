import { StartFunc as StartFuncGetFetch } from "../../../../../ToLocalStorage/PresentOrder/GetFetch.js";
import { StartFunc as StartFuncShowToDom } from "../../../../../../ShowToDom/ToTable/EntryFile.js";
import { jFShowToday } from "../../../../../ShowOnDom/EntryFile.js";

let StartFunc = () => {
    StartFuncGetFetch().then(() => {
        StartFuncShowToDom();
        localStorage.removeItem('PresentOrderAddOns');
        $('#table').bootstrapTable('refresh');
        $('#AddItemsId')[0].reset();
        $('#TableFooterItemNameId').focus();
        jFShowToday();
        localStorage.setItem("PresentOrderAddOns", JSON.stringify([]));
        jFTableFooterCategoryId();
        jFLocalToInputSubId()
        jFTableFooterSaveButtonId()
        jFLocalTableFooterAlterButtonId()
    });


};

let jFLocalToInputSubId = () => {
    let jVarLocalHtmlId = 'SubId';
    let jVarLocalSubId = document.getElementById(jVarLocalHtmlId);
    jVarLocalSubId.classList.add("d-none")
};

const jFTableFooterSaveButtonId = () => {
    let jVarLocalHtmlId = 'TableFooterSaveButtonId';
    let jVarLocalTableFooterdateInputId = document.getElementById(jVarLocalHtmlId);
    jVarLocalTableFooterdateInputId.classList.remove("d-none")

};

let jFLocalTableFooterAlterButtonId = () => {
    let jVarLocalTableFooterAlterButtonId = 'TableFooterAlterButtonId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAlterButtonId);
    jVarLocalHtmlId.classList.add("d-none")
};

const jFTableFooterCategoryId = () => {
    var event = new Event('change');
    let jVarLocalTableFooterCategoryId = document.getElementById('TableFooterCategoryId');

    if (jVarLocalTableFooterCategoryId === null === false) {
        document.getElementById("TableFooterCategoryId").dispatchEvent(event)
    };

}

export { StartFunc }