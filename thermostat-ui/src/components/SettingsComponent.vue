<template>
  <form style="margin-top:3%;">
    <div class="row">
      <div class="input-field col s6">
        <input value="Alvin" id="backend_url" type="text" class="validate" />
        <label class="active" for="backend_url">Backend URL</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input value="1111" id="device_id" type="text" class="validate" />
        <label class="active" for="device_id">Device ID</label>
      </div>
    </div>
    <div class="row">
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Update
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SettingsComponent",
  data() {
    return {
      sections: [{ value: 100, color: "grey" }],
      temp: 0.0,
    };
  },
  methods: {
    plusTemperature() {
      this.temp += 1;
    },
    minusTemperature() {
      if (this.temp > 0) {
        this.temp -= 1;
      }
    },
  },
});
</script>
