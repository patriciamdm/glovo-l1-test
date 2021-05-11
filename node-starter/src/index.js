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
    const ingreds = Object.keys(cocktails[0]).filter(elm => elm.includes('strIngredient'))
    const measures = Object.keys(cocktails[0]).filter(elm => elm.includes('strMeasure'))
    const fourIngr = cocktails.filter(elm => elm.strIngredient5 !== null)


    console.log(`Cocktails beginning with G:
    Total: ${cocktails.length}
    Names: ${cocktails.map(elm => elm.strDrink)}`)


    console.log(`Cocktails with more than 4 ingredients:
    ${fourIngr.map(elm => elm.strDrink)}`)
    

    console.log(`Cocktails with just id/name/ingredients:`)
    fourIngr.map(elm => {
        const drinkIngs = ingreds.map(igr => elm[`${igr}`]).filter(elm => elm !== null)
        console.log(`name: ${elm.strDrink}, id: ${elm.idDrink}, ingredients: [ ${drinkIngs} ]`)
    })


    console.log(`Cocktails with ingredient quantities:`)
    fourIngr.map(elm => {
        const drinkIngs = ingreds.map(igr => elm[`${igr}`]).filter(elm => elm !== null)
        const drinkMsr = measures.map(msr => elm[`${msr}`]).filter(elm => elm !== null)
        const qtts = drinkIngs.map((e, i) => `{name: ${e}, quantity: ${drinkMsr[i]}}`)
        console.log(`name: ${elm.strDrink}, id: ${elm.idDrink}, ingredients: [ ${qtts} ]`)
    })


    console.log(`Alcoholic / Non-alcoholic cocktails:`)
    console.log(`Alcoholic:`)
    fourIngr.filter(elm => elm.strAlcoholic === 'Alcoholic').map(elm => {
        const drinkIngs = ingreds.map(igr => elm[`${igr}`]).filter(elm => elm !== null)
        const drinkMsr = measures.map(msr => elm[`${msr}`]).filter(elm => elm !== null)
        const qtts = drinkIngs.map((e, i) => `{name: ${e}, quantity: ${drinkMsr[i]}}`)
        console.log(`name: ${elm.strDrink}, id: ${elm.idDrink}, ingredients: [ ${qtts} ]`)
    })

    console.log(`Non-Alcoholic:`)
    fourIngr.filter(elm => elm.strAlcoholic !== 'Alcoholic').map(elm => {
        const drinkIngs = ingreds.map(igr => elm[`${igr}`]).filter(elm => elm !== null)
        const drinkMsr = measures.map(msr => elm[`${msr}`]).filter(elm => elm !== null)
        const qtts = drinkIngs.map((e, i) => `{name: ${e}, quantity: ${drinkMsr[i]}}`)
        console.log(`name: ${elm.strDrink}, id: ${elm.idDrink}, ingredients: [ ${qtts} ]`)
    })
}


logResults()