import * as readlineSync from 'readline-sync';
import * as bcrypt from 'bcrypt';

function getSecretInput(prompt: string): string {
  const secret = readlineSync.question(prompt, {
    hideEchoBack: true,
    mask: '',
  });
  return secret;
}

const password = getSecretInput('Enter your password: ');
const hashedPassword = bcrypt.hashSync(password, 10);
console.log('The hashed password is: ' + hashedPassword);
