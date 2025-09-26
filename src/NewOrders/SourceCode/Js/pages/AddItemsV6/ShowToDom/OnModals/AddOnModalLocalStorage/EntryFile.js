import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";
const jVarCommonModalId = "AddOnModalLocalStorageTable";

const StartFunc = () => {
    let jVarLocalDataFromLocalStorage = StartFuncFromLocalStorage();

    var $table = $(`#${jVarCommonModalId}`);

    $table.bootstrapTable("load", jVarLocalDataFromLocalStorage === null ? [] : jVarLocalDataFromLocalStorage);
};

export { StartFunc };