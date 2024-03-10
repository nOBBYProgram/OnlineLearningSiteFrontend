import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import axios from 'axios';


const usePaymentHook = () => {
    const cart = useSelector((state) => state.cart.cartItems);
    const _id = useSelector((state)=>state.auth.user?._id ?? "6597adac3ced8d07a6d9355f")
 
    const handlePayment = async () => {
        try {
            const stripe = await loadStripe("pk_test_51Om9daE8zFfxJiB9pGBQgZ0OT3h9Awc3RCQdSZnM9pCh6wjgy1du6Rf1k3HwDwBYXA0FEoGBkDWVxQyZKsXvKYo500LY1qXU39");
            const response = await axios.post('http://localhost:5000/payment/chekout-session', {
                products: cart,
            
                userId:_id
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const session = response.data;
            await stripe.redirectToCheckout({
                sessionId: session.id
            });
        } catch (err) {
            console.log(err);
        }
    };

    return {
        handlePayment
    };
};

export default usePaymentHook;
