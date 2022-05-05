/**
 * This class defines state of thermostat
 */
export interface State<T> {
  getValue(): T;

  setValue(value: T): void;

  /**
   * Define the value of the status.
   * Override it to manage different type.
   */
  fromString(value: string): void;

  //public static String toJson(State<?> state) {
  //		return state.toString();
  //	}
}
