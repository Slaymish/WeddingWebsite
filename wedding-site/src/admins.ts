const ValidEmails = [
    'hamishapps@gmail.com',
    'finlay@burke.kiwi',
    'lanisimba@icloud.com'
];

const isAdminEmail = (email) => {
    return ValidEmails.includes(email);
};

export { isAdminEmail };