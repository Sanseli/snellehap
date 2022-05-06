<template>
    <div id="contact">
        <h1>CONTACT</h1>

        <div class="contactContents spaceBetween">
            <div>
                <h2><v-icon>mdi-clock-outline</v-icon> Openingsuren</h2>

                <div class="openingHours" style="">
                    <div
                        v-for="(item, index) in openingHours"
                        :key="item.day"
                        :style="{
                            'grid-column': 1,
                            'grid-row': index + 1,
                            'margin-right': '1rem',
                        }"
                    >
                        {{ item.day }}
                    </div>

                    <div
                        v-for="(item, index) in openingHours"
                        :key="item.hours"
                        :style="{ 'grid-column': 2, 'grid-row': index + 1 }"
                    >
                        {{ item.hours }}
                    </div>
                </div>
            </div>

            <div>
                <h2><v-icon>mdi-phone</v-icon> Contacteer ons</h2>

                <a href="tel:+32471 95 1977">+32 (0)471 95 19 77</a>
            </div>

            <div>
                <h2><v-icon>mdi-map-marker-outline</v-icon> Bezoek ons</h2>

                <a href="https://goo.gl/maps/QbnRgaVU8LyE7Vx4A" target="_blank">
                    TakeAway De Snelle Hap <br />
                    Markt 5 <br />
                    3980 Tessenderlo
                </a>
            </div>
            <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.227821509602!2d5.0858278157538495!3d51.0673443795653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1392d82bb3705%3A0x2cd03ac95764df59!2sDe%20Snelle%20Hap!5e0!3m2!1sen!2sbe!4v1651273454250!5m2!1sen!2sbe"
                width="auto"
                height="auto"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openingHours: [
                { day: "Maandag", hours: "10 - 18" },
                { day: "Dinsdag", hours: "10 - 18" },
                { day: "Woensdag", hours: "10 - 18" },
                { day: "Donderdag", hours: "10 - 18" },
                { day: "Vrijdag", hours: "10 - 18" },
                { day: "Zaterdag", hours: "10 - 18" },
                { day: "Zondag en Feestdagen", hours: "Gesloten" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
#contact {
    padding: 5rem 2rem 2rem 2rem;
    background-color: #7e001eff;
    color: $color-white;

    i,
    a {
        color: $color-white;
        text-decoration: none;
    }

    h1 {
        text-align: center;
    }

    .contactContents {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 2rem;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        h2 {
            @media screen and (min-width: 800px) {
                margin-bottom: 1.5rem;
            }

            @media only screen and (max-width: 600px) {
                margin-bottom: 0.5rem;
            }
        }

        .openingHours {
            display: grid;
        }
    }

    .spaceBetween > * + * {
        @media screen and (min-width: 800px) {
            margin-left: 10rem;
        }

        @media only screen and (max-width: 600px) {
            margin-top: 2rem;
        }
    }

    #map {
        border: 0;

        @media only screen and (max-width: 600px) {
            visibility: hidden;
        }
    }
}
</style>
