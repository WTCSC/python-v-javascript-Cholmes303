function generatePassword(length = 12) {
    let password = '';
    // Defines characters as all letters (lower and uppercase) any decimal digit (base 10) and punctuation marks
    let characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_";
    
    for(let i = 1; i <= length; i++) {
        // Selects random values from characters up to a set amount, being 12 and joins them in a string
        let generated = Math.floor(Math.random() * characters.length + 1); 

        password += characters.charAt(generated)
    }
    
    return password;
}

module.exports = generatePassword;