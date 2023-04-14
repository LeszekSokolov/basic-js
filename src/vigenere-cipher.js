const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(code) {
    this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.code = code || code === undefined;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let currentKeyIndex = 0;
    let result = "";

    for (let i = 0; i < message.length; i++) {
      if (!this.abc.includes(message[i].toUpperCase())) {
        result += message[i];
        continue;
      }
      const codeMessage = this.abc.indexOf(message[i].toUpperCase());
      const codeKey = this.abc.indexOf(
        key[currentKeyIndex++ % key.length].toUpperCase()
      );
      const encryptCode = (codeMessage + codeKey) % this.abc.length;
      result += this.abc[encryptCode];
    }
    return this.code ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let currentKeyIndex = 0;
    let result = "";

    for (let i = 0; i < message.length; i++) {
      if (!this.abc.includes(message[i].toUpperCase())) {
        result += message[i];
        continue;
      }

      const codeMessage = this.abc.indexOf(message[i].toUpperCase());
      const codeKey = this.abc.indexOf(
        key[currentKeyIndex++ % key.length].toUpperCase()
      );
      const decryptCode = codeMessage - (codeKey % this.abc.length);

      if (decryptCode < 0) result += this.abc[this.abc.length + decryptCode];
      else result += this.abc[decryptCode];
    }
    return this.code ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
