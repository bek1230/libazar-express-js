import React from "react";
import { Helmet } from "react-helmet";

function SEO(pageProps) {
  return (
    <Helmet>
      <title>{pageProps.title}</title>
      <meta property="og:title" content={pageProps.title} />
      <meta
        property="og:discription"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem corrupti commodi velit aperiam magnam quia, eveniet vel sed ex numquam minima quae nostrum exercitationem quaerat eius dolor deserunt beatae qui?"
      />
      <meta
        property="discription"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem corrupti commodi velit aperiam magnam quia, eveniet vel sed ex numquam minima quae nostrum exercitationem quaerat eius dolor deserunt beatae qui?"
      />
      <meta property="og:image" content={pageProps.thumbnail} />
      <meta
        property="og:url"
        content={"https://libazar-site-web.vercel.app"+window.location.pathname + window.location.search}
      />
    </Helmet>
  );
}

export default SEO;
