import {
	PldegeBox,
	PledgeCircle,
	PledgeInner,
	Text,
	PledgeContent,
	ContentBox,
} from "./PledgeDetailElements";
import { PledgeCommunicationData } from "../../constants/data/PledgeDetailData";

function Communication() {
	return (
		<>
			{PledgeCommunicationData.map((item, index) => (
				<PldegeBox key={index}>
					<PledgeCircle>
						<PledgeInner>{item.icon}</PledgeInner>
					</PledgeCircle>
					<ContentBox>
						<Text fontSize="30px">{item.title}</Text>
						<PledgeContent>{item.content1}</PledgeContent>
						<PledgeContent>{item.content2}</PledgeContent>
						<PledgeContent>{item.content3}</PledgeContent>
					</ContentBox>
				</PldegeBox>
			))}
		</>
	);
}

export default Communication;
