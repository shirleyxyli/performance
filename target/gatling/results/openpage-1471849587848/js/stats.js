var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2961",
        "ok": "2961",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1194",
        "ok": "1194",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles1": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "percentiles2": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "percentiles3": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles4": {
        "total": "476",
        "ok": "476",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2952,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29.482",
        "ok": "29.482",
        "ko": "-"
    }
},
contents: {
"req_page-193cf": {
        type: "REQUEST",
        name: "Page",
path: "Page",
pathFormatted: "req_page-193cf",
stats: {
    "name": "Page",
    "numberOfRequests": {
        "total": "2961",
        "ok": "2961",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1194",
        "ok": "1194",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles1": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "percentiles2": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "percentiles3": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles4": {
        "total": "476",
        "ok": "476",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2952,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 9,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29.482",
        "ok": "29.482",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
