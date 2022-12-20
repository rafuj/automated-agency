import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import csv from "../../icons/img/csv.svg";
import google from "../../icons/img/google.svg";
import insta from "../../icons/img/insta.svg";
import shopify from "../../icons/img/shopify.svg";

import CommonCard from "./components/CommonCard";
import LayoutLeadList from "./components/LayoutLeadList";
const SelectLeadSource = () => {
	const navigate = useNavigate();
	const [source, setSource] = useState("add-mannual");
	return (
		<LayoutLeadList>
			<div className="lead-layout-content">
				<CommonCard>
					<div className="common-card-top">
						<h4 className="title">Let's Create a new Lead List</h4>
						<div className="txt">Please Select a Source</div>
					</div>

					<ul className="select-source">
						<li
							onClick={() => setSource("add-google")}
							className={source === "add-google" ? "active" : ""}
						>
							<img src={google} alt="" className="icon" />
							<span>Google Search</span>
						</li>
						<li
							onClick={() => setSource("add-instagram")}
							className={source === "add-instagram" ? "active" : ""}
						>
							<img src={insta} alt="" className="icon" />
							<span>Instagram</span>
						</li>
						<li
							onClick={() => setSource("add-shopify")}
							className={source === "add-shopify" ? "active" : ""}
						>
							<img src={shopify} alt="" className="icon" />
							<span>Shopify</span>
						</li>
						<li
							onClick={() => setSource("add-csv")}
							className={source === "add-csv" ? "active" : ""}
						>
							<img src={csv} alt="" className="icon" />
							<span>Import from Csv</span>
						</li>
						<li
							onClick={() => setSource("add-mannual")}
							className={source === "add-mannual" ? "active" : ""}
						>
							<span>Enter Accounts Manually</span>
						</li>
					</ul>

					<div className="d-flex justify-content-between common-card-bottom">
						<Link
							to="#"
							className="cmn-btn btn-outline"
							onClick={() => navigate(-1)}
						>
							Back
						</Link>
						<Link to={`/leadlist/${source}`} className="cmn-btn">
							Next
						</Link>
					</div>
				</CommonCard>
			</div>
		</LayoutLeadList>
	);
};

export default SelectLeadSource;
