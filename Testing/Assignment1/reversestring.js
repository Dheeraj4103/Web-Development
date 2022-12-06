function ReverseString(string) {
    let ans = "";
    for (let i = 0; i < string.length; i++){
        ans = string[i] + ans;
    }
    return ans;
}

module.exports = ReverseString;