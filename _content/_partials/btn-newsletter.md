{% link url="https://030be45a.sibforms.com/serve/MUIFABds-gn5N94UTZKXKzJiY-eAmphZ033SW-Y8yQ3S2VYCVtuCWQXWcjZFomnneILqFiRiL1bhviO9lcNdlHvydLyEBvj2HBU4toaoMx7sx_Gm76uC8T6vUUnwUymDgTGdXjK5CTmtTiVWUHmCUCFGCv1Q3qfy7OU-QR8wEpd401Fml50OXRveL4F_Re_X10j7WcBSvjgAGmj9", text="S'abonner à la newsletter", linkType="external", class="button cta newsletter h4", target="_blank" %}

{% css %}
.button.newsletter {
  position: relative;
  background: radial-gradient(100% 130% at 100% 0%, var(--Orange-peel) 130%, var(--Vermillon) 0%);
  color: var(--White);
  border: none;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(100% 120% at 50% 0%, var(--Orange-peel) 40%, var(--Vermillon) 100%);
    border-radius: inherit;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }
}
{% endcss %}
