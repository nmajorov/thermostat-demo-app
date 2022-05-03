package com.opensource;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.jboss.logging.Logger;
import com.opensource.state.TemperatureState;
import javax.ws.rs.core.Response;
import java.util.UUID;


@Path("/ts")
public class ThermostatSyncResource {
    private static final Logger log = Logger.getLogger(ThermostatSyncResource.class);


    @Path("/device/{id}")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    /**
     * get thermostat data form device with id
     * @return ok of all goes well
     */
    public Response data(@PathParam("id") UUID id, TemperatureState state) {
        log.info(String.format("Get state: %s for device: %s", state,id));
        return Response.ok().build();
    }

}