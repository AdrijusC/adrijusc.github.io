const viewMealDetails = (meal) => {
    const container = document.querySelector('#meal-details');
    container.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>Instructions</h3>
        <p>${meal.strInstructions}</p>
        <h3>Ingredients</h3>
        <ul>
            ${Object.keys(meal)
                .filter((key) => key.startsWith('strIngredient') && meal[key])
                .map(
                    (key) =>
                        `<li>${meal[key]} - ${
                            meal[`strMeasure${key.slice(13)}`] || ''
                        }</li>`
                )
                .join('')}
        </ul>
    `;
};

export default viewMealDetails;