const { pages, spreadPageSetup } = await import(
  `${process.env.ELEVENTY_ROOT}/src/config-11ty/plugins/cms-config/index.js`
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
  {
    name: "nextDate",
    widget: "markdown",
    required: false,
  },
  {
    name: "address",
    type: "string",
    required: false,
  },
  {
    name: "speakers", // intervenants
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
