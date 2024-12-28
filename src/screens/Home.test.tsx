import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Home from "./Home";

describe("Home", () => {

    let unMount: () => void = () => { };

    beforeEach(() => {
        const { unmount } = render(<Router><Home /></Router>);

        unMount = unmount;
    });

    it("renders renders title", () => {
        expect(screen.getByTestId("home-title").textContent).toBe('Async Awake');
    });

    it("renders renders subtitle", () => {
        expect(screen.getByTestId("home-subtitle").textContent).toBe('A technology blog about coding, software engineering, cyber security and more.');
    });

    it("renders renders posts", () => {
        expect(screen.getByTestId("home-posts").textContent).toBe('Posts');
    });

    afterEach(() => {
        unMount();
    });

});
