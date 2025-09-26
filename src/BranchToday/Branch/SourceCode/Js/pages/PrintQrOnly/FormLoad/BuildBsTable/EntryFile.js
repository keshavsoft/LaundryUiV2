import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";

const $table = $('#table');

const StartFunc = () => {
    ForColumns({ inColumns: optionsJson.columns });

    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

