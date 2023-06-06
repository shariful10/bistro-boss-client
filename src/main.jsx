import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { router } from "./Routes/router";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
					<Toaster
						position="top-center"
						reverseOrder={false}
						toastOptions={{
							success: {
								style: {
									background: "black",
								},
							},
							error: {
								style: {
									background: "black",
								},
							},
							style: {
								color: "white",
							},
						}}
					/>
				</QueryClientProvider>
			</HelmetProvider>
		</AuthProvider>
	</React.StrictMode>
);
