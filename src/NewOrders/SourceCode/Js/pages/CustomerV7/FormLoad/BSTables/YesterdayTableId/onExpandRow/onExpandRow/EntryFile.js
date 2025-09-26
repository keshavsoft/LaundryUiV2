import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";

let StartFunc = (index, row, $detail) => {
    
    let jVarLocalDataArray = row.AddOnArray;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForAddOns");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalInsideTable = $detail.html(str).find('table');
    optionsJson.data = jVarLocalDataArray;
    ForColumns({ inColumns: optionsJson.columns });
    jVarLocalInsideTable.bootstrapTable(optionsJson);

};

export { StartFunc };