import { StartFunc as StartFunconchangeFunc } from "./onchangeFunc.js";

let StartFunc = () => {
    document.querySelectorAll('.CategoryItems').forEach(button =>
        button.addEventListener('click', function () {
            document.querySelectorAll('.CategoryItems').forEach(btn => 
                btn.classList.replace('btn-primary', 'btn-outline-primary')
            );
            this.classList.replace('btn-outline-primary', 'btn-primary');
            StartFunconchangeFunc(this.textContent.trim());
        })
    );
};

export { StartFunc };
