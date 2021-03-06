const fetch = require('node-fetch')


// GET BASIC COCKTAILS LIST

const getCocktailsG = async () => {
    try {
        const res = await fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?f=g')
        const data = await res.json()
        const { drinks } = data
        return drinks
    } catch (err) {
        console.error(err.message)
    }
}



// LOG RESULTS TO CONSOLE

const logResults = async () => {
    const cocktails = await getCocktailsG()
    const ingredients = Object.keys(cocktails[0]).filter(elm => elm.includes('strIngredient'))
    const measures = Object.keys(cocktails[0]).filter(elm => elm.includes('strMeasure'))
    const fourIngredientsCocktails = cocktails.filter(elm => elm.strIngredient5 !== null)


    console.log(`Cocktails beginning with G:
    Total: ${cocktails.length}
    Names: ${cocktails.forEach(elm => elm.strDrink)}`)


    console.log(`Cocktails with more than 4 ingredients:
    ${fourIngredientsCocktails.forEach(elm => elm.strDrink)}`)
    

    console.log(`Cocktails with just id/name/ingredients:`)
    fourIngredientsCocktails.forEach(elm => {
        const drinkIngredients = ingredients.map(igr => elm[`${igr}`]).filter(elm => elm !== null)
        console.log(`name: ${elm.strDrink}, id: ${elm.idDrink}, ingredients: [ ${drinkIngredients} ]`)
    })


    console.log(`Cocktails with ingredient quantities:`)
    fourIngredientsCocktails.forEach(elm => {
        const drinkIngredients = ingredients.map(igr => elm[`${igr}`]).filter(elm => elm !== null)
        const drinkMeasures = measures.map(msr => elm[`${msr}`]).filter(elm => elm !== null)
        const ingrQuantities = drinkIngredients.map((e, i) => `{name: ${e}, quantity: ${drinkMeasures[i]}}`)
        console.log(`name: ${elm.strDrink}, id: ${elm.idDrink}, ingredients: [ ${ingrQuantities} ]`)
    })

    const printCocktails = (drinksArray, isAlcohol, printPrice) => {
        drinksArray.filter(elm => isAlcohol ? elm.strAlcoholic === 'Alcoholic' : elm.strAlcoholic !== 'Alcoholic').forEach(elm => {
            const drinkIngredients = ingredients.map(igr => elm[`${igr}`]).filter(elm => elm !== null)
            const drinkMeasures = measures.map(msr => elm[`${msr}`]).filter(elm => elm !== null)
            const ingrQuantities = drinkIngredients.map((e, i) => `{name: ${e}, quantity: ${drinkMeasures[i]}}`)
            //Random price: between 5 and 10 and rounded with 2 decimals
            const cocktailPrice = (Math.random() * (10 - 5) + 5).toFixed(2)
            console.log(`name: ${elm.strDrink}, id: ${elm.idDrink}, ${printPrice ? `price: ${cocktailPrice},` : ''} ingredients: [ ${ingrQuantities} ]`)
        })
    }

    console.log(`Alcoholic / Non-alcoholic cocktails:`)
    console.log(`Alcoholic:`)
    printCocktails(fourIngredientsCocktails, true, false)
    console.log(`Non-Alcoholic:`)
    printCocktails(fourIngredientsCocktails, false, false)

    console.log(`Alcoholic / Non-alcoholic cocktails with price:`)
    console.log(`Alcoholic:`)
    printCocktails(fourIngredientsCocktails, true, true)
    console.log(`Non-Alcoholic:`)
    printCocktails(fourIngredientsCocktails, false, true)

}

logResults()