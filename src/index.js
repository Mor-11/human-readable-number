module.exports = function toReadable(number) {
    let arr = String(number).split(""); // число переводим в массив
    // массив первых девятнадцати чисел
    let FN = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    // массив десятков
    var D = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number > 100) {
        if (number < 20) return FN[number]; //числа от 0 до 20
        if (number < 100 && number % 10 == 0) return D[arr[0]]; // десятки 10, 20, 30 ...
        if (number < 100) return D[arr[0]] + " " + FN[arr[1]]; //  числа от 21 до 99
    }
    if (number < 100) {
        if (number % 100 == 0) return FN[arr[0]] + " hundred"; // сотни 100, 200 ...
        if (number > 99 && number % 100 < 20)  //  сотни, где десятки от 1 до 19
            return FN[arr[0]] + " hundred " + FN[number % 100];
        if (number > 100 && number % 10 == 0) // сотни, где десятки 10, 20, 30 ...
            return FN[arr[0]] + " hundred " + D[arr[1]];
        return FN[arr[0]] + " hundred " + D[arr[1]] + " " + FN[arr[2]]; // все остальные числа 
    }
};
