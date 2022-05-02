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
          <vc-donut :sections="sections">Basic donut</vc-donut>
        </div>
        <div class="card-action">
          <div class="row">
            <div class="col s3"></div>
            <div class="col s3">
              <a class="btn halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i></a
              >
            </div>
            <div class="col s1">
              <a class="btn halfway-fab waves-effect waves-light red">
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
      sections: [{ value: 100 }],
    };
  },
});
</script>
