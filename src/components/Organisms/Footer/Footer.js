import React from "react";
import List from "components/Molecules/List/List";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";
import { Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const Footer = props => {
  return (
    <Grid item xs={12}>
      <div style={{ background: " #2C2C2C", paddingTop: "78px" }}>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            width: "70%",
            marginLeft: "15%"
          }}
        >
          <List
            title="TalentMe"
            items={[
              { label: "Nosotros", id: "footer_nosotros", link: "/about-us" },
              { label: "Contacto", id: "footer_contacto", link: "/contact-us" }
            ]}
          />
          <List
            title="Ofertas"
            items={[
              { label: "Dubai", link: "/dubai", id: "footer_dubai" },
              { label: "Doha", link: "/doha", id: "footer_doha" },
              { label: "Abu Dhabi", link: "/abu-dhabi", id: "footer_abudhabi" }
            ]}
          />
          <List
            title="TalentMe"
            items={[
              {
                label: "Como funciona",
                id: "footer_funciona",
                link: "/como-funciona"
              }
              // { label: "FAQ", id: "footer_faq" }
              // { label: "¿Por qué Middle East?", id: "footer_porque" }
            ]}
          />
          <div>
            <List
              title="Nuestras Redes"
              items={[
                {
                  icon: <FacebookIcon fontSize="large" />,
                  link: "https://www.facebook.com/TalentMiddleEast"
                },
                {
                  icon: <InstagramIcon fontSize="large" />,
                  link: "https://www.instagram.com/talentme_experience/"
                },
                {
                  icon: <LinkedInIcon fontSize="large" />,
                  link: "https://www.linkedin.com/in/eloquencetalent/"
                }
              ]}
            />
          </div>
        </div>
        <hr
          style={{
            border: "1px solid #FFFFFF",
            margin: "67.5px 90px 0 90px"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%",
            marginLeft: "15%",
            alignItems: "center",
            padding: "16px"
          }}
        >
          <Imagen
            url="oficial_talentme_white.png"
            width="206px"
            height="38px"
          />
          <Text
            variant="customize"
            isBold
            fontSize="12px"
            color="#fff"
            letterSpacing="2.4px"
          >
            PRIVATE POLICY
          </Text>
          <Text
            variant="customize"
            isBold
            fontSize="12px"
            color="#fff"
            letterSpacing="2.4px"
          >
            TERMS & CONDITIONS
          </Text>
          <Text
            variant="customize"
            isBold
            fontSize="12px"
            color="#fff"
            letterSpacing="2.4px"
          >
            COPYRIGHT NOTIFICATIONS
          </Text>
        </div>
      </div>
    </Grid>
  );
};

export default Footer;
