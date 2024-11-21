import { searchMealByName, getRandomMeal, getMealDetails } from './mealAPI';
import { renderCategories, renderMeals, renderMealDetails } from './ui';

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchButton');
  const randomButton = document.getElementById('randomButton');

  searchButton.addEventListener('click', async () => {
    const query = document.getElementById('mealSearch').value;
    const meals = await searchMealByName(query);
    renderMeals(meals);
  });

  randomButton.addEventListener('click', async () => {
    const meal = await getRandomMeal();
    renderMealDetails(meal);
  });
});