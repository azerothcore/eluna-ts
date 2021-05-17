import {stringSanitizer} from "../db.helpers"

describe("Test db.helpers.ts", () => {
  it("Test string to sanitize",()=>{
    const toSanitize = "'\"\\ \\%\tt\be\0s',\"\x1at\n\r\"'";
    const res = stringSanitizer(toSanitize)

    expect(toSanitize).not.toEqual(res)
  })

  it("Test normal string",()=>{
    const toSanitize = "to not normalize";
    const res = stringSanitizer(toSanitize)

    expect(toSanitize).toEqual(res)
  })
})
