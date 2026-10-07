window.BENCHMARK_DATA = {
  "lastUpdate": 1791373592699,
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
      }
    ]
  }
}