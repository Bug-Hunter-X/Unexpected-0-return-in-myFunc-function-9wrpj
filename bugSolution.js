function myFunc(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct early exit
  }
  return a + b;
}