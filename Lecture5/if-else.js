// Java script conditional statements
/* if if-else and if=elseif-else */
{
  let num1 = 10,
    num2 = 11,
    num3 = 3;
  let swap = 0;
  if (num1 > num2) {
    swap = num1;
    num1 = num2;
    num2 = swap;
    if (num1 > num3) {
      swap = num1;
      num1 = num3;
      num3 = swap;
    }
    if (num2 > num3) {
      swap = num2;
      num2 = num3;
      num3 = swap;
    }
  } else if (num1 > num3) {
    swap = num1;
    num1 = num3;
    num3 = swap;
    if (num2 > num3) {
      swap = num2;
      num2 = num3;
      num3 = swap;
    }
  } else if (num2 > num3) {
    swap = num2;
    num2 = num3;
    num3 = swap;
  }

  console.log(`${num1} ${num2} ${num3}`);
}
