import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
// import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncFormLoad });
    let jVarLocalFromAdmin = true

    const dobDateInput = () => {
        const dobInput = document.getElementById("dob");
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0'); // pad day to 2 digits
        const maxDate = year + '-' + month + '-' + day;
        dobInput.setAttribute("max", maxDate);
    }
    if (jVarLocalFromAdmin) {
        dobDateInput();
        StartFuncFormLoad();
    };
};

StartFunc();