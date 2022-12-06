function Capitalize(string) {
    let ans = string[0].toUpperCase();
    for (let i = 1; i < string.length; i++) {
        ans += string[i];
    }
    return ans;
}

module.exports = Capitalize;