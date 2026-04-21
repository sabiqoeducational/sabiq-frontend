import Image from "next/image";

const AppSystemSection = () => {
  return (
    <section className="flex flex-col items-center m-4">
      <div className="feature-headline">
        نظام التطبيق
        <span></span>
      </div>
      <h2 className="text-3xl text-center w-70 font-semibold mb-10 md:text-5xl md:w-150 md:leading-15 ">
        ما هي منصة
        <span className="text-(--tenant-primary)"> سابق ؟</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex flex-col justify-between py-2 lg:w-1/2">
          <p className="text-base font-medium leading-6 md:text-lg lg:leading-7">
            منصة <span className="text-(--tenant-primary)">سابق</span> هي منصة
            رقمية متكاملة صُممت خصيصًا لمساعدة المدارس على إدارة العمليات
            التعليمية والإدارية من خلال بيئة موحدة و سهلة الاستخدام. تجمع المنصة
            بين مختلف الأدوات التي تحتاجها المدرسة في مكان واحد، مما يقلل من
            الاعتماد على الأنظمة المتفرقة ويُسهم في تنظيم العمل بشكل أكثر كفاءة.
          </p>

          <p className="text-base font-medium leading-6 md:text-lg lg:leading-7">
            تتيح <span className="text-(--tenant-primary)">سابق</span> للإدارات
            التعليمية متابعة بيانات الطلاب، تنظيم الجداول الدراسية، و إدارة
            الحضور و الاختبارات بطريقة أكثر سلاسة و دقة، مع توفير رؤية واضحة
            تساعد على تحسين سير العمل اليومي و اتخاذ قرارات أفضل.
          </p>

          <p className="text-base font-medium leading-6 md:text-lg lg:leading-7">
            كما تساهم في تقليل الوقت و الجهد المبذول في المهام الإدارية
            الروتينية، مما يمنح فريق العمل فرصة أكبر للتركيز على تطوير العملية
            التعليمية.
          </p>
        </div>

        <figure className="w-full lg:w-1/2">
          <Image
            src="/images/app-system.svg"
            alt="app-system image"
            width={600}
            height={400}
            className="w-full h-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default AppSystemSection;
