# This Project is no longer supported

# Away-days 
 A project by Jack Mckelvey and Edward Cowell
 
# 
This is our API for the backend of our football stadium DB. It is built with node.js using an express server and a psql database. The app has been using with TDD using jest and supertest.

* Hosted backend: https://frozen-scrubland-34339.herokuapp.com/api
* Fronend Repo: https://github.com/McKelvey-Jack/away-days-fe

# Tech

- PostgreSQL
- Express
- Knex
- Node.js
- Axios 
- Nodemon
- Jest
- Supertest

# API Endpoints

# GET /api/stadiums

      Example Response:

```{
            "stadiums": [
        {
          "stadium_id": 2,
          "name": "amex stadium",
          "city": "brighton & hove",
          "logo": "https://seeklogo.com/images/F/fc-brighton-and-hove-albion-logo-767C689AE8-seeklogo.com.png",
          "picture": "https://www.stadiumguide.com/wp-content/uploads/amex_top.jpg",
          "longitude": "-0.08167",
          "latitude": "50.86063",
          "color": "#0057B8",
          "club": "brighton and hove albion",
          "country": "england",
          "capacity": 30666,
          "postcode": "BN19BL",
          "description": "The Seagulls” had to leave their Goldstone Ground in 1997..."
        }
            ]
```

# GET /api/stadiums/:stadiumId

      Example Response:

        comments: [
          {
            "comment_id": 1,
            "stadium_id": 1,
            "valueForMoneyInGround": 5,
            "transport": 5,
            "pubsNearGround": 6,
            "created_at": "2016-07-09T18:40:38.932Z",
            "thoughts": "Great Ground. Not great transport links, had to get a taxi but otherwise good"
          },
          {
            "comment_id": 2,
            "stadium_id": 1,
            "valueForMoneyInGround": 7,
            "transport": 3,
            "pubsNearGround": 6,
            "created_at": "2016-07-09T17:17:18.932Z",
            "thoughts": "Transport awful - had to walk to the ground"
          }
        ]

# GET /api/stadium/:stadiumId/comments

Example response:

            {
            "comment_id": 1,
            "stadium_id": 1,
            "valueForMoneyInGround": 5,
            "transport": 5,
            "pubsNearGround": 6,
            "created_at": "2016-07-09T18:40:38.932Z",
            "thoughts": "Great Ground. Not great transport links, had to get a taxi but otherwise good"
          }

# POST /api/stadiums/:stadiumId/comments

Example request:

```
{
"users": {
"comment_id": 3,
"stadium_id": 1,
"valueForMoneyInGround": 6,
"transport": 5,
"pubsNearGround": 7,
"created_at": "2016-07-09T18:23:58.932Z",
"thoughts": "Good ground. Shame we lost 5-0"
 }
}
```

# GET api/countries/:country"

Example response:

```
stadiums: [
{
"stadium_id": 2,
"name": "amex stadium",
"city": "brighton & hove",
"logo": "https://seeklogo.com/images/F/fc-brighton-and-hove-albion-logo-767C689AE8-seeklogo.com.png",
"picture": "https://www.stadiumguide.com/wp-content/uploads/amex_top.jpg",
"longitude": "-0.08167",
"latitude": "50.86063",
"color": "#0057B8",
"club": "brighton and hove albion",
"country": "england",
"capacity": 30666,
"postcode": "BN19BL",
"description": "The Seagulls” had to leave their Goldstone Ground in 1997...."
  }
 ]
```
