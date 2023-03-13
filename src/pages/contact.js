import Head from "next/head";
import Newsletter from "@/components/newsletter";
import contactCover from "../../public/contact-cover.jpg";
import { use, useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [nameError, setNameError] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    checkValidationName(name);
    checkValidationLastName(lastName);
    checkEmailError(email);
    checkPhoneError(phone);
    checkMessageError(message);

    if (checkIfError()) return;

    emailjs
      .sendForm(
        "service_yhtsofp",
        "vibetemplateid",
        form.current,
        "4K4g7WbRRU2wgm6gF"
      )
      .then(
        (result) => {
          setShowErrorMsg(false);
          setShowSuccessMsg(true);
          setIsLoading(false);
          clearForm();
        },
        (error) => {
          console.log(error.text);
          setShowErrorMsg(true);
          setShowSuccessMsg(false);
          setIsLoading(false);
        }
      );
  };

  const clearForm = () => {
    setName("");
    setNameError(null);
    setLastName("");
    setLastNameError(null);
    setEmail("");
    setEmailError(null);
    setEmailErrorMsg("");
    setPhone("");
    setPhoneError(null);
    setMessage("");
    setMessageError(null);
  };

  const checkValidationName = (value) => {
    if (!value.length) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(value);
  };
  const checkValidationLastName = (value) => {
    if (!value.length) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    setLastName(value);
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
  const checkPhoneError = (value) => {
    if (!value.length) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    setPhone(value);
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

  const checkIfError = () => {
    if (
      nameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      messageError ||
      !name.length ||
      !lastName.length ||
      !email.length ||
      !message.length ||
      !phone.length
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <Head>
        <title>Contact - Vibe!</title>
        <meta
          name="description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Vibe, Design, Web Design, Instagram, Social Marketing, Logo Design, Marketing Agency, Social Media Management, Advertising"
        />
        <meta name="author" content="Marko Dumnic" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact - Vibe!" />
        <meta
          property="og:description"
          content="We know how to run your social media accounts, create online campaigns and content according to your needs."
        />
        <meta property="og:url" content="https://vibecreative.net/contact" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Vibe!"></meta>
        <meta
          property="og:image"
          content=" https://vibecreative.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvibe-about.32d3ffc5.png&w=640&q=75"
          class="yoast-seo-meta-tag"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:label1"
          content="Est. reading time"
          class="yoast-seo-meta-tag"
        />
        <meta
          name="twitter:data1"
          content="7 minutes"
          class="yoast-seo-meta-tag"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <div className="relative flex flex-row items-center justify-between min-h-[800px]">
          <div
            className="absolute top-0 left-0 z-10 w-full h-full"
            style={{
              backgroundImage: `url(${contactCover.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-80"></div>
          <div className="container lg:max-w-screen-xl z-20 flex md:flex-row flex-col items-center justify-between mt-[60px] md:mt-0">
            <h2 className="grow basis-1 z-20 text-white mb-[30px] lg:mb-0 lg:text-[72px] lg:leading-[79px] text-[48px] leading-[53px] font-semibold">
              Contact Us
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grow basis-1 z-20 flex flex-col gap-[10px] w-full"
            >
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
                    name="from_firstname"
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
                    onBlur={(event) =>
                      checkValidationLastName(event.target.value)
                    }
                    onChange={(event) =>
                      checkValidationLastName(event.target.value)
                    }
                    className={`${lastNameError ? " invalid" : ""}`}
                    type="text"
                    name="from_lastname"
                  />
                  <p className="text-[14px] leading-[25px] text-white">Last</p>
                  {lastNameError && (
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
                    onBlur={(event) => checkEmailError(event.target.value)}
                    onChange={(event) => checkEmailError(event.target.value)}
                    className={`${emailError ? " invalid" : ""}`}
                    type="text"
                    name="from_email"
                  />
                  {emailError && (
                    <span className="text-red-600 text-[14px] leading-[27px]">
                      {emailErrorMsg}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="text-white font-bold text-[16px] leading-[30px]">
                    Phone number <span style={{ color: "#ff0000" }}>*</span>
                  </label>
                  <input
                    onBlur={(event) => checkPhoneError(event.target.value)}
                    onChange={(event) => checkPhoneError(event.target.value)}
                    className={`${phoneError ? " invalid" : ""}`}
                    type="text"
                    name="from_phone"
                  />
                  {phoneError && (
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
                    onBlur={(event) => checkMessageError(event.target.value)}
                    onChange={(event) => checkMessageError(event.target.value)}
                    className={`${messageError ? " invalid" : ""}`}
                    type="text"
                    name="from_message"
                  />
                  {messageError && (
                    <span className="text-red-600 text-[14px] leading-[27px]">
                      This field is required.
                    </span>
                  )}
                </div>
              </div>
              <button
                disabled={isLoading || checkIfError()}
                style={{ opacity: isLoading || checkIfError() ? 0.5 : 1 }}
                className="mt-[10px] w-[180px]"
              >
                Send message
              </button>
              {showSuccessMsg && (
                <div className="bg-[#dff0d8] border border-[#008000] rounded-[8px] py-[12px] px-[16px] mt-[20px]">
                  <p className="text-[#008000]">
                    Message sent successfully. We will get back to you shortly!
                  </p>
                </div>
              )}

              {showErrorMsg && (
                <div className="bg-[#F2DEDE] border border-[#A94442] rounded-[8px] py-[12px] px-[16px] mt-[20px]">
                  <p className="text-[#A94442]">
                    Failed to send the message. Please try again later.
                  </p>
                </div>
              )}
            </form>
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
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
}
