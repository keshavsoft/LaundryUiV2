import { StartFunc as StartFuncItemsOnModalTable } from "./ItemsOnModalTable/EntryFile.js";

const StartFunc = () => {
    let jFLocalFilter = document.getElementById("TableFooterItemNameId").value;

    StartFuncItemsOnModalTable(jFLocalFilter);
};

export { StartFunc };
