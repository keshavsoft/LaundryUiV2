import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";

import optionsJson from './options.json' with {type: 'json'};

const jVarCommonModalId = "AddOnModalLocalStorage";

const StartFunc = () => {
    let jVarLocalAddOnModalLocalStorage = document.getElementById(jVarCommonModalId);
    let jVarLocalTable = jVarLocalAddOnModalLocalStorage.querySelector("table");

    var $table = $(jVarLocalTable);

    optionsJson.onPostBody = StartFuncOnPostBody;
    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    StartFuncForColumns({ inColumns: optionsJson.columns })

    $table.bootstrapTable(optionsJson)
};

export { StartFunc };
