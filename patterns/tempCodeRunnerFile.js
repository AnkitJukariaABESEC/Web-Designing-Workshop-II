for (let i = n; i>0;i--) {
    let row = "";
    for (let j = 0; j <n-i; j++)
        row += " ";
    for (let j = 0; j < i; j++)
        row += "* "
    console.log(row);
}