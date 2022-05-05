import TemperatureState from "./TemperatureState";

/**
 * Define record of thermostat
 *
 * @author nmajorov@redhat.com
 *
 */
class ThermostatRecord {
  private deviceId: string;

  private temperature: TemperatureState;

  private timeStamp: number;

  constructor() {
    this.deviceId = "1xxx2022xxx";
    this.temperature = new TemperatureState();
    this.temperature.setValue(21.0);
    this.timeStamp = Date.now();
  }

  getDeviceId(): string {
    return this.deviceId;
  }

  setDeviceId(deviceId: string) {
    this.deviceId = deviceId;
  }

  getTemperature(): TemperatureState {
    return this.temperature;
  }

  setTemperature(temperature: TemperatureState): void {
    this.temperature = temperature;
  }

  getTimeStamp(): number {
    return this.timeStamp;
  }

  setTimeStamp(timeStamp: number): void {
    this.timeStamp = timeStamp;
  }
}
export default ThermostatRecord;
