import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/AllOrders.js";

let StartFunc = () => {
    let JVarLocalFromStorage = StartFuncFromLocalStorage();

    var $table = $(`#AllTableId`);

    $table.bootstrapTable("load", JVarLocalFromStorage);

};
document.getElementById("AllRefreshButtonId").addEventListener("click", StartFunc);

export { StartFunc };
