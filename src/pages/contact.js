import Head from "next/head";
import Image from "next/image";
import IndexHero from "@/components/indexHero";
import AboutComponent from "@/components/about";
import { ourTeam } from "@/helpers/staticData";
import Newsletter from "@/components/newsletter";
import bookkeepingImg from "../../public/bookkeeping-img.jpg";
import contactCover from "../../public/contact-cover.jpg";
import { useState } from "react";

export default function Contact() {
  const [nameError, setNameError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState(null);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(null);

  const checkValidationName = (value) => {
    if (!value.length) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(value);
  };
  const checkEmailError = (value) => {
    if (!value.length) {
      setEmailError(true);
      setEmailErrorMsg("This field is required.");
    } else if (!isValidEmail(value)) {
      setEmailError(true);
      setEmailErrorMsg("Email is not valid.");
    } else {
      setEmailError(false);
      setEmailErrorMsg("");
    }
    setEmail(value);
  };
  const checkCompanyError = (value) => {
    if (!value.length) {
      setCompanyError(true);
    } else {
      setCompanyError(false);
    }
    setCompany(value);
  };
  const checkMessageError = (value) => {
    if (!value.length) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    setMessage(value);
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const submitContactForm = () => {
    checkValidationName(name);
    checkEmailError(email);
    checkCompanyError(company);
    checkMessageError(message);

    if (nameError || emailError || companyError || messageError) return;

    // if everything is valid, proceed
    console.log("Sending email...");
  };
  return (
    <>
      <Head>
        <title>Next Template Website</title>
        <meta name="description" content="Next template for websites..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="relative flex flex-row items-center justify-between min-h-[800px]">
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            style={{
              backgroundImage: `url(${contactCover.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full z-10"></div>
          <div className="container lg:max-w-screen-xl z-20 flex md:flex-row flex-col items-center justify-between mt-[60px] md:mt-0">
            <h2 className="grow basis-1 z-20 text-white mb-[30px] lg:mb-0 lg:text-[72px] lg:leading-[79px] text-[48px] leading-[53px] font-semibold">
              Contact Us
            </h2>
            <div className="grow basis-1 z-20 flex flex-col gap-[10px] w-full">
              <div className="flex flex-row gap-[20px] w-full">
                <div className="flex flex-col w-[50%]">
                  <label className="text-white font-bold text-[16px] leading-[30px]">
                    Name <span style={{ color: "#ff0000" }}>*</span>
                  </label>
                  <input
                    onBlur={(event) => checkValidationName(event.target.value)}
                    onChange={(event) =>
                      checkValidationName(event.target.value)
                    }
                    className={`${nameError ? " invalid" : ""}`}
                    type="text"
                    name="firstname"
                  />
                  <p className="text-[14px] leading-[25px] text-white">First</p>
                  {nameError && (
                    <span className="text-red-600 text-[14px] leading-[27px]">
                      This field is required.
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="opacity-0 text-white font-bold text-[16px] leading-[30px]">
                    Name <span style={{ color: "#ff0000" }}>*</span>
                  </label>
                  <input
                    onBlur={(event) => checkValidationName(event.target.value)}
                    onChange={(event) =>
                      checkValidationName(event.target.value)
                    }
                    className={`${nameError ? " invalid" : ""}`}
                    type="text"
                    name="firstname"
                  />
                  <p className="text-[14px] leading-[25px] text-white">Last</p>
                  {nameError && (
                    <span className="text-red-600 text-[14px] leading-[27px]">
                      This field is required.
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-[20px]">
                <div className="flex flex-col w-[50%]">
                  <label className="text-white font-bold text-[16px] leading-[30px]">
                    Email <span style={{ color: "#ff0000" }}>*</span>
                  </label>
                  <input
                    onBlur={(event) => checkValidationName(event.target.value)}
                    onChange={(event) =>
                      checkValidationName(event.target.value)
                    }
                    className={`${nameError ? " invalid" : ""}`}
                    type="text"
                    name="firstname"
                  />
                  {nameError && (
                    <span className="text-red-600 text-[14px] leading-[27px]">
                      This field is required.
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="opacity-0 text-white font-bold text-[16px] leading-[30px]">
                    Phone number <span style={{ color: "#ff0000" }}>*</span>
                  </label>
                  <input
                    onBlur={(event) => checkValidationName(event.target.value)}
                    onChange={(event) =>
                      checkValidationName(event.target.value)
                    }
                    className={`${nameError ? " invalid" : ""}`}
                    type="text"
                    name="firstname"
                  />
                  {nameError && (
                    <span className="text-red-600 text-[14px] leading-[27px]">
                      This field is required.
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-[20px] w-full">
                <div className="flex flex-col w-full">
                  <label className="text-white font-bold text-[16px] leading-[30px]">
                    Message <span style={{ color: "#ff0000" }}>*</span>
                  </label>
                  <textarea
                    onBlur={(event) => checkValidationName(event.target.value)}
                    onChange={(event) =>
                      checkValidationName(event.target.value)
                    }
                    className={`${nameError ? " invalid" : ""}`}
                    type="text"
                    name="firstname"
                  />
                  {nameError && (
                    <span className="text-red-600 text-[14px] leading-[27px]">
                      This field is required.
                    </span>
                  )}
                </div>
              </div>
              <button className="mt-[10px] w-[180px]">Send message</button>
            </div>
          </div>
        </div>
        <div className="container py-[60px] lg:max-w-screen-xl flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-[20px] gap-[40px]">
          <div className="grow basis-1">
            <h6 className="text-primary lg:text-[24px] lg:leading-[36px] text-[20px] leading-[30px] font-bold">
              Address
            </h6>
            <p className="text-black lg:text-[24px] lg:leading-[36px] text-[20px] leading-[30px] lg:w-[60%] mt-[20px]">
              6829 N Ridge Blvd, Apt 208, Chicago, Illinois 60645
            </p>
            <h6 className="text-primary lg:text-[24px] lg:leading-[36px] text-[20px] leading-[30px] font-bold mt-[20px]">
              Call us
            </h6>
            <p className="text-black lg:text-[24px] lg:leading-[36px] text-[20px] leading-[30px] lg:w-[60%] mt-[20px]">
              (312) 442-2153
            </p>
          </div>
          <div className="grow basis-1 lg:max-w-[600px] max-w-full lg:h-[450px] min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268528.7740980394!2d-87.84098512712474!3d41.96051752696516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1c863c1ca51%3A0xe80c02e37c7dd11!2s6829%20N%20Ridge%20Blvd%20%23208%2C%20Chicago%2C%20IL%2060645%2C%20USA!5e0!3m2!1sen!2s!4v1678478371350!5m2!1sen!2s"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
}
