# Binbarber Server

## Daily task

### 2022 07 29

- Connect DB (mongodb)
- Init data

### 2022 07 29
- Connect to FrontEnd
	+ setup axios
	+ write call api functions
	+ set up redux, redux saga
	+ evaluate use state | effect | redux | redux saga
- Create services route -> render to frontend


## Steps

1. Init project (npm init)
2. Install dependences
3. Setup root file (server.js) + test in first running
4. Config dotenv
5. Config babel & scripts
6. Config eslint
7. connect Database
8. setup route

## Dependences

- Main

```
	+ express
	+ cors
	+ helmet
	+ mongodb
	+ dotenv
	+ @babel/runtime

```

- Dev

```
	nodemon
	@babel/core
	@babel/cli
	@babel/node
	@babel/preset-env
	@babel/plugin-transform-runtime
	babel-plugin-module-resolver
```

## Routes

```
Root
/api/v1/

Booking
GET /booking (Get list of bookings at all time)
[
	{

	}
]

POST /booking/:date (Add new booking)
GET /booking/:date (Get list of bookings follow date)
- example: /booking/25-12-2022

GET /booking/:date/:id (Get booking by code )
DELETE /booking/:date/:id (delete specific booking)


Services
GET /services (Get list of services)
GET /working-time (get list available time in days)
     send date object, service check is

```

/booking/28-07-2022/dsf3e3e29w2wi92e2ie
{
id:dsf3e3e29w2wi92e2ie
createAt: 16343246353 (28-07-2022)
}

## What I've learn

1. Config routes
   - routes/index.js (Root) will divide request into sub-route
   - routes/name.route.js, using _router.route('/abc')_ used to config specific route and METHOD(GET, POST,...) go from root.
2. Config babel
   - remove **_"type":"module"_** in package.json after config babel
3. Config mongodb
   - connect to mongodb with **_MongoClient_** class. Return a object with **connect** method
   - getDB function do not **async/await** function
