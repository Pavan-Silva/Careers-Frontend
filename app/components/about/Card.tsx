import Image from "next/image";
import { ReactNode } from "react";

const Card = (props: {
  title: string;
  description: ReactNode;
  image: any;
  id: string;
}) => {
  return (
    <div
      className={`box flex flex-col lg:flex-row justify-center items-center ${props.id}`}
    >
      <div className="max-w-lg">
        <Image
          priority
          src={props.image}
          alt="snippet"
          className="rounded-lg"
        />
      </div>

      <div className="mt-5 text-center lg:text-left lg:mt-0 lg:ml-7 max-w-md">
        <span className="text-4xl">{props.title}</span>
        {props.description}
      </div>
    </div>
  );
};

export default Card;
