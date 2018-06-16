import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "components/App";
import Root from "Root";

describe("Test fetch comments", () => {
  let wrapped;
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
      status: 200,
      response: [
        { name: "fake comment 1" },
        { name: "fake comment 2" },
        { name: "fake comment 3" }
      ]
    });
    wrapped = mount(
      <Root>
        <App />
      </Root>
    );
  });

  afterEach(() => {
    moxios.uninstall();
    wrapped.unmount();
  });

  it("should fetch comments and display them", done => {
    wrapped.find(".fetch-comments").simulate("click");
    moxios.wait(() => {
      wrapped.update();
      try {
        expect(wrapped.find("li").length).toEqual(3);
        done();
      } catch (err) {
        done.failed(err);
      }
    });
  });
});
