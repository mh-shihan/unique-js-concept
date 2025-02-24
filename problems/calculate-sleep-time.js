const calculateSleepTime = (arr) => {
  let totalTime = 0;

  for (const sec of arr) {
    if (!Number.isInteger(sec)) return "Invalid";
    totalTime += sec;
  }

  const hours = parseInt(totalTime / 3600);
  totalTime %= 3600;
  const minutes = parseInt(totalTime / 60);
  const seconds = totalTime % 60;

  return { hours, minutes, seconds };
};

const arr = [100, 3800, "90"];
console.log(calculateSleepTime(arr));
