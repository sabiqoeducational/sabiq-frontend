import Image from 'next/image';

const schoolsLogos = [
   { id: 1, src: '/images/school-1.png', alt: 'مدرسة القمم الدولية' },
   { id: 2, src: '/images/school-2.png', alt: 'مدارس المستقبل' },
   { id: 3, src: '/images/school-3.png', alt: 'أكاديمية المعرفة' },
   { id: 4, src: '/images/school-4.png', alt: 'مجمع التميز التعليمي' },
];

export const SchoolProof = () => {
   const infiniteLogos = [...schoolsLogos, ...schoolsLogos];

   return (
      <section className="bg-transparent py-16 w-full">
         <div className="container-default">

            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  مدارس تثق في <span className='text-brand'>سابق</span>
               </h2>
            </div>

            <div className="w-full h-auto flex items-center overflow-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">

               <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
                  {infiniteLogos.map((logo, index) => (
                     <div
                        key={`${logo.id}-${index}`}
                        className='flex gap-1 items-center'
                     >
                        <div className="relative w-17.5 h-17.5 shrink-0">
                           <Image
                              src={logo.src}
                              alt={logo.alt}
                              fill
                              className="object-contain"
                              priority
                           />
                        </div>
                        <div>
                           <h2 className='font-bold text-gray-600'>Shcool Name</h2>
                           <p className='text-gray-500'>bio</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>
   );
};