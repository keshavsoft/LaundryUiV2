import { StartFunc as StartFuncAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/EntryFile.js";
import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/EntryFile.js";

const StartFunc = async () => {
    StartFuncShowOnDom();
    StartFuncBuildBSTables();

    await StartFuncToLocalStorage();

    StartFuncAddListeners();
};

export { StartFunc };
