import { StartFunc as ShowOnDom } from "./ShowOnDom/StartFunc.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";


const StartFunc = async () => {
    ShowOnDom();
    StartFuncFromUrlParams();
};

export { StartFunc };
