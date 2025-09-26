import { StartFunc as StartFuncDeleteFetch } from "./DeleteFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

const StartFunc = async ({ inRowpk }) => {
    // debugger;

    let jVarLocalresponse = await StartFuncDeleteFetch({ inRowpk });

    StartFuncAfterFetch({ inResponse: jVarLocalresponse })
};

export { StartFunc };

