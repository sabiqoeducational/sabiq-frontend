"use client";
import { pricingPlan } from "@/shared/types/featuePage";
import { useState } from "react";

const PricingComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(1);
  const [selectedTuitionFees, setSelectedTuitionFees] = useState<number>(1);

  const pricingPlans: pricingPlan[] = [
    {
      id: 1,
      title: "المدرسة",
      icongURL: "/platform/pricing/school.svg",
    },
    {
      id: 2,
      title: "أكاديمية تعليمية",
      icongURL: "/platform/pricing/Academic.svg",
    },
    {
      id: 3,
      title: "مدرس متخصص",
      icongURL: "/platform/pricing/Teacher.svg",
    },
  ];

  const tuitionFees = [
    {
      id: 1,
      title: "فصل دراسي",
    },
    {
      id: 2,
      title: "سنويا",
    },
  ];

  return (
    <section className="flex flex-col gap-10 items-center m-4 lg:mx-24 ">
      <div className="flex gap-2 bg-(--bg-secondary) border border-[#d8dcf0] rounded-full p-1">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`flex items-center gap-2 p-2 px-4 rounded-full cursor-pointer transition-all ${
              selectedPlan === plan.id
                ? "bg-(--tenant-primary) text-white"
                : "bg-transparent text-gray-700"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <div
              style={{
                maskImage: `url(${plan.icongURL})`,
                WebkitMaskImage: `url(${plan.icongURL})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
              className={`w-6 h-6 ${selectedPlan === plan.id ? "bg-white" : "bg-gray-700"}`}
            />
            <span className="text-sm font-medium">{plan.title}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 bg-(--bg-secondary) border border-[#d8dcf0] rounded-full p-1">
          {tuitionFees.map((fee) => (
            <div
              key={fee.id}
              className={`flex items-center gap-2 p-2 px-4 rounded-full cursor-pointer transition-all ${
                selectedTuitionFees === fee.id
                  ? "bg-(--tenant-primary) text-white"
                  : "bg-transparent text-gray-700"
              }`}
              onClick={() => setSelectedTuitionFees(fee.id)}
            >
              <span className="text-sm font-medium">{fee.title} {fee.id === 2 && <span className={`${selectedTuitionFees === fee.id ? 'text-white' : 'text-(--tenant-primary)'}`}>(وفر 20%)</span>}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default PricingComponent;
