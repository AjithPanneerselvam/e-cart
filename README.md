# e-commerce site to sell books

##Message to Shishir

Hey Shishir,

Hope you are doing good. I recently did a certification on "MongoDB for Node.js Developers". The above project files are provided as a template for me as a final project in that certification program. So, I feel it would be great to start with this to build a e-commerce site to sell books. What do you say?


## How to run
1. Make sure you have installed Node.js and MongoDB installed on your local machine.
2. Clone this repository.
3. Run mongodb, by running this command `mongod` in your terminal/command prompt.
4. Now fire up a new terminal/command prompt and navigate to the root of our repository.
5. Install the dependencies, by running this command `npm install`.
6. Enter the following command to import necessary documents:

    `mongoimport --drop -d mongomart -c item data/items.json`

    `mongoimport --drop -d mongomart -c cart data/cart.json`

7. Finally enter the following command to run our app:

    `node mongomart.js`

8. Now, we are ready to go. Open the browser of your choice and enter the following url:

    `localhost:3000`

9. You can find a basic e-commerce site, which displays mongodb products.


## To-do
1. Create a sign-up page
2. Replace all the mongodb products with dummy book labels.
3. Write business logic for our e-commerce site


## Issues

Feel free to raise any issues, if you have problem with setting up and running the app.
