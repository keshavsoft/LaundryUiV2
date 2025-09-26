import { StartFunc as StartFuncToTable } from "./ToTable/EntryFile.js";
import { StartFunc as StartFuncToHeading } from "./ToHeading/EntryFile.js";

const StartFunc = () => {
    StartFuncToTable();
    StartFuncToHeading();
};

export { StartFunc }