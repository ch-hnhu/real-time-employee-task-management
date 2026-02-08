import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../src/pages/dashboard/dashboard";
import SignIn from "../src/pages/auth/SignIn";
import PhoneVerification from "../src/pages/auth/PhoneVerification";

const router = createBrowserRouter([
	{
		path: "/sign-in",
		element: <SignIn />,
	},
	{
		path: "/phone-verification",
		element: <PhoneVerification />,
	},
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
		],
	},
]);

export default router;
