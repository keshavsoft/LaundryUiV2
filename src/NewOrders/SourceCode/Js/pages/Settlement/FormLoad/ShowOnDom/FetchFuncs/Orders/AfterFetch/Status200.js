import { StartFunc as StartFuncCommonDetails } from './ShowOnDom/CommonDetails.js';
import { StartFunc as StartFuncShowSettlementDetails } from './ShowOnDom/ShowSettlementDetails.js';

const StartFunc = ({ inData }) => {
    console.log("inData:",inData);
    
    StartFuncCommonDetails({ inData });
    StartFuncShowSettlementDetails({ inData });

};
export { StartFunc };