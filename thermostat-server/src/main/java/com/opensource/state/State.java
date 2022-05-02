package com.opensource;

import java.io.Serializable;

/**
 * This class defines state of thermostat
 */
public interface State<T> extends Serializable { 
    
    public T getValue();
	
	public void setValue(T value);

	/**
	 * Define the value of the status.
	 * Override it to manage different type.
	 */
	public void fromString(String value);
	
	/**
	 * The value of the status
	 * @return the value of the status
	 */
	public String toString();
	
	public static String toJson(State<?> state) {
		return state.toString();
	}


}
