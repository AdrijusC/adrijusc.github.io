const searchMealByName = async (searchTerm) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meals:", error);
    }
};

export { searchMealByName };