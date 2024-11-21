export function renderMeals(meals) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
  
    if (!meals) {
      resultList.innerHTML = '<p>No meals found.</p>';
      return;
    }
  
    meals.forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.classList.add('meal-card');
      mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
      `;
      mealCard.addEventListener('click', () => renderMealDetails(meal));
      resultList.appendChild(mealCard);
    });
  }
  
  export function renderMealDetails(meal) {
    const mealDetails = document.getElementById('mealDetails');
    const mealDetailContent = document.getElementById('mealDetailContent');
  
    mealDetailContent.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <p>${meal.strInstructions}</p>
      <ul>
        ${Object.keys(meal)
          .filter(key => key.startsWith('strIngredient') && meal[key])
          .map(key => `<li>${meal[key]}</li>`)
          .join('')}
      </ul>
    `;
  
    mealDetails.classList.remove('hidden');
  }