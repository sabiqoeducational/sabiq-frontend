# هيكل مشروع Sabiq Frontend

هذا المستند يشرح تنظيم المجلدات والطبقات (layers) في المشروع لمساعدة المطورين الجدد على فهم أين يضعون الكود وكيف تتدفق الطلبات.

## نظرة عامة

المشروع **Next.js 16** (App Router) مع **React 19** و**TypeScript**. يدعم:

- **منصة (Platform)** و**مواقع مستأجرين (Tenants)** حسب الـ Host.
- **تعدد لغات (i18n)** عربي/إنجليزي مع اتجاه RTL/LTR.
- **ثيمات لكل مستأجر** عبر متغيرات CSS على `<body>`.
- طبقة **Clean-ish architecture**: كيانات وواجهات في `core`، حالات استخدام في `application`، تنفيذ HTTP في `infrastructure`، وواجهة المستخدم في `modules` و`app`.

## المكدس التقني

| التقنية        | الاستخدام                          |
| -------------- | ----------------------------------- |
| Next.js App    | الصفحات، التخطيط، Route Handlers    |
| TanStack Query | جلب البيانات والتخزين المؤقت       |
| Zustand        | حالة العرض (مثلاً الجلسة/التوثيق) |
| Tailwind CSS 4 | التنسيق                            |

مسار الاستيراد الموحد: `@/*` يشير إلى جذر المشروع (انظر `tsconfig.json`).

## شجرة المجلدات (مختصرة)

```
sabiq-frontend/
├── app/                      # Next.js App Router (صفحات و API routes)
│   ├── (platform)/           # صفحات المنصة الرئيسية
│   ├── (tenant)/             # صفحات واجهة المستأجر
│   ├── api/                  # Route Handlers (مثلاً تغيير اللغة)
│   ├── layout.tsx            # التخطيط الجذري + metadata + ثيم المستأجر
│   ├── providers.tsx         # مزودي React (Query, Locale, Tenant)
│   └── globals.css
├── middleware.ts             # نقطة دخول Edge: tenant, platform, locale
├── middleware/               # منطق استخراج المستأجر من الـ Host
├── core/                     # نطاق الدومين: كيانات + واجهات مستودعات
├── application/              # حالات استخدام (Use Cases) تربط core بالتنفيذ
├── infrastructure/           # HTTP، تنفيذ المستودعات، التكامل الخارجي
├── modules/                  # ميزات حسب النطاق (auth, landing, platform, tenant)
├── shared/                   # ما يُعاد استخدامه عبر الموديولات (i18n, hooks, theme)
├── public/                   # أصول ثابتة
├── next.config.ts
├── package.json
└── tsconfig.json
```

## مجلد `app/` — التوجيه والصفحات

- **`layout.tsx`**: يقرأ الهيدرز `x-tenant`, `x-platform`, يحمّل الرسائل واللغة من السيرفر، يطبّق ثيم المستأجر على `<body>`، يلف المحتوى بـ `AppProviders`.
- **`(platform)/`**: مجموعة مسارات المنصة (مثل `/`, `/login`, `/about`, `/contact`, `/register`). الاسم بين قوسين لا يظهر في الـ URL؛ هو فقط لتنظيم الملفات.
- **`(tenant)/tenant/page.tsx`**: الصفحة المعاد كتابتها (rewrite) للجذر `/` عندما يكون الطلب من host مستأجر (انظر `middleware.ts`).
- **`api/locale/route.ts`**: مثال على Route Handler لـ API داخل التطبيق.

**قاعدة مهمة:** الـ `middleware` يعيد كتابة `/` إلى `/tenant` للمضيفين غير المنصة، مع تمرير معلومات الـ tenant عبر الهيدرز.

## مجلد `middleware/`

- **`tenant.ts`**: يحدد إن كان الـ host منصة (`isPlatformHost`) أو يستخرج معرف المستأجر من النطاق الفرعي (`extractTenantFromHost`). يعتمد على `NEXT_PUBLIC_ROOT_DOMAIN` (افتراضي في الكود: `app.com`) وقائمة مضيفين للمنصة مثل `localhost`.

