const validProposal = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return "Invalid";

  if (obj1.gender !== obj2.gender && Math.abs(obj1.age - obj2.age) <= 7)
    return true;

  return false;
};

const obj2 = { name: "toya", gender: "female", age: 24 };
const obj1 = "MHS";
console.log(validProposal(obj1, obj2));
