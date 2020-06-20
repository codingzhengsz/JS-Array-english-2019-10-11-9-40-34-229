// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

console.log(a instanceof Array); // false
console.log(b instanceof Array); // true


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5
         
function doubleItem(item, index, arr) {
	arr[index] = item * 2;
}
a.forEach(doubleItem);
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
// case 1 output: 'Red Green White Black'
console.log(colors.join(' '))
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'))
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join())


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a , b) => {return b - a})); // [10,8,5,4,1]

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function getTheMost(arr) {
    var maxElement;
    var maxCount = 1;
    arr.reduce((p, n) = >{
        p[n] ? p[n]++:p[n] = 1;
        if (p[n] > maxCount) {
            maxElement = n;
            maxCount++;
        }
        return p;
    },
    {});
    return maxElement;
}
console.log(getTheMost(arr)); // a

