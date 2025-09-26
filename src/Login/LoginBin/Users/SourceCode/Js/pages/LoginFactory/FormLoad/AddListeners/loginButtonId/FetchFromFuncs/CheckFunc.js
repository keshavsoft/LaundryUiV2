let StartFunc = (event) => {
     // Add event listeners to remove error state on input change
     document.getElementById('yourUsername').addEventListener('input', removeErrorState);
     document.getElementById('yourPassword').addEventListener('input', removeErrorState);

    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            LoopItem.classList.add("is-invalid");
            jVarLocalReturnTF = false;
            return;
        };
    });
    
    return jVarLocalReturnTF;
};

const removeErrorState = (event) => {
    const element = event.target;
    element.classList.remove('is-invalid');
    // Optionally clear any error messages
    const messageElement = document.getElementById(`${element.id}TextId`);
    if (messageElement) {
        messageElement.innerHTML = '';
    }
};
export { StartFunc }