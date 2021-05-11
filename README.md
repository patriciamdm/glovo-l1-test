# Glovo Junior Frontend Engineer - Take home test

- The task should take around 2 hours to complete. Please do not spend more time than this
- We have attached a basic Node.js project to this email which you are welcome to use but please feel free to complete the task in any other language if you prefer
- Please don’t build any UI for this assignment. Just output to the console from a simple app (e.g. Node.js) is fine
- You can implement the functionality in any way you wish - using functions, classes etc. Try to make your code as readable and understandable as possible, organising your code as you see fit. We will be assessing maintainability of the code
- You don’t need to add unit tests for the project. Just implementation code is fine
- Please create a repository and push your answers to GitHub and share the link with us in an email.
- The README should have clear instructions on how to install and run the app. Check this works when running it from scratch without any dependencies
- If you make it to the next round, we will continue working on this task during a live coding interview where we will expand on the functionality, so please remember to have this project ready for then

### The task

At Glovo, our aim is to give everyone easy access to anything in their city. As I’m sure you know, we’re experts in bringing delicious food to your door. Wouldn’t it be great to accompany this food with some exotic cocktails?! Your job is to find some cocktails and look up the ingredients we need to make them so that we can include them in our app.

1. Take a look at The Cocktail DB public API https://www.thecocktaildb.com/api.php. You can see some example queries in the documentation so check it out a bit
2. Since we’re Glovo, we want to keep our cocktails in theme with the company. Fetch all the cocktails which have a name beginning with “G”. Check the API documentation on how to do this
3. Log the names of all the cocktails found as well as the total number
4. Cocktailsshouldbeextravagant,right?Let’sjustkeepthecocktailsthat
   have more than 4 ingredients. Log the name for each of the results
5. The results are not very easy to read, can you help us to parse the list so
   it’s a bit easier to read. For each cocktail, we only need the id, name, and
   an array of the ingredients. Log the results
6. Ooops,weforgotabouttheingredientquantities.Updatetheparsed
   list but instead of just saving the ingredients in the array, save the
   ingredient as an object with its name and quantity. Log the results
7. We want to be able to offer our customers both alcoholic and
   non-alcoholic cocktails. Separate the results into two lists based on this.
   Log the results
8. Great!We’redone!

### Results

In the end, when running your code, you should have a result like this (doesn’t have to match exactly, feel free to name the fields differently and/or use arrays/objects to contain lists):

<b>Cocktails beginning with G:</b>
``Total: x
Names: “Cocktail A”, “Cocktail B” ....``

<b>Cocktails with more than 4 ingredients:</b>
``Gin Sour Gin Daisy
Gin Sling``

<b>Cocktails with just id/name/ingredients:</b>
``{ name: “Cocktail B”, id: 47328, ingredients: [“vodka”, “apple juice”, ...] }, { name: “Cocktail D”, id: 12398, ingredients: [“gin”, “tomato juice”, ...] }``

<b>Cocktails with ingredient quantities:</b>
``{ name: “Cocktail B”, id: 47328, ingredients: [{ name: “vodka”, quantity: “1 oz” }, ...] },
{ name: “Cocktail D”, id: 12398, ingredients: [{ name: “gin”, quantity: “1/2 oz”}], ...] }``

<b>Alcoholic / Non-alcoholic cocktails:</b>
<b>Alcoholic:</b>
``{ name: “Cocktail B”, id: 47328, ingredients: [{ name: “vodka”, quantity: “1 oz” }, ...] }, ...``
<b>Non-Alcoholic:</b>
``{ name: “Cocktail E”, id: 82349, ingredients: [{ name: “lime juice”, quantity: “1 oz” }, ...] }, ...``