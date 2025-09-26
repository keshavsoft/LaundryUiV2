import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";

import OptionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#AddOnTable');

    OptionsJson.onPostBody = StartFuncOnLoadSuccess;
    OptionsJson.onClickRow = StartFuncOnClickRowFunc;

    $table.bootstrapTable(OptionsJson);
};

export { StartFunc };
