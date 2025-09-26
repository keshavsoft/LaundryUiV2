import { StartFunc as StartFuncHeader } from "./Header/entryFile.js";
import { StartFunc as StartFuncItemAdd } from "./ItemAdd/EntryFile.js";

let StartFunc = () => {
    StartFuncHeader();
    StartFuncItemAdd();
};



export { StartFunc };