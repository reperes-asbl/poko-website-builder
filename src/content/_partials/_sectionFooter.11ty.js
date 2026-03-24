export default function ({ content, class: className }) {
  return `<footer class="section-footer ${className || ""}">
${content}
</footer>`;
}
