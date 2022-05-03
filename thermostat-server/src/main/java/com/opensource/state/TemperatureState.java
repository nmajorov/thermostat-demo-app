package com.opensource.state;

/**
 * 
 * Implement temperature state of thermostat
 * 
 */
public class TemperatureState implements State<Double> {
    private static final long serialVersionUID = 1L;
	
	private double value;

    
    @Override
    public void fromString(String value) {
        this.value = Double.parseDouble(value);
    }

    @Override
    public Double getValue() {
        return this.value;
    }

    @Override
    public void setValue(Double v) {
        this.value = v;
        
    }
    
    @Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(value);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
            TemperatureState other = (TemperatureState) obj;
		
		return Double.doubleToLongBits(value) == Double.doubleToLongBits(other.value);
	}


	/**
	 * The value of the status
	 * @return the value of the status
	 */
	public String toString(){
		return String.format("[value:%1$,.2f]",this.value);
	}

}
