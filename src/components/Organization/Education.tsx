import {
	ProfileBox,
	ProfileInnerBox,
	ProfileCol,
	ProfileOuter,
	ProfileInnerCol,
	ProfileImageBox,
	ProfileImgSubBox,
	Image,
	MImg,
	SubImg,
	MSubImg,
	ProfileTextBox,
	Group,
	SubGroup,
	Position,
	Name,
	Sub,
	SubName,
	Major,
	SubMajor,
} from "./OrganiElements";
import { EducationData } from "../../constants/data/OrganiData";

function Education() {
	return (
		<ProfileBox marginTop="50px">
			{EducationData.map((item, index) => (
				<ProfileInnerBox key={index}>
					{item.headItem.map((item, index) => (
						<ProfileOuter key={index}>
							<ProfileImageBox>
								<Image
									src={item.img}
									alt={item.alt}
									width={item?.size === "squ" ? "120px" : "108px"}
									height={item?.size === "squ" ? "120px" : "144px"}
									radius={item?.size === "squ" ? "50%" : "50px"}
								/>
								<MImg
									src={item.img}
									alt={item.alt}
									width={item?.size === "squ" ? "100px" : "80px"}
									height={item?.size === "squ" ? "100px" : "108px"}
									radius={item?.size === "squ" ? "50%" : "50px"}
								/>
							</ProfileImageBox>
							<ProfileTextBox>
								<Group>교육지원국</Group>
								<Position>{item.position}</Position>
								<Name>{item.name}</Name>
								<Major>{item.major}</Major>
							</ProfileTextBox>
						</ProfileOuter>
					))}

					<ProfileBox marginTop="30px">
						{EducationData.map((item, index) => (
							<ProfileCol key={index}>
								{item.subItem.map((item, index) => (
									<ProfileInnerCol key={index}>
										{item.lastItem.map((item, index) => (
											<ProfileInnerBox key={index}>
												<ProfileImgSubBox>
													<SubImg
														src={item.img}
														alt={item.alt}
														width={item?.size === "squ" ? "100px" : "80px"}
														height="100px"
														radius={item?.size === "squ" ? "50%" : "50px"}
													/>
													<MSubImg
														src={item.img}
														alt={item.alt}
														width={item?.size === "squ" ? "80px" : "68px"}
														height="80px"
														radius={item?.size === "squ" ? "50%" : "50px"}
													/>
												</ProfileImgSubBox>
												<ProfileTextBox>
													<SubGroup>교육지원국</SubGroup>
													<SubName>
														<Sub>국원 </Sub>
														{item.name}
													</SubName>
													<SubMajor>{item.major}</SubMajor>
												</ProfileTextBox>
											</ProfileInnerBox>
										))}
									</ProfileInnerCol>
								))}
							</ProfileCol>
						))}
					</ProfileBox>
				</ProfileInnerBox>
			))}
		</ProfileBox>
	);
}

export default Education;
