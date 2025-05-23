import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accounts from "./pages/accounts/Accounts";
import Analytics from "./pages/analytics/Analytics";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AddNewCampaign from "./pages/campaigns/AddNewCampaign";
import CampaignAnalytics from "./pages/campaigns/CampaignAnalytics";
import CampaignLead from "./pages/campaigns/CampaignLead";
import CampaignList from "./pages/campaigns/CampaignList";
import CampaignOption from "./pages/campaigns/CampaignOption";
import CampaignSchedule from "./pages/campaigns/CampaignSchedule";
import CampaignSequence from "./pages/campaigns/CampaignSequence";
import Inbox from "./pages/inbox/Inbox";
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
import SettingBilling from "./pages/setting/SettingBilling";
import SettingPlan from "./pages/setting/SettingPlan";
import SettingProfile from "./pages/setting/SettingProfile";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="inbox">
						<Route index element={<Inbox />} />
					</Route>
					<Route path="setting">
						<Route index element={<SettingPlan />} />
						<Route path="plans" element={<SettingPlan />} />
						<Route path="billing" element={<SettingBilling />} />
						<Route path="profile" element={<SettingProfile />} />
					</Route>
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="analytics">
						<Route index element={<Analytics />} />
					</Route>
					<Route path="account">
						<Route index element={<Accounts />} />
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
						<Route path="add" element={<AddNewCampaign />} />
						<Route path=":id">
							<Route index element={<CampaignAnalytics />} />
							<Route path="analytics" element={<CampaignAnalytics />} />
							<Route path="lead" element={<CampaignLead />} />
							<Route path="sequence" element={<CampaignSequence />} />
							<Route path="schedule" element={<CampaignSchedule />} />
							<Route path="option" element={<CampaignOption />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
