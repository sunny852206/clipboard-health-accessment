const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  //
  it("Return proper crypto when given number as input", () => {
    const trivialKey = deterministicPartitionKey(123);
    const data = JSON.stringify(123);
    let hashed = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(trivialKey).toBe(hashed);
  });

  it("Return proper crypto when given string as input", () => {
    const trivialKey = deterministicPartitionKey("testing");
    const data = JSON.stringify("testing");
    let hashed = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(trivialKey).toBe(hashed);
  });

  it("Return proper crypto when given string as input", () => {
    const trivialKey = deterministicPartitionKey("testing123");
    const data = JSON.stringify("testing123");
    let hashed = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(trivialKey).toBe(hashed);
  });



  // it("Returns the literal '0' when given no input", () => {
  //   const trivialKey = deterministicPartitionKey();
  //   expect(trivialKey).toBe("0");
  // });
});


