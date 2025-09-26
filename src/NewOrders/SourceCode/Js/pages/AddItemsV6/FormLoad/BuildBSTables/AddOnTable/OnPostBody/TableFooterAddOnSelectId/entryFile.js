import { StartFunc as StartFuncButtonClickFunc } from "./changeFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("TableFooterAddOnSelectId");
    
    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("change", StartFuncButtonClickFunc);
    };
};

export { StartFunc };