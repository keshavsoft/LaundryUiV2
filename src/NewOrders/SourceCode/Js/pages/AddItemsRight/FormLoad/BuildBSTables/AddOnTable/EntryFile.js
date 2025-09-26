import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
// import { StartFunc as StartFuncOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";

import optionsJson from './options.json' with {type: 'json'};

const jVarCommonTableId = "AddOnTable";

const StartFunc = () => {
    var $table = $(`#${jVarCommonTableId}`);

    // optionsJson.onPostBody = StartFuncOnPostBody;
    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    StartFuncForColumns({ inColumns: optionsJson.columns })

    $table.bootstrapTable(optionsJson)
};

export { StartFunc };
