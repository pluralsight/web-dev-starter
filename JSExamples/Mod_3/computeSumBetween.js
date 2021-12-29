function computeSumBetween(num1, num2) {
    if (num1 > num2) {
        return 0;
    }
    var nums = [];
    for (var i = num1; i < num2; i++) {
        nums.push(i);
    }
    return nums.reduce((sum, num) => {
        return sum += num;
    }, 0);
  }