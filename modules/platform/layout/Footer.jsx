import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-(--bg-secondary) p-4">
      <div className="grid  grid-cols-1 grid-rows-1 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4  gap-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:col-span-3 lg:justify-items-center">
          <div className="flex flex-col">
            <h3 className="font-bold text-3xl text-(--tenant-primary) mb-4">
              سابق
            </h3>
            <p className="text-base leading-6 mb-6 ">
              منصة متكاملة لإدارة المدارس تساعد الإدارات التعليمية على تنظيم
              العمليات الأكاديمية والإدارية ومتابعة الطلاب والتواصل مع أولياء
              الأمور بسهولة وكفاءة.
            </p>
            <div className="flex justify-start gap-3">
              <span>
                <Image
                  src="/platform/Feature/icons/instagram.svg"
                  alt="instagram icon"
                  width={32}
                  height={32}
                />
              </span>
              <span>
                <Image
                  src="/platform/Feature/icons/facebook.svg"
                  alt="facebok icon"
                  width={32}
                  height={32}
                />
              </span>
              <span>
                <Image
                  src="/platform/Feature/icons/whatsapp.svg"
                  alt="whatsapp icon"
                  width={32}
                  height={32}
                />
              </span>
              <span>
                <Image
                  src="/platform/Feature/icons/linkedin.svg"
                  alt="linked in icon"
                  width={32}
                  height={32}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-base font-medium mb-6">روابط سريعة</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-(--text-secondary)">
                <Link href={"/"}>الرئيسية</Link>
              </li>
              <li className="text-sm text-(--text-secondary)">
                <Link href={"/about"}>من نحن</Link>
              </li>
              <li className="text-sm text-(--text-secondary)">
                <Link href={"/dashboard"}>المنصة</Link>
              </li>
              <li className="text-sm text-(--text-secondary)">
                <Link href={"/pricing"}>الأسعار</Link>
              </li>
              <li className="text-sm text-(--text-secondary)">
                <Link href={"/contact"}>تواصل معنا</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-base font-medium mb-6">المساعدة</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-(--text-secondary)">
                <Link href={""}>سياسة الخصوصية</Link>
              </li>
              <li className="text-sm text-(--text-secondary)">
                <Link href={""}>شروط الأستخدام</Link>
              </li>
              <li className="text-sm text-(--text-secondary)">
                <Link href={""}>حماية العملاء</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-base font-medium mb-6">عن التواصل</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2">
                <Image
                  src={"/platform/Feature/icons/phone-icon.svg"}
                  alt="phone-icon"
                  width={24}
                  height={24}
                />
                <bdi className="text-(--text-secondary) text-sm">
                  +096 500 000 000
                </bdi>
              </li>
              <li className="flex gap-2">
                <Image
                  src={"/platform/Feature/icons/message-icon.svg"}
                  alt="message-icon"
                  width={24}
                  height={24}
                />
                <span className="text-(--text-secondary) text-sm">
                  info@sabiq.com
                </span>
              </li>
              <li className="flex gap-2">
                <Image
                  src={"/platform/Feature/icons/location-icon.svg"}
                  alt="location-icon"
                  width={24}
                  height={24}
                />
                <span className="text-(--text-secondary) text-sm">
                  8 شارع اللاسلكي - المعادي الجديدة مبنى بنك البركة, مكتب 54
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex flex-col mb-8 ">
            <h4 className="text-base font-medium mb-6">تحميل التطبيق</h4>
            <div className="flex flex-col lg:justify-center lg:items-start  ">
              <ul className="bg-(--tenant-primary) rounded-lg mb-4 flex items-center justify-center gap-2 p-2 lg:w-40">
                <li>
                  <Image
                    src={"/platform/Feature/icons/Playstore.svg"}
                    alt="play store"
                    width={21}
                    height={24}
                  />
                </li>
                <li className="text-white ">
                  <div>تنزل من</div>
                  <div>Google Play</div>
                </li>
              </ul>
              <ul className="bg-(--tenant-primary) rounded-lg mb-4 flex items-center justify-center gap-2 p-2 lg:w-40">
                <li>
                  <Image
                    src={"/platform/Feature/icons/Apple.svg"}
                    alt="apple"
                    width={21}
                    height={24}
                  />
                </li>
                <li className="text-white ">
                  <div>تنزل من</div>
                  <div>App Store</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end pt-4 border-t border-[#D8DCF0] text-xs font-medium">
        جميع الحقوق محفوظة لدى 2026 &copy; Sapiq
      </div>
    </div>
  );
};

export default Footer;
