<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-title">
          <div id="homeTemp">
            <i class="material-icons dp48">home</i><span>22 C</span>
          </div>
        </div>
        <div class="card-content">
          <vc-donut :sections="sections">{{ currentTemp }}</vc-donut>
        </div>
        <div class="card-action">
          <div class="row">
            <div class="col s3"></div>
            <div class="col s3">
              <a
                class="btn halfway-fab waves-effect waves-light red"
                @click="plusTemperature()"
              >
                <i class="material-icons">add</i></a
              >
            </div>
            <div class="col s1">
              <a
                @click="minusTemperature()"
                class="btn halfway-fab waves-effect waves-light red"
              >
                <i class="material-icons">remove</i></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThermostatComponent",
  data() {
    return {
      sections: [{ value: 100, color: "grey" }],
      temp: this.$store.state.currentTemperatureState.getValue(),
     };
  },
  computed: {
    currentTemp() {
      console.log("computed called " + JSON.stringify(this.$store.state));
      return this.$store.state.currentTemperatureState.getValue();
    },
  },

  methods: {
    plusTemperature() {
      this.temp += 1;
      this.$store.commit("updateTemperature", this.temp);
      this.$store.dispatch("sendRecord");
    },
    minusTemperature() {
      if (this.temp > 0) {
        this.temp -= 1;
        this.$store.commit("updateTemperature", this.temp);
        this.$store.dispatch("sendRecord");
      }
    },
  },
});
</script>
