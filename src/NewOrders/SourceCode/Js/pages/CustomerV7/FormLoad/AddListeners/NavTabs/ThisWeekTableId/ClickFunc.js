import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/AllOrders.js";

let StartFunc = () => {
    let JVarLocalFromStorage = StartFuncFromLocalStorage();

    const today = new Date(); const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const filteredData = JVarLocalFromStorage.filter(item => {
        const itemDate = new Date(item.DateTime);
        return itemDate >= lastWeek && itemDate <= today;
    });

    var $table = $(`#ThisWeekTableId`);

    $table.bootstrapTable("load", filteredData);

};
document.getElementById("ThisWeekRefreshButtonId").addEventListener("click", StartFunc);

export { StartFunc };
