import { StartFunc as Status200 } from "./Status200.js";
import { StartFunc as Status401 } from "./Status401.js";

let StartFunc = async (inRes) => {
    switch (inRes.status) {
        case 200: Status200(); break;
        case 401: Status401(await inRes.json()); break;
        default: console.error(`Unhandled status code: ${inRes.status}`);
    };
};

export { StartFunc };