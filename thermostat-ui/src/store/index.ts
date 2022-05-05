import TemperatureState from "@/types/TemperatureState";
import Vuex from "vuex";
import newRequest from "@/api";

/**
 * central state of web app
 */
interface APPRootState {
  version: string;
  backendUrl: string;
  deviceId: string;
  currentTemperatureState: TemperatureState;
}

export default new Vuex.Store<APPRootState>({
  state: {
    version: "1.0.0", // a simple property
    backendUrl: "http://localhost:8080",
    currentTemperatureState: new TemperatureState(),
    deviceId: "000",
  },
  mutations: {
    updateDeviceId(state, payload: string) {
      console.log("update device id to: " + payload);
      state.deviceId = payload;
    },
    updateBackendUrl(state, backendUrl) {
      state.backendUrl = backendUrl;
    },
  },
  actions: {
    changeDeviceId({ commit }, deviceId) {
      this.dispatch("updateDeviceId", deviceId);
    },
    /**
    sendState({ commit }): any {
        newRequest(HTTP_VERBS.GET, `${BASEURL}/rest/session/token`,
            new Headers(), {}, {}).then((responseToken) => {
                if (responseToken) {

                    newRequest(HTTP_VERBS.POST, `${BASEURL}/termins_rest_resource`, new Headers({
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': responseToken
                    }),
                        {}, //there is no query parameters
                        {
                            "selected_date": this.state.selectedDate,
                            "selected_time": this.state.selectedTime
                        }
                    )
                }
            })



    }
     */
  }, //end of actions
}); //end of store
