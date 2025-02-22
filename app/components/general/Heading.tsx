import React from "react";

interface HeadingProps {
  center?: boolean;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
  return (
    <div
      className={`py-4 px-3 md:px-10 text-xl ${center}? text-center: text-start`}
    >
      {" "}
      {text}
    </div>
  );
};

export default Heading;
