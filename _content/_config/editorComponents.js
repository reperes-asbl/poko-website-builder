const multilineToInline = (multi) => {
  return multi?.replace(/\n/g, "\\n")?.replace(/"/g, '\\"');
};
const inlineToMultiline = (inline) => {
  return inline?.replace(/\\n/g, "\n")?.replace(/\\"/g, '"');
};

export const pageHeader = {
  id: "pageHeader",
  label: "Page Header",
  icon: "page_header",
  fields: [
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      widget: "image",
      required: false,
    },
  ],
  pattern:
    /^{% partialWrapper "page-header\.njk", { image: "(?<image>.*?)", class: "(?<class>.*?)" } %}(?<content>.*?){% endpartialWrapper %}$/ms,
  fromBlock: function (match) {
    return {
      image: match?.groups?.image,
      class: match?.groups?.class,
      content: match?.groups?.content,
    };
  },
  toBlock: function ({ image, class: className, content }) {
    return `{% partialWrapper "page-header.njk", { image: "${image || ""}", class: "${className || ""}" } %}
${content.trim()}
{% endpartialWrapper %}`;
  },
  toPreview: function (data) {
    return `TEST`;
  },
};

export const activityCard = {
  id: "activityCard",
  label: "Activity Card",
  icon: "id_card",
  fields: [
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      widget: "image",
      required: true,
    },
    {
      name: "palette",
      label: "Color Palette",
      widget: "relation",
      collection: "stylesConfig",
      file: "brand",
      value_field: "palettes.*.name",
    },
    {
      name: "timing",
      label: "Timing",
      widget: "string",
      required: false,
    },
    {
      name: "pricing",
      label: "Pricing",
      widget: "string",
      required: false,
    },
    {
      name: "location",
      label: "Location",
      widget: "string",
      required: false,
    },
    {
      name: "practical",
      label: "Practical info",
      widget: "string",
      required: false,
    },
  ],
  pattern:
    /^{% partialWrapper "activity\.njk", { image: "(?<image>.*?)", palette: "(?<palette>.*?)", timing: "(?<timing>.*?)", pricing: "(?<pricing>.*?)", location: "(?<location>.*?)", practical: "(?<practical>.*?)", class: "(?<class>.*?)" } %}(?<content>.*?){% endpartialWrapper %}$/ms,
  fromBlock: function (match) {
    return {
      image: match?.groups?.image,
      palette: match?.groups?.palette,
      timing: match?.groups?.timing,
      pricing: match?.groups?.pricing,
      location: match?.groups?.location,
      practical: match?.groups?.practical,
      class: match?.groups?.class,
      content: match?.groups?.content,
    };
  },
  toBlock: function ({
    image,
    palette,
    timing,
    pricing,
    location,
    practical,
    class: className,
    content,
  }) {
    return `{% partialWrapper "activity.njk", { image: "${image}", palette: "${palette}", timing: "${timing}", pricing: "${pricing}", location: "${location}", practical: "${practical}", class: "${className}" } %}
${content.trim()}
{% endpartialWrapper %}`;
  },
  toPreview: function (data) {
    return `TEST`;
  },
};
