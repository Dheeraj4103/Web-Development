function AnalyzeArray(arr) {
    let min = Infinity, max = 0, length = 0, average, sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        length++;
        sum += arr[i];
    }
    average = sum / length;
    return { average, min, max, length };
}

module.exports = AnalyzeArray;