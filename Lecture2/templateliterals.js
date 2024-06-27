let i = "skillqode";

//template literals or back-tik (``)
{
  let subject = "JavaScript";
  let hardness = "easy";

  let string1 = "I am Nirali";
  console.log(string1);
  console.log(typeof string1);

  let string2 = "I am Nirali";
  console.log(string2);
  console.log(typeof string2);

  let string3 = `I am Nirali`;
  console.log(string3);
  console.log(typeof string3);

  let string4 = `I am nirali
    sanghani`;
  console.log(string4);

  string1 = "I am Learning ${subject}";
  console.log(string1);

  string2 = "I am Learning ${subject} and it is ${hardness}";
  console.log(string2);

  string3 = `I am Learning ${subject} and it is ${hardness}`;
  console.log(string3);
}
