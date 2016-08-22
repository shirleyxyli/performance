package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicSimulation {
  val httpConf = http
    .baseURL("http://App2.cepin.net") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/18.0")

  val headers_10 = Map("Content-Type" -> """application/x-www-form-urlencoded""") // Note the headers specific to a given request

  val records = csv("scenario.csv", rawSplit = true).random

  val scn = scenario("API Performance Test") // A scenario is a chain of requests and pauses
  // inject project
    .feed(records)

    .exec(http("${scenario}")
      .get("${api}")
      .check(status.is(200))
    )

  //setUp(scn.inject(atOnceUsers(5)).protocols(httpConf))


}

