import { FeatureProps } from "@/shared/types/featuePage";
import Image from "next/image";
import { motion } from "framer-motion";
const FeatureItem = ({ data, index }: FeatureProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: data?.reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, } }}
      viewport={{ once: true }}
      className={`flex flex-col items-center gap-6 md:gap-10  ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <figure className="relative w-full bg-(--bg-secondary) flex items-center justify-center rounded-lg lg:w-1/2 overflow-hidden">
        {index < 4 && data.card1 && (
          <div className="hidden md:block absolute top-12 right-6 floating-animation ">
            <Image
              src={data.card1}
              alt=""
              width={170}
              height={100}
              className="w-50"
            />
          </div>
        )}

        <div className="relative w-full overflow-hidden flex justify-center">
          <Image
            src={data.mainImage}
            alt={data.title}
            width={340}
            height={200}
            className={`
                object-cover object-center z-10 w-100 md:w-120 transition-transform duration-500
                ${index < 4 ? "lg:translate-y-16" : ""}
                `}
          />
        </div>

        {index === 4 && data.extraImage && (
          <div className="absolute right-10 -bottom-5 ">
            <Image src={data.extraImage} alt="" width={150} height={100} />
          </div>
        )}

        {index < 4 && data.card2 && (
          <div className="hidden md:block absolute bottom-20 left-16 lg:left-1 floating-animation animation-delay-1500">
            <Image
              src={data.card2}
              alt=""
              width={170}
              height={100}
              className="w-50"
            />
          </div>
        )}
      </figure>

      <div className="flex flex-col items-center lg:items-start gap-3 lg:w-1/2">
        <h4 className="text-center w-full lg:text-right text-[20px] font-semibold md:text-4xl">
          {data.title}
        </h4>
        <p className="text-center lg:text-right text-sm text-(--text-secondary) font-normal md:text-base">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
