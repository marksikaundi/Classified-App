import React from "react";
import Link from "next/link";

const Links = ({ text, url }) => {
  return (
    <Link href={url}>
      <span className="">{text}</span>
    </Link>
  );
};

export default Links;