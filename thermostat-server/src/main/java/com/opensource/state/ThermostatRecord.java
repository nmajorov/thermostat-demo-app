package com.opensource.state;

import java.util.UUID;

public class ThermostatRecord {
    
    private UUID deviceId;
    
    private TemperatureState temperature;

    private long timeStamp;


    public ThermostatRecord(UUID deviceId, TemperatureState temperature, long timeStamp) {
        this.deviceId = deviceId;
        this.temperature = temperature;
        this.timeStamp = timeStamp;
    }

    public ThermostatRecord() {
    }


    public UUID getDeviceId() {
        return this.deviceId;
    }

    public void setDeviceId(UUID deviceId) {
        this.deviceId = deviceId;
    }

    public TemperatureState getTemperature() {
        return this.temperature;
    }

    public void setTemperature(TemperatureState temperature) {
        this.temperature = temperature;
    }

    public long getTimeStamp() {
        return this.timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }

   


}
