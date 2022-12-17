import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Inbox from "./pages/profile/inbox/Inbox";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="profile">
						<Route path="inbox" element={<Inbox />} />
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
