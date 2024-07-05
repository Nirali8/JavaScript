/* Break statement */
{
  for (i = 0; i < 10; i++) {
    if (i == 4) break;
    console.log("Break loop");
  }
}
/* continue statement */
{
  for (i = 0; i < 10; i++) {
    if (i == 4) continue;
    console.log("continue loop");
  }
}
/*Nested loop */
{
  for (i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log("Main loop");
    for (i; i < 4; i++) {
      if (i == 2) continue;
      console.log("Child loop");
    }
  }
}
/*Statement label */
{
  demo: for (i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log("Main loop");
    for (i; i < 4; i++) {
      if (i == 2) continue demo;
      console.log("Child loop");
    }
  }
}
