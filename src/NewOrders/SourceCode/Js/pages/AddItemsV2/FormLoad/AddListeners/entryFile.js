import { StartFunc as StartFuncHeader } from "./Header/entryFile.js";
import { StartFunc as StartFuncModals } from "./Modals/entryFile.js";

let StartFunc = () => {
    StartFuncHeader();
    StartFuncModals();
};

export { StartFunc };