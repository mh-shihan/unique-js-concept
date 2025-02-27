const validContact = (numbers) => {
  if (typeof numbers !== "string") return "Invalid";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === " ") return false;
  }

  if (numbers.length === 11 && numbers[0] == "0" && numbers[1] == "1")
    return true;

  return false;
};

console.log(validContact(true));
