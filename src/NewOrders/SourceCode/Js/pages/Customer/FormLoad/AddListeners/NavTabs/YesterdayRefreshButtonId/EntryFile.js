import { StartFunc as StartFuncClickFunc } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    let jVarLocalMasterButtonId = "YesterdayRefreshButtonId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalMasterButtonId);

    jVarLocalHtmlId.addEventListener("click", StartFuncClickFunc);
};

export { StartFunc }