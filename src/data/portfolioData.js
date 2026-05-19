export const navLinks = [
  { id: "about", labelEn: "About", labelAr: "عنّي" },
  { id: "services", labelEn: "Services", labelAr: "الخدمات" },
  { id: "projects", labelEn: "Projects", labelAr: "المشاريع" },
  { id: "skills", labelEn: "Skills", labelAr: "المهارات" },
  { id: "experience", labelEn: "Experience", labelAr: "الخبرة" },
  { id: "contact", labelEn: "Contact", labelAr: "اتصل بي" },
];
export const portfolioData = {
  personalInfo: {
    name: "ربيع غانم",
    nameEn: "Rabee Ghanem",
    title: "Full Stack Web Developer",
    titleEn: "Full Stack Web Developer",
    birthDate: "11 يوليو 2003",
    birthDateEn: "July 11, 2003",
    gender: "ذكر",
    genderEn: "Male",
    nationality: "سوري",
    nationalityEn: "Syrian",
    location: "السويداء، سوريا",
    locationEn: "Swaida, Syria",
    email: "rabeeghanem0@gmail.com",
    phone: "+963 997 037 470",
    linkedin: "https://www.linkedin.com/in/rabee-ghanem-150222360",
    summary:
      "مطور ويب طموح وموجه نحو النتائج، متخصص في MERN stack (MongoDB، Express.js، React.js، Node.js)، مع خبرة عملية مكتسبة من خلال تدريبين مكثفين والعديد من المشاريع الواقعية. أتمتة القدرة على بناء تطبيقات ويب متجاوبة وقابلة للتطوير من الفكرة إلى النشر.",
    summaryEn:
      "Ambitious and results-driven Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), with hands-on experience gained through two intensive internships and numerous real-world projects. Demonstrated ability to build responsive, scalable web applications from concept to deployment.",
  },

  services: [
    {
      id: 1,
      title:"Frontend Development",
      titleEn: "Frontend Development",
      description: "بناء واجهات مستخدم تفاعلية وجذابة باستخدام أحدث تقنيات الويب مثل React.js و TypeScript. أصمم تجارب مستخدم سلسة ومتجاوبة على جميع الأجهزة مع التركيز على الأداء والسرعة.",
      descriptionEn: "Building interactive and attractive user interfaces using the latest web technologies like React.js and TypeScript. I design smooth and responsive user experiences across all devices with focus on performance and speed.",
      icon: "fas fa-laptop-code",
      color: "#4361ee",
      features: [
        { text: "تطبيقات React.js متقدمة", textEn: "Advanced React.js Applications" },
        { text: "تصميم متجاوب بالكامل", textEn: "Fully Responsive Design" },
        { text: "تحسين الأداء والسرعة", textEn: "Performance Optimization" },
        { text: "تجربة مستخدم استثنائية", textEn: "Exceptional User Experience" }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      titleEn: "Backend Development",
      description: "إنشاء أنظمة  قوية وآمنة باستخدام Node.js و Express.js. أطور RESTful APIs قابلة للتطوير مع قواعد بيانات MongoDB، مع تطبيق أفضل ممارسات الأمان والأداء.",
      descriptionEn: "Creating robust and secure backend systems using Node.js and Express.js. I develop scalable RESTful APIs with MongoDB databases, implementing best security and performance practices.",
      icon: "fas fa-server",
      color: "#3a0ca3",
      features: [
        { text:  "RESTful APIs" , textEn: "RESTful APIs" },
        { text: "قواعد بيانات MongoDB", textEn: "MongoDB Databases" },
        { text: "أنظمة مصادقة آمنة", textEn: "Secure Authentication Systems" },
        { text: "معالجة البيانات الفورية", textEn: "Real-time Data Processing" }
      ]
    },
    {
      id: 3,
      title: "Full Stack Development",
      titleEn: "Full Stack Development",
      description: "حلول متكاملة من البداية للنهاية باستخدام MERN Stack. أقوم ببناء تطبيقات ويب كاملة تجمع بين واجهة مستخدم رائعة ونظام خلفي قوي، من الفكرة إلى النشر.",
      descriptionEn: "Complete end-to-end solutions using MERN Stack. I build full web applications combining beautiful frontend with powerful backend, from concept to deployment.",
      icon: "fas fa-layer-group",
      color: "#4cc9f0",
      features: [
        { text: "تطبيقات MERN Stack", textEn: "MERN Stack Applications" },
        { text: "تكامل كامل Frontend/Backend", textEn: "Full Frontend/Backend Integration" },
        { text: "نشر وإدارة التطبيقات", textEn: "Application Deployment & Management" },
        { text: "صيانة ودعم مستمر", textEn: "Continuous Maintenance & Support" }
      ]
    },
    {
      id: 4,
      title: "تحسين وصيانة المواقع",
      titleEn: "Website Optimization & Maintenance",
      description: "تحسين أداء المواقع الحالية، إصلاح المشاكل التقنية، وتحديث التقنيات القديمة. أضمن أن موقعك يعمل بأفضل أداء ممكن مع أحدث معايير الويب.",
      descriptionEn: "Optimizing existing website performance, fixing technical issues, and updating legacy technologies. I ensure your website runs at peak performance with latest web standards.",
      icon: "fas fa-tools",
      color: "#ffd166",
      features: [
        { text: "تحسين سرعة التحميل", textEn: "Loading Speed Optimization" },
        { text: "إصلاح الأخطاء التقنية", textEn: "Technical Bug Fixes" },
        { text: "تحديث التقنيات", textEn: "Technology Updates" },
        { text: "تحسين SEO", textEn: "SEO Optimization" }
      ]
    },
    {
      id: 5,
      title: "استشارات تقنية",
      titleEn: "Technical Consulting",
      description: "تقديم استشارات تقنية متخصصة لمشاريعك، اختيار التقنيات المناسبة، تصميم البنية التحتية، وأفضل الممارسات في تطوير الويب لضمان نجاح مشروعك.",
      descriptionEn: "Providing specialized technical consulting for your projects, choosing the right technologies, infrastructure design, and web development best practices to ensure your project's success.",
      icon: "fas fa-lightbulb",
      color: "#ef476f",
      features: [
        { text: "اختيار التقنيات المناسبة", textEn: "Technology Stack Selection" },
        { text: "تصميم البنية التحتية", textEn: "Architecture Design" },
        { text: "مراجعة الكود", textEn: "Code Review" },
        { text: "أفضل الممارسات", textEn: "Best Practices" }
      ]
    },
    {
      id: 6,
      title: "تطوير منصات التجارة الإلكترونية",
      titleEn: "E-commerce Platform Development",
      description: "بناء متاجر إلكترونية احترافية ومتكاملة مع أنظمة إدارة المنتجات، سلة التسوق، والدفع الآمن. حلول مخصصة تناسب احتياجات عملك التجاري.",
      descriptionEn: "Building professional and integrated e-commerce stores with product management systems, shopping cart, and secure payment. Custom solutions tailored to your business needs.",
      icon: "fas fa-shopping-cart",
      color: "#06d6a0",
      features: [
        { text: "إدارة المنتجات والمخزون", textEn: "Product & Inventory Management" },
        { text: "أنظمة دفع آمنة", textEn: "Secure Payment Systems" },
        { text: "لوحات تحكم إدارية", textEn: "Admin Dashboards" },
        { text: "تقارير وتحليلات", textEn: "Reports & Analytics" }
      ]
    },
  ],

  aboutQuestions: [
    {
      question: "من أنت وماذا تفعل؟",
      questionEn: "Who are you and what do you do?",
      answer:
        "أنا ربيع غانم، مطور ويب  متخصص في بناء تطبيقات الويب الحديثة باستخدام تقنيات MERN Stack. شغفي يكمن في تحويل الأفكار إلى تطبيقات ويب واقعية وسهلة الاستخدام.",
      answerEn:
        "I am Rabee Ghanem, a Full Stack Web Developer specializing in building modern web applications using MERN Stack technologies. My passion lies in turning ideas into real, user-friendly web applications.",
    },
    {
      question: "ماذا تفعل عندما لا تكون أمام الكمبيوتر؟",
      questionEn: "What do you do when you're away from the computer?",
      answer:
        "أحب العزف على العود - حيث أنقل المشاعر عبر الأوتار كما أنقل الأفكار عبر الكود. أستمتع بالجلوس مع رفاقي للنقاش وتبادل الأفكار. كما أن المطالعة شغفي الدائم، خاصة في الأدب وعلم النفس وتطوير الذات. أعتقد أن هذه الأنشطة تجعلني مطوراً أكثر إبداعاً وتوازناً.",
      answerEn:
        "I love playing the Oud - where I convey emotions through strings as I convey ideas through code. I enjoy sitting with friends for discussions and exchanging ideas. Reading is also my constant passion, especially in literature, psychology, and self-development. I believe these activities make me a more creative and balanced developer.",
    },
    {
      question: "ما هي أهدافك المهنية؟",
      questionEn: "What are your career goals?",
      answer:
        "أسعى لتطوير نفسي اكثر والانضمام إلى فرق ديناميكية حيث يمكنني المساهمة في بناء حلول تقنية مبتكرة، مع الاستمرار في تطوير مهاراتي وتعلم تقنيات جديدة في مجال تطوير الويب.",
      answerEn:
        "I aim to develop myself more and join a dynamic teams where I can contribute to building innovative technical solutions, while continuing to develop my skills and learn new technologies in web development.",
    },
    {
      question: "إلى أين تتجه في السنوات الخمس القادمة؟",
      questionEn: "Where are you heading in the next five years?",
      answer:
        "أتطلع لقيادة مشاريع تقنية مبتكرة، المساهمة في مجتمع المطورين، وتطوير حلول مفتوحة المصدر. أريد أن أكون الجسر بين التقنية المتقدمة وحل المشكلات الواقعية .",
      answerEn:
        "I aspire to lead innovative technical projects, contribute to the developer community, and develop open-source solutions. I want to be the bridge between advanced technology and solving real-world problems .",
    },
  ],

  projects: [
    {
      id: 1,
      title: "موقع د. حيان العربيد - أخصائي الأمراض الجلدية",
      titleEn: "Dr. Hayyan Al-Arabid - Dermatology Specialist Website",
      description:
        "موقع ويب طبي احترافي ومتكامل لطبيب أمراض جلدية، يتضمن واجهة أمامية أنيقة وسهلة الاستخدام مع نظام خلفي متكامل. يتيح للمرضى التعرف على الخدمات الطبية المقدمة، حجز المواعيد، والتواصل مع العيادة. يتميز بتصميم احترافي يعكس المستوى الطبي الرفيع للدكتور، مع دعم كامل للغة العربية وتجربة مستخدم سلسة على جميع الأجهزة.",
      descriptionEn:
        "A professional and comprehensive medical website for a dermatology specialist, featuring an elegant and user-friendly frontend with a fully integrated backend system. Allows patients to learn about medical services, book appointments, and contact the clinic. Features a professional design reflecting the doctor's high medical standards, with full Arabic language support and a smooth user experience across all devices.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Nodemailer",
        "Cloudinary",
      ],
      githubUrl: "",
      demoUrl: "https://drhayyan.com",
      icon: "fas fa-user-md",
    },
    {
      id: 2,
      title: "منصة أزياء للتجارة الإلكترونية",
      titleEn: "Style Loom - Full-Stack Fashion E-commerce Platform",
      description:
        "منصة تجارة إلكترونية متكاملة وحديثة متخصصة في مجال الأزياء. تتميز بواجهة مستخدم تفاعلية مع تصميم متجاوب، وضع داكن، وتجربة تصفح سلسة مع تأثيرات حركية متقدمة. تحتوي على لوحة تحكم إدارية قوية لإدارة المنتجات (CRUD) بشكل مباشر وزمن حقيقي، مع ميزات متقدمة مثل التصدير والعمليات المجمعة. تم بناء النظام باستخدام React و TypeScript ويتصل بقاعدة بيانات Firebase الزمنية الحقيقية لإدارة البيانات.",
      descriptionEn:
        "A comprehensive, modern full-stack e-commerce platform specialized in fashion. Features an interactive UI with responsive design, dark mode, and smooth browsing experience with advanced animations. Includes a powerful admin dashboard for real-time product management (CRUD) with advanced features like export and batch operations. Built with React and TypeScript, connected to Firebase Realtime Database for data management.",
      technologies: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "TypeScript",
        "Vite",
        "Redux Toolkit",
        "React Router",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/Rabee-Gh/style-loom-website-fullStack.git",
      demoUrl: "https://style-loom-fashion.onrender.com",
      icon: "fas fa-tshirt",
    },
    {
      id: 3,
      title: "المركز الصحي الذكي - نظام حجز المواعيد (Backend)",
      titleEn: "Smart Health Center - Appointment Booking System (Backend)",
      description:
        "نظام خلفي متكامل ومتقدم لإدارة مواعيد مركز صحي. يدير النظام كامل دورة حجز المواعيد بدءاً من تسجيل المستخدمين (مرضى، أطباء، مدراء) وحجز المواعيد الذكية مع التحقق من التوافر، وصولاً إلى تأكيدها وإكمالها. يتضمن ميزات متقدمة مثل نظام تقييم الأطباء، الإشعارات الفورية والبريدية، سجلات التدقيق الأمنية، توليد التقارير، وإدارة كاملة للصلاحيات (RBAC). تم تصميمه ليكون قابلاً للتوسع وآمناً.",
      descriptionEn:
        "A comprehensive and advanced backend system for managing a health center's appointments. It handles the full appointment lifecycle from user registration (patients, doctors, admins) and smart booking with availability checks, to confirmation and completion. Features advanced capabilities like doctor rating systems, real-time & email notifications, security audit logs, report generation, and full Role-Based Access Control (RBAC). Designed to be scalable and secure.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Argon2",
        "Socket.io",
        "Nodemailer",
        "Express-Validator",
        "Helmet",
        "ExcelJS",
        "PDFKit",
      ],
      githubUrl:
        "https://github.com/Rabee-Gh/smart_health_center-appointments-BackEnd.git",
      demoUrl:
        "https://www.postman.com/erp-kabbour-631059/workspace/smart-health-center-appointments/collection/49953951-c854a349-5baa-46fa-b62c-f854035a9c10?action=share&creator=49953951",
      icon: "fas fa-hospital-user",
    },
    {
      id: 4,
      title: "نظام متقدم للمدونات",
      titleEn: "Advanced Blogging System",
      description:
        "نظام متكامل للمدونات مع واجهة مستخدم حديثة وإمكانيات متقدمة مثل  تصنيف المقالات، إدارة المستخدمين، وإمكانية البحث المتقدم وعرض المقالات.",
      descriptionEn:
        "A comprehensive blogging system with a modern UI and advanced features like article categorization, user management, and advanced search capabilities. and show blogs.",
      technologies: [
        "React.js",
        "tailwind",
        "Redux",
        "Type script",
        "CSS",
        "Context",
      ],
      githubUrl: "https://github.com/Rabee-Gh/Task-6-Adv.git",
      demoUrl: "https://blogs-o478.onrender.com",
      icon: "fas fa-blog",
    },
    {
      id: 5,
      title: "نظام خلفي للتجارة الإلكترونية",
      titleEn: "E-commerce Backend System",
      description:
        "نظام خلفي متكامل ومقاوم لتطبيقات التجارة الإلكترونية، يوفر واجهة برمجية (API)  آمنة لإدارة المنتجات،المستخدمين وكامل العمليات",
      descriptionEn:
        "A comprehensive and robust backend system for e-commerce applications, providing a secure API for managing products, users and all operations",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "cloudinary",
        "JWT",
        "Argon2",
        "Nodemailer",
      ],
      githubUrl: "https://github.com/Rabee-Gh/E-commerce-Backend-System.git",
      demoUrl: "https://documenter.getpostman.com/view/45304972/2sB3dSNnzW",
      icon: "fas fa-shopping-cart",
    },
    {
      id: 6,
      title: "موقع ويب للرحلات",
      titleEn: "Tuscany website",
      description:
        "موقع متخصص بتنظيم الرحلات والسفريات مع تجربة مميزة وخدمة عملاء مميزة",
      descriptionEn:
        "A site specialized in organizing trips and travel with a distinctive experience and exceptional customer service.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AOS",
        "React Datepicker",
        "React Time Picker",
      ],
      githubUrl: "https://github.com/Rabee-Gh/Task-7-Adv-.git",
      demoUrl: "https://task-7-adv.onrender.com",
      icon: "fas fa-calendar-alt",
    },
    {
      id: 7,
      title: "منصة تعليمية للأطفال",
      titleEn: "Little Learners - Educational Platform for Kids",
      description:
        "منصة ويب تفاعلية مصممة خصيصاً لتقديم محتوى تعليمي ممتع وآمن للأطفال الصغار. تم بناؤه بتقنيات حديثة لضمان تجربة مستخدم سلسة وسريعة، مع واجهة جذابة وغنية بالأيقونات لتسهيل التفاعل والتعلم.",
      descriptionEn:
        "An interactive web platform specifically designed to deliver fun and safe educational content for young children. Built with modern technologies to ensure a smooth and fast user experience, featuring an engaging interface rich with icons to facilitate interaction and learning.",
      technologies: ["React", "CSS", "Vite", "JavaScript"],
      githubUrl: "https://github.com/Rabee-Gh/Task-3-Adv.git",
      demoUrl: "https://little-learners-4n96.onrender.com",
      icon: "fas fa-child",
    },
    {
      id: 8,
      title: "واجهة موقع عقارات",
      titleEn: "FLORA Real Estate Website ",
      description:
        "تصميم واجهة أمامية لموقع ويب متخصص في العقارات. يعرض الموقع قوائم للعقارات المتاحة مع تفاصيلها (المكان، السعر، النوع)، ويقدم قسمًا يشرح خطوات البحث عن شقة وتأجيرها. الواجهة مصممة لتكون واضحة وجذابة للزوار.",
      descriptionEn:
        "A frontend interface design for a real estate website. The site displays available property listings with their details (location, price, type) and features a section explaining the steps for searching and renting an apartment. The interface is designed to be clear and attractive for visitors.",
      technologies: ["React", "TypeScript", "CSS", "HTML", "Icons"],
      githubUrl: "https://github.com/Rabee-Gh/Task-4-Adv.git",
      demoUrl: "https://rabee-gh.github.io/Task-4-Adv/",
      icon: "fas fa-house-user",
    },
    {
      id: 9,
      title: " API لنظام أفلام",
      titleEn: "Movies Management API ",
      description:
        "مُخَدِّم ويب مبني باستخدام Express.js لتقديم واجهة برمجة تطبيقات (API) لإدارة الأفلام.",
      descriptionEn:
        "A web server built with Express.js to provide a Movies management API.",
      technologies: ["Node.js", "Express.js", "Morgan", "dotenv"],
      githubUrl: "https://github.com/Rabee-Gh/movie-store-api.git",
      icon: "fas fa-server",
    },
    {
      id: 10,
      title: "لوحة تحكم - نظام إدارة المنتجات",
      titleEn: "Dashboard - Product Management System (CRUD)",
      description:
        "لوحة تحكم ويب تفاعلية متكاملة لإدارة المنتجات (عمليات إنشاء، قراءة، تحديث، وحذف). تم بناؤها باستخدام React و TypeScript ضمن بيئة Vite السريعة. تتضمن الواجهة تصميمًا احترافيًا باستخدام مكتبات Bootstrap، وتوفر تجربة مستخدم فعالة لإدارة البيانات.",
      descriptionEn:
        "A fully interactive web dashboard for comprehensive product management (Create, Read, Update, Delete operations). Built with React and TypeScript in a fast Vite environment. Features a professional interface using Bootstrap libraries, delivering an efficient user experience for data management.",
      technologies: [
        "React",
        "React-Bootstrap",
        "Axios",
        "TypeScript",
        "Vite",
        "React Router DOM",
        "Bootstrap Icons",
      ],
      githubUrl: "https://github.com/Rabee-Gh/Task-5-Adv.git",
      demoUrl: "https://rabee-gh.github.io/Task-5-Adv/",
      icon: "fas fa-chart-line",
    },
    {
      id: 11,
      title: "مجتمع عشاق الأنمي",
      titleEn: "Anime Lovers - Anime Enthusiasts Community",
      description:
        "موقع ويب تفاعحي مخصص لعشاق عالم الأنمي. يعرض الموقع معلومات عن أبرز المسلسلات والشخصيات، مع معرض صور تفاعلي، قسم للشهادات أو آراء المعجبين، وخيارات لتخصيص واجهة المستخدم (مثل الخلفية العشوائية). تم تصميمه ليقدم تجربة غامرة لمحبي هذا الفن.",
      descriptionEn:
        "An interactive website dedicated to anime enthusiasts. The site features information about top series and characters, an interactive image gallery, a testimonials section, and options for UI customization (like random background). Designed to deliver an immersive experience for fans of this art form.",
      technologies: ["HTML", "CSS", "JavaScript", "Local storage"],
      githubUrl: "https://github.com/Rabee-Gh/Anime-Lovers.git",
      demoUrl: "https://rabee-gh.github.io/Anime-Lovers/",
      icon: "fas fa-tv",
    },
    {
      id: 12,
      title: " منصة استعراض ألعاب",
      titleEn: "Cyborg - Gaming Platform",
      description:
        "موقع ويب تفاعلي مبني باستخدام React.js لعرض الألعاب الشهيرة والمحتوى المرتبط بها. يعرض الموقع قوائم للألعاب الأكثر شعبية مع تفاصيل مثل التصنيف، عدد اللاعبين، ويحاكي تجربة مكتبة ألعاب رقمية تحتوي على ساعات اللعب وتاريخ الإضافة. يتميز بواجهة مستخدم عصرية وتصميم متجاوب باستخدام Bootstrap.",
      descriptionEn:
        "An interactive website built with React.js for showcasing popular games and related content. The site displays lists of most popular games with details like category, player counts, and simulates a digital game library experience with playtime hours and addition dates. Features a modern UI and responsive design using Bootstrap.",
      technologies: [
        "React",
        "React Bootstrap",
        "React OWL Carousel",
        "Bootstrap",
        "React Router",
        "React Icons",
      ],
      githubUrl: "https://github.com/Rabee-Gh/Cyborg.git",
      demoUrl: "https://rabee-gh.github.io/Cyborg/",
      icon: "fas fa-gamepad",
    },
    {
      id: 13,
      title: "مجتمع ومركز للألعاب",
      titleEn: "Gaming Center - Gaming Community",
      description:
        "موقع ويب متكامل مخصص لعالم الألعاب، يعمل كمركز مجتمعي للاعبين. يعرض الموقع آراء اللاعبين، معارض الصور للألعاب المشهورة، نصائح وإرشادات، وأخبارًا ومقالات متعلقة بهذا المجال. مصمم ليكون نقطة تجمع للمهتمين بثقافة الألعاب.",
      descriptionEn:
        "A comprehensive website dedicated to the gaming world, serving as a community hub for players. The site features player reviews, galleries of popular games, tips and guides, and related news and articles. Designed to be a gathering point for those interested in gaming culture.",
      technologies: ["HTML", "CSS", "JavaScript", "Icons"],
      githubUrl: "https://github.com/Rabee-Gh/Gaming-center.git",
      demoUrl: "https://rabee-gh.github.io/Gaming-center/",
      icon: "fas fa-gamepad",
    },
    {
      id: 14,
      title: "خادم API لإدارة المنتجات باستخدام",
      titleEn: "Product Management API Server",
      description:
        "خادم ويب تم إنشاؤه باستخدام Express.js لتوفير واجهة برمجية (API) لإدارة المنتجات. يتضمن نظامًا  ",
      descriptionEn:
        "A web server built with Express.js to provide a product management API. It features a  system for",
      technologies: ["Node.js", "Express.js", "Morgan", "dotenv"],
      githubUrl: "https://github.com/Rabee-Gh/Node-Task6.git",
      icon: "fas fa-server",
    },
    {
      id: 15,
      title: "Kasper",
      titleEn: "Kasper",
      description:
        "قالب ويب مخصص لعرض التصاميم الإبداعية، يركز على تقنيات CSS المتقدمة لتقديم محتوى مرئي جذاب. تم تصميمه للتعامل مع معارض الصور وعرض الفيديوهات بطريقة فنية وعصرية، ليكون قاعدة مثالية للمصممين أو المحفظات الإبداعية التي تريد إبراز أعمالها.",
      descriptionEn:
        "A web template designed for showcasing creative designs, focusing on advanced CSS techniques to deliver visually appealing content. It is crafted to handle image galleries and video displays in an artistic and modern manner, making it an ideal foundation for designers or creative portfolios looking to highlight their work.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Rabee-Gh/Template-2.git",
      demoUrl: "https://rabee-gh.github.io/Template-2/",
      icon: "fas fa-palette",
    },
    {
      id: 16,
      title: "Leon",
      titleEn: "Leon",
      description:
        "قالب ويب مخصص لعرض التصاميم الإبداعية، يركز على تقنيات CSS المتقدمة لتقديم محتوى مرئي جذاب. تم تصميمه للتعامل مع معارض الصور وعرض الفيديوهات بطريقة فنية وعصرية، ليكون قاعدة مثالية للمصممين أو المحفظات الإبداعية التي تريد إبراز أعمالها.",
      descriptionEn:
        "A web template designed for showcasing creative designs, focusing on advanced CSS techniques to deliver visually appealing content. It is crafted to handle image galleries and video displays in an artistic and modern manner, making it an ideal foundation for designers or creative portfolios looking to highlight their work.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Rabee-Gh/Template-2.git",
      demoUrl: "https://rabee-gh.github.io/Template-1/",
      icon: "fas fa-palette",
    },
    {
      id: 17,
      title: "نظام إدارة مكتبة",
      titleEn: "Library Management System",
      description:
        "واجهة ويب لنظام إدارة مكتبة بسيط. يعرض الموقع قائمة للكتب مع معلوماتها الأساسية مثل اسم الكتاب، المؤلف، التصنيف، ورمز المكان، إلى جانب حالة التوفر. مناسب لإدارة وعرض مجموعات الكتب الصغيرة.",
      descriptionEn:
        "A web interface for a simple library management system. The site displays a list of books with their basic information such as title, author, category, location code, and availability status. Suitable for managing and displaying small book collections.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Rabee-Gh/task-1-adv.git",
      demoUrl: "https://rabee-gh.github.io/task-1-adv/",
      icon: "fas fa-book",
    },
  ],

  skills: {
    frontend: [
      {
        name: "React.js",
        nameEn: "React.js",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "مكتبة JavaScript لبناء واجهات المستخدم التفاعلية والمكونات القابلة لإعادة الاستخدام",
        descriptionEn:
          "JavaScript library for building interactive user interfaces and reusable components",
        icon: "fab fa-react",
        color: "#61DAFB",
      },
      {
        name: "React Hooks",
        nameEn: "React Hooks",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "وظائف تسمح باستخدام state وميزات React الأخرى في المكونات الوظيفية",
        descriptionEn:
          "Functions that let you use state and other React features in functional components",
        icon: "fas fa-code",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        nameEn: "Next.js",
        level: "متوسط",
        levelEn: "Intermediate",
        description:
          "إطار عمل React لبناء تطبيقات ويب مع تصيير من جانب الخادم وتوليد مواقع ثابتة",
        descriptionEn:
          "React framework for building web applications with server-side rendering and static site generation",
        icon: "fas fa-arrow-right",
        color: "#000000",
      },
      {
        name: "HTML5",
        nameEn: "HTML5",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "لغة ترميز لإنشاء هيكل صفحات الويب مع دعم العناصر الدلالية الحديثة",
        descriptionEn:
          "Markup language for creating web page structure with modern semantic elements support",
        icon: "fab fa-html5",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        nameEn: "CSS3",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "لغة تنسيق لتصميم صفحات الويب مع دعم Animations وFlexbox وGrid",
        descriptionEn:
          "Styling language for web design with support for Animations, Flexbox, and Grid",
        icon: "fab fa-css3-alt",
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        nameEn: "JavaScript",
        level: "متقدم",
        levelEn: "Advanced",
        description: "لغة برمجة لتطوير الويب التفاعلي مع دعم ECMAScript الحديث",
        descriptionEn:
          "Programming language for interactive web development with modern ECMAScript support",
        icon: "fab fa-js",
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        nameEn: "TypeScript",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "لغة برمجة مطورة عن JavaScript مع نظام أنواع ثابت لبناء تطبيقات أكثر موثوقية",
        descriptionEn:
          "Superset of JavaScript with static type system for building more reliable applications",
        icon: "fas fa-code",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        nameEn: "Tailwind CSS",
        level: "متقدم",
        levelEn: "Advanced",
        description: "إطار عمل CSS utility-first لبناء تصميمات مخصصة بسرعة",
        descriptionEn:
          "A utility-first CSS framework for rapidly building custom designs",
        icon: "fas fa-wind",
        color: "#38B2AC",
      },
      {
        name: "Bootstrap",
        nameEn: "Bootstrap",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "إطار عمل CSS سريع الاستجابة لبناء واجهات ويب حديثة ومتجاوبة",
        descriptionEn:
          "Responsive CSS framework for building modern, mobile-first websites",
        icon: "fab fa-bootstrap",
        color: "#7952B3",
      },
      {
        name: "Redux Toolkit",
        nameEn: "Redux Toolkit",
        level: "متوسط",
        levelEn: "Intermediate",
        description: "أداة رسمية وفعالة لتطوير التطبيقات باستخدام Redux",
        descriptionEn:
          "The official, opinionated toolset for efficient Redux development",
        icon: "fas fa-box",
        color: "#764ABC",
      },
      {
        name: "Vite",
        nameEn: "Vite",
        level: "متوسط",
        levelEn: "Intermediate",
        description:
          "أداة بناء سريعة جداً توفر تجربة تطوير محسنة مع Hot Module Replacement",
        descriptionEn:
          "Next generation frontend tooling with lightning fast Hot Module Replacement",
        icon: "fas fa-bolt",
        color: "#646CFF",
      },
      {
        name: "Material-UI",
        nameEn: "Material-UI",
        level: "متوسط",
        levelEn: "Intermediate",
        description: "مكتبة مكونات React تطبق تصميم Material Design من Google",
        descriptionEn:
          "React component library implementing Google's Material Design",
        icon: "fas fa-palette",
        color: "#0081CB",
      },
    ],

    backend: [
      {
        name: "Node.js",
        nameEn: "Node.js",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "بيئة تشغيل JavaScript على جانب الخادم لبناء تطبيقات قابلة للتطوير",
        descriptionEn:
          "JavaScript runtime environment for building scalable server-side applications",
        icon: "fab fa-node-js",
        color: "#339933",
      },
      {
        name: "Express.js",
        nameEn: "Express.js",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "إطار عمل ويب خفيف الوزن وسريع لبناء تطبيقات Node.js وAPIs",
        descriptionEn:
          "Fast, unopinionated, minimalist web framework for Node.js and APIs",
        icon: "fas fa-server",
        color: "#000000",
      },
      {
        name: "MongoDB",
        nameEn: "MongoDB",
        level: "متوسط",
        levelEn: "Intermediate",
        description: "قاعدة بيانات NoSQL وثائقية قابلة للتطوير وعالية الأداء",
        descriptionEn: "Scalable, high-performance NoSQL document database",
        icon: "fas fa-database",
        color: "#47A248",
      },
      {
        name: "RESTful APIs",
        nameEn: "RESTful APIs",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "تصميم وبناء واجهات برمجة تطبيقات RESTful مع أفضل الممارسات",
        descriptionEn:
          "Designing and building RESTful APIs with best practices",
        icon: "fas fa-network-wired",
        color: "#FF6B6B",
      },
      {
        name: "Firebase",
        nameEn: "Firebase",
        level: "متوسط",
        levelEn: "Intermediate",
        description:
          "منصة تطوير تطبيقات الويب من Google مع خدمات Authentication وRealtime Database",
        descriptionEn:
          "Google's app development platform with Authentication and Realtime Database services",
        icon: "fas fa-fire",
        color: "#FFCA28",
      },
      {
        name: "Socket.IO",
        nameEn: "Socket.IO",
        level: "مبتدئ",
        levelEn: "Beginner",
        description:
          "مكتبة لبناء تطبيقات ويب في الوقت الحقيقي مع اتصالات ثنائية الاتجاه",
        descriptionEn:
          "Library for building real-time web applications with bidirectional communication",
        icon: "fas fa-plug",
        color: "#010101",
      },
      {
        name: "JWT",
        nameEn: "JWT",
        level: "متوسط",
        levelEn: "Intermediate",
        description: "توكنات ويب JSON لتوثيق المستخدمين ونقل المعلومات الآمنة",
        descriptionEn:
          "JSON Web Tokens for user authentication and secure information exchange",
        icon: "fas fa-key",
        color: "#000000",
      },
      {
        name: "Argon2",
        nameEn: "Argon2",
        level: "متوسط",
        levelEn: "Intermediate",
        description:
          "خوارزمية تشفير آمنة لكلمات المرور مع مقاومة لهجمات القوة الغاشمة",
        descriptionEn:
          "Secure password hashing algorithm with resistance to brute-force attacks",
        icon: "fas fa-lock",
        color: "#4A90E2",
      },
      {
        name: "Cookie-parser",
        nameEn: "Cookie-parser",
        level: "متوسط",
        levelEn: "Intermediate",
        description:
          "وسيط Express.js لتحليل وتعديل ملفات تعريف الارتباط في تطبيقات Node.js",
        descriptionEn:
          "Express.js middleware for parsing and manipulating cookies in Node.js applications",
        icon: "fas fa-cookie",
        color: "#D4A76A",
      },
      {
        name: "Nodemailer",
        nameEn: "Nodemailer",
        level: "متوسط",
        levelEn: "Intermediate",
        description:
          "وحدة Node.js لإرسال رسائل البريد الإلكتروني من تطبيقات الويب",
        descriptionEn:
          "Node.js module for sending emails from web applications",
        icon: "fas fa-envelope",
        color: "#EA4335",
      },
    ],

    tools: [
      {
        name: "Git & GitHub",
        nameEn: "Git & GitHub",
        level: "متقدم",
        levelEn: "Advanced",
        description:
          "نظام تحكم في الإصدار ومنصة استضافة كود للتعاون في المشاريع",
        descriptionEn:
          "Version control system and code hosting platform for collaborative projects",
        icon: "fab fa-github",
        color: "#181717",
      },
      {
        name: "VS Code",
        nameEn: "VS Code",
        level: "متقدم",
        levelEn: "Advanced",
        description: "محرر كود خفيف الوزن وقوي مع دعم ممتاز للإضافات",
        descriptionEn:
          "Lightweight yet powerful code editor with excellent extension support",
        icon: "fas fa-code",
        color: "#007ACC",
      },
      {
        name: "Postman",
        nameEn: "Postman",
        level: "متوسط",
        levelEn: "Intermediate",
        description: "منصة لبناء واختبار واجهات برمجة التطبيقات (APIs)",
        descriptionEn: "Platform for building, testing, and documenting APIs",
        icon: "fas fa-paper-plane",
        color: "#FF6C37",
      },
      {
        name: "Vercel",
        nameEn: "Vercel",
        level: "متوسط",
        levelEn: "Intermediate",
        description: "منصة نشر للتطبيقات الأمامية مع أداء عالي وCDN عالمي",
        descriptionEn:
          "Deployment platform for frontend applications with high performance and global CDN",
        icon: "fas fa-cloud",
        color: "#000000",
      },
      {
        name: "Netlify",
        nameEn: "Netlify",
        level: "متوسط",
        levelEn: "Intermediate",
        description: "منصة شاملة للويب مع نشر مستمر، استضافة، ووظائف الخادم",
        descriptionEn:
          "All-in-one platform for the web with continuous deployment, hosting, and serverless functions",
        icon: "fas fa-globe",
        color: "#00C7B7",
      },
      {
        name: "Render",
        nameEn: "Render",
        level: "مبتدئ",
        levelEn: "Beginner",
        description: "منصة سحابية لاستضافة التطبيقات والخدمات وقواعد البيانات",
        descriptionEn:
          "Cloud platform for hosting applications, services, and databases",
        icon: "fas fa-cloud-upload-alt",
        color: "#46B3E6",
      },
    ],
  },
  experience: [
    {
      title: "مطور الواجهة الأمامية (تدريب)",
      titleEn: "Frontend Developer (Internship)",
      company: "وكالة فوكال إكس",
      companyEn: "Focal X Agency",
      location: "عن بُعد",
      locationEn: "Remote",
      date: "يونيو 2024 – ديسمبر 2025",
      dateEn: "June 2024 – December 2025",
      description:
        "العمل على +15 مشروع كامل في ReactJS و JavaScript عادي لمعالجة تصميمات ويب تفاعلية كاملة مثل (المدونات، مركز الألعاب، مركز السفر). بناء واجهات مستخدم متجاوبة مع التركيز على تجربة المستخدم والأداء.",
      descriptionEn:
        "Work on +15 full projects in ReactJS & Vanilla JavaScript to handle full reactive web designs like (Blogs, Gaming Center, Traveling Center). Building responsive user interfaces with focus on UX and performance.",
      recommendationUrl: "https://drive.google.com/file/d/1ZEUAcTaZHWLT82pV-W2eRD2vJZZFrLgS/view?usp=sharing",
    },
    {
      title: "مطور الواجهة الخلفية (تدريب)",
      titleEn: "Backend Developer (Internship)",
      company: "وكالة فوكال إكس",
      companyEn: "Focal X Agency",
      location: "عن بُعد",
      locationEn: "Remote",
      date: "سبتمبر 2025 – ديسمبر 2025",
      dateEn: "September 2025 – December 2025)",
      description:
        "العمل على +7 مشاريع كاملة في NodeJS لمعالجة واجهات برمجة التطبيقات RESTful مثل (المدونات، التجارة الإلكترونية، نظام إدارة المهام). تطوير واجهات برمجة تطبيقات آمنة وقابلة للتطوير مع تنفيذ المصادقة والتفويض باستخدام JWT.",
      descriptionEn:
        "Work on +7 full projects in NodeJS to handle RESTful APIs like (Blogs, Ecommerce, Task Management System). Developing secure and scalable APIs with authentication and authorization implementation using JWT.",
      recommendationUrl: "https://drive.google.com/file/d/1ovK397rWAIElvEIWOdPVilg3tq0UyNGW/view?usp=sharing",
    },
    {
      title: "العمل عن بعد ",
      titleEn: "Freelancer",
      company: "العديد من العملاء",
      companyEn: "multiple clients",
      location: "عن بُعد",
      locationEn: "Remote",
      date: " 2024 – حتى الان",
      dateEn: " 2024 – Present",
      description: "العمل مع اكثر من عميل مع تلبية كافة مطلباتهم بحرفية وابداع",
      descriptionEn:
        "Working with multiple clients while professionally and creatively meeting all their requirements.",
    },
  ],

  education: [
    {
      degree: "بكالوريوس هندسة البرمجيات",
      degreeEn: "BA Software Engineering",
      institution: "جامعة تشرين",
      institutionEn: "Tishreen University",
      period: " 2021 –  2026",
      periodEn: " 2021 – 2026",
      description:
        "متابعة درجة البكالوريوس في هندسة البرمجيات مع التركيز على تطوير الويب، هياكل البيانات، الخوارزميات، وقواعد البيانات.",
      descriptionEn:
        "Pursuing a Bachelor's degree in Software Engineering with focus on web development, data structures, algorithms, and databases.",
      certificates: [
        {
          name: "دبلوم تطوير الواجهة الأمامية",
          nameEn: "Frontend Development Diploma",
          issuer: "فوكال إكس",
          issuerEn: "Focal X",
          year: "2024",
          icon: "fas fa-code",
          url: "https://drive.google.com/file/d/1jFhtMnF0o1Ly-bo1IWeCApf5Fpa-8xwQ/view?usp=sharing",
        },
        {
          name: "دبلوم تطوير الواجهة الخلفية NodeJS",
          nameEn: "Backend NodeJS Development Diploma",
          issuer: "فوكال إكس",
          issuerEn: "Focal X",
          year: "2025",
          icon: "fas fa-server",
          url: "https://drive.google.com/file/d/1eZWa91WtEjMmw2pRBMSYGn1aZofO09eQ/view?usp=sharing",
        },
        {
          name: "اللغة الإنجليزية - Active Reading Course",
          nameEn: "English - Active Reading Course",
          issuer: "ETC",
          issuerEn: "ETC",
          year: "2021",
          icon: "fas fa-book-open",
          url: "https://drive.google.com/file/d/1YJQXxphnbEiAFjuV1e9fQbWK7543acFt/view?usp=sharing",
        },
        {
          name: "اللغة الإنجليزية - Tense Buster Course",
          nameEn: "English - Tense Buster Course",
          issuer: "ETC",
          issuerEn: "ETC",
          year: "2021",
          icon: "fas fa-language",
          url: "https://drive.google.com/file/d/1aq8MATl0VKRr2KVkL9H7rIy8ggrUbhm1/view?usp=sharing",
        },
      ],
    },
  ],
};
