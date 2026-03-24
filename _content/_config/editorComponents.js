const multilineToInline = (multi) => {
  return multi?.replace(/\n/g, "\\n")?.replace(/"/g, '\\"');
};
const inlineToMultiline = (inline) => {
  return inline?.replace(/\\n/g, "\n")?.replace(/\\"/g, '"');
};

export const pageHeader = {
  id: "pageHeader",
  label: "Page Header",
  // icon: "lunch_dining",
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
    return `{% partialWrapper "page-header.njk", { image: "${image}", class: "${className}" } %}
${content}
{% endpartialWrapper %}`;
  },
  toPreview: function (data) {
    return `TEST`;
  },
};
