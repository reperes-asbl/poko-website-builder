{% sectionGrid class='small flow bleed-bg', tag="footer" %}

{% grid  %}
{% gridItem  %}

<ul role="list" class="flow">
<li class="with-icon items-center">
    {% icon "tablerOutline:brand-linkedin", width="2rem", height="2rem" %}
    {% link url="https://www.linkedin.com/in/asbl-rep%C3%A8res-06b23b128/", type="external", target="_blank", rel="noopener noreferrer" %}LinkedIn{% endlink %}
</li>
<li class="with-icon items-center">
    {% icon "tablerOutline:brand-facebook", width="2rem", height="2rem" %}
    {% link url="https://www.facebook.com/reperes.asbl.formation", type="external", target="_blank", rel="noopener noreferrer" %}Facebook{% endlink %}
</li>
<li class="with-icon items-center">
    {% icon "tablerOutline:mail", width="2rem", height="2rem" %}
    {% link url="https://030be45a.sibforms.com/serve/MUIFABds-gn5N94UTZKXKzJiY-eAmphZ033SW-Y8yQ3S2VYCVtuCWQXWcjZFomnneILqFiRiL1bhviO9lcNdlHvydLyEBvj2HBU4toaoMx7sx_Gm76uC8T6vUUnwUymDgTGdXjK5CTmtTiVWUHmCUCFGCv1Q3qfy7OU-QR8wEpd401Fml50OXRveL4F_Re_X10j7WcBSvjgAGmj9", type="external", target="_blank", rel="noopener noreferrer" %}Newsletter{% endlink %}
</li>
</ul>
{% endgridItem %}
{% gridItem  %}
<address>

**Repères asbl**

Boulevard de Waterloo 99 - 1000 Bruxelles

0470/87 87 35

N° d'entreprise: BE0463799956

IBAN: BE08 0013 1886 1813

</address>
{% endgridItem %}
{% gridItem class="flow" %}
<a href="https://www.fbpsante.brussels/" target="_blank" rel="noopener noreferrer">
    {% image src="/_images/logo_membre_fbps.webp", alt="Membre de la FBPSanté.", width="150" %}
</a>
<a href="https://www.fwpsante.be/" target="_blank" rel="noopener noreferrer">
    {% image src="/_images/logo_membre_fwps.webp", alt="Membre de la FWPSanté.", width="150" %}
</a>
{% endgridItem %}
{% gridItem class="flow" %}
Avec le soutien de

::: cluster

{% link url="https://www.francophones.be/", type="external", target="_blank", rel="noopener noreferrer" %}{% image src="/_images/logo-francophones-bruxelles.webp", width="120" %}{% endlink %}

{% link url="https://www.aviq.be/", type="external", target="_blank", rel="noopener noreferrer" %}{% image src="/_images/logo_aviq_officiel.svg", width="120" %}{% endlink %}

{% link url="https://www.one.be/", type="external", target="_blank", rel="noopener noreferrer" %}{% image src="/_images/logo-one-pos.webp", width="120" %}{% endlink %}

:::
{% endgridItem %}
{% endgrid %}
{% sectionFooter class="text-center v--flow-space:--step-4" %}
Site web éco-conçu par {% link url="https://www.mookai.be/", type="external", target="_blank", rel="noopener noreferrer" %}mookaï{% endlink %} avec {% link url="https://www.poko.eco/", type="external", target="_blank", rel="noopener noreferrer" %}poko{% endlink %}
{% endsectionFooter %}
{% endsectionGrid %}

{% css %}
footer {
border-image-source: linear-gradient(0deg, var(--silver), var(--white)) !important;
}
{% endcss %}
