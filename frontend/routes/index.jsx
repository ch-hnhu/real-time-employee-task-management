import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../src/pages/dashboard/dashboard";
import SignIn from "../src/pages/auth/SignIn";
import PhoneVerification from "../src/pages/auth/PhoneVerification";
import ManageEmployee from "../src/pages/manage-employee/ManageEmployee";
import ManageTask from "../src/pages/manage-task/ManageTask";
import Message from "../src/pages/message/Message";

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
			{
				path: "manage-employee",
				element: <ManageEmployee />,
			},
			{
				path: "manage-task",
				element: <ManageTask />,
			},
			{
				path: "message",
				element: <Message />,
			},
		],
	},
]);

export default router;
