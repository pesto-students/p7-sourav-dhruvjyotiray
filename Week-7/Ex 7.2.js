var spiralOrder = function (matrix) {
  let output = []; //O(1)
  let rowStart = 0,
    rowEnd = matrix.length - 1; //O(1)
  let colStart = 0,
    colEnd = matrix[0].length - 1; //O(1)

  while (rowStart <= rowEnd && colStart <= colEnd) {
    //O(n)

    //Traversing from top-left to right
    for (let i = colStart; i <= colEnd; i++) {
      //O(n)
      output.push(matrix[rowStart][i]);
    }
    rowStart++;

    //Traversing from top-right to bottom
    for (let i = rowStart; i <= rowEnd; i++) {
      //O(n)
      output.push(matrix[i][colEnd]);
    }

    colEnd--;
    //checking if more blocks are left
    if (rowStart <= rowEnd) {
      //Traversing from bottom-right to left
      for (let i = colEnd; i >= colStart; i--) {
        //O(n)
        output.push(matrix[rowEnd][i]);
      }
    }

    rowEnd--;
    //checking if more blocks are left
    if (colStart <= colEnd) {
      //Traversing from bottom-left to top
      for (let i = rowEnd; i >= rowStart; i--) {
        //O(n)
        output.push(matrix[i][colStart]);
      }
    }

    colStart++;
  }

  return output;
};

//Time complexity = O(n)
//Space complexity = O(n)

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
