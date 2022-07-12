import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import Search, {
  Search as SearchPureComponent
} from "../../../../src/components/DatatableHeader/Widgets/Search";
import { storeSample } from "../../../../data/samples";

const mockStore = configureStore();
const store = mockStore(storeSample);
const search = jest.fn();
const { rowsSelected, searchTerm } = storeSample.datatableReducer;
const { rows } = storeSample.datatableReducer.data;
describe("Search component", () => {
  it("connected should render without errors", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(wrapper.find("Connect(Search)")).toHaveLength(1);
  });

  it("connected should mount without errors", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const button = wrapper.find("button.search-icon");
    button.simulate("click");
    wrapper
      .find("div.search-input input")
      .simulate("change", { target: { value: "Hunt" } });

    expect(wrapper.find("Connect(Search)")).toHaveLength(1);
  });

  describe("click on search button", () => {
    it("should open input", () => {
      const wrapper = mount(
        <SearchPureComponent
          search={search}
          canSearch
          isRefreshing={false}
          rowsSelected={rowsSelected}
          searchTerm={searchTerm}
          rows={rows}
          searchText="Toggle"
          searchPlaceholderText="Search.."
        />
      );
      const button = wrapper.find("button.search-icon");
      button.simulate("click");
      expect(wrapper.state("openSearch")).toBeTruthy();
    });

    it("should not close input if user search", () => {
      const wrapper = mount(
        <SearchPureComponent
          search={search}
          canSearch
          isRefreshing={false}
          rowsSelected={rowsSelected}
          searchTerm={searchTerm}
          rows={rows}
          searchText="Toggle"
          searchPlaceholderText="Search.."
        />
      );
      const button = wrapper.find("button.search-icon");
      button.simulate("click");
      wrapper.setProps({ searchTerm: "sd" });
      button.simulate("click");
      expect(button.get(0).value).toEqual("sd");
    });

    it("should close input", () => {
      const wrapper = mount(
        <SearchPureComponent
          search={search}
          canSearch
          isRefreshing={false}
          rowsSelected={rowsSelected}
          searchTerm={searchTerm}
          rows={rows}
          searchText="Toggle"
          searchPlaceholderText="Search.."
        />
      );

      const button = wrapper.find("button.search-icon");
      button.simulate("click");
      wrapper.setProps({ searchTerm: "" });
      button.simulate("click");
      expect(wrapper.state("openSearch")).toBeFalsy();
    });
  });

  describe("type in search input", () => {
    const wrapper = mount(
      <SearchPureComponent
        search={search}
        canSearch
        isRefreshing={false}
        rowsSelected={rowsSelected}
        searchTerm={searchTerm}
        rows={rows}
        searchText="Toggle"
        searchPlaceholderText="Search.."
      />
    );
    const button = wrapper.find("button.search-icon");
    button.simulate("click");

    it("should call function search with value 'Hunt'", () => {
      wrapper
        .find("div.search-input input")
        .simulate("change", { target: { value: "Hunt" } });

      expect(search).toHaveBeenCalled();
      expect(search).toHaveBeenCalledWith("Hunt");
    });
  });

  describe("when refreshing", () => {
    const wrapper = mount(
      <SearchPureComponent
        search={search}
        canSearch
        isRefreshing
        rowsSelected={rowsSelected}
        searchTerm={searchTerm}
        rows={rows}
        searchText="Toggle"
        searchPlaceholderText="Search.."
      />
    );

    it("button should be disabled", () => {
      const button = wrapper.find("button.search-icon");
      expect(button.props().disabled).toBeTruthy();
    });
    it("input should be disabled", () => {
      const button = wrapper.find(".search-input input");
      expect(button.props().disabled).toBeTruthy();
    });
  });
});
