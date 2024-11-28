import {
  FaBootstrap,
  FaCloud,
  FaCodepen,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaFacebook,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLaravel,
  FaLinkedin,
  FaNode,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSkype,
  FaStripe,
  FaTiktok,
  FaWhatsapp,
  FaWordpress,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdCall,
  MdCode,
  MdDevices,
  MdMail,
  MdSpeed,
  MdToggleOff,
} from "react-icons/md";
import { TbBrandFiverr, TbWashDryShade } from "react-icons/tb";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAxios,
  SiEslint,
  SiFramer,
  SiFreelancer,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiPrettier,
  SiReactrouter,
  SiRedux,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiUpwork,
  SiVite,
} from "react-icons/si";
import { IoIosArrowDown, IoMdColorPalette } from "react-icons/io";
export const Data = {
  skills: [
    {
      name: "HTML",
      icon: FaHtml5,
      color: "border-orange-500",
      health: "90",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "border-blue-500",
      health: "90",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "border-sky-500",
      health: "95",
    },
    {
      name: "Shadcn/UI",
      icon: TbWashDryShade,
      color: "border-white",
      health: "90",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      color: "border-purple-500",
      health: "85",
    },
    {
      name: "Meterial UI ",
      icon: SiMui,
      color: "border-blue-600",
      health: "60",
    },
    {
      name: "Javascript",
      icon: FaJs,
      color: "border-yellow-500",
      health: "90",
    },
    {
      name: "ReactJs",
      icon: FaReact,
      color: "border-sky-500",
      health: "90",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "border-purple-500",
      health: "80",
    },
    {
      name: "NextJs",
      icon: SiNextdotjs,
      color: "border-white",
      health: "85",
    },
    {
      name: "WordPress",
      icon: FaWordpress,
      color: "border-sky-900",
      health: "60",
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "border-white",
      health: "50",
    },
  ],
  projects: [
    {
      id: 1,
      name: "MHS Tech Ventures",
      url: "http://mhstechventures.com/",
      gitLink: "https://github.com/saleemullahkhansaleem/mhs",
      image: "projects/mhs-tech-ventures-sm.webp",
      imageFull: "projects/mhs-tech-ventures-lg.webp",
      tagline: "An IT Company Portfolio",
      usedTools: [
        { name: "React", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn/UI", icon: TbWashDryShade },
      ],
      description:
        "Developed the MHS Tech Venture website, a professional IT services company, using React, Tailwind CSS, and ShadCN/UI for a sleek, modern design and user experience. The site features an interactive services section, a testimonial carousel, and animated components powered by Framer Motion, highlighting their expertise in software consultancy, web development, and mobile solutions.",
    },
    {
      id: 2,
      name: "TZ Education Provider",
      url: "https://tzed.org/",
      gitLink: "https://github.com/saleemullahkhansaleem/tz-edu-provider",
      image: "projects/tzedu-sm.webp",
      imageFull: "projects/tzedu-lg.webp",
      tagline: "An Education Provider Orgnization in Australia",
      usedTools: [
        { name: "React", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn/UI", icon: TbWashDryShade },
      ],
      description:
        "Developed a responsive, modern website for TZ Education Provider, an Australian organization specializing in educational services. Built using React, Tailwind CSS, and ShadCN/UI, the website features a streamlined, user-friendly design optimized for accessibility and visual appeal. Leveraging HTML, CSS, and JavaScript, the project highlights dynamic content presentation and seamless navigation to enhance the user experience for students and educators alike.",
    },
    {
      id: 3,
      name: "Steadfast Security",
      url: "https://steadfastsecurity.com.pk/",
      gitLink: "https://github.com/saleemullahkhansaleem/stead-fast",
      image: "projects/steadfast-sm.webp",
      imageFull: "projects/steadfast-lg.webp",
      tagline: "A security guard management system and portfolio ",
      usedTools: [
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn/UI", icon: TbWashDryShade },
        { name: "Postgres", icon: SiPostgresql },
        { name: "Laravel", icon: FaLaravel },
        { name: "PHP", icon: FaPhp },
      ],
      description:
        "Developed a comprehensive security guard management system and portfolio website, Steadfast Security. The platform integrates powerful front-end technologies like React, Redux, and Tailwind CSS with ShadCN/UI to create an efficient, responsive, and visually engaging user interface. Utilizing Laravel, PHP, and PostgreSQL on the backend, the site features robust data management capabilities, allowing seamless handling of security guard schedules, client information, and service records. This project emphasizes both functionality and aesthetics, creating a professional, user-friendly experience for security service providers.",
    },
    {
      id: 4,
      name: "Win Source International",
      url: "https://winsourceinternational.com.pk/",
      gitLink:
        "https://github.com/saleemullahkhansaleem/winsourceinternational.com.pk",
      image: "projects/wsi-sm.webp",
      imageFull: "projects/wsi-lg.webp",
      tagline: "Mine and Minerals platform",
      usedTools: [
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn/UI", icon: TbWashDryShade },
        { name: "Postgres", icon: SiPostgresql },
        { name: "Laravel", icon: FaLaravel },
        { name: "PHP", icon: FaPhp },
      ],
      description:
        "Win Source International is a specialized platform designed for the mining and minerals industry. This project combines modern web development techniques with robust back-end architecture to provide a seamless user experience. I utilized React for building dynamic user interfaces and Redux for efficient state management. Tailwind CSS and Shadcn/UI were used to craft a visually appealing and responsive design. The back-end, developed in Laravel and PHP, is powered by a PostgreSQL database for reliable data handling. The platform supports features like product listings, real-time updates, and advanced filtering options tailored to the mining and minerals sector. My contributions included full-stack development, API integrations, and optimization for scalability and performance.",
    },
    {
      id: 5,
      name: "MS International",
      url: "https://msinternational.com.pk/",
      gitLink: "",
      image: "projects/msinternational-sm.webp",
      imageFull: "projects/msinternational-lg.webp",
      tagline: "A multinational trading ecommerce site",
      usedTools: [
        { name: "Wordpress", icon: FaWordpress },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
      ],
      description:
        "MS International is a comprehensive e-commerce platform designed for a multinational trading business. I was responsible for the full front-end development, ensuring a seamless user experience across all devices with a responsive design. The site was built using WordPress for content management, with HTML and CSS for structure and styling. The platform supports international trade by offering a secure and user-friendly interface for browsing and purchasing various products. I focused on customizing WordPress themes and integrating essential features, such as product catalogs, order management, and payment gateways, to meet the unique needs of MS International's trading operations.",
    },
    {
      id: 6,
      name: "Metal and Gas",
      url: "https://metalandgas.vercel.app/",
      gitLink: "https://github.com/saleemullahkhansaleem/mg",
      image: "projects/mg-sm.webp",
      imageFull: "projects/mg-lg.webp",
      tagline: "A complex UI design and animation",
      usedTools: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: FaNodeJs },
      ],
      description:
        "Metal and Gas is a web application showcasing a sophisticated user interface with intricate animations and responsive design. Developed with a combination of modern front-end and back-end technologies, this project highlights advanced UI/UX techniques and seamless performance. The application leverages Tailwind CSS for styling, ensuring a visually appealing and consistent design, while Node.js powers the backend, enabling robust and scalable functionality. This project serves as a testament to the seamless integration of design and development expertise.",
    },
    {
      id: 7,
      name: "Red Bridge",
      url: "https://redbridgefire.com/",
      gitLink: "https://github.com/saleemullahkhansaleem/red-bridge",
      image: "projects/red-bridge-sm.webp",
      imageFull: "projects/red-bridge-lg.webp",
      tagline: "Fire and Security solutions",
      usedTools: [
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "MUI", icon: SiMui },
      ],
      description:
        "Developed a professional website for Red Bridge, a company specializing in fire and security solutions. Built with React, Redux, and Bootstrap, the site combines robust functionality with a sleek design, ensuring a user-friendly experience across devices. The use of MUI and CSS enhances the visual appeal and responsiveness, while JavaScript adds interactivity to key sections, effectively showcasing Red Bridge's services in fire protection and security management. This project highlights advanced UI/UX techniques tailored for the safety industry.",
    },
    {
      id: 8,
      name: "Jurhay Shop",
      url: "https://my-medi-vercel.vercel.app/",
      gitLink: "https://github.com/saleemullahkhansaleem",
      image: "projects/jurhay-shop-site-sm.webp",
      imageFull: "projects/jurhay-shop-site-lg.webp",
      tagline: "An e-commerce platform",
      usedTools: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Redux", icon: SiRedux },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: FaNode },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: FaDatabase },
      ],
      description:
        "Jurhay Shop is a robust e-commerce platform designed for seamless online shopping experiences. Built with Next.js and React, the application delivers dynamic and responsive interfaces optimized for performance. Redux ensures state management is efficient, supporting features like user authentication, shopping cart management, and real-time updates. The back-end is powered by Node.js and Express.js, with MongoDB and Mongoose providing a scalable and flexible database solution. Tailwind CSS is used to create a modern and visually appealing design, ensuring the platform is fully responsive. My contributions included full-stack development, API design, and implementing secure payment and inventory management features.",
    },
    {
      id: 9,
      name: "Global Links Technologies",
      url: "https://globallinkstechnologies.com/",
      gitLink: "https://github.com/saleemullahkhansaleem/global-links-tech",
      image: "projects/global-links-tech-sm.webp",
      imageFull: "projects/global-links-tech-lg.webp",
      tagline: "An IT Services Providing Company Portfolio",
      usedTools: [
        { name: "React", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn/UI", icon: TbWashDryShade },
      ],
      description:
        "Developed a dynamic portfolio website for Global Links Technologies, an IT services provider. Leveraging React, Tailwind CSS, and ShadCN/UI, the site features a sleek, responsive design that highlights the company's expertise and services in technology solutions. Built with HTML, CSS, and JavaScript, the website provides a smooth user experience with interactive components and modern UI elements. This project showcases a professional, visually appealing platform tailored for the IT industry, emphasizing usability and responsiveness.",
    },
  ],
  experiences: [
    {
      title: "Front-end Engineer",
      org: "MHS Tech Ventures Pvt Ltd Islamabad",
      details:
        "As a Frontend Engineer, I have developed and managed over 10 projects, including complex portals, portfolio websites, and management systems, using React, Tailwind CSS, and ShadCN/UI. My role includes leading the IT team and overseeing UI/UX design, form handling, API integration, and state management with Redux and Redux Toolkit. These projects showcase my ability to deliver high-quality, scalable solutions tailored to diverse business needs",
      startDate: "Sep 2024",
      endDate: "Present",
    },
    {
      title: "Senior React.js Developer",
      org: "Lala Group of Companies Rawalpindi",
      details:
        "As a senior react developer Working on complex projects like: Flight booking, Hotel booking, Visa booking, Umrah booking and Hajj booking e.t.c. And have the responsibilities like: Control UI, Form handling, API fetching, use redux and redux toolkit e.t.c",
      startDate: "Dec 2023",
      endDate: "Sep 2024",
    },
    {
      title: "React.js Developer",
      org: "Local Projects and self learning",
      details:
        "Develop webapps using React.js, Next.js and other technologies like HTML, CSS, Bootstrap, Tailwind CSS, Javascript, Redux, Redux Toolkit",
      startDate: "July 2023",
      endDate: "Dec 2023",
    },
    {
      title: "Web Developer",
      org: "URRAAN - Runway To Digital Flight",
      details:
        "Complete Complete the Tasks in the following: HTML, CSS, Bootstrap, Javascript, jQuery, PHP, MySql and WordPress",
      startDate: "01 May 2019",
      endDate: "30 Jun 2019",
    },
    {
      title: "Web Developer and Graphics Designer",
      org: "Fiverr.com",
      details:
        "Complete projects with 100% positive review (rating). www.fiverr.com/saliyousafzai",
      startDate: "Dec 2014",
      endDate: "present",
    },
  ],
  education: [
    {
      title: "BCS Hons (Bachlor In Computer Science)",
      org: "Hazara University Mansehra Pakistan",
      details:
        "Major Subjects: Data Structure, Analysis of Algorithms,Theory of Automata, Database (DBMS) Relational Database (RDBMS), Operating System, ECommerce, Artificial Intelligence, Modern Programming Languages (MPL), Software Engineering, Graphics and Computer Networking, etc . . .",
      startDate: "Mar 2014",
      endDate: "Feb 2018",
    },
    {
      title: "FSc (Computer Science)",
      org: "Tameer e Millat Hazara Public School & College Shinkiari Mansehra Pakistan",
      details: "Major Subjects: Computer Science, Mathematics and Physics.",
      startDate: "2010",
      endDate: "2012",
    },
    {
      title: "SSC (Science)",
      org: "Govt High School Shinkiari Mansehra Pakistan",
      details: "Major Subjects: Biology, Chemistry, Mathematics and Physics.",
      startDate: "2008",
      endDate: "2010",
    },
  ],
  awards: [
    {
      title: "Best Certificate Designer Award",
      org: "COMSATS University Abbottabad",
      details:
        "In certificate designing competition of COMSATS IT Center's Wintercamp 2017 ",
      startDate: "25 Feb 2017",
      endDate: null,
    },
  ],
  certificates: [
    {
      title: "COMSATS IT Center Wintercamp 2018",
      org: "COMSATS University Abbottabad Pakistan",
      details:
        "Complete the following cource in one weeks: YouTube SEO, WordPress Theme Customization, Linux (Instalation, Applications and Banefits), PMP(Project Management Professional) and Freelancing (Upwork, Freelancer, Peopleperhour and Fiverr)",
      startDate: "12 Feb 2018",
      endDate: "16 Feb 2018",
    },
    {
      title: "MOS Certifide",
      org: "Microsoft",
      details:
        "Online Microsoft word test, Passed with 96.3% marks (963 out of 1000) AT Hazara University Mansehra Pakistan",
      startDate: "31 Dec 2017",
      endDate: "",
    },
    {
      title: "COMSATS IT Center Wintercamp 2017",
      org: "COMSATS University Abbottabad Pakistan",
      details:
        "Complete the following cource in four weeks: HTML and CSS, PHP, ASP.NET, Graphics Designing, Android Application Development, Open Source Applications (WordPress, Joomla, Zencart e.t.c) and Freelancing (Upwork, Freelancer, Peopleperhour and Fiverr)",
      startDate: "01 Feb 2017",
      endDate: "25 Feb 2017",
    },
    {
      title: "COMSATS IT Center Workshop 2016",
      org: "COMSATS University Abbottabad Pakistan",
      details:
        "Two days workshop on Freelancing (Upwork, Freelancer, Peopleperhour and Fiverr)",
      startDate: "03 Dec 2016",
      endDate: "04 Dec 2016",
    },
  ],
  socialLinks: [
    {
      name: "Github",
      url: "https://github.com/saleemullahkhansaleem/saleemullahkhansaleem",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mrsaleem/",
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/khan_sali",
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/saleemullahkhansaleem1/",
      icon: FaInstagram,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@saleemullahkhansaleem",
      icon: FaYoutube,
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/saliyousafzai",
      icon: FaFacebook,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@saleemullahkhansaleem1",
      icon: FaTiktok,
    },
  ],
  contactLinks: [
    {
      name: "Call",
      url: "tel:+923405045889",
      icon: MdCall,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+923405045889",
      icon: FaWhatsapp,
    },
    {
      name: "Email",
      url: "mailto:salikhanswati@gmail.com",
      icon: MdMail,
    },
    {
      name: "Skype",
      url: "https://join.skype.com/invite/pXBYBspa6eUI",
      icon: FaSkype,
    },
    {
      name: "Fiverr",
      url: "https://fiverr.com/saliyousafzai",
      icon: TbBrandFiverr,
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0181decb984c651d39",
      icon: SiUpwork,
    },
    {
      name: "Freelancer",
      url: "https://www.freelancer.com/u/saleemyousafzai",
      icon: SiFreelancer,
    },
  ],
  servicesCategories: [
    {
      name: "Development",
      icon: MdDevices,
      details: "Advanced Web Development",
      services: [
        {
          name: "React Single Page Applications",
          description: "Focus on speed and performance with React-based SPAs.",
          longDescription:
            "Develop highly optimized Single Page Applications (SPAs) with React, ensuring lightning-fast performance and seamless user experiences. Leveraging React's component-based architecture, we craft intuitive and interactive interfaces tailored to your specific needs. Our SPAs are designed to minimize load times, maximize efficiency, and adapt to evolving business requirements.",
          uniqueFeatures: [
            "Reusable and modular components",
            "Optimized for fast rendering",
            "Interactive and dynamic user interfaces",
            "Supports integration with REST and GraphQL APIs",
            "Scalable architecture for growing applications",
          ],
          technologies: [
            { name: "React", icon: FaReact },
            { name: "Redux", icon: SiRedux },
            { name: "React Router", icon: SiReactrouter },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Axios", icon: SiAxios },
            { name: "Vite", icon: SiVite },
          ],
        },
        {
          name: "Next.js Optimized Applications",
          description: "Large-scale applications with optimized solutions.",
          longDescription:
            "Build robust, scalable applications with Next.js, combining server-side rendering (SSR), static site generation (SSG), and API routes for ultimate flexibility and performance. Ideal for large-scale projects, our Next.js solutions focus on SEO optimization, fast load times, and seamless user navigation. From e-commerce platforms to complex portals, we ensure a future-proof architecture tailored to your business goals.",
          uniqueFeatures: [
            "Server-side rendering for improved SEO",
            "Static site generation for lightning-fast pages",
            "API routes for backend integration",
            "Built-in performance optimizations",
            "Seamless transitions between pages",
          ],
          technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Node.js", icon: FaNode },
            { name: "TypeScript", icon: SiTypescript },
          ],
        },
        {
          name: "Custom Web Solutions",
          description:
            "Comprehensive solutions, including CMS and other web-related work.",
          longDescription:
            "Offer a wide range of custom web solutions tailored to diverse business needs. From content management systems (CMS) to bespoke applications, our expertise spans across various technologies to deliver unique and effective web solutions. Whether you need a corporate website, a dynamic portal, or a specialized platform, we ensure high-quality, scalable, and feature-rich results.",
          uniqueFeatures: [
            "Custom CMS tailored to your needs",
            "Scalable and secure architecture",
            "Responsive and mobile-friendly designs",
            "Integration with third-party services",
            "End-to-end development and support",
          ],
          technologies: [
            { name: "WordPress", icon: FaWordpress },
            { name: "Strapi", icon: SiStrapi },
            { name: "Node.js", icon: FaNode },
            { name: "React", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "GraphQL", icon: SiGraphql },
            { name: "MongoDB", icon: SiMongodb },
          ],
        },
      ],
    },
    {
      name: "Design",
      icon: IoMdColorPalette,
      details: "Modern Design and UX",
      services: [
        {
          name: "Responsive Design",
          description:
            "Craft websites that adapt perfectly to all screen sizes and devices.",
          longDescription:
            "Our responsive design services prioritize mobile-first and pixel-perfect implementations, ensuring seamless experiences across devices. Leveraging frameworks like Tailwind CSS and MUI, we deliver designs that are both visually appealing and functionally robust, keeping users engaged.",
          uniqueFeatures: [
            "Mobile-first design approach",
            "Pixel-perfect implementation",
            "Cross-browser compatibility",
          ],
          technologies: [
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "MUI", icon: SiMui },
          ],
        },
        {
          name: "Interactive UI/UX Design",
          description:
            "Design captivating and user-centric interfaces with Framer Motion and ShadCN.",
          longDescription:
            "Elevate your brand with visually appealing and interactive user experiences. Our expertise in Framer Motion and ShadCN allows us to create animations and components that enhance usability and engagement, all while adhering to your business objectives.",
          uniqueFeatures: [
            "Engaging animations with Framer Motion",
            "Accessible and intuitive designs",
            "Focus on user retention and engagement",
          ],
          technologies: [
            { name: "Framer Motion", icon: SiFramer },
            { name: "ShadCN", icon: FaCodepen },
          ],
        },
        {
          name: "Logo and Branding Design",
          description:
            "Develop unique logos and brand identities for a memorable online presence.",
          longDescription:
            "From crafting logos to designing comprehensive branding solutions, our design services help businesses establish a unique identity. We combine creativity with strategy to ensure that your brand leaves a lasting impression across all digital platforms.",
          uniqueFeatures: [
            "Strategic and creative branding",
            "Consistent visual identity",
            "High-quality deliverables for digital and print",
          ],
          technologies: [
            { name: "Adobe Illustrator", icon: SiAdobeillustrator },
            { name: "Adobe Photoshop", icon: SiAdobephotoshop },
          ],
        },
      ],
    },
    {
      name: "Functionality",
      icon: MdToggleOff,
      details: "Enhanced Functionality and Integrations",
      services: [
        {
          name: "API Integration",
          description:
            "Integrate third-party services like payment gateways and social media APIs seamlessly.",
          longDescription:
            "Expand your application's functionality by integrating reliable third-party APIs. Whether it's payment processing, social media, or analytics, our integration services ensure secure and efficient communication between systems, enhancing user experiences.",
          uniqueFeatures: [
            "Seamless integration with third-party services",
            "Secure data exchange with APIs",
            "Custom API solutions based on business needs",
          ],
          technologies: [
            { name: "REST APIs", icon: FaCloud },
            { name: "GraphQL", icon: SiGraphql },
            { name: "Stripe", icon: FaStripe },
          ],
        },
        {
          name: "E-commerce Solutions",
          description:
            "Develop robust e-commerce platforms with secure payment gateways and inventory management.",
          longDescription:
            "Our e-commerce development service covers everything from product catalogs to secure checkout processes. Utilizing frameworks like Next.js and MongoDB, we deliver scalable solutions tailored to meet the needs of modern online stores, enabling businesses to grow effortlessly.",
          uniqueFeatures: [
            "Custom product catalogs and checkout processes",
            "Seamless payment gateway integration",
            "Inventory management and order tracking",
          ],
          technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Stripe", icon: FaStripe },
          ],
        },
        {
          name: "Headless CMS Integration",
          description:
            "Implement headless CMS systems for greater flexibility and performance.",
          longDescription:
            "Simplify content management with headless CMS solutions like Strapi and WordPress REST APIs. By decoupling content delivery, we provide fast and flexible platforms that cater to various channels while maintaining ease of use for content creators.",
          uniqueFeatures: [
            "Decoupled content management system",
            "Multi-channel content delivery",
            "User-friendly interfaces for content creators",
          ],
          technologies: [
            { name: "Strapi", icon: SiStrapi },
            { name: "WordPress REST API", icon: FaWordpress },
            { name: "GraphQL", icon: SiGraphql },
          ],
        },
      ],
    },
    {
      name: "Performance",
      icon: MdSpeed,
      details: "Optimization and Maintenance",
      services: [
        {
          name: "Performance Optimization",
          description:
            "Enhance website speed with techniques like lazy loading and code splitting.",
          longDescription:
            "Achieve faster load times and improved user experiences with our web performance optimization services. From advanced caching mechanisms to minification and server-side rendering, we ensure your website delivers superior speed and reliability.",
          uniqueFeatures: [
            "Faster load times with lazy loading and code splitting",
            "Optimized assets with minification and compression",
            "Enhanced server-side rendering (SSR) for quicker page loads",
          ],
          technologies: [
            { name: "Lazy Loading", icon: IoIosArrowDown },
            { name: "Code Splitting", icon: MdCode },
            { name: "SSR", icon: SiNextdotjs },
          ],
        },
        {
          name: "Version Control & Deployment",
          description:
            "Streamline deployments with version control systems and CI/CD pipelines.",
          longDescription:
            "Leverage Git and modern deployment workflows to ensure seamless integration and delivery of updates. Our CI/CD strategies minimize downtime and automate testing, enabling faster and more reliable development cycles.",
          uniqueFeatures: [
            "Continuous integration and delivery pipelines",
            "Git version control for seamless collaboration",
            "Automated testing and rollback capabilities",
          ],
          technologies: [
            { name: "Git", icon: FaGit },
            { name: "GitHub Actions", icon: FaGithub },
            { name: "Docker", icon: FaDocker },
          ],
        },
        {
          name: "Code Review and Refactoring",
          description:
            "Optimize codebases for better performance and maintainability.",
          longDescription:
            "Ensure code quality and scalability with our comprehensive code review and refactoring services. By addressing inefficiencies and adhering to best practices, we help teams create robust and maintainable software solutions.",
          uniqueFeatures: [
            "Improved code quality and structure",
            "Enhanced scalability and maintainability",
            "Adherence to best practices and coding standards",
          ],
          technologies: [
            { name: "ESLint", icon: SiEslint },
            { name: "Prettier", icon: SiPrettier },
            { name: "Jest", icon: SiJest },
          ],
        },
      ],
    },
  ],
  pricing: {
    plans: [
      {
        name: "Basic",
        features: [
          "Single Page Application (SPA)",
          "Responsive Design using Tailwind CSS",
          "Basic SEO Setup",
          "Contact Form",
          "Deployment Assistance",
        ],
        price: "$ 500",
      },
      {
        name: "Standard",
        features: [
          "Multi-page Application",
          "All features from Basic Plan",
          "Advanced SEO Optimization",
          "API Integration",
          "Basic Authentication",
          "Performance Optimization",
          "Custom Components",
        ],
        price: "$ 1,200",
      },
      {
        name: "Premium",
        features: [
          "E-commerce Integration",
          "All features from Standard Plan",
          "Custom Backend Services",
          "User Role Management",
          "Advanced Animations & Interactions",
          "Progressive Web App (PWA) Setup",
          "Priority Support",
        ],
        price: "$ 2,500",
      },
      {
        name: "Enterprise",
        features: [
          "Custom Enterprise Solutions",
          "All features from Premium Plan",
          "Scalable Microservices Architecture",
          "Dedicated DevOps Support",
          "Continuous Integration & Continuous Deployment (CI/CD)",
          "Detailed Analytics and Reporting",
          "Ongoing Maintenance and Support",
        ],
        price: "Starting from $ 5,000",
      },
    ],
    additionalServices: [
      {
        service: "Additional Page",
        price: "$ 150 per page",
      },
      {
        service: "Custom Feature Development",
        price: "Starting from $200",
      },
      {
        service: "Content Management System (CMS)",
        price: "$800",
      },
      {
        service: "Ongoing Maintenance",
        price: "$100 per month",
      },
      {
        service: "UI/UX Design Consultation",
        price: "$75 per hour",
      },
      {
        service: "Website Redesign",
        price: "Starting from $1,000",
      },
    ],
    notes: [
      "Prices are estimates and may vary based on the specific requirements of the project.",
      "For more complex or custom features, a detailed quote will be provided after an initial consultation.",
      "Discounts available for long-term contracts and recurring projects.",
    ],
  },
  testimonials: [
    {
      name: "Nekiani Chelle",
      location: "United States-us",
      feedback:
        "First time working with seller won't be my last. He was fast, efficient and has fair rates. Thank you Saleem.",
      photo: "feedback/nekianichelle.webp",
    },
    {
      name: "Syed Ali Shah",
      location: "Pakistan-pk",
      feedback:
        "Absolutely fantastic service! Quick turnaround and exceeded my expectations. Highly recommend.",
      photo: "feedback/ali.png",
    },
    {
      name: "Sam Wilson",
      location: "Ukraine-ukraine",
      feedback:
        "I love sellers work. I requested abundance modifications and he patiently dealt with that. His work is a presidential class. I recommend him to all.",
      // photo: "projects/connect-sm.png",
    },
    {
      name: "Muhammad Abbas",
      location: "Pakistan-pk",
      feedback:
        "Professional and timely. The quality of work is top-notch. I'll definitely be back for more projects.",
      photo: "feedback/abbas.webp",
    },
  ],
};
