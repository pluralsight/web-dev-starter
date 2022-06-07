/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts, curMax = 0) {

  if ( !Array.isArray(accounts[0]) ) {
    const total = accounts.reduce((a, b) => a + b)
    if ( total > curMax ) {
      return total
    } else {
      return curMax
    }
  }

  let result = 0;
  for (let i = 0; i< accounts.length; i++ ) {
    result = maximumWealth(accounts[i], result)
  }
  return result
};

accounts = [[1,5],[7,3],[3,5]]
//accounts = [[1,2,3],[3,2,1]]
console.log(maximumWealth(accounts))

/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
*/