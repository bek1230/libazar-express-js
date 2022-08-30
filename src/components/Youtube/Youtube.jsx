import React, { useEffect, useState } from "react";

export default function Youtube(props) {
  // https://www.youtube.com/watch?v=cHrbU70kKUM
  const [urls, setUrls] = useState();
  useEffect(() => {
    let re = "watch?v=";
    let str = props.url;
    var newstr = str.replace(re, "embed/");
    setUrls(newstr);
  }, []);
  return (
    
    <iframe
      width="1126"
      height="634"
      src={urls}
      title={props.name}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
