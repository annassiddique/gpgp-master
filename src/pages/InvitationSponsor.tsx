import ContributeHero from "../components/contribute/ContributeHero";
import InvitationForm from "../components/contribute/Invitation/InvitationForm";

export default function InvitationSponsor() {
  const HeroContent = {
    heading: "Invitation for sponsors",
    subheading:
      "Do you believe in the power of art and innovation to drive environmental change? ",
    HeroLegend: [
      `If you're an investor who wants to support a project with a significant ecological and social impact, we encourage you to apply to become a vital partner in the GPGP Art Project. Your investment will help us clean up and prevent further pollution in the Great Pacific Garbage Patch. Join us in fostering a cleaner, healthier ocean ecosystem and a more sustainable future.`,
    ],
  };
  const formFields = [
    {
      label: "Full Name",
      type: "text",
      width: "half",
      id: "full-name",
    },
    {
      label: "Title",
      type: "text",
      width: "half",
      id: "title",
    },

    {
      label: "Email",
      type: "email",
      width: "half",
      id: "email",
    },

    {
      label: "Phone Number",
      type: "tel",
      width: "half",
      id: "phone-number",
    },

    {
      label: "Message",
      type: "textarea",
      width: "full",
      id: "message",
    },
  ];

  const WavePattern = "Sponsor";

  const SponsorFormLegend = {
    heading : `Get in touch with us`,
    contact : `infinart@risidio.com`
  }


  return (
    <div>
      <ContributeHero
        HeroContent={HeroContent}
        classes={{
          container: "mb-12",
          image: "opacity-50 z-[-14px]",
          heading: "mb-7 sm:mb-10",
          subheading: " font-be-vietnam ",
          paragraph: "",
        }}
      />
      <InvitationForm 
            formField={formFields}
            WavePattern={WavePattern} 
            SponsorFormLegend={SponsorFormLegend}
      />
    </div>
  );
}
