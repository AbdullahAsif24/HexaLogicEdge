"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { db } from "../app/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import AnimatedButton from "./Buttton";

export default function ContactSec() {
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);

  const [step, setStep] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    service: "",
    budget: "",
    instructions: "",
    contactNumber: "",
    countryCode: "+92", // default
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    leftLineRef.current?.classList.add("animate-grow");
    rightLineRef.current?.classList.add("animate-grow");
  }, []);

  const handleNext = () => {
    const currentErrors = validate(step);
    if (Object.keys(currentErrors).length === 0) {
      setTransitioning(true);
      setTimeout(() => {
        setStep((prev) => prev + 1);
        setTransitioning(false);
      }, 300);
    } else {
      setErrors(currentErrors);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setTransitioning(true);
      setTimeout(() => {
        setStep((prev) => prev - 1);
        setErrors({});
        setTransitioning(false);
      }, 300);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const currentErrors = validate(step);

    if (Object.keys(currentErrors).length === 0) {
      const fullData = {
        ...formData,
        contactCombined: `${formData.countryCode} ${formData.contactNumber}`,
        timestamp: serverTimestamp(),
      };

      try {
        await addDoc(collection(db, "contacts"), fullData);

        console.log("Form submitted successfully!");
        setSubmittedData(fullData);
        setSuccess(true); // ✅ Show success message

        setTimeout(() => setSuccess(false), 5000); // Hide after 5 sec

        setFormData({
          name: "",
          service: "",
          budget: "",
          instructions: "",
          contactNumber: "",
          countryCode: "+92",
          email: "",
        });
        setStep(1);
        setErrors({});
      } catch (error) {
        console.error("Error submitting to Firestore:", error);
        console.log("Failed to submit the form.");
      }

    } else {
      setErrors(currentErrors);
    }
  };



  const validate = (step) => {
    const err = {};

    if (step === 1) {
      if (!formData.name.trim()) err.name = "Name is required.";
      if (!formData.service) err.service = "Please select a service.";
    }

    if (step === 2) {
      if (!formData.budget.trim()) {
        err.budget = "Budget is required.";
      } else if (!/^[\p{Sc}]/u.test(formData.budget)) {
        err.budget =
          "Budget must start with a currency symbol (e.g. $, €, £, ¥).";
      } else if (
        isNaN(formData.budget.replace(/[^0-9.]/g, ""))
      ) {
        err.budget = "Budget amount must be numeric.";
      }

      if (!formData.instructions.trim())
        err.instructions = "Please enter instructions.";
    }

    if (step === 3) {
      if (!formData.countryCode) {
        err.contactNumber = "Country code is required.";
      }

      if (!formData.contactNumber.trim()) {
        err.contactNumber = "Contact number is required.";
      } else {
        const result = validateContact(
          formData.countryCode,
          formData.contactNumber.trim()
        );
        if (!result.valid) {
          err.contactNumber = result.message;
        }
      }

    }

    return err;
  };

  const countryData = [
    { name: "Australia", code: "+61", min: 9, max: 10 },
    { name: "France", code: "+33", min: 9, max: 10 },
    { name: "Germany", code: "+49", min: 10, max: 11 },
    { name: "India", code: "+91", min: 10, max: 10 },
    { name: "Japan", code: "+81", min: 9, max: 10 },
    { name: "Pakistan", code: "+92", min: 10, max: 10 },
    { name: "Saudi Arabia", code: "+966", min: 9, max: 10 },
    { name: "United Arab Emirates", code: "+971", min: 9, max: 10 },
    { name: "United Kingdom", code: "+44", min: 10, max: 11 },
    { name: "United States", code: "+1", min: 10, max: 10 },
  ];

  const validateContact = (code, number) => {
    const cleanNumber = number.replace(/\D/g, "");

    const country = countryData.find((c) => c.code === code);
    if (!country) {
      return {
        valid: false,
        message: "Unknown or unsupported country code.",
      };
    }

    if (
      cleanNumber.length < country.min ||
      cleanNumber.length > country.max
    ) {
      return {
        valid: false,
        message: `Number length for ${country.name} must be between ${country.min} and ${country.max} digits.`,
      };
    }

    return { valid: true };
  };


  return (
    <section className="w-full h-full md:h-[93vh] mt-7 px-6 md:px-20 py-10 relative">
      <div className="text-center mb-12">
        <h1 className="text-white text-5xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-wider">
          LET<span className="text-[#4f46e5]">'</span>S TALK
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col items-start justify-start w-full">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
            CREATIVE
          </h2>

          <div
            ref={leftLineRef}
            className="h-[6px] bg-gradient-to-r from-[#4f46e5] via-white to-[#4f46e5] w-0 mb-5 rounded-full"
          ></div>

          <div className="flex space-x-4 mt-1 mb-6">
            {[0, 200, 400].map((delay, index) => (
              <div
                key={index}
                className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#4f46e5] animate-pulseCircle"
                style={{ animationDelay: `${delay}ms` }}
              ></div>
            ))}
          </div>

          <div
            className={`w-full max-w-md text-white transform transition duration-300 ${transitioning ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
              }`}
          >
            <h3 className="text-center text-xl sm:text-2xl mb-6 font-bold">
              Let’s Get Started
            </h3>

            {step === 1 && (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-darkSurface text-white border border-gray-500 focus:outline-none focus:border-[#4f46e5]"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-darkSurface text-white border border-gray-500 focus:outline-none focus:border-[#4f46e5]"
                >
                  <option value="">Select a Service</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="SEO">SEO</option>
                  <option value="Branding">Branding</option>
                </select>
                {errors.service && (
                  <span className="text-red-500 text-sm">{errors.service}</span>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-darkSurface text-white border border-gray-500 focus:outline-none focus:border-[#4f46e5]"
                >
                  <option value="">Select Budget Range</option>
                  <option value="$100 - $500">$100 - $500</option>
                  <option value="$500 - $1000">$500 - $1000</option>
                  <option value="$1000 - $5000">$1000 - $5000</option>
                  <option value="$5000+">$5000+</option>
                </select>
                {errors.budget && (
                  <span className="text-red-500 text-sm">{errors.budget}</span>
                )}

                {errors.budget && (
                  <span className="text-red-500 text-sm">{errors.budget}</span>
                )}

                <textarea
                  name="instructions"
                  placeholder="Any specific instructions?"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded bg-darkSurface text-white border border-gray-500 focus:outline-none focus:border-[#4f46e5]"
                ></textarea>
                {errors.instructions && (
                  <span className="text-red-500 text-sm">
                    {errors.instructions}
                  </span>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-[35%] px-3 py-2 rounded bg-darkSurface text-white border border-gray-500 focus:outline-none focus:border-[#4f46e5]"
                  >
                    <option value="">Code</option>
                    {countryData.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="3211234567"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-[65%] px-4 py-2 rounded bg-darkSurface text-white border border-gray-500 focus:outline-none focus:border-[#4f46e5]"
                  />
                </div>
                {errors.contactNumber && (
                  <span className="text-red-500 text-sm">{errors.contactNumber}</span>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-darkSurface text-white border border-gray-500 focus:outline-none focus:border-[#4f46e5]"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <AnimatedButton onClick={handlePrev}>
                  Previous
                </AnimatedButton>
              )}
              <AnimatedButton onClick={step < 3 ? handleNext : handleSubmit} className="ml-auto">
                {step < 3 ? "Next" : "Submit"}
              </AnimatedButton>
            </div>

            {success && (
              <p className="mt-4 text-green-400 text-center text-sm sm:text-base">
                ✅ Your message has been submitted successfully!
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-white h-auto self-stretch mx-6" />

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                WEB
              </h2>
              <h2 className="text-[#4f46e5] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                HOME
              </h2>
            </div>

            <div
              ref={rightLineRef}
              className="h-[6px] bg-gradient-to-r from-[#4f46e5] via-white to-[#4f46e5] w-0 mt-2 rounded-full"
            ></div>
          </div>

          <p className="text-white text-base sm:text-lg leading-relaxed mt-2">
            We’d love to hear from you! Whether you have a project in mind, a
            question about our services, or just want to say hello, our team is
            ready to help. Reach out today and let’s start building something
            amazing together. Your digital journey begins with a simple message.
          </p>

          <div className="mt-6 flex justify-between items-center w-full">
            <button
              onClick={() => router.push("/discover")}
              className="text-white px-8 py-2 rounded-full text-lg sm:text-xl hover:text-[#4f46e5] transition-all duration-300"
            >

            </button>

            <div className="group relative hidden md:block">
              <button
                href="mailto:hexalogicedge@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4f46e5] text-white text-xl hover:animate-bounceUp transition-all duration-300 shadow-lg"
              >
                ✏
              </button>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded bg-white text-black text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                email-us
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-0 flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4f46e5] transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF className="text-[22px]" />
            </a>
            <a
              href="https://www.instagram.com/hexalogicedge_?igsh=ZTUzenJpb3p2d3cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4f46e5] transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="text-[22px]" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4f46e5] transition-all duration-300 hover:scale-110"
            >
              <FaTwitter className="text-[22px]" />
            </a>
            <a
              href="https://wa.me/923001234567?text=Hi%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4f46e5] transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp className="text-[22px]" />
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}