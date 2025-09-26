import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = async () => {
    StartFuncFormLoad();

    let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncShowOnDom });

    if (jVarLocalFromAdmin === false) {
        return await false;
    };

    StartFuncShowOnDom();
};

document.addEventListener("DOMContentLoaded", function () {
    let editCustomerModal = document.getElementById('editCustomerModal');
    let jVarLocalHtmlId = 'CustomerNameInputId';
    let jVarLocalCustomerNameInputId = document.getElementById(jVarLocalHtmlId);

    editCustomerModal.addEventListener('shown.bs.modal', function () {
        document.getElementById('CustomerName').focus();
    });

    editCustomerModal.addEventListener('hidden.bs.modal', () => {
        setTimeout(() => {
            jVarLocalCustomerNameInputId.setAttribute("tabindex", "-1")
            jVarLocalCustomerNameInputId.focus();
        }, 5);
    });
});

StartFunc().then();