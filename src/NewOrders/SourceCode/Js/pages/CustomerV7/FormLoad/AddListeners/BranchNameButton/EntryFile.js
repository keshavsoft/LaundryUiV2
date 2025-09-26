let StartFunc = () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const modifiedString = jVarLocalBranchName.replace("BranOrders", "");
    let jVarLocalBranchButtonId = document.getElementById("BranchButtonId");
    jVarLocalBranchButtonId.innerText = modifiedString;
    jVarLocalBranchButtonId.addEventListener('click', function() {
        window.location.href = "/LoginUsers/HtmlFiles/loginBranch.html";
    });
};

export { StartFunc }