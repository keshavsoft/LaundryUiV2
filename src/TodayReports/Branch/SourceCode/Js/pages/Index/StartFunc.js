import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc";
import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncFormLoad });

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
        jFLocalLeftSide();
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

StartFunc();