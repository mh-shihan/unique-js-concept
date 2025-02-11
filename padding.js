//  This concept use to constant an id
// 2221081098

let id = 2221081001;

for (let i = 0; i < 140; i++) {
  const newId = id + i;
  const afterPadding = newId.toString().padStart(10, "0");
  console.log(afterPadding);
}
