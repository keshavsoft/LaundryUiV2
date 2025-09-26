import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";

let StartFunc = (index, row, $detail) => {
    
    let jVarLocalDataArray = row.AggValues.ItemsArray;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForItemNames");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");

    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalInsideTable = $detail.html(str).find('table');

    optionsJson.data = jVarLocalDataArray;
    optionsJson.onExpandRow = StartFuncOnExpandRow;
    ForColumns({ inColumns: optionsJson.columns });

    jVarLocalInsideTable.bootstrapTable(optionsJson);
};

export { StartFunc };