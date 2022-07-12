import {
  title,
  dimensions,
  keyColumn,
  font,
  data,
  columnAction,
  userConfiguration,
  pagination,
  rowsEdited,
  rowsGlobalEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  stripped,
  orderBy,
  newRows,
  rowsDeleted,
  searchTerm,
  filterTerms,
  filterResultForEachColumn,
  areFilterFieldsDisplayed,
  isSearchFieldDisplayed,
  features
} from "./optionsObjectSample";

const mergedSimpleOptionsSample = {
  title,
  dimensions: {
    ...dimensions,
    datatable: {
      ...dimensions.datatable,
      totalWidthNumber: 0
    }
  },
  data: {
    ...data,
    columns: [columnAction, ...data.columns]
  },
  pagination: {
    ...pagination,
    rowsCurrentPage: data.rows
  },
  keyColumn,
  font,
  rowsEdited,
  rowsGlobalEdited,
  refreshRows,
  isRefreshing,
  stripped,
  orderBy,
  newRows,
  rowsDeleted,
  searchTerm,
  filterTerms,
  filterResultForEachColumn,
  areFilterFieldsDisplayed,
  isSearchFieldDisplayed,
  rowsSelected,
  actions: null,
  features: {
    ...features,
    userConfiguration: {
      ...userConfiguration,
      columnsOrder: ["o2xpActions", ...userConfiguration.columnsOrder]
    },
    additionalActions: [],
    additionalIcons: []
  }
};

export default mergedSimpleOptionsSample;
