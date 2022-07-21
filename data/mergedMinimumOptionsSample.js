import {
  currentScreen,
  dimensions,
  keyColumn,
  font,
  data,
  userConfiguration,
  pagination,
  rowsEdited,
  rowsGlobalEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  stripped,
  searchTerm,
  newRows,
  rowsDeleted,
  orderBy,
  rowsPerPage,
  areFilterFieldsDisplayed,
  isSearchFieldDisplayed,
  filterTerms,
  filterResultForEachColumn
} from "./optionsObjectSample";

const mergedMinimumOptionsSample = {
  title: "",
  currentScreen,
  dimensions: {
    ...dimensions,
    datatable: {
      width: "100vw",
      height: "100vh",
      widthNumber: 1024,
      totalWidthNumber: 0
    },
    header: { height: "0px", heightNumber: 0 },
    body: {
      heightNumber: 648
    }
  },
  rowsEdited,
  rowsGlobalEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  newRows,
  rowsDeleted,
  stripped,
  searchTerm,
  actions: null,
  keyColumn,
  data,
  orderBy,
  font,
  areFilterFieldsDisplayed,
  isSearchFieldDisplayed,
  filterTerms,
  filterResultForEachColumn,
  pagination: {
    ...pagination,
    rowsCurrentPage: data.rows
  },
  features: {
    canEdit: false,
    canEditRow: null,
    canGlobalEdit: false,
    canAdd: false,
    canPrint: false,
    canDownload: false,
    canDuplicate: false,
    canSearch: false,
    canDelete: false,
    canSelectRow: false,
    localStoragePresets: null,
    canCreatePreset: false,
    columnsPresetsToDisplay: [],
    canRefreshRows: false,
    canOrderColumns: false,
    canSaveUserConfiguration: false,
    editableIdNewRow: [],
    userConfiguration: {
      ...userConfiguration,
      columnsOrder: [...userConfiguration.columnsOrder]
    },
    rowsPerPage,
    additionalActions: [],
    additionalIcons: [],
    selectionIcons: []
  }
};
export default mergedMinimumOptionsSample;