## الطبقات: `core` → `application` → `infrastructure`

1. **`core/`**
   - **`entities/`**: نماذج الدومين (مثل `User`, `Tenant`).
   - **`interfaces/repositories/`**: عقود (interfaces) للمستودعات؛ لا يوجد فيها `fetch` أو React.

2. **`application/use-cases/`**
   - سيناريوهات تطبيقية (مثل `LoginUseCase`) تستدعي واجهات من `core` ولا تعرف تفاصيل HTTP.

3. **`infrastructure/`**
   - **`http/apiClient.ts`**: عميل `fetch` مع هيدرز `x-tenant`, `x-locale`, `Authorization` حسب الحاجة.
   - **`repositories/*Impl.ts`**: تنفيذ الواجهات المعرّفة في `core` فوق `ApiClient`.

**تدفق مقترح للمطور:** واجهة المستخدم → Hook أو Mutation في `modules/*/presentation` → Use Case (اختياري) → Repository Implementation → `ApiClient`.

## مجلد `modules/`

كل مجلد فرعي يمثل **ميزة** أو سياق منتج:

| المجلد        | الدور تقريباً                                      |
| ------------- | --------------------------------------------------- |
| `auth/`       | نماذج تسجيل الدخول، Zustand، React Query mutations |
| `landing/`    | مكوّنات الصفحة الرئيسية، خدمات المحتوى، hooks      |
| `platform/`   | واجهة هبوط المنصة                                  |
| `tenant/`     | واجهة المستأجر، بيانات الموقع، خدمة الثيم         |

داخل الموديول غالباً:

- **`presentation/`**: مكوّنات React، stores، hooks خاصة بالميزة.
- **`services/`** أو **`hooks/`**: طبقة أقرب للبيانات أو التنسيق.

## مجلد `shared/`

كود **مشترك** بين أكثر من موديول:

- **`i18n/`**: إعداد اللغة، رسائل `ar`/`en`، ترجمة السيرفر والعميل.
- **`context/`**: `LocaleContext`, `TenantContext`.
- **`hooks/`**: `useTranslations`, `useTenant`, `usePlatform`, إلخ.
- **`theme/`**: `getTenantTheme` وربط الألوان بالمستأجر.
- **`components/`**: مكوّنات عامة مثل `LanguageSwitcher`.
- **`lib/`**: إعداد `QueryClient`.
- **`types/`**: أنواع مشتركة (مثل أنواع المستأجر).

## تعدد المستأجرين والمنصة (ملخص للمطور)

1. الطلب يمر على **`middleware.ts`**.
2. يُحدَّد: منصة أم مستأجر، ويُضبط `x-tenant`, `x-platform`, `x-locale` على الطلب.
3. **`app/layout.tsx`** يقرأ هذه القيم من `headers()` ويمررها للمزودين والثيم.
4. واجهات الـ API عبر **`ApiClient`** ترسل `x-tenant` (ومعها اللغة/التوكن عند التوفر).

## الأوامر اليومية

```bash
npm run dev    # تشغيل التطوير
npm run build  # بناء الإنتاج
npm run start  # تشغيل بعد البناء
npm run lint   # ESLint
```

## ملاحظات للمطورين الجدد

- اتبع **AGENTS.md** في الجذر: إصدار Next.js قد يختلف عن التوثيق العام؛ راجع `node_modules/next/dist/docs/` عند الحاجة.
- عند إضافة صفحة: قرر هل هي **منصة** (`(platform)`) أم **مستأجر** (`(tenant)`) وهل تحتاج نفس الـ rewrite في الـ middleware.
- عند إضافة استدعاء API جديد: عرّف العقد في `core` إن لزم، نفّذ في `infrastructure`، ثم استدعِ من `modules` أو `application`.

---

*آخر تحديث يعكس هيكل المستودع الحالي؛ عند إضافة مجلدات جديدة يُفضّل تحديث هذا الملف مع الـ PR.*
