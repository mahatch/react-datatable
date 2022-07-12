import { title, keyColumn, data } from "./optionsObjectSample";
import rows from "./rows";

const storyOptionsNoActionSample = {
  title,
   
  dimensions: {
    datatable: {
      width: "100%",
      height: "70vh"
    }
  },
  keyColumn,
  data: {
    ...data,
    rows
  },
  features: {
    canPrint: true,
    canDownload: true,
    canSearch: true,
    canRefreshRows: true,
    canCreatePreset: false,
    canOrderColumns: true,
    canSaveUserConfiguration: true,
    userConfiguration: {
      columnsOrder: [
        "id",
        "name",
        "age",
        "adult",
        "birthDate",
        "eyeColor",
        "iban"
      ],
      copyToClipboard: true
    }
  }
};

export default storyOptionsNoActionSample;
