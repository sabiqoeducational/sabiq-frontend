"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Mail, Phone, Check, AlertCircle } from "lucide-react";
import type { Messages } from "@/shared/i18n/messages";
import { CustomSelect } from "../../components/CustomSelect";
import Image from "next/image";
import { Reveal } from "@/shared/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";
type ContactSectionProps = {
  content: Messages["platform"]["contact"]["secondary"];
};
export const ContactSection = ({ content }: ContactSectionProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const isPhoneValid = /^[0-9]{9,14}$/.test(phone.replace(/\s/g, ""));
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setSpecialty("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const newErrors = [];

    if (!name.trim()) newErrors.push("name");
    if (!email.trim() || !isEmailValid) newErrors.push("email");
    if (!phone.trim() || !isPhoneValid) newErrors.push("phone");
    if (!specialty) newErrors.push("specialty");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setIsSubmitted(true);
  };
  return (
    <section className=" bg-white pt-8">
      {" "}
      <div className="container mx-auto px-4 max-w-6xl">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 2xl:gap-12">
          {" "}
          <Reveal
            direction="right"
            delay={0.3}
            className="lg:col-span-8 bg-white p-4 rounded-xl relative border shadow-sm border-[#D8DCF0] min-h-120"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {" "}
                  <h2 className="text-xl font-black text-[#0D1530] mb-8 text-right">
                    {content.form.title}
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5"
                  >
                    {" "}
                    {/* Full Name */}
                    <div className="md:col-span-2 space-y-2">
                      <label
                        className={`flex flex-row-reverse items-center justify-end gap-1 text-sm font-bold ${errors.includes("name") ? "text-red-500" : "text-[#0D1530]"}`}
                      >
                        <span>{content.form.name} :</span>
                        {errors.includes("name") ? (
                          <AlertCircle size={14} />
                        ) : (
                          <>
                            {name ? (
                              <Check
                                size={14}
                                className="text-green-500 shrink-0"
                                strokeWidth={3}
                              />
                            ) : (
                              <span className="text-red-500 shrink-0">*</span>
                            )}{" "}
                          </>
                        )}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setErrors(errors.filter((err) => err !== "name"));
                        }}
                        className={`w-full p-3 border rounded-lg text-sm text-right transition-colors focus:outline-none ${
                          errors.includes("name")
                            ? "bg-red-50 border-red-500 text-red-900 focus:border-red-600"
                            : "bg-[#F8FAFF] border-[#D8DCF0] focus:border-[#156AE1]"
                        }`}
                        placeholder={content.form.placeholder.name}
                      />
                      {errors.includes("name") && (
                        <p className="text-red-500 text-xs  font-light">
                          من فضلك أدخل البيانات المطلوبة
                        </p>
                      )}
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        className={`flex flex-row-reverse items-center justify-end gap-1 text-sm font-bold ${errors.includes("name") ? "text-red-500" : "text-[#0D1530]"}`}
                      >
                        <span>{content.form.email} :</span>
                        {errors.includes("email") ? (
                          <AlertCircle size={14} />
                        ) : (
                          <>
                            {isEmailValid ? (
                              <Check
                                size={14}
                                className="text-green-500 shrink-0"
                                strokeWidth={3}
                              />
                            ) : (
                              <span className="text-red-500 shrink-0">*</span>
                            )}{" "}
                          </>
                        )}
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors(errors.filter((err) => err !== "email"));
                        }}
                        className={`w-full p-3 border rounded-lg text-sm text-right transition-colors focus:outline-none ${
                          errors.includes("email")
                            ? "bg-red-50 border-red-500 text-red-900"
                            : "bg-[#F8FAFF] border-[#D8DCF0]"
                        }`}
                        placeholder={content.form.placeholder.email}
                      />
                      {errors.includes("email") && (
                        <p className="text-red-500 text-xs font-light">
                          يرجى إدخال بريد إلكتروني صحيح
                        </p>
                      )}
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        className={`flex flex-row-reverse items-center justify-end gap-1 text-sm font-bold ${errors.includes("phone") ? "text-red-500" : "text-[#0D1530]"}`}
                      >
                        <span>{content.form.phone} :</span>
                        {errors.includes("phone") ? (
                          <AlertCircle size={14} />
                        ) : (
                          <>
                            {isPhoneValid ? (
                              <Check
                                size={14}
                                className="text-green-500 shrink-0"
                                strokeWidth={3}
                              />
                            ) : (
                              <span className="text-red-500 shrink-0">*</span>
                            )}{" "}
                          </>
                        )}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setErrors(errors.filter((err) => err !== "phone"));
                        }}
                        className={`w-full p-3 border rounded-lg text-sm text-right transition-colors focus:outline-none ${
                          errors.includes("phone")
                            ? "bg-red-50 border-red-500 text-red-900"
                            : "bg-[#F8FAFF] border-[#D8DCF0]"
                        }`}
                        placeholder={content.form.placeholder.phone}
                      />
                      {errors.includes("phone") && (
                        <p className="text-red-500 text-xs font-light">
                          يرجى إدخال رقم هاتف صحيح
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 relative">
                      <label
                        className={`flex flex-row-reverse items-center justify-end gap-1 text-sm font-bold transition-colors ${
                          errors.includes("specialty")
                            ? "text-red-500"
                            : "text-[#0D1530]"
                        }`}
                      >
                        <span>{content.form.specialty} :</span>
                        {errors.includes("specialty") ? (
                          <AlertCircle size={14} className="shrink-0" />
                        ) : (
                          <>
                            {specialty ? (
                              <Check
                                size={14}
                                className="text-green-500 shrink-0"
                                strokeWidth={3}
                              />
                            ) : (
                              <span className="text-red-500 shrink-0">*</span>
                            )}
                          </>
                        )}
                      </label>
                      <div
                        className={`transition-all duration-200 rounded-lg ${
                          errors.includes("specialty") ? " ring-red-500" : ""
                        }`}
                      >
                        <CustomSelect
                          placeholder={content.form.placeholder.specialty}
                          options={content.form.options.specialty}
                          hasError={errors.includes("specialty")}
                          onChange={(val: string) => {
                            setSpecialty(val);
                            setErrors(
                              errors.filter((err) => err !== "specialty"),
                            );
                          }}
                        />
                        {errors.includes("specialty") && (
                          <p className="text-red-500 text-xs font-light">
                            يرجى اختيار التخصص
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className={`flex flex-row-reverse items-center justify-end gap-1 text-sm font-bold transition-colors 
                           `}
                      >
                        <span>{content.form.subject} :</span>
                      </label>

                      <CustomSelect
                        placeholder={content.form.placeholder.subject}
                        options={content.form.options.subjects}
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-right text-sm font-bold text-[#0D1530]">
                        {content.form.message}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={content.form.placeholder.message}
                        className="w-full p-3 bg-[#F8FAFF] border border-[#D8DCF0] rounded-lg text-sm text-right focus:outline-none focus:border-[#156AE1] transition-colors resize-none"
                      />
                    </div>
                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-start mt-1">
                      <button className="bg-[#156AE1] hover:bg-[#1A78F2] text-white px-8 py-3 rounded-lg font-bold text-base transition-all shadow-md">
                        {content.form.submit}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center  text-center z-10"
                >
                  <div className="w-24 h-24  rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#12B76A] rounded-full flex items-center justify-center ">
                      <Check size={48} className="text-white" strokeWidth={4} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-medium text-[#111827]">
                      تم إرسال رسالتك بنجاح
                    </h3>
                    <p className="text-[#6B7280] font-light">
                      شكراً لتواصلك معنا، سيرد عليك فريقنا خلال 24 ساعة عمل
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
          <Reveal
            direction="left"
            delay={0.3}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {" "}
            <InfoCard
              icon={
                <Image
                  src="/platform/Contact/icons/Group 47219.svg"
                  alt="Support"
                  width={40}
                  height={40}
                />
              }
              title={content.info.support.title}
              email={content.info.support.email}
              phone={content.info.support.phone}
            />
            <InfoCard
              icon={
                <Image
                  src="/platform/Contact/icons/Group 47219 (1).svg"
                  alt="Sales"
                  width={35}
                  height={35}
                />
              }
              title={content.info.sales.title}
              email={content.info.sales.email}
              phone={content.info.sales.phone}
            />
            {/* Social Card */}
            <div className="bg-[#F8FAFF] p-5 m-3 rounded-xl shadow-sm  flex flex-col items-start text-start">
              <div className="w-14 h-14 bg-[#156AE133] text-[#156AE1] rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/platform/Contact/icons/Group 47219 (2).svg"
                  alt="Social"
                  width={35}
                  height={35}
                />
              </div>
              <h3 className="text-base font-bold text-[#0D1530] mb-4">
                {content.info.social.title}
              </h3>
              <div className="flex gap-3">
                <SocialIcon
                  icon={
                    <Image
                      src="/platform/Contact/icons/Button Icon.svg"
                      alt="Instagram"
                      width={35}
                      height={35}
                    />
                  }
                  href="#"
                />
                <SocialIcon
                  icon={
                    <Image
                      src="/platform/Contact/icons/Button Icon (1).svg"
                      alt="Facebook"
                      width={35}
                      height={35}
                    />
                  }
                  href="#"
                />
                <SocialIcon
                  icon={
                    <Image
                      src="/platform/Contact/icons/Button Icon (2).svg"
                      alt="Whatsapp"
                      width={35}
                      height={35}
                    />
                  }
                  href="#"
                />
                <SocialIcon
                  icon={
                    <Image
                      src="/platform/Contact/icons/Button Icon (3).svg"
                      alt="LinkedIn"
                      width={35}
                      height={35}
                    />
                  }
                  href="#"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
const InfoCard = ({
  icon,
  title,
  email,
  phone,
}: {
  icon: React.ReactNode;
  title: string;
  email: string;
  phone: string;
}) => (
  <div className="bg-[#F8FAFF] p-5 m-3 rounded-xl shadow-sm  flex flex-col items-start text-start group hover:shadow-md transition-shadow">
    <div className="w-14 h-14 bg-[#156AE133] text-[#156AE1] rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-base font-bold text-[#0D1530] mb-3">{title}</h3>
    <div className="flex flex-col gap-2">
      <a
        href={`mailto:${email}`}
        className="flex items-center justify-start gap-2 text-gray-500 text-sm font-medium hover:text-[#156AE1]"
      >
        <Mail size={16} className="text-[#156AE1]" />
        <span>{email}</span>
      </a>
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-start gap-2 text-gray-500 text-sm font-medium hover:text-[#156AE1]"
      >
        <Phone size={16} className="text-[#156AE1]" />
        <span>{phone}</span>
      </a>
    </div>
  </div>
);
const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-10 h-10 bg-[#156AE1] text-white rounded-lg flex items-center justify-center hover:bg-[#1A78F2] transition-colors"
  >
    {icon}
  </a>
);
