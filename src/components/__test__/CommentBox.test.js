import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

describe("Testing Comment Box component", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a textarea and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
  });

  // it("has a textarea and user can type in", () => {
  //   wrapped
  //     .find("textarea")
  //     .simulate(
  //       "change" /* simulate the html event instead of the react event */,
  //       {
  //         /* fake partial event, will be merged into the real event  */
  //         target: { value: "hello there" } // e.target.value
  //       }
  //     );

  //   wrapped.update(); // we need this step because the setState is async

  //   expect(wrapped.find("textarea").prop("value")).toEqual("hello there");
  // });

  describe("after type hello in the textarea", () => {
    beforeEach(() => {
      wrapped
        .find("textarea")
        .simulate("change", { target: { value: "hello" } });
      wrapped.update();
    });

    it("should have hello in the textarea", () => {
      expect(wrapped.find("textarea").prop("value")).toEqual("hello");
    });

    it("clears the form after submit", () => {
      wrapped.find("form").simulate("submit");
      wrapped.update();
      expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
  });
});
