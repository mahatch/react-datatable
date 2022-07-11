const defaultState = {
  search: "Toggle",
  filter: "Toggle filtering",
  searchPlaceholder: "Search..",
  edit: "Edit",
  clear: "Clear",
  save: "Save",
  delete: "Delete",
  confirmDelete: "Confirm delete",
  cancelDelete: "Cancel delete",
  download: "Download data",
  downloadTitle: "Download Data",
  downloadDescription: "Data will be exported in",
  downloadSelectedRows: "Selected rows",
  downloadCurrentRows: "Rows of current page",
  downloadAllRows: "All rows",
  display: "Display columns",
  refresh: "Refresh",
  configuration: "Configuration",
  configurationTitle: "User Configuration",
  configurationCopy: "Save cell's content to clipboard on click",
  configurationColumn:
    "Do you want to save the configuration of the columns and copy to clipboard feature ?",
  configurationReset: "Reset",
  configurationSave: "Save",
  create: "Create",
  createTitle: "Create a new row",
  createCancel: "Cancel",
  createSubmit: "Create",
  duplicate: "Duplicate",
  print: "Print",
  printTitle: "Print",
  printDescription: "Choose what you want to print.",
  orderBy: "Order by",
  drag: "Drag",
  paginationRows: "Rows",
  paginationPage: "Page",

  createPresetTitle: "Create New Preset",
  createPresetDescription: "Select the columns to save in the preset",
  createPresetTooltipText: "Create a new preset",
  createPresetNamingPlaceholder: "Preset name",
  createPresetCancelBtn: "Cancel",
  createPresetCreateBtn: "Create"
};

const initText = (state, payload) => ({ ...state, ...payload });

const textReducer = (state = defaultState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "INIT_TEXT":
      return initText(state, payload);
    default:
      return state;
  }
};

export default textReducer;
