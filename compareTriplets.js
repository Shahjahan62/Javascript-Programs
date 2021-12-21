
    function compareTriplets(a, b) {
   // Write your code here

    var ap = 0
    var bp = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            ap = ap + 1;
        }
        if (a[i] == b[i]) {

        }
        if (a[i] < b[i]) {
            bp = bp +1;
        };
    }

    let x = [ap, bp];


    return x
}

let x = compareTriplets([5, 6, 7], [3, 6, 10]);

console.log(x);