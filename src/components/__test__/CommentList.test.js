import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

describe("test comment list", () => {
  let wrapped;
  beforeEach(() => {
    const initState = { comments: ["foo", "bar", "baz"] };
    wrapped = mount(
      <Root initState={initState}>
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("creates 1 li per comment", () => {
    expect(wrapped.find("li").length).toEqual(3);
  });

  it("shows the comments on screen", () => {
    const commentListText = wrapped.render().text();
    ["foo", "bar", "baz"].forEach(comment => {
      expect(commentListText).toContain(comment);
    });
  });
});
