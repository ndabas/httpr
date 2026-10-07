window.BENCHMARK_DATA = {
  "lastUpdate": 1791376868449,
  "repoUrl": "https://github.com/ndabas/httpr",
  "entries": {
    "httpr Performance": [
      {
        "commit": {
          "author": {
            "name": "Nikhil Dabas",
            "username": "ndabas",
            "email": "nikhil@nikhildabas.com"
          },
          "committer": {
            "name": "Nikhil Dabas",
            "username": "ndabas",
            "email": "nikhil@nikhildabas.com"
          },
          "id": "8684afe7f84fbe77a964fa6b4b1a90aea01d409c",
          "message": "Add Windows ARM64 build",
          "timestamp": "2026-10-07T11:42:17Z",
          "url": "https://github.com/ndabas/httpr/commit/8684afe7f84fbe77a964fa6b4b1a90aea01d409c"
        },
        "date": 1791373591586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_single_request",
            "value": 1966.0062049399655,
            "unit": "iter/sec",
            "range": "stddev: 0.000043497923808882196",
            "extra": "mean: 508.6453936347247 usec\nrounds: 597"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_session_reuse",
            "value": 1952.666246430325,
            "unit": "iter/sec",
            "range": "stddev: 0.00007330665021241754",
            "extra": "mean: 512.1202877491753 usec\nrounds: 1404"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_json_parsing",
            "value": 2711.923770267007,
            "unit": "iter/sec",
            "range": "stddev: 0.000031977259016678225",
            "extra": "mean: 368.7419281337481 usec\nrounds: 1795"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_post_json",
            "value": 1637.2644294836343,
            "unit": "iter/sec",
            "range": "stddev: 0.00010109219700510575",
            "extra": "mean: 610.7748888891351 usec\nrounds: 1161"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_full_overhead",
            "value": 882.0024672723054,
            "unit": "iter/sec",
            "range": "stddev: 0.00006603136133067316",
            "extra": "mean: 1.1337836764704476 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[8]",
            "value": 37.94037784592455,
            "unit": "iter/sec",
            "range": "stddev: 0.0022963997816799198",
            "extra": "mean: 26.357143939393243 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[32]",
            "value": 34.16850661068963,
            "unit": "iter/sec",
            "range": "stddev: 0.003157571627165132",
            "extra": "mean: 29.266716611113154 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[64]",
            "value": 30.90216812110913,
            "unit": "iter/sec",
            "range": "stddev: 0.0032880887991094034",
            "extra": "mean: 32.360188970588915 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[1KB]",
            "value": 1253.1946306990142,
            "unit": "iter/sec",
            "range": "stddev: 0.00007978893025589577",
            "extra": "mean: 797.9606483329841 usec\nrounds: 600"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[10KB]",
            "value": 274.96237163109055,
            "unit": "iter/sec",
            "range": "stddev: 0.00010313619685952537",
            "extra": "mean: 3.6368612696637364 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[100KB]",
            "value": 30.65295327104479,
            "unit": "iter/sec",
            "range": "stddev: 0.00009419719717767994",
            "extra": "mean: 32.62328399999924 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestHeaders::test_many_headers",
            "value": 1459.6957645892965,
            "unit": "iter/sec",
            "range": "stddev: 0.00009594921813428484",
            "extra": "mean: 685.0742629107802 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[1_array]",
            "value": 2389.455042111273,
            "unit": "iter/sec",
            "range": "stddev: 0.00002127340988149218",
            "extra": "mean: 418.505467722222 usec\nrounds: 821"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[10_arrays]",
            "value": 1074.9727500903246,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328730156994477",
            "extra": "mean: 930.256138972802 usec\nrounds: 662"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[100_arrays]",
            "value": 149.62335236601749,
            "unit": "iter/sec",
            "range": "stddev: 0.00020162651349812702",
            "extra": "mean: 6.683448700933668 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[1_array]",
            "value": 2239.921168394708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000377059568373006",
            "extra": "mean: 446.4442829997779 usec\nrounds: 1000"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[10_arrays]",
            "value": 901.684118123645,
            "unit": "iter/sec",
            "range": "stddev: 0.00009995466048791322",
            "extra": "mean: 1.1090358362759507 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[100_arrays]",
            "value": 121.1231717106219,
            "unit": "iter/sec",
            "range": "stddev: 0.000391585169901295",
            "extra": "mean: 8.25605857142779 msec\nrounds: 98"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nikhil Dabas",
            "username": "ndabas",
            "email": "nikhil@nikhildabas.com"
          },
          "committer": {
            "name": "Nikhil Dabas",
            "username": "ndabas",
            "email": "nikhil@nikhildabas.com"
          },
          "id": "6fe90f0b2bda969697c19b41625a04b0fb6e5ff5",
          "message": "ci: add Windows ARM64 build",
          "timestamp": "2026-10-07T12:03:23Z",
          "url": "https://github.com/ndabas/httpr/commit/6fe90f0b2bda969697c19b41625a04b0fb6e5ff5"
        },
        "date": 1791374895154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_single_request",
            "value": 1608.3604235062642,
            "unit": "iter/sec",
            "range": "stddev: 0.00006192494599143323",
            "extra": "mean: 621.7511854836469 usec\nrounds: 620"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_session_reuse",
            "value": 1692.4833745622236,
            "unit": "iter/sec",
            "range": "stddev: 0.000041431935315969494",
            "extra": "mean: 590.8477536795061 usec\nrounds: 1563"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_json_parsing",
            "value": 2086.298408142203,
            "unit": "iter/sec",
            "range": "stddev: 0.00002772888850459547",
            "extra": "mean: 479.31781767042395 usec\nrounds: 1777"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_post_json",
            "value": 1472.703602560516,
            "unit": "iter/sec",
            "range": "stddev: 0.00007119496334575391",
            "extra": "mean: 679.0232591686135 usec\nrounds: 1227"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_full_overhead",
            "value": 890.9528697478803,
            "unit": "iter/sec",
            "range": "stddev: 0.00006190145770127326",
            "extra": "mean: 1.1223938257059294 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[8]",
            "value": 32.15114853143749,
            "unit": "iter/sec",
            "range": "stddev: 0.002052659134903101",
            "extra": "mean: 31.103087935480655 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[32]",
            "value": 28.4649477642078,
            "unit": "iter/sec",
            "range": "stddev: 0.0017539246994851447",
            "extra": "mean: 35.130926931031055 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[64]",
            "value": 25.828137059607023,
            "unit": "iter/sec",
            "range": "stddev: 0.0020382731554799342",
            "extra": "mean: 38.71746528571407 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[1KB]",
            "value": 1111.0833794526977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006056846638280768",
            "extra": "mean: 900.0224632039625 usec\nrounds: 462"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[10KB]",
            "value": 219.96856596244723,
            "unit": "iter/sec",
            "range": "stddev: 0.00005416090283806164",
            "extra": "mean: 4.546104101850256 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[100KB]",
            "value": 24.4256886984597,
            "unit": "iter/sec",
            "range": "stddev: 0.0009107638997291473",
            "extra": "mean: 40.94050376000496 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestHeaders::test_many_headers",
            "value": 1394.02951301889,
            "unit": "iter/sec",
            "range": "stddev: 0.0003903905299723221",
            "extra": "mean: 717.3449275363007 usec\nrounds: 1035"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[1_array]",
            "value": 1856.7486386437506,
            "unit": "iter/sec",
            "range": "stddev: 0.00003908640159264184",
            "extra": "mean: 538.5758627675328 usec\nrounds: 940"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[10_arrays]",
            "value": 920.7625996290637,
            "unit": "iter/sec",
            "range": "stddev: 0.000042306629069994925",
            "extra": "mean: 1.0860562759639214 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[100_arrays]",
            "value": 132.20286585733214,
            "unit": "iter/sec",
            "range": "stddev: 0.00016633520215277665",
            "extra": "mean: 7.564132543685993 msec\nrounds: 103"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[1_array]",
            "value": 1593.3679476560874,
            "unit": "iter/sec",
            "range": "stddev: 0.00004028580290536752",
            "extra": "mean: 627.6014284528837 usec\nrounds: 1209"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[10_arrays]",
            "value": 831.8356836759027,
            "unit": "iter/sec",
            "range": "stddev: 0.00005595505475721118",
            "extra": "mean: 1.202160498310165 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[100_arrays]",
            "value": 109.24244559133498,
            "unit": "iter/sec",
            "range": "stddev: 0.0005948034795213242",
            "extra": "mean: 9.153951054344752 msec\nrounds: 92"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Hjelde Thoresen",
            "username": "thomasht86",
            "email": "thomas@vespa.ai"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "297fde32269f4233f2b6dc09d00e14b54a673308",
          "message": "Merge branch 'main' into main",
          "timestamp": "2026-10-07T12:37:45Z",
          "url": "https://github.com/ndabas/httpr/commit/297fde32269f4233f2b6dc09d00e14b54a673308"
        },
        "date": 1791376867938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_single_request",
            "value": 2079.117060365827,
            "unit": "iter/sec",
            "range": "stddev: 0.000059661960447425886",
            "extra": "mean: 480.97339926788294 usec\nrounds: 819"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_session_reuse",
            "value": 2313.982931938364,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453682419616586",
            "extra": "mean: 432.1553051224651 usec\nrounds: 2245"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_json_parsing",
            "value": 2606.3876329900863,
            "unit": "iter/sec",
            "range": "stddev: 0.00006547739132002446",
            "extra": "mean: 383.6727842561105 usec\nrounds: 2401"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestSyncClient::test_post_json",
            "value": 1983.1387771103075,
            "unit": "iter/sec",
            "range": "stddev: 0.000052335636130874464",
            "extra": "mean: 504.2511454781449 usec\nrounds: 1526"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_full_overhead",
            "value": 1135.3169024748595,
            "unit": "iter/sec",
            "range": "stddev: 0.00008038694200196898",
            "extra": "mean: 880.8113380679137 usec\nrounds: 704"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[8]",
            "value": 45.62788310143045,
            "unit": "iter/sec",
            "range": "stddev: 0.002362293689840215",
            "extra": "mean: 21.916423292682836 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[32]",
            "value": 41.166380869718736,
            "unit": "iter/sec",
            "range": "stddev: 0.002263769919310797",
            "extra": "mean: 24.291666619048904 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestAsyncClient::test_concurrent_requests[64]",
            "value": 38.77945434593464,
            "unit": "iter/sec",
            "range": "stddev: 0.0017838743205297537",
            "extra": "mean: 25.78685071428378 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[1KB]",
            "value": 1414.2386182257721,
            "unit": "iter/sec",
            "range": "stddev: 0.00006097792553135283",
            "extra": "mean: 707.0942534821644 usec\nrounds: 718"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[10KB]",
            "value": 272.5882408369547,
            "unit": "iter/sec",
            "range": "stddev: 0.00009829610681865373",
            "extra": "mean: 3.668536826568897 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestResponseSizes::test_response_size[100KB]",
            "value": 30.256747180933047,
            "unit": "iter/sec",
            "range": "stddev: 0.00010800334797838783",
            "extra": "mean: 33.05047941935318 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestHeaders::test_many_headers",
            "value": 1790.4007275045933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004449989106529751",
            "extra": "mean: 558.5341787666551 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[1_array]",
            "value": 2483.9708746816596,
            "unit": "iter/sec",
            "range": "stddev: 0.00004114422201924526",
            "extra": "mean: 402.58120986549727 usec\nrounds: 1115"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[10_arrays]",
            "value": 1204.8143881174637,
            "unit": "iter/sec",
            "range": "stddev: 0.000044517923011902553",
            "extra": "mean: 830.0033680395462 usec\nrounds: 826"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_cbor_request[100_arrays]",
            "value": 156.25723774847776,
            "unit": "iter/sec",
            "range": "stddev: 0.00027704669104691075",
            "extra": "mean: 6.3997035555541295 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[1_array]",
            "value": 2357.002469328163,
            "unit": "iter/sec",
            "range": "stddev: 0.000040049666737459373",
            "extra": "mean: 424.2676929757476 usec\nrounds: 1381"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[10_arrays]",
            "value": 1015.0751473922015,
            "unit": "iter/sec",
            "range": "stddev: 0.00004873471540693147",
            "extra": "mean: 985.1487375777738 usec\nrounds: 644"
          },
          {
            "name": "tests/benchmark/test_performance.py::TestCBORDecoding::test_json_request[100_arrays]",
            "value": 131.7731398242815,
            "unit": "iter/sec",
            "range": "stddev: 0.0003659445245693855",
            "extra": "mean: 7.588799973450528 msec\nrounds: 113"
          }
        ]
      }
    ]
  }
}