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

  constructor(
    ...args: [
      deviceId: string,
      temperature: TemperatureState,
      timeStamp: number
    ]
  ) {
    this.deviceId = "";
    this.temperature = new TemperatureState();
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
