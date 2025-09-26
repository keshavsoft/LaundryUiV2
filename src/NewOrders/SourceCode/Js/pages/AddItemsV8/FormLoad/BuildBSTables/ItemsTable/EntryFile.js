import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncRowStyle } from "./RowStyle/EntryFile.js";

import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onPostBody = StartFuncOnPostBody;
    optionsJson.onClickRow = StartFuncOnClickRowFunc;
    optionsJson.rowStyle = StartFuncRowStyle;

    StartFuncForColumns({ inColumns: optionsJson.columns })

    $table.bootstrapTable(optionsJson)
};

export { StartFunc };
