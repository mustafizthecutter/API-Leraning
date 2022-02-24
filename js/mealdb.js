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
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
         `;
        searchResult.appendChild(div);
    })
}