import { stringSanitizer } from "../db.helpers";

declare var global: any;
global.string = {};
global.string.gsub = function (
  str: string,
  pattern: string,
  fn: any,
): [string, number] {
  const regExp = RegExp(pattern, "g");
  return [
    str.replace(regExp, fn),
    0,
  ];
};

describe("Test db.helpers.ts", () => {
  it("Test string to sanitize", () => {
    const toSanitize = "'\"\\ \\%\tt\be\0s',\"\x1at\n\r\"'";
    const res = stringSanitizer(toSanitize);

    expect(res).not.toEqual(toSanitize);
  });

  it("Test normal string", () => {
    const toSanitize = "tonotnormalize";
    const res = stringSanitizer(toSanitize);

    expect(res).toEqual(toSanitize);
  });
});
