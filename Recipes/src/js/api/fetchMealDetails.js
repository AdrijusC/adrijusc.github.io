const getMealDetails = async (mealId) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error("Error fetching meal details:", error);
    }
};

export { getMealDetails };