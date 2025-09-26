import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
const jVarCommonTableId = "table";

const StartFunc = () => {
    var $table = $(`${jVarCommonTableId}`);

    StartFuncForColumns({ inColumns: optionsJson.columns })

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

