import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    let jVarLocalFromCheck = CheckFunc(event);

    if (jVarLocalFromCheck) {
        let jVarLocalRes = await StartFuncFetchFuncs();

        StartFuncAfterFetch(jVarLocalRes);
    };
};

export { StartFunc }