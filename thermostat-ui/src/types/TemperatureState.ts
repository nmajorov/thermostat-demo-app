import { State } from "./State";

/**
 *
 * Implement temperature state of thermostat
 *
 */
class TemperatureState implements State<number> {
  private value: number;

  constructor() {
    this.value = 0;
  }

  fromString(value: string): void {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      console.error("can't parse temperature state");
    } else {
      this.value = parsedValue;
    }
  }

  getValue(): number {
    return this.value;
  }

  setValue(v: number): void {
    this.value = v;
  }
}

export default TemperatureState;
