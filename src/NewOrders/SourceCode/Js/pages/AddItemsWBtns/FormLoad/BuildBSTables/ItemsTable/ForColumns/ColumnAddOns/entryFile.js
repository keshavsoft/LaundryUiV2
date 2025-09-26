const StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = formatterFunc;
};

const formatterFunc = (value, row) => {
    const addOnData = row.AddOnArray;

    if (addOnData && addOnData.length > 0) {
        const addOnPrice = addOnData.reduce((sum, item) => sum + item.AddOnRate, 0);
        return `<a href="#" class="btn btn-primary ">${addOnData.length}-${addOnPrice}</a>`;
    }

    return "No";
};

export { StartFunc };
