// You need to print the matrix Anticlock wise
// mat: contains the input matrix
function printAntiClockWise(mat)
{
         let left = 0, right = mat.length-1;
         let top = 0, bottom = mat.length-1;
         let dir = 0; var str = "";
         while (left <= right && top <= bottom) {
                switch (dir) {
                case 0: 
                for (let i = top; i <= bottom; i++) {
                    str += (mat[i][left]+" ");
                }
                // console.log(str);
                left++;
                case 1: 
                for (let i = left; i <= right; i++) {
                    str += (mat[bottom][i]+" ");
                }
                // console.log(str2);
                bottom--;
                case 2: 
                for (let i = bottom; i >= top; i--) {
                    str += (mat[i][right]+" ");
                }
                // console.log(str3);
                right--;
                case 3: 
                for (let i = right; i >= left; i--) {
                    str += (mat[top][i]+" ");
                }
                // console.log(str4);
                top++;
            }
            dir = (dir)%5;
        }
        console.log(str);
}