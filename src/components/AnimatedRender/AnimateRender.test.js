import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AnimateRender from './AnimatedRender';

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

it("renders a empty value", () => {
    act(() => {
        render(<AnimateRender />, container);
    });
    expect(container.textContent).toBe("");
});

it("renders a value for Map", () => {
    act(() => {
        render(<AnimateRender value="see the map" />, container);
    });
    expect(container.textContent).toBe("see the map");
});

it("renders a value for value", () => {
    act(() => {
        render(<AnimateRender value={0.12345} />, container);
    });
    expect(container.textContent).toBe("0.12345");
});
