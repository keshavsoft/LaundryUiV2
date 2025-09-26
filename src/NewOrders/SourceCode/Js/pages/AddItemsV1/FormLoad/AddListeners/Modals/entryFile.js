import { StartFunc as StartFuncAddOn } from "./AddOn/entryFile.js";

let StartFunc = () => {
    StartFuncAddOn();
};

export { StartFunc };