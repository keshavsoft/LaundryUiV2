import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const jVarCommonTableId = 'YesterdayTableId';

const StartFunc = () => {
    var $table = $(`#${jVarCommonTableId}`);

    optionsJson.icons = IconsJson;
    optionsJson.onExpandRow = StartFuncOnExpandRow;

    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };
