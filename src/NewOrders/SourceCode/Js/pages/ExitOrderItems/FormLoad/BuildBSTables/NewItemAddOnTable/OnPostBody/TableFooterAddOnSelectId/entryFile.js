import { StartFunc as StartFuncButtonClickFunc } from "./changeFunc.js";
import { StartFunc as StartFuncKeypressFunc } from "./keypressFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("TableFooterAddOnSelectId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("change", StartFuncButtonClickFunc);
    };

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("keypress", StartFuncKeypressFunc);
    };
};

export { StartFunc };