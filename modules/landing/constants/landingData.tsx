import { Building2, CalendarDays, Users, PieChart, MessageSquare, FileCheck2 } from 'lucide-react';
import { TestimonialItem } from '@/modules/platform/ui/Home/Testimonials';
import { ModuleItem } from '@/modules/platform/ui/Home/PlatformModules';
import { ShowcaseItem } from '@/modules/platform/ui/Home/FeatureShowcase';

export const testimonialsData: TestimonialItem[] = [
   {
      id: 't1',
      name: "محمد عبد الرحمن",
      role: "مدير عام أكاديمية المستقبل",
      quote: "ساعدنا سابق في تنظيم جميع العمليات الإدارية داخل المدرسة بشكل سلس، من متابعة الحضور إلى إعداد التقارير اليومية، مما وفر علينا الكثير من الوقت وساعدنا على اتخاذ قرارات أكثر دقة.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
   },
   {
      id: 't2',
      name: "فاطمة حسن",
      role: "معلمة بمدرسة النور",
      quote: "النظام وفر عليّ الكثير من الوقت في رصد الدرجات وإعداد التقارير الشهرية للطلاب، الآن أستطيع التركيز أكثر على الشرح.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
   },
   {
      id: 't3',
      name: "أحمد القحطاني",
      role: "ولي أمر",
      quote: "من خلال التطبيق أصبحت على دراية تامة بمستوى ابني الأكاديمي وسلوكه يومياً، التواصل مع إدارة المدرسة أصبح أسهل بكثير.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
   },
   {
      id: 't4',
      name: "سارة المنسي",
      role: "مديرة شؤون الطلاب",
      quote: "إدارة غياب الطلاب وتتبع الحالات الصحية أصبح منظماً جداً. سابق هو الحل الذي كنا نبحث عنه منذ سنوات.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
   }
];

export const testimonialsTitle = (
   <>
      تجارب حقيقية من <span className="text-brand">مستخدمي سابق</span>
   </>
);


export const aboutDescription = (
   <>
      <span className="text-brand">منصة سابق</span> هي نظام رقمي متكامل لإدارة المدارس يساعد الإدارات التعليمية على تنظيم العمليات اليومية مثل متابعة الطلاب و الحضور و الاختبارات والتقارير في مكان واحد، مع أدوات تواصل فعالة مع أولياء الأمور و تقارير فورية تدعم اتخاذ القرار.
   </>
);

export const modulesData: ModuleItem[] = [
   {
      id: 1,
      title: "إنشاء حساب المدرسة",
      description: "إنشاء حساب خاص بمدرستك وإعداد المعلومات الأساسية مثل الفصول والمعلمين والهيكل التعليمي للمدرسة.",
      icon: <Building2 className="w-8 h-8" />,
      iconWrapperClass: "bg-orange-100 text-orange-500",
   },
   {
      id: 2,
      title: "تنظيم الجداول الدراسية",
      description: "تقارير ولوحات تحكم تعرض أهم مؤشرات الأداء لمساعدة الإدارة في متابعة تقدم الطلاب واتخاذ قرارات أفضل.",
      icon: <CalendarDays className="w-8 h-8" />,
      iconWrapperClass: "bg-purple-100 text-purple-500",
   },
   {
      id: 3,
      title: "إدارة شاملة للطلاب",
      description: "إدارة بيانات الطلاب وأولياء الأمور في ملفات رقمية منظمة مع إمكانية متابعة الأداء الأكاديمي والسلوكي بسهولة.",
      icon: <Users className="w-8 h-8" />,
      iconWrapperClass: "bg-blue-100 text-blue-500",
   },
   {
      id: 4,
      title: "التقارير والتحليلات الذكية",
      description: "تقارير ولوحات تحكم تعرض أهم مؤشرات الأداء لمساعدة الإدارة في متابعة تقدم الطلاب واتخاذ قرارات أفضل.",
      icon: <PieChart className="w-8 h-8" />,
      iconWrapperClass: "bg-pink-100 text-pink-500",
   },
   {
      id: 5,
      title: "التواصل مع أولياء الأمور",
      description: "إرسال الإشعارات والتحديثات المهمة لأولياء الأمور لتعزيز التواصل ومتابعة تقدم الطلاب بشكل مستمر.",
      icon: <MessageSquare className="w-8 h-8" />,
      iconWrapperClass: "bg-cyan-100 text-cyan-500",
   },
   {
      id: 6,
      title: "الاختبارات و الدرجات",
      description: "تنظيم الاختبارات ورصد الدرجات إلكترونياً مع تقارير تساعد المعلمين والإدارة على متابعة مستوى الطلاب.",
      icon: <FileCheck2 className="w-8 h-8" />,
      iconWrapperClass: "bg-green-100 text-green-500",
   },
];


export const showcaseFeatures: ShowcaseItem[] = [
   {
      id: 'f1',
      title: "تقليل الوقت في الأعمال الإدارية",
      description: "وفّر حتى 70% من وقتك اليومي في إعداد التقارير وإدارة العمليات اليومية بفضل الأتمتة وتنظيم البيانات في نظام واحد.",
      imageUrl: "/images/user-1.png",
   },
   {
      id: 'f2',
      title: "متابعة دقيقة لأداء الطلاب",
      description: "مراقبة أداء الطلاب بسهولة من خلال لوحات تحكم وتقارير تساعد الإدارة والمعلمين على تحسين الأداء الأكاديمي بنسبة 40%.",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
   },
   {
      id: 'f3',
      title: "تنظيم جميع العمليات في منصة واحدة",
      description: "التخلص من تعدد الأنظمة والملفات المختلفة، وإدارة الحضور والجداول والدرجات في مكان واحد مما قلل الأخطاء التشغيلية بنسبة 50%.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
   },
   {
      id: 'f4',
      title: "تحسين التواصل مع أولياء الأمور",
      description: "إرسال الإشعارات والتحديثات بشكل فوري يساعد على رفع رضا أولياء الأمور إلى 70%.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
   },
   {
      id: 'f5',
      title: "قرارات أفضل مبنية على البيانات",
      description: "تقارير وتحليلات دقيقة تمنح الإدارة رؤية واضحة حول الأداء الأكاديمي والانضباط المدرسي، خذ قرارات أذكى وأسرع بثقة أكبر.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
   },
];

export const showcaseTitle = (
   <>
      كيف تساعد وحدات <span className="text-brand">سابق</span> مدرستك
   </>
);
export const modulesTitle = (
   <>
      نظام متكامل <span className="text-brand">بوحدات متخصصة</span>
   </>
);