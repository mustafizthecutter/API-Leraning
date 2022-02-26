const loadFood = async () => {
    const inputField = document.getElementById('search-field');
    const inputFieldValue = inputField.value;
    // console.log(inputFieldValue);

    // clear data

    inputField.value = "";
    if (inputFieldValue == '') {

    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`;
        const res = await fetch(url);
        const data = await res.json();
        displayFood(data.meals);

    }

    // load data


    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayFood(data.meals));
}
const displayFood = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {

    }
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <div onclick="loadFoodDetail('${meal.idMeal}')" class="card h-100">
                    <img src="${meal.strMealThumb}"class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 500)}</p>
                    </div>
                </div>
            </div>
         `;
        searchResult.appendChild(div);
    })
}

const loadFoodDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayFoodDetail(data.meals[0]);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayFoodDetail(data.meals[0]));
}
const displayFoodDetail = meal => {
    console.log(meal);
    const singleMeal = document.getElementById('meal-details');
    singleMeal.textContent = '';
    const divAgain = document.createElement('div');
    divAgain.classList.add('card');
    divAgain.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    singleMeal.appendChild(divAgain);
}