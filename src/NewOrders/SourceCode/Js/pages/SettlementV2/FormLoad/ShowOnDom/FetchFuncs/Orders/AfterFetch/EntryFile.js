import { StartFunc as Status200 } from './Status200.js';
import { StartFunc as Status500 } from './Status500.js';

const StartFunc = async ({ inFromFetch }) => {

    if (inFromFetch.status === 200) {
        let LocalData = await inFromFetch.json();
        Status200({ inData: LocalData })
    };
    if (inFromFetch.status === 500) {
        Status500()
    };
};
export { StartFunc };