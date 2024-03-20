import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <GrTechnology className="w-8 h-8 me-3" />

              <span className="self-center text-2xl font-semibold whitespace-nowraptext-white">
                Basic
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Resources
              </h2>

              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://nextjs.org/" className="hover:underline">
                    NextJs
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>

              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/Pavan-Silva"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.linkedin.com/in/pavan-silva/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h2>

              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              Basic™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </Link>

            <Link href="#" className="text-gray-500 hover:text-white ms-5">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </Link>

            <Link href="#" className="text-gray-500 hover:text-white ms-5">
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
