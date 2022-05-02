function editDistance(str1, str2) {
  const grid = [];


  for ( let i = 0; i < str1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str2.length + 1; j++ ) {
      row.push(j);
    }
    row[0] = i;
    grid.push(row);
  }
  console.log(grid);

  for (let i = 1; i < str1.length + 1; i++ ) {
    for (let j = 1; j < str2.length + 1; j++ ) {
      if (str1[i-1] === str2[j-1]) {
        grid[i][j] = grid[i - 1][j - 1];
      } else {
        grid[i][j] = 1 + Math.min(grid[i-1][j-1], grid[i-1][j], grid[i][j-1]);
      }
    }
  }
  console.log(grid)
  return grid[str1.length][str2.length]

}

console.log(editDistance('wednesday', 'sunday'))

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  /*
0    ""  j  r  o  k
""   0  1   2  3  4
t    1  1   2  3  4
r    2  2   1  2  3
e    3  3   2  2  3
k    4  3   3  3  3
*/
