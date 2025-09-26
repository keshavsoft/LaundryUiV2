import { StartFunc as Status200 } from "./Status200.js";
import { StartFunc as Status500 } from "./Status500.js";

let StartFunc = async (inData) => {
    let jVarLocalData = inData;

    if (jVarLocalData.status === 200) {
        Status200(await jVarLocalData.json());
    };
    if (jVarLocalData.status === 500) {
        Status500(await jVarLocalData.json());
    };
};


export { StartFunc };
