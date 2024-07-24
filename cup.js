let urlParams = new URLSearchParams(window.location.search);

let cupId = urlParams.get("id")

let API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cupId}`
let IMAGE_API = "https://www.themealdb.com/images/ingredients/"


async function getMeals() {
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);
        showMeal(data.meals[0]);
    } catch (error) {
        console.log(error);
    }
}

getMeals()

let resault = document.querySelector(".cup")

function showMeal(data) {

    let showUrl = ""

    for (let i = 0; i < 20; i++) {
        const findUrl = data["strIngredient" + i]

        if (findUrl) {
            showUrl += `
            <div class="cup4">
                        <img src="${IMAGE_API + findUrl}.png" alt="">
                        <p>${findUrl}</p>
                    </div>
            `;
        }
    }

    resault.innerHTML = `
          <div class="cup0">
                <div class="cup1">
                    <img src="https://www.themealdb.com/images/icons/flags/big/32/ru.png" alt="">
                    <h1>Strawberries Romanoff</h1>
                </div>
                <div class="cup2">
                    <img src="${data.strMealThumb}" alt="">
                    <button>FRUITY</button>
                    <div class="cup-1">
                        <img src="https://www.themealdb.com/images/icons/Arrow-left.png" alt="">
                        <img src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="">
                    </div>
                </div>
            </div>
            <div class="cup3">
                <p>Ingredients</p>
                <div class="cup01">
                    ${showUrl}
                </div>

            </div>
            </div>
        
    `
}