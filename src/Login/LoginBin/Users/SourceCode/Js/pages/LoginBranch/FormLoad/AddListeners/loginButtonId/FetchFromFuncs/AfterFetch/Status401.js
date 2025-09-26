const StartFunc = (inRes) => {
    if (inRes.KReason.includes("Wrong Password")) {
        jFLocalyourPassword(inRes.KReason);
    }
    if (inRes.KReason.includes("Wrong Username")) {
        jFLocalyourUsername(inRes.KReason);
    }
};

export { StartFunc };

let jFLocalyourUsername = (message) => {
    const yourUsernameId = 'yourUsername';
    const usernameTextId = 'usernameTextId';
    const usernameField = document.getElementById(yourUsernameId);
    const usernameMessage = document.getElementById(usernameTextId);

    usernameMessage.innerHTML = `${message}`;
    usernameField.classList.add("is-invalid");
    usernameField.focus();

    const usernameLength = usernameField.value.trim().length;
    usernameField.setSelectionRange(0, usernameLength);
};

let jFLocalyourPassword = (message) => {
    const yourPasswordId = 'yourPassword';
    const usernameTextId = 'passwordTextId';
    const passwordField = document.getElementById(yourPasswordId);
    const usernameMessage = document.getElementById(usernameTextId);

    usernameMessage.innerHTML = `${message}`;
    passwordField.classList.add("is-invalid");
    passwordField.focus();

    const passwordLength = passwordField.value.trim().length;
    passwordField.setSelectionRange(0, passwordLength);
};
