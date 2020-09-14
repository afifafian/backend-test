## How to run this app
`npm install` then
`nodemon index.js`


## There are 3 RESTful endpoints: 

## POST /register
Create new user

- Request Header
```json
    not needed
```
- Request Body

```json
{
    "username": "<username to get insert into>",
    "email": "<email to get insert into>",
    "password": "<password to get insert into>",
    "address": "<address to get insert into>"
}
 ```

- Response (201 - Created)
```json
{
    "id": 1,
    "name": "johndoe",
    "email": "john@mail.com",
    "password": "$2b$10$vXKvM7FIz7WkwlarD.a1u.6rW7JNGTwWQtRXyUx/SSaCvaxg2vqze",
    "address": "Street Rd. No.12",
    "updatedAt": "2020-09-17T14:04:12.904Z",
    "createdAt": "2020-09-17T14:04:12.904Z"
}
```

- Response (400 - Bad Request)
```json
{
    "type": "Bad Request",
    "errors": 
    [
        { "message": "username cannot be empty" },
        { "message": "email cannot be empty"},
        { "message": "password cannot be empty"}
        { "message": "address cannot be empty"}
    ]
}
```

- Response (500 - Internal server error)
```json
{
    "message": "Internal Server Error"    
}
```

## POST /login
Login to user's account

- Request Header
```json
    not needed
```

- Request Body
```json
{
    "username": "<username user>",
    "password": "<password user>"
}
```

- Response (200 - OK)
```json
{
    "message": "Sucesfully Login!",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huZG9lIiwiZW1haWwiOiJqb2huQG1haWwuY29tIiwiYWRkcmVzcyI6IlN0cmVldCBSZCBOby4gMTIiLCJpYXQiOjE2MDAwODUzMDN9.fSisdwOLzq6SbLWx3LyVLcvp2gPD2J3CLLTPS0m8B-Y"
}
```

- Response (400 - Bad Request)
```json
{
    "errors": [ { "message": "Invalid email/password"} ]
}
```

- Response (404 - Not Found)
```json
{
    "errors": [ { "message": "Username not found!"} ]
}
```

- Response (500 - Internal server error)
```json
{
    "message": "Internal Server Error"    
}
```

## GET /users
Get all user data

- Request Header:
```json
{
    "access_token": "<your access token>"
}
```   

- Request Body:
```json
  not needed
```

- Response (200 - OK):
```json
[
  {
   "username": "<user's username>",
   "address": "<user's address>",
  }
]
```

- Response (400 - Bad Request):
```json
{
    "message": "Invalid request"
}
```

- Response (401 - Not Authorized):
```json
{
    "message": "Token is not found!"
}
```

- Response (401 - Not Authorized):
```json
{
    "message": "Token is Not Valid!"
}
```

- Response 500: Internal server error
```json
{
    "message": "Internal Server Error"
}
```