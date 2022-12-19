import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Inbox from "./pages/profile/inbox/Inbox";
import SettingBilling from "./pages/profile/setting/SettingBilling";
import SettingPlan from "./pages/profile/setting/SettingPlan";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="profile">
						<Route index element={<Inbox />} />
						<Route path="inbox" element={<Inbox />} />
						<Route path="setting">
							<Route index element={<SettingPlan />} />
							<Route path="plans" element={<SettingPlan />} />
							<Route path="billing" element={<SettingBilling />} />
							<Route path="profile" element={<SettingPlan />} />
						</Route>
					</Route>
					<Route path="auth">
						<Route index element={<SignIn />} />
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
