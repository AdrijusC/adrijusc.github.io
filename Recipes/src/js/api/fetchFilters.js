const fetchFilters = async () => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching filters:", error);
    }
};

export { fetchFilters };