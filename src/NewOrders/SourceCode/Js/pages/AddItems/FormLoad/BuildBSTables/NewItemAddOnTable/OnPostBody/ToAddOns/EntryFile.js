import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = () => {
    let jVarLocalTableFooterAddOnSelectId = document.getElementById("TableFooterAddOnSelectId");
    addDefaultOption(jVarLocalTableFooterAddOnSelectId)
    let jVarLocalData = StartFuncFromLocalStorage();

    for (var i = 0; i < jVarLocalData.length; i++) {
        let jVarLoopInsideOption = document.createElement("option");
        jVarLoopInsideOption.value = jVarLocalData[i].AddOnService;
        jVarLoopInsideOption.innerHTML = jVarLocalData[i].AddOnService;

        jVarLocalTableFooterAddOnSelectId.appendChild(jVarLoopInsideOption);
    };
};
let addDefaultOption = (selectElement) => {
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerHTML = "Select Add-On ";

    selectElement.appendChild(defaultOption);
}
export { StartFunc }