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
        localStorage.setItem("PresentOrderAddOns", JSON.stringify([]))
        var event = new Event('change');
        let jVarLocalTableFooterCategoryId = document.getElementById('TableFooterCategoryId');
        
        if (jVarLocalTableFooterCategoryId === null === false) {
            document.getElementById("TableFooterCategoryId").dispatchEvent(event)
        };
    });
};

export { StartFunc }