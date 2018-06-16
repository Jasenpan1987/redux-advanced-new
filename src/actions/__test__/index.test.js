import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("test actions", () => {
  it("saveComment action returns an expected action", () => {
    expect(saveComment("hello")).toEqual({
      type: SAVE_COMMENT,
      payload: "hello"
    });
  });
});
