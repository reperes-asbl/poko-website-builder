---
translationKey: ressources
order: 6
lang: fr
createdAt: 2025-11-14T09:44:00.000Z
name: Ressources
eleventyNavigation:
  add: Nav
vars: {}
localizationKey: d23345a84392
uuid: 3bfd46874867
---

{% partialWrapper "page-header.njk", { image: "/_images/pexels-edmond-dantes-4339797.webp", class: "palette-burnt-umber object-center-bottom" } %}
# Ressources

Vous souhaitez renforcer vos projets ou approfondir vos pratiques ?
Découvrez nos ressources documentaires et partenaires de terrain actifs dans la promotion de la santé et la formation. Des outils, des recherches, des réseaux : tout ce qu’il faut pour soutenir vos démarches et vos actions.
{% endpartialWrapper %}

{% wrapper tag="section", class='bleed-bg palette-copper palette-low-contrast layout flow' %}
## Documentation

- {% link url="/assets/files/note-sesu.pdf", type="file", class="font-bold", target="_blank" %}Support formation: Besoins, analyses et perspectives (PDF){% endlink %}
- {% link url="/assets/files/definitions-formation.pdf", type="file", class="font-bold", target="_blank" %}Mieux comprendre le contour des pratiques en promotion de la santé (PDF){% endlink %}
{% endwrapper %}

{% wrapper tag="section", class='palette-burnt-umber' %}
## Vous recherchez un soutien méthodologique? { .width-body }

{% sectionTwoColumns  %}
{% sectionHeader  %}
## À Bruxelles
{% endsectionHeader %}
{% twoColumns type="fixedFluid", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
<a href="/assets/files/repertoire-sesu.pdf" target="_blank" rel="noopener noreferrer">

{% image src="/_images/repertoire-servicessupportpromosantebxl_2026.webp", alt="Couverture du répertoire des SESU, lien vers le fichier PDF", width="300" %}

</a>
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
### Les Services Support

Vous souhaitez renforcer vos connaissances et compétences en promotion de la santé? Améliorer vos pratiques sur l’une des thématiques prioritaires du Plan Promotion Santé? Vous initier ou développer vos pratiques selon les techniques d’intervention éprouvées en promotion de la santé? Intégrer la participation des bénéficiaires à la mise en place de vos actions? Un service de support pourrait répondre à vos besoins!

{% link url="/assets/files/repertoire-sesu.pdf", type="file", class="button palette-orange-peel palette--contrast font-bold", target="_blank", rel="noopener noreferrer" %}Consultez le répertoire des SESU en PDF{% endlink %}

{% link url="/sesu/#decouvrez-les-autres-sesu", type="external", class="button palette-orange-peel palette--contrast font-bold" %}Liens vers tous les SESU{% endlink %}
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

{% sectionBuilder  %}
{% sectionHeader  %}
## En wallonie
{% endsectionHeader %}
{% twoColumns fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
<a href="https://lesclps.org/" target="_blank" rel="noopener noreferrer">

{% image src="/_images/logo-interclps.webp", alt="Logo CLPS, lien vers le répertoire", width="300" %}

</a>
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
### Les Centres Locaux de Promotion de la Santé

**Les Centres Locaux de Promotion de la Santé** (CLPS) sont des organismes qui soutiennent et accompagnent les professionnels locaux dans la mise en place de projets visant à améliorer la santé et le bien-être des populations. Ils offrent un appui méthodologique, facilitent la mise en réseau des acteurs de terrain et organisent des formations et des échanges de pratiques.

{% link url="https://lesclps.org/", type="external", class="button", target="_blank", rel="noopener noreferrer" %}Le site des CLPS{% endlink %}
{% endtwoColumnsItem %}
{% endtwoColumns %}
{% twoColumns fixedSide="fixedLeft", class="items-center" %}
{% twoColumnsItem  %}
<a href="https://www.aviq.be/fr/sensibilisation-et-promotion/operateurs-de-promotion-de-la-sante/centres-dexpertises" target="_blank" rel="noopener noreferrer">

{% image src="/_images/logo_aviq_officiel.svg", alt="Logo AVIQ, lien vers la liste des centres d'expertise", width="300" %}

</a>
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
### Les Centres d’expertise en promotion de la santé

**Les Centres d’expertise en promotion de la santé** sont agréés en vue d’apporter un support scientifique et méthodologique à l’Agence, aux centres locaux de promotion de la santé, aux centres d’opérationnalisation en médecine préventive et aux opérateurs en promotion de la santé.

{% link url="https://www.aviq.be/fr/sensibilisation-et-promotion/operateurs-de-promotion-de-la-sante/centres-dexpertises", type="external", class="button", target="_blank", rel="noopener noreferrer" %}La liste des centres d'expertise{% endlink %}
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionBuilder %}
{% endwrapper %}

{% sectionGrid class="bleed-bg palette-copper palette-low-contrast" %}
{% sectionHeader  %}
## Vous cherchez un soutien politique?

Les fédérations bruxelloise (FBPSanté) et wallonne (FWPS) rassemblent les organisations actives en promotion de la santé au niveau régional. Elles jouent un rôle essentiel en représentant le secteur, en défendant ses missions et en portant une vision commune de la promotion de la santé.

- **À Bruxelles**, {% link url="https://www.fbpsante.brussels/", type="external", target="_blank", rel="noopener noreferrer" %}la FBPSanté{% endlink %} valorise et défend la promotion de la santé, représente les associations auprès des pouvoirs publics et soutient un plaidoyer politique commun pour renforcer la place du secteur dans les politiques régionales.
- **En Wallonie**, {% link url="https://www.fwpsante.be/", type="external", target="_blank", rel="noopener noreferrer" %}la FWPS{% endlink %} réunit les acteurs du secteur pour construire et diffuser une vision partagée, améliorer la qualité des actions, favoriser la concertation et représenter collectivement les opérateurs auprès des autorités.
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
