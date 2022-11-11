const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  // check if given any input, if no input is given return '0' 
  if (event){
    if (event.partitionKey) {
      candidate = event.partitionKey;

      // format check 
      if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
      }
      if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
      }

    } else {
      // generate new key if target doesn't have partitionKey
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
    
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  return candidate;
}
