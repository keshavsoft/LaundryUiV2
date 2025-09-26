let StartFunc = () => {
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const modifiedString = jVarLocalBranchName.replace("BranOrders", "");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = modifiedString;
    };
};

export { StartFunc }