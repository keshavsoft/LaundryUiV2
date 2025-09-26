import { StartFunc as StartFuncGetFetch } from "../../../../../ToLocalStorage/PresentOrder/GetFetch.js";
import { StartFunc as StartFuncShowToDom } from "../../../../../../ShowToDom/ToTable/EntryFile.js";
import { jFShowToday } from "../../../../../ShowOnDom/EntryFile.js";

let StartFunc = () => {
    // window.location.href = ""
    StartFuncGetFetch().then(() => {
        StartFuncShowToDom();
        localStorage.removeItem('PresentOrderAddOns');
        $('#table').bootstrapTable('refresh');
        $('#AddItemsId')[0].reset();
        $('#TableFooterItemNameId').focus();
        jFShowToday();
        localStorage.setItem("PresentOrderAddOns", JSON.stringify([]))


    });


};

export { StartFunc }