import {
	Analytics,
	CampaignIcon,
	GroupTeam,
	InboxIcon,
	LeadListIcon,
} from "../../icons/IconTheme";

export const sidebar_menu = [
	{
		icon: <GroupTeam />,
		link: "/profile/account",
		text: "Accounts",
	},
	{
		icon: <LeadListIcon />,
		link: "/leadlist",
		text: "Lead Lists",
	},
	{
		icon: <CampaignIcon />,
		link: "/profile/campaign",
		text: "Campains",
	},
	{
		icon: <Analytics />,
		link: "/profile/analytics",
		text: "Analytics",
	},
	{
		icon: <InboxIcon />,
		link: "/profile/inbox",
		text: "Inbox",
	},
];
