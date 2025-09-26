import { StartFunc as StartFuncItemsTable } from "./ItemsTable/EntryFile.js";
import { StartFunc as StartFuncAddOnTable } from "./AddOnTable/EntryFile.js";

const StartFunc = () => {
    StartFuncItemsTable();
    StartFuncAddOnTable();
};

export { StartFunc };
