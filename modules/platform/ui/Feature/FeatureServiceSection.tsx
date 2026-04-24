import { IFeature } from "@/shared/types/featuePage";
import FeatureItem from "./FeatureItem";

const FeatureServiceSection = () => {
  const featuresData: IFeature[] = [
    {
      title: "الموارد البشرية",
      description:
        " أدر شؤون موظفي مدرستك بكل سهولة ملفات رقمية كاملة لكل موظف تضم عقوده، مؤهلاته، و سجل أدائه. يُدير النظام طلبات الإجازة و الموافقة عليها إلكترونياً، و يتتبع الحضور و الانصراف تلقائياً. تقييم الأداء الدوري للمعلمين و الإداريين يصبح منظماً و موثقاً بدلاً من أن يكون عشوائياً",
      mainImage: "/platform/Feature/images/female-teacher.svg",
      card1: "/platform/Feature/images/female-card-1.svg",
      card2: "/platform/Feature/images/female-card-2.svg",
      extraImage: null,
      hasFloating: true,
      reverse: false,
    },
    {
      title: "نظام الرواتب",
      description:
        "تخلّص من حسابات الرواتب اليدوية المعقدة — يحسب النظام تلقائياً راتب كل موظف مع كامل بدلاته و خصوماته بدقة تامة في ثوانٍ. يُصدر كشوف المرتبات الرسمية بصيغة PDF جاهزة للتوزيع، و يحتفظ بسجل مالي كامل لكل موظف طوال فترة عمله في المدرسة.",
      mainImage: "/platform/Feature/images/male-teacher.svg",
      card1: "/platform/Feature/images/male-card-1.svg",
      card2: "/platform/Feature/images/male-card-2.svg",
      extraImage: null,
      hasFloating: true,
      reverse: true,
    },
    {
      title: "متابعة الحضور والغياب",
      description:
        "سجّل حضور و غياب الطلاب و المعلمين يومياً  بضغطة و احدة — دون الحاجة لأوراق أو جداول  يدوية. يرسل النظام إشعاراً فورياً لولي الأمر  فور تسجيل غياب ابنه، ويولّد تقارير أسبوعية و شهرية تلقائية تساعد الإدارة على متابعة  الانتظام و رصد الحالات المتكررة بدقة.",
      mainImage: "/platform/Feature/images/student-teacher.svg",
      card1: "/platform/Feature/images/student-teacher-card1.svg",
      card2: "/platform/Feature/images/student-teacher-card2.svg",
      extraImage: null,
      hasFloating: true,
      reverse: false,
    },
    {
      title: "إدارة شاملة للطلاب",
      description:
        "ملف رقمي متكامل لكل طالب يضم بياناته الشخصية، الأكاديمية، و السلوكية في مكان واحد. تتابع مستوى أداء كل طالب عبر الزمن، وتصل لسجل غياباته و تقاريره و درجاته بسهولة. يتيح لك النظام التواصل المباشر مع ولي الأمر و إرسال التقارير الدورية بشكل تلقائي.",
      mainImage: "/platform/Feature/images/student.svg",
      card1: "/platform/Feature/images/student-card-1.svg",
      card2: "/platform/Feature/images/student-card-2.svg",
      extraImage: null,
      hasFloating: true,
      reverse: true,
    },
    {
      title: "التواصل مع أولياء الأمور",
      description:
        "ابنِ جسراً حقيقياً بين المدرسة والبيت — أرسل إشعارات فورية لأولياء الأمور عن الغياب والدرجات والسلوك، وراسل ولياً بعينه أو جميع أولياء أمور فصل دراسي كامل في ثوانٍ. يستقبل ولي الأمر كل التحديثات على جواله دون الحاجة لزيارة المدرسة أو الانتظار.",
      mainImage: "/platform/Feature/images/student2-teacher.svg",
      card1: null,
      card2: null,
      extraImage: "/platform/Feature/images/phone.svg",
      hasFloating: false,
      reverse: false,
    },
    {
      title: "تنظيم الجداول الدراسية",
      description:
        "أنشئ جداول الحصص والمناوبات و الإشرافية  في دقائق بدلاً من ساعات — يكتشف النظام  التعارضات تلقائياً و يمنعها قبل حدوثها. يمكنك توزيع الجداول على المعلمين فور  إنشائها، و تعديلها في أي و قت مع إشعار  فوري لكل المعنيين بالتغيير.",
      mainImage: "/platform/Feature/images/Schedule.svg",
      card1: null,
      card2: null,
      extraImage: null,
      hasFloating: false,
      reverse: true,
    },
    {
      title: "التقارير والتحليلات الذكية",
      description:
        "احصل على صورة كاملة و واضحة عن أداء مدرستك في أي لحظة — تقارير الحضور، الدرجات، السلوك، والأداء الأكاديمي كلها جاهزة بضغطة واحدة. تصدر التقارير بصيغة PDF أو Excel، و هي مصمّمة لتكون متوافقة مع متطلبات و نماذج وزارة التعليم مباشرةً.",
      mainImage: "/platform/Feature/images/reports.svg",
      card1: null,
      card2: null,
      extraImage: null,
      hasFloating: false,
      reverse: false,
    },
    {
      title: "الاختبارات والدرجات",
      description:
        "نظّم اختبارات مدرستك من الألف للياء — من توزيع الطلاب على اللجان و تحديد المراقبين، إلى رصد الدرجات إلكترونياً و إصدار كشوف النتائج الرسمية. يرصد النظام تلقائياً الطلاب الذين يحتاجون متابعة أكاديمية، و يُنبّه المعلم و الإدارة قبل أن تتفاقم المشكلة.",
      mainImage: "/platform/Feature/images/exams.svg",
      card1: null,
      card2: null,
      extraImage: null,
      hasFloating: false,
      reverse: true,
    },
  ];

  return (
    <section className="flex flex-col items-center m-4">
      <div className="feature-headline">
        وحدات المنصة
        <span></span>
      </div>
      <h2 className="text-3xl text-center w-80 font-semibold mb-4 md:text-5xl md:w-150 md:leading-15 ">
        ماذا تقدم منصة
        <span className="text-(--tenant-primary) "> سابق لمدرستك </span>
      </h2>
      <p className="text-base text-slate-400 text-center mb-8 md:w-150 md:text-lg">
        8 وحدات متكاملة كل و حدة حلّت مشكلة حقيقية سمعناها من مئات المديرين في
        السعودية و مصر.
      </p>
      <div className="flex flex-col gap-10">
         {featuresData.map((item, index) => (
        <FeatureItem key={index} data={item} index={index} />
      ))}
      </div>
     
     
    </section>
  );
};

export default FeatureServiceSection;
