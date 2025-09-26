import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let closeButton=()=>{
        // alert('1');
        var close=document.querySelector('#AmountCheckAlert .close');
        close.addEventListener('click',()=>{
            document.getElementById('AmountCheckAlert').style.display='none';
        })
    }

    closeButton();
    let jVarLocalCreateFolderButtonId = document.getElementById("SaveButtonId");

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };
