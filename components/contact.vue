<template>
  <div id="contact">
    <h1 style="text-align: center">CONTACT</h1>

    <div style="display: flex">
      <div>
        <h2>Openingsuren</h2>
        <v-simple-table style="width: 20rem">
          <template v-slot:default>
            <tbody>
              <tr v-for="item in openingHours" :key="item.day">
                <td>{{ item.day }}</td>
                <td>{{ item.hours }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div>
        <h2>Algemeen</h2>
        <a href="https://goo.gl/maps/QbnRgaVU8LyE7Vx4A" target="_blank"
          >Markt 5, 3980 Tessenderlo</a
        >
        <a href="tel:0471 95 1977">0471 95 1977</a>
      </div>
      <div>
        <h2>Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.227821509602!2d5.0858278157538495!3d51.0673443795653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1392d82bb3705%3A0x2cd03ac95764df59!2sDe%20Snelle%20Hap!5e0!3m2!1sen!2sbe!4v1651273454250!5m2!1sen!2sbe"
          width="300"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
  color: white;
}
</style>
