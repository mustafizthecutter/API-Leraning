const loadFood = () => {
    const inputField = document.getElementById('search-field');
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    inputField.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals));
}