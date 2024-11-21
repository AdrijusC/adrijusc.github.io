const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

export async function searchMealByName(name) {
  try {
    const response = await fetch(`${API_BASE}/search.php?s=${name}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
}

export async function getRandomMeal() {
  try {
    const response = await fetch(`${API_BASE}/random.php`);
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error('Error fetching random meal:', error);
  }
}

export async function getMealDetails(id) {
  try {
    const response = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error('Error fetching meal details:', error);
  }
}