# Sierra Live Screening

*Exercise Overview:*

You are tasked with creating a simple RESTful API using TypeScript and Node.js. This API will manage a small database of real estate listings, enabling users to add a new listing, retrieve all listings, and delete a listing.

Technology Stack:
 - TypeScript
 - Node.js
 - Express.js (or any similar framework you're comfortable with)

Exercise Breakdown:

*1. Setup*
Initialize a new Node.js project by creating a package.json file. You can do this by running npm init -y in your terminal.
Install the necessary packages. You'll at least need typescript, express, and @types/express. Install these by running npm install typescript express @types/express.
Setup TypeScript for the project. Create a tsconfig.json file by running tsc --init and adjust the configurations if needed for your project setup.

*2. Define the Data Model*
Define a TypeScript interface for a real estate listing. In your main working file (e.g., app.ts), define an interface named Listing with the following properties:

```
    id: a unique identifier for the listing (string)
    title: the title of the real estate listing (string)
    price: the price of the listing (number)
    description: a brief description of the listing (string)
```


*3. Implement the API Endpoints*
Add a New Listing:
Create a POST endpoint /listings that allows users to add a new listing. This endpoint should accept JSON data matching the Listing interface and add it to an in-memory store (e.g., an array).

Retrieve All Listings:
Create a GET endpoint /listings that retrieves all current listings from the in-memory store.

Delete a Listing:
Create a DELETE endpoint /listings/:id where :id is the unique identifier of the listing to be deleted. This endpoint should remove the specified listing from the in-memory store.

*4. Testing*
Demonstrate the functionality of your API. You can use any API testing tool like Postman or a simple curl command in your terminal. Ensure you can add a listing, retrieve all listings, and delete a listing successfully.


## Installation

Install project dependencies by running:

```bash
  npm install
```

## Running the project

With everything setup, to run the project simply execute:

```bash
  npm run dev
```

After the execution, you should be able to perform requests to the server at `PORT 3000`

## Available Routes

```
GET /listings
POST /listings
DELETE /listings/:id
```
