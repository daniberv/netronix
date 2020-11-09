import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';
import Measurement from './Measurement';
import LineChart from './../LineChart/LineChart';

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

it("renders a proper component for Location", () => {
    act(() => {
        render(<Measurement
                    name={"Location"}
                    measurements={[]}
                />, container);
    });
    expect(container.textContent).toBe("See the map");
});

it("renders a proper component for empty Serial", () => {
    act(() => {
        render(<Measurement
                    name={"Serial"}
                    measurements={[]}
                />, container);
    });
    expect(container.textContent).toBe("-");
});

it("renders a proper component for Serial with some data", () => {
    act(() => {
        render(<Measurement
                    name={"Serial"}
                    measurements={[[1604918498, "0B100100"]]}
                />, container);
    });
    expect(container.textContent).toBe("0B100100");
})

it("renders a proper component for proper Serial", () => {
    act(() => {
        render(<Measurement
                    name={"Serial"}
                    measurements={[[1604918498, "0B100100"], [1604918498, "0B100100"], [1604918498, "0B100199"]]}
                />, container);
    });
    expect(container.textContent).toBe("0B100199");
});

it("renders a proper LineChart component component for measurements", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Measurement
                        name={"PM1"}
                        measurements={[[1604918497, "0.12317212312"], [1604918498, "0.12317212312"], [1604918499, "0.12317212312"]]}
                    />);
    const result = renderer.getRenderOutput();

    expect(result.props.children).toEqual(
        <LineChart measurements={[[1604918497, "0.12317212312"], [1604918498, "0.12317212312"], [1604918499, "0.12317212312"]]} />
    );
});

it("renders last 5 values only for LineChart component", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Measurement
                        name={"PM1"}
                        measurements={[[1604918497, "0.12317212312"], [1604918498, "0.12317212312"], [1604918499, "0.12317212312"], [1604918497, "0.12317212312"], [1604918498, "0.12317212312"], [1604918499, "0.12317212312"], [1604918497, "0.12317212312"], [1604918498, "0.12317212312"], [1604918499, "0.12317212312"], [1604918497, "0.12317212312"], [1604918498, "0.12317212312"], [1604918499, "0.12317212312"]]}
                    />);
    const result = renderer.getRenderOutput();

    expect(result.props.children).toEqual(
        <LineChart measurements={[[1604918498, "0.12317212312"], [1604918499, "0.12317212312"], [1604918497, "0.12317212312"], [1604918498, "0.12317212312"], [1604918499, "0.12317212312"]]} />
    );
});
