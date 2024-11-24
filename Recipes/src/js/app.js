import { searchMealByName } from './api/fetchMeals';
import { getMealDetails } from './api/fetchMealDetails';
import { getRandomMeal } from './api/fetchRandomMeal';
import displaySearchResults from './utils/displaySearchResults';
import viewMealDetails from './utils/viewMealDetails';

document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('recipe-input');
    const randomMealBtn = document.getElementById('randomMeal');

    console.log('searchForm:', searchForm);
    console.log('searchInput:', searchInput);
    console.log('randomMealBtn:', randomMealBtn);

    if (!searchForm || !searchInput || !randomMealBtn) {
        console.error('One or more required elements are missing in the DOM.');
        return;
    }

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        console.log('Search Term:', searchTerm);

        if (!searchTerm) {
            alert('Please enter a recipe name');
            return;
        }

        try {
            const results = await searchMealByName(searchTerm);
            console.log('Search Results:', results);

            if (!results || results.length === 0) {
                alert('No recipes found. Try a different search term');
                return;
            }

            displaySearchResults(results, handleMealClick);
        } catch (error) {
            console.error('Error during search:', error);
            alert('Something went wrong. Please try again later.');
        }
    });

    randomMealBtn.addEventListener('click', async () => {
        console.log('Random meal button clicked.');

        try {
            const meal = await getRandomMeal();
            console.log('Random Meal Fetched:', meal);

            if (!meal) {
                alert('Could not fetch a random meal. Please try again.');
                return;
            }

            viewMealDetails(meal);
        } catch (error) {
            console.error('Error fetching random meal:', error);
            alert('Something went wrong. Please try again later.');
        }
    });

    const handleMealClick = async (mealId) => {
        console.log('Meal clicked. Fetching details for Meal ID:', mealId);

        try {
            const mealDetails = await getMealDetails(mealId);
            console.log('Fetched Meal Details:', mealDetails);

            if (!mealDetails) {
                alert('Could not fetch meal details. Please try again.');
                return;
            }

            viewMealDetails(mealDetails);
        } catch (error) {
            console.error('Error fetching meal details:', error);
            alert('Something went wrong. Please try again later.');
        }
    };
});