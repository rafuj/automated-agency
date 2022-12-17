import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import FormGroup from "./components/FormGroup";
import LoginWithGoogle from "./components/LoginWithGoogle";

const SignUp = () => {
	return (
		<>
			<AuthLayout
				text1="Already have an account ?"
				text2="login"
				link="/auth/signin"
			>
				<form>
					<div className="auth-content">
						<h2 className="title text-center">Create an account</h2>
						<div className="subtext"></div>
						<LoginWithGoogle />
						<div className="or">
							<span>OR</span>
						</div>
						<FormGroup label="Email" type="text" />
						<FormGroup label="Password" type="password" />
						<div className="__mt-20 __mb-30 accept-txt">
							By clicking Create account button you will agree with our{" "}
							<Link className="text-redish" to="#">
								terms & condition
							</Link>{" "}
							and{" "}
							<Link className="text-redish" to="#">
								privecy policy
							</Link>
							.
						</div>
						<div className="__my-30">
							<button type="submit" className="btn-base">
								Create account
							</button>
						</div>
					</div>
				</form>
			</AuthLayout>
		</>
	);
};

export default SignUp;
