# api-server

deployed link: https://api-server-uhm6.onrender.com

Action: https://github.com/FarrahYasin/api-server/actions

PR: https://github.com/FarrahYasin/api-server/pulls

**(REST API)**


This app is built with Express that enables  (CREATE, READ, UPDATE and DELETE) operations on a PostgreSQL Database following the REST standard.

### SQL Models:

I have create SQL data models using the (Sequelize library). all these models are exported as model instances from  (Sequelize library). connection to the database have been establish successful.the (Sequelize library) created for us a schema, each model defines appropriate field names using a specific Sequelize DataTypes.

#### **Models**

1. clothes
2. food

#### The Endpoints

**to Get All**
Method: GET
Endpoint: /modelName
Response: Array of JSON objects, each one represent a recored that entry in the database

**to Get a Specific recored based on id**
Method: GET
Endpoint: /modelName/:id
Response: JSON Object that represent the recored with the specific id

**to Create**
Method: POST
Endpoint: /modelName
Request Body: JSON Object containing the data
Response: JSON Object that represent the new record that been created

**to Delete a recored**
Method: DELETE
Endpoint: /modelName/:id
Response: JSON Object representing the deleted recored

**to Update a recored**
Method: PUT
Endpoint: /modelName/:id
Request Body: JSON Object contain the updated recored data
Response: JSON Object representing the updated recored

**Testing**
    all of these test cases passed successfully:
    ✓ PAGE NOT FOUND (21 ms)
    ✓ PAGE NOT FOUND (4 ms)
    ✓ can add new Food (38 ms)
    ✓ Can read all Food (8 ms)
    ✓ Update read all Food by id (4 ms)
    ✓ Delete read all food by id (7 ms)
    ✓ can add new Clothes (22 ms)
    ✓ Can read all Clothes (5 ms)
    ✓ Update read all Clothes by id (6 ms)
    ✓ Delete read all clothes by id (5 ms)

