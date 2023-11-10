import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";

import Coupons from "../Coupons";

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

describe("Coupons Component", () => {
    it("should render correctly", () => {
        const component = renderer.create(
            <Provider store={store}>
                <Coupons />
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
