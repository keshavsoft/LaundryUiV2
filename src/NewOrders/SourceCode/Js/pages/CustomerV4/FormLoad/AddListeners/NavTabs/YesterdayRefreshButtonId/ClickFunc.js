import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/AllOrders.js";

let StartFunc = () => {
    let JVarLocalFromStorage = StartFuncFromLocalStorage();
    let JVarLocalDate = JfLocalDate();

    let JVarLocalDateFilter = JVarLocalFromStorage.filter(element => new Date(element.DateTime).toLocaleDateString('en-GD') == JVarLocalDate);

    var $table = $(`#YesterdayTableId`);

    $table.bootstrapTable("load", JVarLocalDateFilter);

};
function JfLocalDate() {

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${day}/${month}/${year}`;
    };

    const yesterdayFormatted = formatDate(yesterday);

    return yesterdayFormatted;
}
export { StartFunc };
