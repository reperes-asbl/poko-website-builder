import {
  NODE_ENV,
  SRC_DIR_FROM_WORKING_DIR,
  WORKING_DIR_ABSOLUTE,
  CONTENT_PATH_PREFIX,
  CONTENT_DIR,
  PROD_URL,
  DISPLAY_URL,
  CMS_AUTH_URL,
  CMS_REPO,
  CMS_BACKEND,
  CMS_BRANCH,
} from "../../env.config.js";

const { pages, spreadPageSetup } = await import(
  `../${SRC_DIR_FROM_WORKING_DIR}/config-11ty/plugins/cms-config/index.js`
);

const additionalTrainingFields = [
  {
    name: "subtitle",
    type: "string",
    required: false,
  },
  {
    name: "tempo",
    type: "string",
    required: false,
  },
  {
    name: "duration",
    type: "string",
    required: false,
  },
  {
    name: "price",
    type: "string",
    required: false,
  },
  {
    name: "place",
    type: "string",
    required: false,
  },
];
const pos = 5; // Just after page name field
const trainingFields = [
  ...pages.fields.slice(0, pos),
  ...additionalTrainingFields,
  ...pages.fields.slice(pos),
];

export const collections = [
  {
    ...pages,
    ...spreadPageSetup("trainings"),
    icon: "exercise",
    fields: trainingFields,
  },
];

export const singletons = [];
