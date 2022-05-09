import TemperatureState from "./TemperatureState";

/**
 * Define record of thermostat
 *
 * @author nmajorov@redhat.com
 *
 */
class ThermostatRecord {
  private deviceId: string;

  private value: TemperatureState;

  private timeStamp: number;

  constructor() {
    this.deviceId = "unknown";
    this.value = new TemperatureState();
    this.timeStamp = Date.now();
  }

  getDeviceId(): string {
    return this.deviceId;
  }

  setDeviceId(deviceId: string) {
    this.deviceId = deviceId;
  }

  getValue(): TemperatureState {
    return this.value;
  }

  setValue(temperature: TemperatureState): void {
    this.value = temperature;
  }

  getTimeStamp(): number {
    return this.timeStamp;
  }

  setTimeStamp(timeStamp: number): void {
    this.timeStamp = timeStamp;
  }
}
export default ThermostatRecord;
