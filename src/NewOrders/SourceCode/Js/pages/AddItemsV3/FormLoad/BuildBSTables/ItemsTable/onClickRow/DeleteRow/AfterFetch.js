import { StartFunc as ToLocalStorage } from "../../../../../FormLoad/ToLocalStorage/PresentOrder/GetFetch.js";
import { StartFunc as StartFuncShowToDom } from "../../../../../ShowToDom/ToTable/EntryFile.js";

const StartFunc = ({ inResponse }) => {
    if (inResponse.status === 200) {
        ToLocalStorage().then(FromPromise => {
            StartFuncShowToDom();
            $("#TableFooterItemNameId").focus();
        });

        // window.location.href = ""
    };
};

export { StartFunc };