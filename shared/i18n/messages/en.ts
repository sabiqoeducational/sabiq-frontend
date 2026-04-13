import type { Messages } from "./ar";

export const en: Messages = {
  meta: {
    title: "Sabiq Platform",
    description: "Multi-tenant SaaS education platform",
  },
  platform: {
    landing: {
      title: "A modern SaaS platform for multi-branch school management",
      subtitle:
        "Give each tenant their own site while you run billing, onboarding, and analytics from one scalable foundation.",
      ctaPrimary: "Start free",
      ctaSecondary: "Contact us",
      stats: [
        { value: "+120", label: "Schools on the platform" },
        { value: "+85K", label: "Active students" },
        { value: "99.9%", label: "Uptime" },
      ],
    },
    about: {
      title: "About us",
      body:
        "We build a multi-tenant SaaS education platform so every school gets a tailored, secure experience.",
    },
    contact: {
      title: "Contact us",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
    },
    register: {
      title: "Create an account",
      fullName: "Full name",
      email: "Email",
      organization: "Organization name",
      password: "Password",
      submit: "Create account",
    },
  },
  common: {
    language: "Language",
  },
};
