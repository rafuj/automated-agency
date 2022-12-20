import React from "react";
import { Link } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import AuthLayout from "./components/AuthLayout";
import CheckGroup from "./components/CheckGroup";
import LoginWithGoogle from "./components/LoginWithGoogle";

const SignIn = () => {
	return (
		<>
			<AuthLayout
				text1="No account ?"
				text2="Create an account"
				link="/auth/signup"
			>
				<form>
					<div className="auth-content">
						<h2 className="title">Login</h2>
						<div className="subtext">Hi, Welcome back</div>
						<LoginWithGoogle />
						<div className="or">
							<span>OR</span>
						</div>
						<FormGroup label="Email" type="text" />
						<FormGroup label="Password" type="password" />
						<CheckGroup text="Auto Fill Password" />
						<div className="__my-30">
							<button type="submit" className="btn-base">
								Submit
							</button>
						</div>
						<div className="text-center">
							<Link className="text-base" to="#">
								Forgot Password?
							</Link>
						</div>
					</div>
				</form>
			</AuthLayout>
		</>
	);
};

export default SignIn;
