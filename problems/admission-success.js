const willSuccess = (numbers) => {
  if (!Array.isArray(numbers)) return "Invalid";

  let passCount = 0;
  let failCount = 0;

  for (const number of numbers) {
    number >= 50 ? passCount++ : failCount++;
  }

  if (passCount > failCount) return true;

  return false;
};
