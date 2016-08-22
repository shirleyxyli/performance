package OpenPage

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
/**
 * Created by shirley.li on 2016-5-13.
 */
class OpenPage extends  Simulation{
   val httpConf = http.baseURL("http://pre.cepin.com/ask/list/all")
   val scn = scenario("OpenPage").during(100){
     exec(http("Page").get("/").check(status.is(200)))
   }
    //setUp(scn.inject(rampUsers(10) over (60 seconds)).protocols(httpConf))
   setUp(scn.inject(atOnceUsers(5)).protocols(httpConf))
}
