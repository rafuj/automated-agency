import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import CampaignAnalytics from "./pages/campaigns/CampaignAnalytics";
import CampaignList from "./pages/campaigns/CampaignList";
import AddCsv from "./pages/lead-lists/AddCsv";
import AddGoogle from "./pages/lead-lists/AddGoogle";
import AddGoogleCriteria from "./pages/lead-lists/AddGoogleCriteria";
import AddGoogleCriteriaTwo from "./pages/lead-lists/AddGoogleCriteriaTwo";
import AddInstagram from "./pages/lead-lists/AddInstagram";
import AddInstagramCriteria from "./pages/lead-lists/AddInstagramCriteria";
import AddManual from "./pages/lead-lists/AddManual";
import AddNewLead from "./pages/lead-lists/AddNewLead";
import CreateLead from "./pages/lead-lists/CreateLead";
import LeadList from "./pages/lead-lists/LeadList";
import SelectLeadSource from "./pages/lead-lists/SelectLeadSource";
import Inbox from "./pages/profile/inbox/Inbox";
import SettingBilling from "./pages/profile/setting/SettingBilling";
import SettingPlan from "./pages/profile/setting/SettingPlan";
import SettingProfile from "./pages/profile/setting/SettingProfile";

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
							<Route path="profile" element={<SettingProfile />} />
						</Route>
					</Route>
					<Route path="auth">
						<Route index element={<SignIn />} />
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
					</Route>
					<Route path="analytics">
						<Route index element={<Analytics />} />
					</Route>
					<Route path="leadlist">
						<Route index element={<LeadList />} />
						<Route path="add" element={<AddNewLead />} />
						<Route path="create" element={<CreateLead />} />
						<Route path="source" element={<SelectLeadSource />} />
						<Route path="add-mannual" element={<AddManual />} />
						<Route path="add-csv" element={<AddCsv />} />
						<Route path="add-google" element={<AddGoogle />} />
						<Route
							path="add-google-criteria"
							element={<AddGoogleCriteria />}
						/>
						<Route
							path="add-google-criteria-two"
							element={<AddGoogleCriteriaTwo />}
						/>
						<Route path="add-instagram" element={<AddInstagram />} />
						<Route
							path="add-instagram-criteria"
							element={<AddInstagramCriteria />}
						/>
					</Route>
					<Route path="campaign">
						<Route index element={<CampaignList />} />
						<Route path=":id">
							<Route index element={<CampaignAnalytics />} />
							<Route path="analytics" element={<CampaignAnalytics />} />
							<Route path="lead" element={<CampaignAnalytics />} />
							<Route path="sequence" element={<CampaignAnalytics />} />
							<Route path="schedule" element={<CampaignAnalytics />} />
							<Route path="option" element={<CampaignAnalytics />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
