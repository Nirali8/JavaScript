//let keyword -- block scope variable

{
    let a = 50

    console.log(a)
}
let b = 20
{
        console.log(b)
}
{
    let b = 30
    b = 40
    console.log(b)
}
// console.log(a)--error