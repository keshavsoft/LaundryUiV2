const StartFunc = () => {
    jFLocalToInputBranchName();
};

let jFLocalToInputBranchName = () => {
    let jVarLocalFromBranchName = localStorage.getItem("BranchName");
    const modifiedBranch = jVarLocalFromBranchName.replace("BranOrders", "");

    let jVarLocalHtmlId = 'BranchName';
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBranchName === null === false) {
        jVarLocalBranchName.value = modifiedBranch;
    };
};


export { StartFunc };
