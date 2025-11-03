import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Post from "./Post";

describe("Post", () => {

    let unMount: () => void = () => { };

    beforeEach(() => {
        const { unmount } = render(<Router><Post /></Router>);

        unMount = unmount;
    });

    it("renders renders back to main page", () => {
        expect(screen.getByTestId("posts-backtomainpage").textContent).toBe('Home');
    });

    afterEach(() => {
        unMount();
    });

});
