"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const bcrypt = require("bcrypt");
function getSecretInput(prompt) {
    const secret = readlineSync.question(prompt, {
        hideEchoBack: true,
        mask: '',
    });
    return secret;
}
const password = getSecretInput('Enter your password: ');
const hashedPassword = bcrypt.hashSync(password, 10);
console.log('The hashed password is: ' + hashedPassword);
//# sourceMappingURL=index.js.map