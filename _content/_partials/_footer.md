{% sectionGrid class='small flow bleed-bg', tag="footer" %}

{% grid %}
{% gridItem  %}
<ul role="list" class="flow">
<li class="with-icon items-center">
    {% icon "tablerOutline:brand-linkedin", width="2rem", height="2rem" %}
    {% link url="https://www.linkedin.com/in/asbl-rep%C3%A8res-06b23b128/", text="LinkedIn", linkType="external", target="_blank", rel="noopener noreferrer" %}
</li>
<li class="with-icon items-center">
    {% icon "tablerOutline:brand-facebook", width="2rem", height="2rem" %}
    {% link url="https://www.facebook.com/reperes.asbl.formation", text="Facebook", linkType="external", target="_blank", rel="noopener noreferrer" %}
</li>
<li class="with-icon items-center">
    {% icon "tablerOutline:mail", width="2rem", height="2rem" %}
    {% link url="https://030be45a.sibforms.com/serve/MUIFABds-gn5N94UTZKXKzJiY-eAmphZ033SW-Y8yQ3S2VYCVtuCWQXWcjZFomnneILqFiRiL1bhviO9lcNdlHvydLyEBvj2HBU4toaoMx7sx_Gm76uC8T6vUUnwUymDgTGdXjK5CTmtTiVWUHmCUCFGCv1Q3qfy7OU-QR8wEpd401Fml50OXRveL4F_Re_X10j7WcBSvjgAGmj9", text="Newsletter", linkType="external", target="_blank", rel="noopener noreferrer" %}
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
<a href="https://www.francophones.be/" target="_blank" rel="noopener noreferrer">
    {% image src="/_images/logo-francophones-bruxelles.webp", width="120" %}
</a>
<a href="https://www.aviq.be/" target="_blank" rel="noopener noreferrer">
    {% image src="/_images/logo_aviq_officiel.svg", width="120" %}
</a>
<a href="https://www.one.be/" target="_blank" rel="noopener noreferrer">
    {% image src="/_images/logo-one-pos.webp", width="120" %}
</a>
:::
{% endgridItem %}
{% endgrid %}
{% sectionFooter class="text-center v--flow-space:--step-4" %}

Site web éco-conçu par {% link url="https://www.mookai.be/", text="mookaï", target="_blank", rel="noopener noreferrer" %} avec {% link url="https://www.poko.eco/", text="poko", target="_blank", rel="noopener noreferrer" %}

{% endsectionFooter %}
{% endsectionGrid %}

{% css %}
footer {
border-image-source: linear-gradient(0deg, var(--Silver), var(--White)) !important;
}
{% endcss %}
