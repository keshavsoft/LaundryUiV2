const StartFunc = (row, index) => {
    if (row.ItemService === "PW") {
        return {
            classes: "table-warning"
        };
    } else {
        return {};
    }
};

export { StartFunc };