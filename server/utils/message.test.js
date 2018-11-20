var expect = require("expect");
var { generateMesssage } = require("./message");

describe("generate Message", () => {
  it("should generate correct message", () => {
    var from = "Vishal";
    var text = "Saying hello";
    var message = generateMesssage(from, text);
    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({
      from,
      text
    });
  });
});
