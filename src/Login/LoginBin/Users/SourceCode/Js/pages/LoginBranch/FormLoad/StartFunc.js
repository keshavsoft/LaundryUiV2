import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as Delete } from "./Delete.js";

const StartFunc = () => {
    Delete();
    StartFuncAddListeners();
};

export { StartFunc };
