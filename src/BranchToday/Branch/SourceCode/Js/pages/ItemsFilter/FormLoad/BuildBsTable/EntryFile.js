import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    let localBranchname = localStorage.getItem("BranchName");
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;
    ForColumns({ inColumns: optionsJson.columns });
    optionsJson.url = `/Custom/Cleaning/Branch/Today/V1/OnlyOrders/Items/${localBranchname}`
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

