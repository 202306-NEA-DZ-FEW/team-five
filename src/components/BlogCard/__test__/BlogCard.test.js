import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";

import BlogCard from "..";

jest.mock("next/router", () => ({
    useRouter: () => ({
        route: "/",
        pathname: "",
        query: {},
        asPath: "",
    }),
}));

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key) => key, i18n: { language: "en" } }),
}));

const mockStore = configureMockStore([]);
const store = mockStore({
    userInfo: null,
});

global.Math.random = () => 0.5;

describe("Blog card", () => {
    it("should render correctly", () => {
        const blog = {
            title: "Sample Title",
            description: "Sample Description",
            image: "sample-image.jpg",
            publishedAt: "2023-11-07",
        };

        const component = renderer.create(
            <Provider store={store}>
                <BlogCard blog={blog} />
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
