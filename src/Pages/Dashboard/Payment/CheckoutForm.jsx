import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import "./CheckoutForm.css";

const CheckoutForm = ({ cart, price }) => {
	const { user } = useAuth();
	const stripe = useStripe();
	const elements = useElements();
	const [axiosSecure] = useAxiosSecure();
	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [precessing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");

	useEffect(() => {
		if (price > 0) {
			axiosSecure.post("/create-payment-intent", { price }).then((res) => {
				setClientSecret(res.data.clientSecret);
			});
		}
	}, [price, axiosSecure]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("error", error);
			setCardError(error.message);
		} else {
			setCardError("");
			// console.log("Payment Method", paymentMethod);
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
			clientSecret,
			{
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || "Unknown",
						email: user?.email || "Anonymous",
					},
				},
			}
		);
		if (confirmError) {
			console.log(confirmError);
		}
		console.log("Payment Intent", paymentIntent);
		setProcessing(false);
		if (paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);
			// Save payment information to the server
			const payment = {
				email: user?.email,
				transactionId: paymentIntent.id,
				price,
				date: new Date(),
				quantity: cart.length,
				cartItems: cart.map((item) => item._id),
				menuItems: cart.map((item) => item.menuItemId),
				status: "Service Pending",
				itemNames: cart.map((item) => item.name),
			};
			axiosSecure.post("/payments", payment).then((res) => {
				console.log(res.data);
				if (res.data.insertedId) {
					// Display confirm
				}
			});
		}
	};

	return (
		<>
			<form className="w-2/3 md:px-[160px]" onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								fontFamily: "inter",
								border: "1px solid black",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<div className="text-center mt-[50px] md:mt-16">
					<button
						className="btn-payment"
						type="submit"
						disabled={!stripe || !clientSecret || precessing}>
						Pay
					</button>
				</div>
			</form>
			{cardError && (
				<p className="text-xl font-inter font-semibold text-red-800 text-center mt-5">
					{cardError}
				</p>
			)}
			{transactionId && (
				<p className="text-xl font-inter font-semibold text-green-500 text-center mt-5">
					Transaction Complete With <br /> Transaction Id: {transactionId}
				</p>
			)}
		</>
	);
};

export default CheckoutForm;
