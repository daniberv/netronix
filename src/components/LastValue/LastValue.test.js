import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LastValue from './LastValue';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders a proper value for Location", () => {
    act(() => {
        render(<LastValue
                    name={"Location"}
                    measurements={[]}
                />, container);
    });
    expect(container.textContent).toBe("See the map");
});

it("renders a proper component for empty Serial", () => {
    act(() => {
        render(<LastValue
                    name={"Serial"}
                    measurements={[]}
                />, container);
    });
    expect(container.textContent).toBe("-");
});

it("renders a proper component for Serial with some data", () => {
    act(() => {
        render(<LastValue
                    name={"Serial"}
                    measurements={[[1604918498, "0B100100"]]}
                />, container);
    });
    expect(container.textContent).toBe("0B100100");
})

it("renders a proper component for proper Serial", () => {
    act(() => {
        render(<LastValue
                    name={"Serial"}
                    measurements={[[1604918498, "0B100100"], [1604918498, "0B100100"], [1604918498, "0B100199"]]}
                />, container);
    });
    expect(container.textContent).toBe("0B100199");
});

it("renders a proper component for proper default value", () => {
    act(() => {
        render(<LastValue
                    name={"PM1"}
                    measurements={[[1604918498, "0.123123123"], [1604918498, "0.123123123"], [1604918498, "0.123123123"]]}
                />, container);
    });
    expect(container.textContent).toBe("0.123123123");
});

it("renders a proper component for proper no value", () => {
    act(() => {
        render(<LastValue
                    name={"PM1"}
                    measurements={[]}
                />, container);
    });
    expect(container.textContent).toBe("-");
});