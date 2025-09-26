import { StartFunc as StartFuncItemsTable } from "./ItemsTable/EntryFile.js";
import { StartFunc as StartFuncAddOnTable } from "./AddOnTable/EntryFile.js";
import { StartFunc as StartFuncNewItemAddOnTable } from "./NewItemAddOnTable/EntryFile.js";

const StartFunc = () => {
    StartFuncItemsTable();
    StartFuncAddOnTable();
    StartFuncNewItemAddOnTable();
};

export { StartFunc };
