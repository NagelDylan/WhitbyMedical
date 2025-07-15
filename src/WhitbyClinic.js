// MedicalClinic.jsx
import React from "react";
import styled from "styled-components";
import doctorImg from "./doctors.png";

const BG_COLOR = "#F0F8FF"; // page background
const CARD_COLOR = "#FFFFFF"; // card background
const CTA_COLOR = "#0077B6"; // button background
const TEXT_COLOR = "#333";

const clinicInfo = {
  name: "Whitby Walk-In Medical Clinic",
  location: "Located at the entrance of Walmart in Whitby (Well Health)",
  features: ["No appointment needed", "Short wait times"],
  hours: [
    { day: "Monday", time: "9:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
    { day: "Thursday", time: "9:00 AM – 7:00 PM" },
    { day: "Friday", time: "9:00 AM – 3:00 PM" },
  ],
  contact: "905-444-9493",
  mapLink: "https://maps.app.goo.gl/eBZAAz9hsE2mwwq68",
  doctors: ["Dr. Daiter", "Dr. Nagel"],
  note: "Previously from Whitby Medical across the street",
};

const PageWrapper = styled.div`
  background-color: ${BG_COLOR};
  height: 100%;
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  overflow-x: hidden;
  justify-content: center;
  font-family: "Poppins", Arial, sans-serif;
  color: ${TEXT_COLOR};
`;

const Card = styled.div`
  background-color: ${CARD_COLOR};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: clamp(10px, 5vw, 64px);
`;

const Header = styled.header`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1rem, 5vw, 2.5rem);
  color: ${CTA_COLOR};
  text-align: center;
`;

const Subtitle = styled.p`
  margin: 8px 0 0;
  font-size: clamp(0.5rem, 3.3vw, 1.3rem);
  color: #005f8c; /* adjust if you want a darker shade */
  text-align: center;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
    max-width: 600px;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
    font-size: 1rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
`;

const FeatureItem = styled.li`
  margin-bottom: 8px;
  &:before {
    content: "•";
    color: ${CTA_COLOR};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: ${CTA_COLOR};
`;

const HoursTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 32px;
`;

const TH = styled.th`
  text-align: left;
  border-bottom: 2px solid ${CTA_COLOR};
  padding: 8px;
`;

const TD = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const CTAButton = styled.a`
  background-color: ${CTA_COLOR};
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin: 0 8px;
  display: inline-block;

  transition: color 0.1s ease-in-out;

  &:hover {
    color: #01355c;
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  font-style: italic;
  color: #555;
`;

export default function MedicalClinic() {
  return (
    <PageWrapper>
      <Card>
        <Header>
          <Title>{clinicInfo.name}</Title>
          <Subtitle>{clinicInfo.location}</Subtitle>
        </Header>

        <ImagePlaceholder>
          <img src={doctorImg} alt="Whitby Medical's clinitians" />
        </ImagePlaceholder>

        <FeaturesList>
          {clinicInfo.features.map((f, i) => (
            <FeatureItem key={i}>{f}</FeatureItem>
          ))}
        </FeaturesList>

        <SectionTitle>Hours</SectionTitle>
        <HoursTable>
          <thead>
            <tr>
              <TH>Day</TH>
              <TH>Time</TH>
            </tr>
          </thead>
          <tbody>
            {clinicInfo.hours.map((h, i) => (
              <tr key={i}>
                <TD>{h.day}</TD>
                <TD>{h.time}</TD>
              </tr>
            ))}
          </tbody>
        </HoursTable>

        <SectionTitle>Contact</SectionTitle>
        <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
          {clinicInfo.contact}
        </p>

        <CTAContainer>
          <CTAButton href={`tel:${clinicInfo.contact}`}>Call Us</CTAButton>
          <CTAButton
            href={clinicInfo.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </CTAButton>
        </CTAContainer>

        <Footer>
          {clinicInfo.doctors.join(" & ")}
          <br />
          {clinicInfo.note}
        </Footer>
      </Card>
    </PageWrapper>
  );
}
