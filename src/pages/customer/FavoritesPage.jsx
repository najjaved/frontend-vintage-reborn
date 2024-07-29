import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";





const addToFavorites = async (productId) => {
    const { token, user, product } = useContext(SessionContext);
    try {
        const response = await fetch(`http://localhost:5006/api/favorites/${user._id}/${productId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Product added to favorites:', data);
            // Optionally update the UI or state to reflect the change
        } else {
            console.error('Failed to add product to favorites');
        }
    } catch (error) {
        console.error('Error adding product to favorites:', error);
    }


    return (
        <div>
            <h1>{product.name}</h1>
            <button onClick={() => addToFavorites(product._id)}>Add to Favorites</button>
        </div>
    );
};

export default addToFavorites;