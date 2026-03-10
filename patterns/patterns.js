// SIMPLE PYRAMID
//  *
//  **
//  ***
//  ****
//  *****
// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row)
// }

// FLIPPED SIMPLE PYRAMID
//     *
//    **
//   ***
//  ****
// *****
// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row="";
//     for (let j = 0; j <n-i-1 ;j++) {
//        row+=" ";
//     }
//     for(let j=0;j<=i;j++){
//         row+="*";
//     }
//     console.log(row);
// }

// INVERTED PYRAMID
// *****
// ****
// ***
// **
// *
// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row="";
//     for (let j = 0; j <=n-1-i;j++) {
//        row+="*";
//     }
//     console.log(row);
// }

// RIPPED INVERTED PYRAMID
// *****
//  ****
//   ***
//    **
//     *
// let n = 5;
// for (let i = n - 1; i >= 0; i--) {
//     let row = "";
//     for (let j = 0; j < n - 1 - i; j++)
//         row += " ";
//     for (let j = 0; j <= i; j++)
//         row += "*"
//     console.log(row);
// }

// TRIANGLE
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
// let n = 5;
// for (let i = 0; i<n;i++) {
//     let row = "";
//     for (let j = 0; j <n - 1 - i; j++)
//         row += " ";
//     for (let j = 0; j <= i; j++)
//         row += " *"
//     console.log(row);
// }

// INVERTED TRIANGLE
// * * * * * 
//  * * * * 
//   * * *
//    * *
//     *
// let n = 5;
// for (let i = n; i>0;i--) {
//     let row = "";
//     for (let j = 0; j <n-i; j++)
//         row += " ";
//     for (let j = 0; j < i; j++)
//         row += "* "
//     console.log(row);
// }

// NUMBER PYRAMID
// 1
// 22
// 333
// 4444
// let n=4;
// for(let i=0;i<n;i++){
//     let row="";
//     for(let j=0;j<=i;j++)
//       row+=i+1;
//     console.log(row)
// }

