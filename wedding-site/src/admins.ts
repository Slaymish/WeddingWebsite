const ValidEmails = [
    'hamishapps@gmail.com',
    'lanicampbell@gmail.com'
];

const isAdminEmail = (email) => {
    return ValidEmails.includes(email);
};

export { isAdminEmail };