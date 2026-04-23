import { featureCard } from "@/shared/types/featuePage";

const HowWorksCard = ({ props } : { props: featureCard }) => {
  return (
    <div className="bg-(--bg-secondary) p-4 flex flex-col items-center gap-4 rounded-xl border-2 border-slate-200 hover:border-(--tenant-primary)">
      <span
        className="
        bg-(--tenant-primary) text-white text-[20px]
       font-semibold rounded-full w-11 h-11 flex justify-center items-center 
        outline-10 outline-[var(--tenant-primary)]/20
       "
      >
        {props.id}
      </span>
      <div className="flex flex-col items-center w-65 gap-3">
        <h4 className="text-2xl font-semibold ">{props.title}</h4>
        <p className="text-center text-base text-(--text-secondary)">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default HowWorksCard;
