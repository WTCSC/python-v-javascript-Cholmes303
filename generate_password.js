function generatePassword(length = 12) {
    // This is where the generated password will go.
    let password = '';
    // Defines characters as all letters (lower and uppercase), any decimal digit (base 10), and punctuation marks (underscores only in this case).
    let characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOOPASDFGHJKLZXCVBNM1234567890_";
    // Loops in the string characters in a limited range set by length variable.
    for(let i = 1; i <= length; i++) {
        // Selects random character in characters string
        let generated = Math.floor(Math.random() * characters.length); 
        // Adds from the string characters, at random, to the empty string password.
        password += characters.charAt(generated)
    }
    
    return password;
}

module.exports = generatePassword;