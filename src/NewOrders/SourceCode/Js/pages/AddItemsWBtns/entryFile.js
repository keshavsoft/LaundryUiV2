import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncShowToDom } from "./ShowToDom/EntryFile.js";
import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/AddOnData/insertEmptyArray.js";
import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = async () => {
    await StartFuncFormLoad();
    let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncShowToDom });
    // jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncToLocalStorage();
        StartFuncShowToDom();
        jFLocalEndFunc();
    };
};

let jFLocalEndFunc = () => {
    let jVarLocalTableFooterCategoryId = document.getElementById('MenCategoryId');

    if (jVarLocalTableFooterCategoryId === null === false) {
        jVarLocalTableFooterCategoryId.click();
    };
};

StartFunc().then();