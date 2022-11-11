const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  
  it("Return proper crypto when given number as input", () => {
    const numKey = deterministicPartitionKey(123);
    const data = JSON.stringify(123);
    let hashed = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(numKey).toBe(hashed);
  });

  it("Return proper crypto when given string as input", () => {
    const stringKey = deterministicPartitionKey("testing");
    const data = JSON.stringify("testing");
    let hashed = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(stringKey).toBe(hashed);
  });

  it("Return proper crypto when given key length more than 256 as input", () => {
    // a number more than max length
    let num = 1000000101101000000111100111011111111000111101011000101011011100110001011101100000000100000001001110011001000101001000000101001010000110010011000000101010110111100001111100100101001011110001000100011000001111100001010101011010100110000010101100110001111101101110001001010;
    const trivialKey = deterministicPartitionKey(num);
    const data = JSON.stringify(num);
    let hashed = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(trivialKey).toBe(hashed);
  });

});


