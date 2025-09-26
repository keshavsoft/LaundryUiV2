import { StartFunc as StartFuncOnClickRow } from "./onClickRow.js";

const StartFunc = (jFLocalFilter) => {
    let jVarLocalModalId = "ItemsOnModal";
    var $table = $(document.getElementById(jVarLocalModalId).querySelector("table"));

    if (jFLocalFilter) {
        $table.bootstrapTable({
            data: jFLocalFromLocalStorageWithFilter(jFLocalFilter),
            onClickRow: StartFuncOnClickRow
        });
        document.getElementById("SearchString").innerHTML = `Search Results for - ${jFLocalFilter}`;
    } else {
        $table.bootstrapTable({
            data: jFLocalFromLocalStorage(),
            onClickRow: StartFuncOnClickRow
        });
        document.getElementById("SearchString").innerHTML = "All Items";
    }

    $(`#${jVarLocalModalId}`).modal("show");
};


export { StartFunc };
