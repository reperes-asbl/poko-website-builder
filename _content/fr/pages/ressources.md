---
translationKey: ressources
lang: fr
createdAt: 2025-11-14T09:44:00.000Z
uuid: 3bfd46874867
localizationKey: d23345a84392
name: Ressources
eleventyNavigation:
  order: 6
vars: null
---

{% partialWrapper "page-header.njk", { image: "/_images/pexels-edmond-dantes-4339797.webp", class: "palette-burnt-umber object-center-bottom" } %}
# Ressources

Vous souhaitez renforcer vos projets ou approfondir vos pratiques?
Découvrez nos ressources documentaires et partenaires de terrain actifs dans la promotion de la santé et la formation. Des outils, des recherches, des réseaux: tout ce qu’il faut pour soutenir vos démarches et vos actions.
{% endpartialWrapper %}

{% wrapper tag="section", class='bleed-bg palette-cooper palette-low-contrast' %}
## Documentation

- nom document - thématique
- nom document - thématique
- nom document - thématique
- nom document - thématique
{% endwrapper %}

{% wrapper tag="section", class='palette-burnt-umber' %}
## Vous recherchez un soutien méthodologique? { .width-body }

{% sectionTwoColumns  %}
{% sectionHeader  %}
## À Bruxelles
{% endsectionHeader %}
{% twoColumns type="fixedFluid", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
<a href="/assets/files/repertoire-servicessupportpromosantebxl_2026.pdf" target="_blank" rel="noopener noreferrer">

{% image src="/_images/repertoire-servicessupportpromosantebxl_2026.webp", alt="Couverture du répertoire des SESU, lien vers le fichier PDF", width="300" %}

</a>
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
### Les Services Support

Vous souhaitez renforcer vos connaissances et compétences en promotion de la santé? Améliorer vos pratiques sur l’une des thématiques prioritaires du Plan Promotion Santé? Vous initier ou développer vos pratiques selon les techniques d’intervention éprouvées en promotion de la santé? Intégrer la participation des bénéficiaires à la mise en place de vos actions? Un service de support pourrait répondre à vos besoins!

{% link url="/assets/files/repertoire-servicessupportpromosantebxl_2026.pdf", text="Consultez le répertoire des SESU en PDF", linkType="file", class="button palette-orange-peel-contrast font-bold", target="_blank", rel="noopener noreferrer" %}

{% link url="/sesu/#decouvrez-les-autres-sesu", text="Liens vers tous les SESU", linkType="external", class="button palette-orange-peel-contrast font-bold" %}
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

{% sectionTwoColumns  %}
{% sectionHeader  %}
## En wallonie
{% endsectionHeader %}
{% twoColumns type="fixedFluid", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
<a href="https://lesclps.org/" target="_blank" rel="noopener noreferrer">

{% image src="/_images/logo-interclps.webp", alt="Logo CLPS, lien vers le répertoire", width="300" %}

</a>
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
### Les Centres Locaux de Promotion de la Santé
  **Les Centres Locaux de Promotion de la Santé** (CLPS) sont des organismes qui soutiennent et accompagnent les professionnels locaux dans la mise en place de projets visant à améliorer la santé et le bien-être des populations. Ils offrent un appui méthodologique, facilitent la mise en réseau des acteurs de terrain et organisent des formations et des échanges de pratiques.

{% link url="https://lesclps.org/", text="Le site des CLPS", linkType="external", class="button", target="_blank", rel="noopener noreferrer" %}
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}
{% endwrapper %}

{% sectionGrid class="bleed-bg palette-cooper palette-low-contrast" %}
{% sectionHeader  %}
## Vous cherchez un soutien politique?

Les fédérations bruxelloise (FBPSanté) et wallonne (FWPS) rassemblent les organisations actives en promotion de la santé au niveau régional. Elles jouent un rôle essentiel en représentant le secteur, en défendant ses missions et en portant une vision commune de la promotion de la santé.
    - **À Bruxelles**, {% link url="https://www.fbpsante.brussels/", text="la FBPSanté", linkType="external", target="_blank", rel="noopener noreferrer" %} valorise et défend la promotion de la santé, représente les associations auprès des pouvoirs publics et soutient un plaidoyer politique commun pour renforcer la place du secteur dans les politiques régionales.
-	**En Wallonie**, {% link url="https://www.fwpsante.be/", text="la FWPS", linkType="external", target="_blank", rel="noopener noreferrer" %} réunit les acteurs du secteur pour construire et diffuser une vision partagée, améliorer la qualité des actions, favoriser la concertation et représenter collectivement les opérateurs auprès des autorités.
{% endsectionHeader %}
{% grid type="grid-fluid", class="items-center flex cluster v--gap:--step-4" %}
{% gridItem  %}
<a href="https://www.fbpsante.brussels/" target="_blank" rel="noopener noreferrer">

{% image src="/_images/fbps-logo-1.webp", alt="Logo FBPSanté, lien vers leur site web", width="300" %}

</a>
{% endgridItem %}
{% gridItem  %}
<a href="https://www.fwpsante.be/" target="_blank" rel="noopener noreferrer">

{% image src="/_images/fwps-logo-colors-01.webp", alt="Logo FWPS, lien vers leur site web", width="300" %}

</a>
{% endgridItem %}
{% endgrid %}

{% endsectionGrid %}
