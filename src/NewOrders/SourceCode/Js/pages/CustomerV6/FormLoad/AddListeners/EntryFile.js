import { StartFunc as StartFuncCustomerNameInputId } from "./CustomerNameInputId/keypress/EntryFile.js";
import { StartFunc as StartFuncNewOrderButtonId } from "./NewOrderButtonId/EntryFile.js";
import { StartFunc as StartFuncCustomerNameSearchButtonId } from "./CustomerNameSearchButtonId/EntryFile.js";
import { StartFunc as StartFuncMasterButtonId } from "./MasterButtonId/EntryFile.js";
import { StartFunc as StartFuncBranchButtonId } from "./BranchNameButton/EntryFile.js";
import { StartFunc as AddItemsHtmlId } from "./AddItemsHtmlId/EntryFile.js";
import { StartFunc as StartFuncNavTabs } from "./NavTabs/EntryFile.js";
import { StartFunc as ModelPopUp } from "./ModelPopUp/StartFunc.js";
import { StartFunc as ModelSaveAlter } from "./ModelSaveAlter/StartFunc.js";

let StartFunc = () => {
    StartFuncCustomerNameInputId();
    StartFuncNewOrderButtonId();
    StartFuncCustomerNameSearchButtonId();
    StartFuncMasterButtonId();
    StartFuncBranchButtonId();
    AddItemsHtmlId();
    StartFuncNavTabs();
    ModelPopUp();
    ModelSaveAlter();
};

export { StartFunc }