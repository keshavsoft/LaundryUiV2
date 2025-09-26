import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    // let jVarLocalRefreshBSTableId = document.getElementsByClassName("RefreshBSTableId");

    // if (jVarLocalRefreshBSTableId === null === false) {
    //     jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFuncToRun);
    // };

    const arrClass = document.querySelectorAll(".RefreshBSTableId");

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc };