import { Button, TextInput, Container } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import { CartContext } from '../../contexts/CartContext';


const CheckoutPage = () => {
  const { fetchWithToken, user } = useContext(SessionContext);
  const [shippingInfo, setShippingInfo] = useState({
    userId: user.userId,
    firstName: "",
    lastName: "",
    streetHouseNumber: "",
    city: "",
    zipCode: "",
    orderItems: [],
  });

const navigate = useNavigate();

const handleInput = (event) => {
const { name, value } = event.currentTarget;

setShippingInfo((prevData) => ({
    ...prevData,
    [name]: value,
}));
};

const handleSubmit = (event) => {
event.preventDefault();
// show popup here, fake payment
};



const toPurchaseProcess = async () => {
    try{
        // Fetch the cart data
        const fetchCart = await fetchWithToken(`/cart/${user.userId}`);
        console.log('cart data:', fetchCart);
    }
    catch (error) {
        console.error("Error fetching cart:", error);
      }
};

useEffect(() => {
    toPurchaseProcess(); 
  }, []
);

  return (
    <Container></Container>
  );
};

export default CheckoutPage;
