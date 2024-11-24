const displaySearchResults = (meals, onMealClick) => {
    const container = document.querySelector('#meal-container');
    container.innerHTML = '';

    if (!meals || meals.length === 0) {
        container.innerHTML = '<p>No recipes found. Try a different search term</p>';
        return;
    }

    meals.forEach((meal) => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        `;
        mealDiv.addEventListener('click', () => onMealClick(meal.idMeal));
        container.appendChild(mealDiv);
    });
};
export default displaySearchResults;