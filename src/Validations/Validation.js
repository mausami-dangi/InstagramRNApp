const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
        return false;
    } else {
        return true;
    }
};

const validatePassword = (text) => {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (reg.test(text) === false) {
        return false;
    } else {
        return true;
    }
};

export {
    validatePassword,
    validateEmail
}
