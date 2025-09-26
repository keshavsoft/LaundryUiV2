import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/StartFunc.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/StartFunc.js";
import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncShowOnDom()
    StartFuncAddlisteners();
    // jFLocalDiscountKeyUp();
};

let jFLocalDiscountKeyUp = () => {
    let event = new Event("keyup");
    document.getElementById("DiscountPerId").dispatchEvent(event);
};

export { StartFunc };
