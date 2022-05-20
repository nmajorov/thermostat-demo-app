<template>
  <div class="container">
    <HelloWorld msg="thermostat demo app"/>
    <thermostat-component/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ThermostatComponent from "@/components/ThermostatComponent.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    "thermostat-component": ThermostatComponent,
  },
};
</script>
