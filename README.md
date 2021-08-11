## Run server

Run on linux where kernel page size is 4KB or create larger files.


```
$ iotjs server.js
```

## On other terminal make a request

```
# Correct 4KB response
$ curl -s http://localhost:8081/
# Invalid 8KB response, first 4KB is missing and second 4KB is sent twice
$ curl -s http://localhost:8081/
```


