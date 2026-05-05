---
translationKey: pour-qui
order: 3
lang: fr
createdAt: 2025-11-14T09:43:00.000Z
name: Pour qui?
eleventyNavigation:
  add: Nav
vars: {}
---

{% partialWrapper "page-header.njk", { image: "/_images/pexels-fauxels-3184298.webp", class: "palette-copper" } %}
# À qui s’adressent nos formations?

Chez Repères, nos formations en promotion de la santé sont conçues pour toutes celles et ceux qui veulent agir sur la santé des personnes et des communautés, en équipe ou individuellement.
{% endpartialWrapper %}

{% wrapper tag="section", class="articles palette-copper palette--contrast bleed-bg v--bleed-bottom:14rem" %}
{% sectionTwoColumns class="reset-down-w", tag="article" %}

{% twoColumns type="fixedFluid", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
{% image src="/_images/pexels-moe-magners-7495555.webp", aspectRatio=1, width=300, class="rounded-full" %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
## Vous êtes un·e professionnel·le?

Vous travaillez dans le social, la santé ou l’éducation à Bruxelles ou en Wallonie? Nos formations peuvent vous aider à :

- Comprendre et appliquer la promotion de la santé dans votre pratique quotidienne ; 
- Réfléchir à vos pratiques et trouver du soutien face aux difficultés rencontrées ; 
- Échanger avec d’autres professionnel·les confronté·es aux mêmes situations ; 

Exemples de structures où nos participants travaillent souvent : maisons médicales, centres de planning familial, services sociaux, services de santé mentale, hôpitaux, structures jeunesse, CPAS, services d’accompagnement à l’emploi ou d’insertion.
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

{% sectionTwoColumns class="reset-down-w", tag="article" %}

{% twoColumns type="fixedFluid", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
{% image src="/_images/business-executive-explaining-her-colleagues-whiteboard.webp", aspectRatio=1, width=300, class="rounded-full" %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
## Vous êtes un relais ou bénévole?

Vous êtes engagé·e dans une association, collectif citoyen ou initiative locale? Nos formations peuvent vous permettre de:

- Développer votre posture en promotion de la santé dans vos actions ; 
- Mobiliser votre communauté et construire des projets participatifs ; 
- Rencontrer d’autres relais et bénévoles pour partager expériences et bonnes pratiques.
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

{% sectionTwoColumns class="reset-down-w", tag="article" %}

{% twoColumns type="fixedFluid", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
{% image src="/_images/pexels-product-school-1299359-2678468.webp", aspectRatio=1, width=300, class="rounded-full" %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
## Vous faites partie d’une équipe ou d’une institution?

Nous accompagnons les structures et collectifs qui souhaitent:

- Créer des repères communs en promotion de la santé.
- Améliorer le travail collectif et les pratiques internes.
- Mettre en place des espaces de formation ou de soutien au sein de leur organisation.
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

{% sectionTwoColumns class="reset-down-w", tag="article" %}

{% twoColumns type="fixedFluid", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
{% image src="/_images/pexels-mikael-blomkvist-6476783.webp", aspectRatio=1, width=300, class="rounded-full" %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
## Vous êtes un organisme de formation?

Repères soutient les organismes de formation pour:

- Développer la posture des formateur·rices en promotion de la santé.
- Échanger sur les pratiques et expériences avec d’autres organismes.
- Être accompagnés dans leurs questionnements et difficultés en formation.
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}
{% endwrapper %}

{% wrapper tag="section", class="squashed prose box border-5 palette-copper palette-low-contrast font-bold" %}
## Pourquoi nous contacter?

Vous nous contactez si vous voulez:

- Découvrir ou renforcer vos connaissances en promotion de la santé, approche participative et approche de genre ; 
- Avoir un regard réflexif sur vos pratiques, individuellement ou collectivement ;
- Trouver des supports méthodologiques pour intégrer la promotion de la santé dans vos projets, équipes ou structures.

{% link url="contact", type="internal", collection="pages", class="button" %}Nous contacter{% endlink %} { .text-center }
{% endwrapper %}

{% sectionGrid class="width-prose bleed-bg v--bleed-top:10rem" %}
{% sectionHeader  %}
::: hgroup { .text-center }

### Nous collaborons avec une grande diversité d’acteurs

du soin à la jeunesse, du social à la formation… { .h4 }
:::
{% endsectionHeader %}
{% grid type="grid-fluid", gap="0px", columns=3, class="sectors font-bold px-0 m-block-[--step-4] rounded-[--radius-card] overflow-hidden" %}
{% gridItem class="prose box rd-0 palette-orange-peel palette-low-contrast" %}
#### Santé & bien-être

- Maisons médicales (MM)
- Centres de planning familial (CPF)
- Services de santé mentale (SMM)
- Hôpitaux
- Services PMS / PSE
- Services de promotion de la santé
{% endgridItem %}
{% gridItem class="prose box rd-0 palette-orange-peel palette-low-contrast" %}
#### Accompagnement social & humain

- Services sociaux (SS) et CPAS
- Services de médiation de dettes (juridique, sociale)
- Services d’intervention psychosociale d’urgence
- Maisons d’accueil et centres d’hébergement
- Services de cohésion sociale
{% endgridItem %}
{% gridItem class="prose box rd-0 palette-orange-peel palette-low-contrast" %}
#### Jeunesse, éducation & insertion

- Organismes de jeunesse (AMO)
- Services d’aide à la jeunesse (SAJ)
- Organismes d’accompagnement à l’emploi / insertion socioprofessionnelle
- Services ou organismes de formation
{% endgridItem %}
{% gridItem class="prose box rd-0 palette-orange-peel palette-low-contrast" %}
#### Réseaux & fédérations

- Fédérations de ces secteurs
- Autres structures partenaires et acteurs associatifs
{% endgridItem %}
{% endgrid %}

{% endsectionGrid %}

{% css %}
.articles {
display: flex;
flex-direction: column;
gap: var(--step-4);
}
article.fixed-fluid {
align-items: center;
max-inline-size: var(--width-max);
}
.sectors > div {
inline-size: 100%;
}
.sectors > div:nth-of-type(2),
.sectors > div:nth-of-type(3){
--color-text: var(--copper);
}
{% endcss %}
