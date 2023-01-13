<template>
    <div id="menuCard">
        <h1>MENU</h1>

        <!-- <div v-for="menuItem in menu" :key="menuItem.name">
            <h2>{{ menuItem.title }}</h2>

            <menu-card-items :menuItem="menuItem" @ready="loading = false" />
        </div> -->

        <img    
            src="~/static/menu/menu_broodjes_koud.jpg"
            class="menuCardImage"
        />
        <img    
            src="~/static/menu/menu_broodjes_warm.jpg"
            class="menuCardImage"
        />
        <img    
            src="~/static/menu/menu_hamburger.jpg"
            class="menuCardImage"
        />
        <img    
            src="~/static/menu/menu_panini.jpg"
            class="menuCardImage"
        />
    </div>
</template>

<script>
import menuCardItems from "./menuCardItems.vue";

export default {
    components: { menuCardItems },

    data() {
        return {
            loading: true,

            menu: [
                {
                    title: "Verse Burgers",
                    slug: "burgers",
                    items: [
                        { name: "Hamburger", image: undefined, price: 6 },
                        { name: "Cheeseburger", image: undefined, price: 6.5 },
                        {
                            name: "Hamburger Snelle Hap",
                            image: undefined,
                            price: 7.5,
                        },
                        {
                            name: "Hamburger Snelle Hap Dubbelop",
                            image: "snelleHapDubbelop.jpg",
                            price: 9,
                        },
                        { name: "Kip Burger", image: undefined, price: 6 },
                        {
                            name: "Kip Cheeseburger",
                            image: undefined,
                            price: 6.5,
                        },
                        {
                            name: "Kip Burger Snelle Hap",
                            image: undefined,
                            price: 7.5,
                        },
                        {
                            name: "Kip Burger Snelle Hap Dubbelop",
                            image: "kipburgerSnelleHapDubbelop.jpg",
                            price: 9,
                        },
                    ],
                },
                {
                    title: "Warme Broodjes",
                    slug: "broodjesWarm",
                    items: [
                        {
                            name: "Broodje Spiegelei met Spek",
                            image: undefined,
                            price: 4.25,
                        },
                        {
                            name: "Broodje Boulet",
                            image: undefined,
                            price: 5.95,
                        },
                        {
                            name: "Broodje Warm Vlees",
                            image: undefined,
                            price: 6.5,
                        },
                        {
                            name: "Broodje Kip Cocktail",
                            image: "kipCocktail.jpg",
                            price: 6.95,
                        },
                        {
                            name: "Broodje Kip Cajun Andalouse",
                            image: undefined,
                            price: 6.95,
                        },
                        {
                            name: "Broodje Pikante Kip Samurai",
                            image: "pikanteKipSamurai.jpg",
                            price: 6.95,
                        },
                    ],
                },
                {
                    title: "Bladerdeeg Snacks",
                    slug: "snacks",
                    items: [
                        {
                            name: "Worstenbroodje",
                            image: "worstenbroodje.png",
                            price: 2.3,
                        },
                        {
                            name: "Worstenbroodje Speciaal",
                            image: undefined,
                            price: 2.5,
                        },
                    ],
                },
                {
                    title: "Panini's en Wraps",
                    slug: "paninisWraps",
                    items: [
                        {
                            name: "Panini Kaas Tomaat",
                            image: undefined,
                            price: 3.75,
                        },
                        {
                            name: "Panini Kaas Hesp",
                            image: "kaasHesp.jpg",
                            price: 3.75,
                        },
                        {
                            name: "Panini Caprese",
                            image: undefined,
                            price: 4.2,
                        },
                        { name: "Panini Boulet", image: undefined, price: 4.2 },
                        { name: "Panini Kip", image: undefined, price: 4.5 },
                        {
                            name: "Panini Kip Cajun Andalouse",
                            image: undefined,
                            price: 4.5,
                        },
                        {
                            name: "Panini Kip Pikant Samurai",
                            image: undefined,
                            price: 4.5,
                        },
                        { name: "Wrap Tonijn", image: undefined, price: 4.3 },
                        { name: "Wrap Zalm", image: undefined, price: 4.9 },
                        {
                            name: "Wrap Kip Cocktail",
                            image: undefined,
                            price: 4.5,
                        },
                    ],
                },
                {
                    title: "Koude Broodjes",
                    slug: "broodjesKoud",
                    items: [
                        {
                            name: "Broodje Rauwkost",
                            image: undefined,
                            price: 3.4,
                        },
                        {
                            name: "Broodje Gezond",
                            image: "gezond.jpg",
                            price: 4.85,
                        },
                        {
                            name: "Broodje Kip Gezond",
                            image: undefined,
                            price: 5.3,
                        },
                        {
                            name: "Broodje Prepare met Ajuin",
                            image: undefined,
                            price: 4.1,
                        },
                        {
                            name: "Broodje Martino",
                            image: undefined,
                            price: 4.6,
                        },
                        {
                            name: "Broodje Martino Speciaal",
                            image: undefined,
                            price: 5,
                        },
                        {
                            name: "Broodje Tonijn",
                            image: undefined,
                            price: 4.95,
                        },
                        { name: "Broodje Zalm", image: undefined, price: 6.35 },
                    ],
                },
                {
                    title: "Frisdrank",
                    slug: "frisdrank",
                    items: [
                        {
                            name: "Cola / Cola zero 0,5L",
                            image: "cola.png",
                            price: 2.25,
                        },
                        { name: "Fanta 0,5L", image: "fanta.png", price: 2.25 },
                        {
                            name: "Sprite 0,5L",
                            image: "sprite.png",
                            price: 2.25,
                        },
                        {
                            name: "Lipton Ice Tea sparkling 0,5L",
                            image: "icetea.png",
                            price: 2.25,
                        },
                        {
                            name: "Spa Blauw / Spa Rood 0,5L",
                            image: "spa.svg",
                            price: 2,
                        },
                        {
                            name: "AA Drink 0,5L",
                            image: "aadrink.png",
                            price: 2.5,
                        },
                        {
                            name: "Slammers Energie",
                            image: "slammers.png",
                            price: 1.8,
                        },
                        {
                            name: "Verse Sinaasappelsap",
                            image: "orangejuice.png",
                            price: 2.9,
                        },
                    ],
                },
                {
                    title: "Warme Dranken",
                    slug: "drankenWarm",
                    items: [
                        {
                            name: "Koffie Klassiek",
                            image: undefined,
                            price: 2.8,
                        },
                        { name: "Espresso", image: undefined, price: 2.8 },
                        { name: "Cappuccino", image: undefined, price: 3.2 },
                        {
                            name: "Koffie Verkeerd",
                            image: undefined,
                            price: 3.2,
                        },
                        {
                            name: "Latte Machiato",
                            image: undefined,
                            price: 3.2,
                        },
                        {
                            name: "Koffie met Smaak",
                            image: undefined,
                            price: 0.5,
                        },
                        { name: "Thee", image: undefined, price: 2.5 },
                    ],
                },
                {
                    title: "Overig",
                    slug: "overig",
                    items: [{ name: "Schepijs", image: "schepijs.png" }],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
#menuCard {
    background: rgb(240, 240, 240);
    background: radial-gradient(
        circle,
        rgba(240, 240, 240, 1) 31%,
        rgba(230, 230, 230, 1) 65%,
        rgba(209, 209, 209, 1) 88%,
        rgba(190, 190, 190, 1) 100%
    );
    padding: 5rem 2rem 2rem 2rem;

    h2 {
        padding: 1em;

        @media only screen and (max-width: 600px) {
            text-align: center;
        }
    }

    text-align: center;
}

.menuCardImage {
    width: 100%;
    margin-top: 1.5rem;
    @media only screen and (min-width: 768px) {
        max-width: 45rem;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        margin: 3rem 1.5rem 0 1.5rem;
    }
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
