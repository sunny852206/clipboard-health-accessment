const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  // //
  // it("Returns the literal '0' when given no input", () => {
  //   const trivialKey = deterministicPartitionKey(2);
  //   const data = JSON.stringify(2);
  //   let ash = crypto.createHash("sha3-512").update(data).digest("hex");
  //   expect(trivialKey).toBe(ash);
  // });

  // it("Returns the literal '0' when given no input", () => {
  //   const trivialKey = deterministicPartitionKey();
  //   expect(trivialKey).toBe("0");
  // });
});

// describe("reverseString", () => {
//   test("reverses single word", () => {
//     expect(reverseString("hello")).toEqual("olleh");
//   });

//   test("reverses multiple words", () => {
//     expect(reverseString("hello there")).toEqual("ereht olleh");
//   });

//   test("works with numbers and punctuation", () => {
//     expect(reverseString("123! abc!")).toEqual("!cba !321");
//   });
//   test("works with blank strings", () => {
//     expect(reverseString("")).toEqual("");
//   });
// });
