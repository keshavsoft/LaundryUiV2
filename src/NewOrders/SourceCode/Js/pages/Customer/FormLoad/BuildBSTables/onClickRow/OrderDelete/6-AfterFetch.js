import { StartFunc as StartFuncButtonClickFunc } from "../../../AddListeners/CustomerNameSearchButtonId/ButtonClickFunc.js";

let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'warning',
            text: inFromFetch.KReason
        });
    }else{
        StartFuncButtonClickFunc() 
    }

};

export { StartFunc };