function Cipher(string) {
    let ans = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            let code = (string.charCodeAt(i) + 1);
            code = (string[i] === 'z' ? 97 : code);
            code = (string[i] === 'Z' ? 65 : code);
            ans += (String.fromCharCode(code));
        }
        else {
            ans += string[i];
        }
    }
    return ans;
}
module.exports = Cipher;