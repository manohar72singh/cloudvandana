var arr = [5, 10, 7, 4, 6, 2, 1, 3, 9, 8];
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
