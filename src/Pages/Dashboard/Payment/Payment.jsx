import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK);

const Payment = () => {
	const [cart] = useCart();
	const total = cart.reduce((sum, item) => sum + item.price, 0);
	const price = parseFloat(total.toFixed(2));

	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Payment</title>
			</Helmet>
			<SectionTitle subHeading={"Proceed To"} heading={"PAYMENT"} />
			<div className="max-w-7xl mx-auto my-[50px] md:my-16">
				<Elements stripe={stripePromise}>
					<CheckoutForm cart={cart} price={price} />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
