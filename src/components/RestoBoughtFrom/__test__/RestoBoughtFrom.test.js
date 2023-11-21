import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";

import RestoBoughtFrom from "..";

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

describe("Resto Bought From Component", () => {
    it("should render correctly", () => {
        const selectedRestaurants = [{ id: 1, name: "Restaurant A" }];

        const component = renderer.create(
            <Provider store={store}>
                <RestoBoughtFrom
                    selectedRestaurants={selectedRestaurants.map(
                        (restaurant) => restaurant.name
                    )}
                />
            </Provider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
