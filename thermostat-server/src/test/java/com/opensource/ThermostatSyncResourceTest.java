package com.opensource;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
//import static org.hamcrest.CoreMatchers.is;
import java.util.UUID;

@QuarkusTest
public class ThermostatSyncResourceTest {
    

    @Test
    public void testDataEndpoint() {
        given().contentType("application/json").pathParam("id", UUID.randomUUID())
          .when().post("/ts/device/{id}")
          .then()
             .statusCode(200);
    }

}