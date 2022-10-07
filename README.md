# Node.JS REST API application 

This project was written as a coding backend challenge for **Incedo Services GmbH** on how to create a Node.JS REST API. Every part of this project is a sample code on how to do the following.

## Features
* Search for an artist by name based on the following endpoint **artist.search**, return all the
results for this artist.
* Writes the result to a user-supplied CSV filename.
* The CSV file should include the following information (name, mbid, url, image_small,
image)

```Applies to: SQL Server 2019 (or higher)
Key features: JSON Functions in SQL Server 2019 
Programming Language: JavaScript (NodeJS)
Authors: Jithin Joseph
```

## How to install this project 

1. Navigate to the folder where you have downloaded sample and open the command window.
2. From SQL Server Management Studio or SQL Server Data Tools connect to your SQL Server 2019.
3. Create a dababase using SQL Server Management Studio. (default name given in the configurataion file is **ArtistsDB**)
4. Use the sql script from setup folder and run the query inside the database to create a table **artists** with all the values in it.
5. Locate index.js file in the project, change database connection info in createConnection() method to reference your database. the following tokens should be replaced
```
 {
var config={
        user  : "<<user name>>",
        password: "<<password>>",
        database: "<<database name>>",
        server  : "<<server name or ip>>",
        "userName": "<<user name>>",
        driver: 'msnodesqlv8',
        options:{
        trustedConnection:true
        }
}
```
6. Run sample app from the command line using **"npm run devStart"** in the terminal
7. Open http://localhost:8888/artist.search Url to direct to the index page 
8.Give the name of the artist in the input box **Give the name of the artist** and click **Search**.
```
(Names that exist in the database are "Liam", "Emma", "Amelia", "Mia", "Sandy", "Mary", "WIlliam" and "Lucas", or use any other name to generate a random name from the system)
```
8. Click on **Go back** button to go back to the page http://localhost:8888/artist.search
9. Repeat artist search until necessary.
10. Give the csv file name inside the input box **Name of the file** and click on save. 
11. The csv file with the given name will be saved in the same directory. 

## API Documentaion 
[API Doc using Postman](https://documenter.getpostman.com/view/19024485/2s83zgsjBe#2b070ac6-b20e-47a6-bfc0-76243b4620d9)



