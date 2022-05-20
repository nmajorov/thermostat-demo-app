import TemperatureState from "@/types/TemperatureState";
import { createStore } from "vuex";
import newRequest from "@/api";
import { HTTP_VERBS } from "@/types/Common";
import ThermostatRecord from "@/types/ThermostatRecord";
import { useToast } from 'vue-toastification'

const toast = useToast()

/**
 * central state of web app
 */
interface APPRootState {
  version: string;
  backendUrl: string;
  deviceId: string;
  currentTemperatureState: TemperatureState;
 // error: string;
}

const store = createStore<APPRootState>({
  state: {
    version: "1.0.0", // a simple property
    backendUrl: "http://localhost:8080/ts",
    currentTemperatureState: new TemperatureState(),
    deviceId: "7a0a4bf3-0ba9-4767-94b5-6eb2df44be8d",
   // error: "",
  },
  mutations: {
    updateDeviceId(state, payload: string) {
      console.log("update device id to: " + payload);
      state.deviceId = payload;
    },
    updateBackendUrl(state, backendUrl) {
      state.backendUrl = backendUrl;
    },
    updateTemperature(state, temp) {
      state.currentTemperatureState.setValue(temp);
    },
    updateError(state, err: string) {
      if (err != ""){
        toast.error(err);
      }
    },
  },
  actions: {
    sendRecord({ commit }): any {
      store.commit("updateError", "");
      store.commit("updateError", "");
      const tempRecord = new ThermostatRecord();
      tempRecord.setDeviceId(this.state.deviceId);
      tempRecord.setValue(this.state.currentTemperatureState);
      const json = JSON.stringify(tempRecord);
      console.log(json);
      newRequest(
        HTTP_VERBS.POST,
        this.state.backendUrl + "/device/" + this.state.deviceId,
        new Headers({
          "Content-Type": "application/json",
        }),
        {}, //there is no query parameters
        json
      ).catch((error: any) => {
        const err = `Error at sending request !`;
        store.commit("updateError", err);
      });
    },
  }, //end of actions
}); //end of store

export default store;
