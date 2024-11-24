const getRandomMeal = async () => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error("Error fetching random meal:", error);
    }
};

export { getRandomMeal };