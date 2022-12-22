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
		link: "/account",
		text: "Accounts",
	},
	{
		icon: <LeadListIcon />,
		link: "/leadlist",
		text: "Lead Lists",
	},
	{
		icon: <CampaignIcon />,
		link: "/campaign",
		text: "Campains",
	},
	{
		icon: <Analytics />,
		link: "/analytics",
		text: "Analytics",
	},
	{
		icon: <InboxIcon />,
		link: "/inbox",
		text: "Inbox",
	},
];
