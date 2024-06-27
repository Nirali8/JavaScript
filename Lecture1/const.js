//const keyword block scope

const names = 'Nirali'
{
    // names = 'shreya' showing error
    console.log(names)
}
{
    let names = 'shreya'

    console.log(names)
}