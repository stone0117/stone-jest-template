import { generateAnotherConfig, generateConfig } from "../utils/snapshort";

describe("快照测试 in line", () => {
  it("test 001", function () {
    expect(generateConfig()).toMatchInlineSnapshot(
      {
        time: expect.any(Date),
      },
      `
      Object {
        "domain": "localhost",
        "port": 8081,
        "server": "http://localhost",
        "time": Any<Date>,
      }
    `
    );
  });

  it("test 002", function () {
    expect(generateAnotherConfig()).toMatchInlineSnapshot(
      {
        time: expect.any(Date),
      },
      `
      Object {
        "domain": "localhost",
        "port": 8080,
        "server": "http://localhost",
        "time": Any<Date>,
      }
    `
    );
  });
});
