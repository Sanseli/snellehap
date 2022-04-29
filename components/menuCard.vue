<template>
  <div class="bg">
    <div v-for="menuItem in menu" :key="menuItem.name">
      <h2>{{ menuItem.title }}</h2>
      <menu-card-items :menuItem="menuItem" />
    </div>
  </div>
</template>

<script>
import menuCardItems from "./menuCardItems.vue";
export default {
  components: { menuCardItems },
  data() {
    return {
      menu: [
        {
          title: "Verse Burgers",
          slug: "burgers",
          items: [
            { name: "Hamburger", image: undefined },
            { name: "Cheeseburger", image: undefined },
            { name: "Hamburger Snelle Hap", image: undefined },
            {
              name: "Hamburger Snelle Hap Dubbelop",
              image: "snelleHapDubbelop.jpg",
            },
            { name: "Kip Burger", image: undefined },
            { name: "Kip Burger Snelle Hap", image: undefined },
            {
              name: "Kip Burger Snelle Hap Dubbelop",
              image: "kipburgerSnelleHapDubbelop.jpg",
            },
          ],
        },
        {
          title: "Warme Broodjes",
          slug: "broodjesWarm",
          items: [
            { name: "Broodje Spiegelei met Spek", image: undefined },
            { name: "Broodje Boulet", image: undefined },
            { name: "Broodje Warm Vlees", image: undefined },
            { name: "Broodje Kip Cocktail", image: "kipCocktail.jpg" },
            { name: "Broodje Kip Cajun Andalouse", image: undefined },
            {
              name: "Broodje Pikante Kip Samurai",
              image: "pikanteKipSamurai.jpg",
            },
          ],
        },
        {
          title: "Bladerdeeg Snacks",
          slug: "snacks",
          items: [
            { name: "Worstenbroodje", image: undefined },
            { name: "Worstenbroodje Speciaal", image: undefined },
          ],
        },
        {
          title: "Panini's en Wraps",
          slug: "paninisWraps",
          items: [
            { name: "Panini Kaas Tomaat", image: undefined },
            { name: "Panini Kaas Hesp", image: "kaasHesp.jpg" },
            { name: "Panini Caprese", image: undefined },
            { name: "Panini Boulet", image: undefined },
            { name: "Panini Kip", image: undefined },
            { name: "Panini Kip Cajun Andalouse", image: undefined },
            { name: "Panini Kip Pikant Samurai", image: undefined },
            { name: "Wrap Tonijn", image: undefined },
            { name: "Wrap Zalm", image: undefined },
            { name: "Wrap Kip Cocktail", image: undefined },
          ],
        },
        {
          title: "Koude Broodjes",
          slug: "broodjesKoud",
          items: [
            { name: "Broodje Rauwkost", image: undefined },
            { name: "Broodje Gezond", image: "gezond.jpg" },
            { name: "Broodje Kip Gezond", image: undefined },
            { name: "Broodje Prepare met Ajuin", image: undefined },
            { name: "Broodje Martino", image: undefined },
            { name: "Broodje Martino Speciaal", image: undefined },
            { name: "Broodje Tonijn", image: undefined },
            { name: "Broodje Zalm", image: undefined },
          ],
        },
        {
          title: "Frisdrank",
          slug: "frisdrank",
          items: [
            { name: "Cola / Cola zero 0,5L", image: undefined },
            { name: "Fanta 0,5L", image: undefined },
            { name: "Sprite 0,5L", image: undefined },
            { name: "Lipton Ice Tea sparkling 0,5L", image: undefined },
            { name: "Spa Blauw / Spa Rood 0,5L", image: undefined },
            { name: "AA Drink 0,5L", image: undefined },
            { name: "Slammers Energie", image: undefined },
            { name: "Verse Sinaasappelsap 0,33L", image: undefined },
          ],
        },
        {
          title: "Warme Dranken",
          slug: "drankenWarm",
          items: [
            { name: "Koffie Klassiek", image: undefined },
            { name: "Espresso", image: undefined },
            { name: "Cappuccino", image: undefined },
            { name: "Koffie Verkeerd", image: undefined },
            { name: "Latte Machiato", image: undefined },
            { name: "Koffie met Smaak", image: undefined },
            { name: "Thee", image: undefined },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg {
  background: rgb(226, 226, 226);
  background: radial-gradient(
    circle,
    rgba(226, 226, 226, 1) 31%,
    rgba(213, 213, 213, 1) 65%,
    rgba(182, 182, 182, 1) 88%,
    rgba(204, 204, 204, 1) 100%
  );
  padding: 2rem;
}
</style>
