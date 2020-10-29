# APIs and Microservices Project #3: URL Shortener Microservice.

## View project

[URL Shortener Microservice](https://url-shortener-microservice-kel.glitch.me/)

## User Stories

1. I can POST a URL to `[project_url]/api/shorturl/new` and I will receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`
2. If I pass an invalid URL that doesn't follow the valid `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`.
3. When I visit the shortened URL, it will redirect me to my original link.

### Creation Example:

POST [project_url]/api/shorturl/new - body (urlencoded) : url=https://www.google.com

### Usage:

[[this_project_url]/api/shorturl/\_NH4jc_JV](https://url-shortener-kel.herokuapp.com/api/shorturl/_NH4jc_JV)

### Will redirect to:

https://www.freecodecamp.org/forum/

## Additional Dependencies

- [Express](https://www.npmjs.com/package/express).
- [dotenv](https://www.npmjs.com/package/dotenv).
- [MongoDB](https://www.npmjs.com/package/mongodb).
- [Mongoose](https://www.npmjs.com/package/mongoose).
- [shortid](https://www.npmjs.com/package/shortid).
- [valid-url](https://www.npmjs.com/package/valid-url).
- [CORS](https://www.npmjs.com/package/cors).
