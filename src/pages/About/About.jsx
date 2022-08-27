import React from "react";
import { withTranslation } from "react-i18next";
import Servives from "../../components/Test/Servives";
import { Helmet } from "react-helmet";

function About({ t }) {
  return (
    <div className="container">
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logo-nef.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta
          name="description"
          content="In the fields of physical security and information security, Nefrit (AC) is the selective restriction of access to a place or other resource, while access management describes the process. The act of accessing may mean consuming, entering, or using. Permission to access a resource is called authorization.

      Locks and login credentials are two analogous mechanisms of Nefrit."
        />
        <meta
          name="og:title"
          content="Nefrit
    "
        />
        <meta
          name="og:description"
          content="In the fields of physical security and information security, Nefrit (AC) is the selective restriction of access to a place or other resource, while access management describes the process. The act of accessing may mean consuming, entering, or using. Permission to access a resource is called authorization.

    Locks and login credentials are two analogous mechanisms of Nefrit."
        />
        <meta name="Keywords" content="Nefrit,  Nefrit for Kibera Technology" />
        <meta
          name="og:image"
          content="https://miro.medium.com/max/812/1*1xhuVp8f2WFUGUByHS8VTg.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="436" />
        <meta property="og:image:height" content="228" />
      </Helmet>


      <div className="row mb-5 container">
        <div className="title">{t("About")}</div>
        <div className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          asperiores qui optio non quae praesentium consequatur voluptates
          repudiandae minima, quod repellendus, eius voluptas cupiditate omnis,
          quasi ipsa assumenda dolor reprehenderit eaque rem sed tempora amet
          perspiciatis. Autem ea unde cupiditate necessitatibus, totam, saepe
          placeat laboriosam, molestias harum blanditiis recusandae nihil ut
          quae deleniti. Harum molestiae doloribus iste, obcaecati amet delectus
          alias repudiandae doloremque voluptatibus sapiente illo recusandae
          nemo. Odio quod labore aspernatur totam itaque laboriosam maxime
          repellat voluptatibus error veritatis. Iusto tenetur officia incidunt
          deleniti reiciendis sunt ea illo fugiat. Dolorum incidunt cupiditate
          quaerat, minus libero quo quasi veniam odit?
        </div>
      </div>
      <Servives />
    </div>
  );
}
export default withTranslation()(About);
