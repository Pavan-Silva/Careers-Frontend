"use client";
import AnimatedContent from "./AnimatedContent";
import Snippet from "../../../public/editor.png";
import Premises from "../../../public/premises.png";
import Stack from "../../../public/stack.png";
import { Divider } from "@nextui-org/react";
import Card from "./Card";

const blocks = [
  {
    id: "about",
    title: "Who we are",
    image: Premises,
    description: (
      <span className="block mt-5 text-gray-500">
        Founded in 2001, Tahike Software is a leading international software
        solutions provider for the Banking and Investment Management industries.
        <br /> <br />
        The company has a presence in Europe, the Middle East, America, Asia and
        Africa delivering innovative solutions to both start-ups and established
        banking & finance institutions, through direct communication or a
        reliable partners network.
      </span>
    ),
  },

  {
    id: "work",
    title: "Our work",
    image: Snippet,
    description: (
      <span className="block mt-5 text-gray-500">
        We develop innovative and creative products and services that provide
        total communication and information solutions. <br />
        <br /> Among a plethora of services, web design and development, tailor
        made applications, ERPs, CRMs, e-commerce solutions,
        business-to-business applications, business-to-client applications,
        managed hosting and internet portal management are few that we offer.
      </span>
    ),
  },

  {
    id: "stack",
    title: "Tech Stack",
    image: Stack,
    description: (
      <span className="block mt-5 text-gray-500">
        Our tech stack features React.js for frontend development, Node.js with
        Express.js for backend, and PostgreSQL for database management. We use
        Docker and Kubernetes for containerization and orchestration, and
        Jenkins for CI/CD. Security measures include HTTPS, OAuth, and regular
        audits. <br />
        <br /> This stack enables rapid development, scalability, and security
        for our applications.
      </span>
    ),
  },
];

const About = () => {
  return (
    <div className="w-full bg-gradient-to-br from-matte-black from-5% to-lime-green to-45%">
      <AnimatedContent>
        <div className="bg-white bg-opacity-90 rounded-t-[2.5rem] flex flex-col gap-20 lg:gap-28 p-10 lg:p-28 overflow-hidden shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          {blocks.map((block, index) => (
            <div key={index}>
              {index !== 0 ? (
                <Divider className="max-w-2xl m-auto mb-28" />
              ) : null}

              <Card
                id={block.id}
                title={block.title}
                image={block.image}
                description={block.description}
              />
            </div>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
};

export default About;
