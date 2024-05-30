import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";
import { StyledText } from "./StyledContactComponents";
import ContactRow from "../ContactRow/ContactRow";
import { useLoaderData } from "react-router-dom";
import { ContactDataState } from "../../@types/types";

const Contact = () => {
  const { contactData, architectsData } = useLoaderData() as ContactDataState;

  const { introduction, location, mainImage } = contactData;

  return (
    <section>
      <div data-aos="fade-up" data-aos-duration="1000">
        <IntroductionText $page="contact">{introduction}</IntroductionText>
        <StyledText>{location}</StyledText>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <ContactRow page="contact" architectsData={architectsData} />
      </div>
      <StyledImg src={mainImage} $page="contact" />
    </section>
  );
};

export default Contact;
