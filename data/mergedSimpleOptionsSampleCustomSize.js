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
  refreshRows,
  isRefreshing,
  stripped,
  orderBy,
  newRows,
  rowsDeleted,
  searchTerm,
  rowsSelected,
  features,
  areFilterFieldsDisplayed,
  isSearchFieldDisplayed,
  filterTerms,
  filterResultForEachColumn
} from "./optionsObjectSample";

const mergedSimpleOptionsSampleCustomSize = {
  title,
  dimensions: {
    ...dimensions,
    datatable: {
      ...dimensions.datatable,
      totalWidthNumber: 1288
    }
  },
  pagination: {
    ...pagination,
    rowsCurrentPage: data.rows
  },
  keyColumn,
  actions: null,
  refreshRows,
  isRefreshing,
  newRows,
  rowsDeleted,
  areFilterFieldsDisplayed,
  isSearchFieldDisplayed,
  filterTerms,
  filterResultForEachColumn,
  stripped,
  orderBy,
  searchTerm,
  font,
  data: {
    ...data,
    columns: [columnAction, ...data.columns]
  },
  rowsEdited,
  rowsGlobalEdited,
  rowsSelected,
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

export default mergedSimpleOptionsSampleCustomSize;
