import { StartFunc as StartFuncShowOnModal } from "./ShowOnModal.js";
import { StartFunc as StartFuncShowToDom } from "../../../../../ShowToDom/OnModals/AddOnModalLocalStorage/EntryFile.js";

const jVarCommonModalId = "AddOnModalLocalStorage";

const StartFunc = ({ inRow }) => {
    StartFuncShowToDom();

    let jVarLocalAddOnModalLocalStorage = document.getElementById(jVarCommonModalId);

    StartFuncShowOnModal({ inRow });

    $(jVarLocalAddOnModalLocalStorage).modal("show");
    // LocalFuncForTableFooterAddOnSelectIdFocus();
};

export { StartFunc };