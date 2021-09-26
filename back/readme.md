# Back
## Function

- Users
    - get users list
    - add users list


## How to run
1. `cd myWebSite/back`
1. add configure of MySql
    1. create a file named mysqlConfig.js under back/config  
    `touch ./back/config/mysqlConfig.js`
    2. add content
    ```
   module.exports = {  
         HOST: 'YOUR DATABASE HOST',  
         PORT: 'YOUR DATABASE HOST'S PORT,  
         PASSWORD: 'YOUR PASSWORD',
         DATABASE_NAME: 'YOUR DATABASE_NAME',
         USERNAME: 'YOUR DATABASE USERNAME',
     }
   ```
1. add dependencies
    1. `npm install`
1. `node app.js`

## Api
run the server and click to views: http://localhost:4000/swagger 