import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// Note how with shallow render you search for the React component tag
it("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// Note how with mount you search for the final rendered HTML since it generates the final DOM.
// We also need to pull in React Router's memoryRouter for testing since the Header expects to have React Router's props passed in.
it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
