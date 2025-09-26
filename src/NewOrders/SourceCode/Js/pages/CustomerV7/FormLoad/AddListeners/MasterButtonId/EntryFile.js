import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorageAndToDL/EntryFile.js";

let StartFunc = () => {
    let jVarLocalMasterButtonId = "MasterButtonId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalMasterButtonId);

    jVarLocalHtmlId.addEventListener("click", () => {
        StartFuncToLocalStorage();
    });
};

export { StartFunc }