export default function ({ content, class: className }) {
  return `<header class="section-header ${className || ""}">
${content}
</header>`;
}
