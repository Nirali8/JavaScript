// var with hoisting
{
    var a, b, c;
    a = 10
    b = 20
    c = 30
    
    console.log(a);
    console.log(b);
    console.log(c);
}
{
    var a, b, c;
    var a = 10
    var b = 20
    var c = 30
    
    console.log(a);
    console.log(b);
    console.log(c);
}
//let with hoisting
{
    let a, b, c
    a = 100
    b = 200
    c = 300

    //  let a = 100 //not possible
    // let b = 200
    // let c = 300
    
    console.log(a);
    console.log(b);
    console.log(c);
}
//hoisting not possible in const
{
    const a = 10, b = 20, c = 30
    
    console.log(a);
    console.log(b);
    console.log(c);
}
