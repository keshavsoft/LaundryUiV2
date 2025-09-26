import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as UserDetails } from "./UserDetails/Entry.js";

const StartFunc = () => {
    StartFuncAddListeners();
    UserDetails();
};

export { StartFunc };
