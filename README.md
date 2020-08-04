# APIs and Microservices Project #2: Request Header Parser Microservice.

## View project

[Request Header Parser Microservice](https://request-header-parser-kel.herokuapp.com/)

## User stories:

1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

### Example usage:

- https://request-header-parser-kel.herokuapp.com/api/whoami

### Example output:

- `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`

## Additional Dependencies

- [Express](https://www.npmjs.com/package/express).
- [CORS](https://www.npmjs.com/package/cors).
