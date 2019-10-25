import React from "react";

import Carrousel from "../Carrousel/Carrousel";
import Text from "components/Atoms/Text/Text";
import Imagen from "components/Atoms/Imagen/Imagen";
import { Grid } from "@material-ui/core";

const Experiences = props => {
  const content = (
    <Imagen isBackground url="Home_LosQueYaHanIdo.jpg" variant="white">
      <div
        style={{ textAlign: "center", marginBottom: "40px", paddingTop: "1px" }}
      >
        <Text variant="h2">Los que ya han ido</Text>
        <Text variant="p2">
          Más de 140 personas han disfrutado con éxito esta experiencia
        </Text>
      </div>
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Carrousel
            settings={{
              dots: true,
              infinite: true,
              draggable: true,
              speed: 500,
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dotsClass: "slick-dots-c"
            }}
            iterator={
              window.innerWidth < 600 ? 1 : window.innerWidth >= 600 ? 3 : 1
            }
            data={[
              {
                id: 0,
                title: "Nacho Guirao",
                text:
                  "“Dubái es por hoy mi casa y sobre todo mi gente. Expectacular vivencia”",
                url: "experience/exp_nacho.JPG"
              },
              {
                id: 1,
                title: "Loriana Verdi",
                text:
                  "“Los cursos de onboarding son de muy alto nivel, superaron mis expectativas”",
                url: "experience/exp_loriana.jpeg"
              },
              {
                id: 2,
                title: "Pepe Lago",
                text:
                  "“Gracias a esta experiencia he podido desarrollar mi carrera como bartender.”",
                url: "experience/exp_pepe.jpeg"
              }
              // {
              //   id: 3,
              //   title: "Loriana Verdi",
              //   text:
              //     "“Los cursos de onboarding son de muy alto nivel, superaron mis expectativas”",
              //   url: "Destino_Doha_Trabaja.jpg"
              // }
              // {
              //   id: 4,
              //   title: "Nacho Guirao",
              //   text:
              //     "\“Dubái es por hoy mi casa y sobre todo mi gente. Expectacular vivencia\”",
              //   url: "Destino_Doha_Trabaja.jpg"
              // },
              // {
              //   id: 5,
              //   title: "Loriana Verdi",
              //   text:
              //     "\“Los cursos de onboarding son de muy alto nivel, superaron mis expectativas\”",
              //   url: "Destino_Doha_Trabaja.jpg"
              // },
              // {
              //   id: 6,
              //   title: "Nacho Guirao",
              //   text:
              //     "\“Dubái es por hoy mi casa y sobre todo mi gente. Expectacular vivencia\”",
              //   url: "Destino_Doha_Trabaja.jpg"
              // },
              // {
              //   id: 7,
              //   title: "Loriana Verdi",
              //   text:
              //     "\“Los cursos de onboarding son de muy alto nivel, superaron mis expectativas\”",
              //   url: "Destino_Doha_Trabaja.jpg"
              // },
              // {
              //   id: 8,
              //   title: "Nacho Guirao",
              //   text:
              //     "\“Dubái es por hoy mi casa y sobre todo mi gente. Expectacular vivencia\”",
              //   url: "Destino_Doha_Trabaja.jpg"
              // }
            ]}
          />
        </Grid>
      </Grid>
    </Imagen>
  );
  return content;
};

export default Experiences;
