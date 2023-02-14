import Image from "next/image";

import { ImageContainer, TextContainer, Title, Text } from "./BioElements";

import Img from "@/assets/test3.webp";
export default function Bio() {
  return (
    <ImageContainer>
      <Image
        src={Img}
        alt="Bio"
        style={{
          width: "100vw",
          height: "434px",
          objectFit: "cover",
          opacity: "0.9",
        }}
      />
      <TextContainer>
        <Title>총학생회 소개</Title>
        <Text>상명대학교 제57대 총학생회 선</Text>
        <Text>항상 학생들을 위해 먼저 나서는 총학생회가 되겠습니다.</Text>
      </TextContainer>
    </ImageContainer>
  );
}
