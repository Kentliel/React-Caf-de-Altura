const FetchCoffee = async () => {
    try {
        const response = await fetch("http://localhost:5050/Coffee");

        if (!response.ok) {
            throw new Error("Failed to fetch Coffee");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default FetchCoffee;