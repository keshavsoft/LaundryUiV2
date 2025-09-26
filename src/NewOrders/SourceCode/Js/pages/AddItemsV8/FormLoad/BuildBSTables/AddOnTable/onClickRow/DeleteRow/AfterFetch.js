import { StartFunc as ToLocalStorage } from "../../../../../FormLoad/ToLocalStorage/PresentOrder/GetFetch.js";
import { StartFunc as StartFuncShowToDom } from "../../../../../ShowToDom/ToTable/EntryFile.js";

const StartFunc = ({ inResponse }) => {
    if (inResponse.status === 200) {

        hideModal("AddOnModal");

        ToLocalStorage().then(FromPromise => {
            StartFuncShowToDom();
            $("#TableFooterItemNameId").focus();
        });

        // window.location.href = ""
    };
};

function hideModal(id) {
    const modal_el = document.querySelector('#' + id);
    const modal_obj = bootstrap.Modal.getInstance(modal_el);

    if (modal_obj == null) {
        return;
    }

    modal_obj.hide();
};

export { StartFunc };