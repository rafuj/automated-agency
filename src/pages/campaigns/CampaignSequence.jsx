import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cog, Plus, Trash } from "../../icons/IconTheme";
import CampaignSingleLayout from "./components/CampaignSingleLayout";

const CampaignSequence = () => {
	return (
		<CampaignSingleLayout>
			<div className="row g-4">
				<div className="col-md-5 col-xl-4">
					<div className="sequence-left">
						<div className="d-flex justify-content-between align-items-center __gap-5 sequence-btn-grp">
							<h5 className="m-0">Sequence</h5>
							<button className="cmn-btn">Add new step</button>
						</div>
						<div className="sequence-steps">
							<SequenceStep
								title="Step 1"
								text="{{struggling with unpredictability as a.."
							/>
							<SequenceStep
								title="Step 2"
								text="{{struggling with unpredictability as a.."
							/>
						</div>
					</div>
				</div>
				<div className="col-md-7 col-xl-8">
					<div className="sequence-message">
						<div className="sequence-message-top">
							<h6 className="title">
								struggling with unpredictability as a..
							</h6>
							<button className="cmn-btn" type="button">
								Save
							</button>
						</div>
						<div className="texts">
							<p>
								Fiction-writing also has modes: action, exposition,
								description, dialogue, summary, and transition.[4]
								Author Peter Selgin refers to methods, including action,
								dialogue, thoughts, summary, scenes, and description.[5]
								Currently, there is no consensus within the writing
								community regarding the number and composition of
								fiction-writing modes and their uses.
							</p>
							<p>
								Description is the fiction-writing mode for transmitting
								a mental image of the particulars of a story. Together
								with dialogue, narration, exposition, and summarization,
								description is one of the most widely recognized of the
								fiction-writing modes.
							</p>
							<p>
								As stated in Writing from A to Z, edited by Kirk
								Polking, description is more than the amassing of
								details; it is bringing something to life by carefully
								choosing and arranging words and phrases to produce the
								desired effect.[6] The most appropriate and effective
								techniques for presenting description are a matter of
								ongoing discussion among writers and writing coaches.
							</p>
						</div>
					</div>
					<div className="text-end">
						<button className="cmn-btn btn-outline text-20" type="button">
							Add A New Message
						</button>
					</div>
				</div>
			</div>
		</CampaignSingleLayout>
	);
};
const SequenceStep = ({ title, text }) => {
	const [val, setVal] = useState(3);
	return (
		<>
			<div className="sequence-step">
				<div className="sequence-top">
					<div className="d-flex justify-content-between">
						<h6 className="name">{title}</h6>
						<Link to="#">
							<Plus />
						</Link>
					</div>
					<div className="wait-for">
						<span>Wait for </span>
						<input
							type="number"
							value={val}
							onChange={(e) => setVal(e.target.val)}
							className="form-control"
						/>
						<span>Days</span>
					</div>
					<div className="text">{text}</div>
				</div>
				<div className="sequence-bottom-btn">
					<button className="btn">
						<Cog />
					</button>
					<button className="btn">
						<Trash />
					</button>
				</div>
			</div>
		</>
	);
};
export default CampaignSequence;
