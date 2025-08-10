/*
Given a boolean matrix mat[], where each cell contains either 0 or 1, modify it such that if a matrix cell matrix[i][j] is 1 then all the cells in its ith row and jth column will become 1.
example:
Input: mat[][] = [[1, 0], [0, 0]]
Output: [[1, 1], [1, 0]] 
Explanation: Only cell that has 1 is at (0,0) so all cells in row 0 are modified to 1 and all cells in column 0 are modified to 1.
*/

export const booleanMatrix = (mat) => {
  const x = [], y = [];
  for(let i = 0; i < mat.length; i++){
    for(let j = 0; j < mat[i].length; j++){
      if(mat[i][j] === 1){
        x.push(i);
        y.push(j);
      }
    }
  }

  // modify rows;
  for(let i = 0; i < x.length; i++) {
    const idx = x[i];
    for(let j = 0; j < mat[idx].length; j++) {
      mat[idx][j] = 1;
    }
  }
  // modify cols
  for(let i = 0; i < y.length; i++) {
    const idx = y[i];
    for(let j = 0; j < mat.length; j++){
      mat[j][idx] = 1;
    }
  }

  return mat;
}

// export const 