import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";

import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    // optionsJson.onPostBody = () => {
    //     StartFuncOnLoadSuccess();
    //     jFdate();
    //     $("#TableFooterItemNameId").focus();
    // };
    optionsJson.onPostBody = StartFuncOnPostBody;
    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    StartFuncForColumns({ inColumns: optionsJson.columns })

    $table.bootstrapTable(optionsJson)
};

export { StartFunc };
