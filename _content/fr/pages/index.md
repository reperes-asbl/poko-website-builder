---
translationKey: index
lang: fr
createdAt: 2025-11-14T09:35:00.000Z
uuid: ccc997d69664
localizationKey: 53a97b6af84d
name: Accueil
vars: {}
---

{% partialWrapper "page-header.njk", { image: "/_images/pexels-rethaferguson-3810762.webp", class: "" } %}

{% image src="/_images/reperes-asbl-logo-sans-bords-rvb-01.webp", alt="Repères ASBL", width="200" %}

# Centre de formation à la promotion de la santé

**Chez Repères, nous accompagnons les professionnel·le·s à comprendre les enjeux de santé dans toute leur complexité.**

{% link url="activites", type="internal", text="Nos dispositifs" %} (formations et accompagnements) permettent de penser des actions de promotion de la santé selon une approche multifactorielle, de développer des projets structurés et de renforcer une posture professionnelle adaptée aux réalités du terrain.

{% endpartialWrapper %}

{% sectionGrid class="width-prose palette-vermillon palette-low-contrast flow v--flow-space:--step-4 bleed-bg v--bleed-bottom:20rem" %}
{% sectionHeader class="text-center" %}
## Notre offre de formations et d’accompagnements
{% endsectionHeader %}
{% grid type="switcher", class="text-center" %}
{% gridItem  %}
{% icon "tabler:library", width="64", height="64" %}

**Nos formations à Bruxelles et en Wallonie**
{% endgridItem %}
{% gridItem  %}
{% icon "tabler:automation", width="64", height="64" %}

**Nos interventions sur mesure (chez vous et/ou en équipe)**
{% endgridItem %}
{% gridItem  %}
{% icon "tabler:thumb-up", width="64", height="64" %}

**Notre service support (Le SESU)**
{% endgridItem %}
{% endgrid %}

{% endsectionGrid %}

{% sectionTwoColumns class="squashed py-0" %}

{% twoColumns type="switcher", class="width-prose gap-0" %}
{% twoColumnsItem class="prose box flow palette-vermillon-contrast rounded-r-0 text-right" %}
En tant que
**ORGANISME DE PROMOTION DE LA SANTÉ,**
nous accompagnons des services, des institutions et des équipes qui interagissent avec les sphères psychomédicosociales.
{% endtwoColumnsItem %}
{% twoColumnsItem class="prose box flow palette-burnt-umber-contrast rounded-l-0" %}
En tant que
**SERVICE SUPPORT,**
nous apportons notre expertise d’organisme de formation en promotion de la santé à d’autres organismes de formation et aux réseaux de formateurs et formatrices.
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

{% wrapper tag="div", class="section palette-burnt-umber palette-low-contrast flow text-center bleed-bg v--bleed-top:7rem" %}
Depuis 1998, Repères asbl est active dans le domaine de la formation en Promotion de la Santé. Repères est une asbl reconnue par la COCOF et l’AVIQ.

{% link url="qui-sommes-nous", text="Découvrez notre histoire", linkType="internal", collection="pages" %}

Depuis 2018, dans le cadre du nouveau décret de Promotion de la Santé mis en place par la COCOF en Région Bruxelloise, Repères a été désignée comme **service support** en matière de **formation** généraliste et continue.

{% link url="sesu", text="En savoir plus sur les Services Support", linkType="internal", collection="pages" %}
{% endwrapper %}

{% wrapper tag="section", class="palette-ylnMn-blue flow text-center" %}

## Nous collaborons avec une grande diversité d’acteurs { .h3 }

Du soin à la jeunesse, du social à la formation… { .h4 }

{# ⚠️ -LOGO PARTENAIRES- ⚠️ #}

{% link url="pour-qui", text="À qui s'adresse nos formations?", linkType="internal", collection="pages", class="button" %}
{% endwrapper %}

{#
{% wrapper tag="section", class="bleed-bg palette-cooper-contrast text-center" %}
⚠️ Témoignage en attente ⚠️

> **«Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy»** { .h3}
> >
> Nom - organisation {.text-right .my-0}
{% endwrapper %}
#}

{% wrapper tag="aside", class="section flow" %}
{% partial "btn-newsletter.md" %}
{% endwrapper %}

{% css %}

blockquote{
border: none;
}

{% endcss %}
