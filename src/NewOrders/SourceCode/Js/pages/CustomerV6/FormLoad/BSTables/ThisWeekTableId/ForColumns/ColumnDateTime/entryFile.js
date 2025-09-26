let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalFormater;
};

const jFLocalFormater = (value) => {
    if (value === undefined) {
        return "";
    }
    var diffMs = (new Date() - new Date(value)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";
};

export { StartFunc };