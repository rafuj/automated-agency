import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
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
