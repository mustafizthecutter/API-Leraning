const loadFood = () => {
    const inputField = document.getElementById('search-field');
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    inputField.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals));
}
const displayFood = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <div class="card h-100">
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