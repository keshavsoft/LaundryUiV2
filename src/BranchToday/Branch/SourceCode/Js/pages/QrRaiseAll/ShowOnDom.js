let StartFunc = () => {
    let jVarLocalHtmlClass = 'RefreshBSTableId';
    let jVarLocalRefreshBSTable = document.getElementsByClassName(jVarLocalHtmlClass);

    if (jVarLocalRefreshBSTable.length > 0) {
        jVarLocalRefreshBSTable[0].click();
    } else {
        console.error(`Element with class '${jVarLocalHtmlClass}' not found.`);
    }
};

export { StartFunc };
