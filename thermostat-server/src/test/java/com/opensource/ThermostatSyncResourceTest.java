package com.opensource;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
//import static org.hamcrest.CoreMatchers.is;
import java.util.UUID;
import com.opensource.state.TemperatureState;

@QuarkusTest
public class ThermostatSyncResourceTest {
    

    @Test
    public void testDataEndpoint() {
        TemperatureState state = new TemperatureState();
        state.setValue(27.5);

        given().contentType("application/json")
        .pathParam("id", UUID.randomUUID())
        .body(state)
          .when().post("/ts/device/{id}")
          .then()
             .statusCode(200);
    }

}