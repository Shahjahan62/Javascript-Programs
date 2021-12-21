
function miniMaxSum(arr) {
  // Write your code here
  let len = arr.length;
  var mini = 0;
  var max = 0;
  var c=Math.max.apply(null,arr)
  var d=  Math.min.apply(null,arr)


  for (let i = 0; i < len; i++) {

    if (arr[i] > d) {
      max += arr[i]
    }
    if (arr[i] < c ) {
      mini += arr[i]
    }

  }
  let x = mini + " " + max
  console.log(x);

}

let a = [1, 2, 3, 4, 5]

miniMaxSum(a);

let b = [7, 69, 2, 221, 8974]

miniMaxSum(b);