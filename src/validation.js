export const validateEmail = (email) => {
    return !String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const validateName = (name) => {
    return !/^[A-Za-z]+$/.test(name);
};

export const validateMessage = (message) => {
   return message.length <= 120;
};

export const validatePassword = (password) => {
    return password.length < 6;
};

export const validatePasswordConfirm = (password1, password2) => {
    return password1!==password2;
};