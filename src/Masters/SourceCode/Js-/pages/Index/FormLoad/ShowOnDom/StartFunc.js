import { startFunc as MastersAddOns } from './MastersAddOns/EntryFile.js'
import { startFunc as MastersCustomers } from './MastersCustomers/EntryFile.js'
import { startFunc as MastersItems } from './MastersItems/EntryFile.js'

const StartFunc = () => {
    MastersAddOns();
    MastersCustomers();
    MastersItems();
};

export { StartFunc };
