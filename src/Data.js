import {
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaReact,
  FaSkype,
  FaTiktok,
  FaWhatsapp,
  FaWordpress,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdCall,
  MdDevices,
  MdMail,
  MdSpeed,
  MdToggleOff,
} from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiUpwork,
} from "react-icons/si";
import { BsToggles } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
export const Data = {
  skills: [
    {
      name: "HTML",
      icon: FaHtml5,
      iconColor: "text-orange-500",
      health: "95",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      iconColor: "text-blue-500",
      health: "90",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      iconColor: "text-purple-500",
      health: "85",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      iconColor: "text-sky-500",
      health: "95",
    },
    {
      name: "Javascript",
      icon: FaJs,
      iconColor: "text-yellow-500",
      health: "90",
    },
    {
      name: "ReactJs",
      icon: FaReact,
      iconColor: "text-sky-500",
      health: "90",
    },
    {
      name: "Redux",
      icon: SiRedux,
      iconColor: "text-purple-500",
      health: "80",
    },
    {
      name: "NextJs",
      icon: SiNextdotjs,
      iconColor: "text-white",
      health: "85",
    },
    {
      name: "WordPress",
      icon: FaWordpress,
      iconColor: "text-sky-900",
      health: "70",
    },
    {
      name: "Figma",
      icon: FaFigma,
      iconColor: "text-white",
      health: "55",
    },
    {
      name: "Photoshop",
      icon: SiAdobephotoshop,
      iconColor: "text-blue-800",
      health: "70",
    },
    {
      name: "Illustrator",
      icon: SiAdobeillustrator,
      iconColor: "text-red-800",
      health: "75",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Jadeed Libas website",
      url: "/",
      image: "project-1.png",
      imageFull: "project-1-full.png",
      discription: "An E-commerce web app.",
    },
    {
      id: 2,
      name: "Saleem Portfolio Theme",
      url: "/",
      image: "project-2.png",
      imageFull: "project-1-full.png",
      discription: "The theme of this website.",
    },
    {
      id: 3,
      name: "MrSleem web app",
      url: "/",
      image: "project-3.jpg",
      imageFull: "project-1-full.png",
      discription: "A multi functional web app",
    },
  ],
  experiences: [
    {
      title: "React.js Developer",
      org: "Lala Group of Companies Rawalpindi",
      details:
        "As a senior react developer Working on complex projects like: Flight booking, Hotel booking, Visa booking, Umrah booking and Hajj booking e.t.c. And have the responsibilities like: Control UI, Form handling, API fetching, use redux and redux toolkit e.t.c",
      startDate: "Dec 2023",
      endDate: "Present",
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
        "Major Subjects: Data Structure, Analysis of Algorithems,Theory of Automata, Database (DBMS) Relational Database (RDBMS), Operating System, ECommerece, Artificial Intelligence, Modren Programming Languages (MPL), Software Engineering, Graphics and Computer Networking, etc . . .",
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
      url: "https://github.com/saleemullahkhansaleem",
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
      url: "https://upwork.com/",
      icon: SiUpwork,
    },
    {
      name: "Freelancer",
      url: "https://freelancer.com/",
      icon: SiFreelancer,
    },
  ],
  servicesCategories: [
    {
      name: "Development",
      icon: MdDevices,
      details: "Web Development Services",
      services: [
        {
          name: "Custom Web Development",
          description:
            "Create fully customized websites tailored to your client's specific needs and requirements.",
          longDescription:
            "Our custom web development service is tailored to meet the unique needs and requirements of your project. With a focus on innovation and creativity, we collaborate closely with clients to bring their vision to life. From intricate design elements to robust backend functionality, our team ensures that every aspect of your website reflects your brand identity and resonates with your target audience. With a commitment to quality and excellence, we deliver fully customized websites that stand out in today's competitive digital landscape.",
        },
        {
          name: "Front-end Development",
          description:
            "Develop interactive and user-friendly front-end interfaces using HTML, CSS, and JavaScript.",
          longDescription:
            "Front-end development is at the heart of crafting captivating user interfaces and seamless user experiences. Our team specializes in building interactive and user-friendly front-end interfaces using the latest web technologies such as HTML, CSS, and JavaScript. From pixel-perfect designs to intuitive navigation structures, we focus on every detail to ensure that your website captivates and engages your audience. With expertise in responsive design and cross-browser compatibility, we guarantee that your front-end interfaces deliver a consistent and enjoyable user experience across all devices and platforms.",
        },
        {
          name: "React Application Development",
          description:
            "Build modern and dynamic web applications using the React library for efficient UI rendering.",
          longDescription:
            "Harness the power of React to build modern and dynamic web applications that captivate users and drive engagement. Our React application development service leverages the flexibility and efficiency of the React library to create scalable and performant applications. Whether you're launching a new product or enhancing an existing platform, our team of React experts works closely with you to bring your ideas to life. From seamless UI rendering to state management and component reusability, we ensure that your React applications deliver a superior user experience and meet your business objectives.",
        },
        {
          name: "Single-Page Applications (SPAs)",
          description:
            "Develop single-page applications that provide a seamless browsing experience by loading content dynamically.",
          longDescription:
            "Revolutionize your web presence with single-page applications (SPAs) that offer a seamless browsing experience and unparalleled performance. Our SPA development service leverages cutting-edge technologies such as React and Angular to create dynamic and responsive applications that load content instantly and provide a native app-like experience. By eliminating page reloads and leveraging client-side rendering, we ensure that your SPA delivers lightning-fast performance and keeps users engaged. Whether you're building a portfolio website, a corporate portal, or an e-commerce platform, our team has the expertise to turn your vision into reality.",
        },
        {
          name: "Progressive Web Apps (PWAs)",
          description:
            "Convert websites into PWAs, offering native app-like experiences, offline access, and improved performance.",
          longDescription:
            "Embrace the future of web development with progressive web apps (PWAs) that combine the best of web and mobile experiences. Our PWA development service transforms traditional websites into fast, reliable, and engaging applications that work seamlessly across devices and platforms. By leveraging modern web technologies such as service workers and web app manifests, we enable features like offline access, push notifications, and home screen installation, giving users a truly immersive and native-like experience. Whether you're a startup looking to disrupt the market or an established brand seeking to enhance your digital presence, our team can help you unlock the full potential of PWAs.",
        },
      ],
    },
    {
      name: "Design",
      icon: IoMdColorPalette,
      details: "Design and User Experience",
      services: [
        {
          name: "Responsive Design",
          description:
            "Ensure that websites and applications are optimized for various screen sizes and devices.",
          longDescription:
            "In today's multi-device world, responsive design is essential for ensuring that your website looks and performs flawlessly across all screen sizes and devices. Our responsive design service focuses on creating fluid and adaptable layouts that seamlessly adjust to the user's device, whether it's a desktop, tablet, or smartphone. By prioritizing mobile-first design principles and employing cutting-edge techniques, we guarantee that your website provides an optimal viewing experience for every visitor. From flexible grids to media queries, we take care of the technical intricacies so that you can reach your audience wherever they are.",
        },
        {
          name: "UI/UX Design",
          description:
            "Design intuitive and visually appealing user interfaces and user experiences for better engagement.",
          longDescription:
            "Elevate your digital presence with our UI/UX design service, where form meets function to deliver exceptional user experiences. Our team of designers combines creativity with usability to craft intuitive and visually stunning interfaces that delight users and drive engagement. From wireframing to prototyping, we follow a user-centered design approach to ensure that every interaction feels natural and intuitive. By understanding your target audience and business goals, we create designs that not only look beautiful but also achieve measurable results. Whether you're launching a new product or redesigning an existing platform, we're here to help you make a lasting impression.",
        },
        {
          name: "Web Accessibility (a11y)",
          description:
            "Ensure that your websites are accessible to users with disabilities, following accessibility guidelines.",
          longDescription:
            "Ensure that your website is inclusive and accessible to users of all abilities with our web accessibility (a11y) services. With an increasing focus on digital inclusivity and regulatory requirements such as the Web Content Accessibility Guidelines (WCAG), it's essential to ensure that your website is usable by everyone, regardless of their disabilities or impairments. Our team of accessibility experts conducts thorough audits of your site to identify barriers and compliance issues, and implements solutions to improve accessibility and usability. From ensuring proper semantic markup and keyboard navigation to providing alternative text for images and captions for videos, we help you create a more inclusive web experience that benefits all users.",
        },
        {
          name: "Cross-Browser Compatibility",
          description:
            "Test and ensure that websites work seamlessly across different web browsers.",
          longDescription:
            "Reach your audience wherever they are with our cross-browser compatibility testing and optimization services. With the proliferation of web browsers and devices, it's crucial to ensure that your website works seamlessly across different platforms and environments. Our team conducts rigorous testing on popular web browsers such as Chrome, Firefox, Safari, and Edge, as well as mobile browsers and devices, to identify and resolve compatibility issues. Whether it's CSS rendering inconsistencies, JavaScript compatibility issues, or performance discrepancies, we ensure that your website delivers a consistent and reliable experience to all users, regardless of their browser or device preferences.",
        },
      ],
    },
    {
      name: "Functionality",
      icon: MdToggleOff,
      details: "Functionality and Integration",
      services: [
        {
          name: "API Integration",
          description:
            "Integrate third-party APIs to extend functionality and offer features such as payment gateways, social media integration, and more.",
          longDescription:
            "Expand the capabilities of your website or application with seamless API integration that connects your front-end interfaces with third-party services and data sources. Our API integration service allows you to leverage the power of external APIs to enhance functionality, streamline processes, and deliver richer user experiences. Whether you're integrating payment gateways, social media platforms, or data analytics tools, our team has the expertise to handle complex integrations and ensure smooth communication between your front-end and backend systems. With a focus on security, scalability, and reliability, we help you unlock the full potential of API-driven development and stay ahead in today's interconnected digital ecosystem.",
        },
        {
          name: "E-commerce Solutions",
          description:
            "Build online stores with secure payment gateways, product catalogs, shopping carts, and inventory management.",
          longDescription:
            "Transform your business with our comprehensive e-commerce solutions that empower you to reach new customers, increase sales, and streamline operations. Our e-commerce development service covers every aspect of online retail, from building secure and user-friendly storefronts to implementing robust backend systems for order management and inventory tracking. Whether you're launching a new e-commerce venture or upgrading an existing platform, our team works closely with you to understand your goals and deliver a tailored solution that meets your unique requirements. With a focus on performance, scalability, and user experience, we help you create a compelling online shopping experience that drives conversions and builds customer loyalty.",
        },
        {
          name: "Integration with Backend Services",
          description:
            "Collaborate with backend developers to integrate front-end interfaces with server-side services and databases.",
          longDescription:
            "Seamlessly connect your front-end interfaces with backend services and databases to create fully functional web applications with our integration services. Whether you're working with RESTful APIs, GraphQL endpoints, or traditional server-side technologies, our team has the expertise to handle complex integrations and ensure smooth communication between your front-end and backend systems. From authentication and authorization mechanisms to data fetching and manipulation, we implement robust solutions that meet your application's requirements and deliver a seamless user experience. With a focus on performance, security, and scalability, we help you build scalable and maintainable web applications that empower your users and drive business growth.",
        },
        {
          name: "Content Management Systems (CMS)",
          description:
            "Develop custom CMS solutions using platforms like WordPress, Drupal, or headless CMS architectures.",
          longDescription:
            "Take control of your online content with our custom content management system (CMS) solutions that empower you to create, manage, and publish digital content with ease. Our CMS development service leverages popular platforms like WordPress, Drupal, and Joomla, as well as headless CMS architectures, to provide you with a flexible and scalable content management solution tailored to your needs. Whether you're a blogger, a small business owner, or an enterprise organization, our team can help you build a robust CMS that simplifies content creation, improves workflow efficiency, and enhances your online presence. From content editing and version control to user management and permissions, we provide all the tools you need to take your content strategy to the next level.",
        },
      ],
    },
    {
      name: "Performance",
      icon: MdSpeed,
      details: "Performance and Maintenance",
      services: [
        {
          name: "Web Performance Optimization",
          description:
            "Improve website performance through techniques like minification, compression, and lazy loading.",
          longDescription:
            "Maximize the speed and efficiency of your website with our web performance optimization service. In today's fast-paced digital landscape, every millisecond counts, and a slow-loading website can lead to lost visitors and revenue. Our team of performance experts conducts a comprehensive audit of your site to identify bottlenecks and areas for improvement. From optimizing images and reducing server response times to implementing caching and lazy loading techniques, we employ a range of strategies to accelerate your site's performance and enhance user experience. With our web performance optimization service, you can ensure that your website delivers lightning-fast performance and stays ahead of the competition.",
        },
        {
          name: "Website Maintenance",
          description:
            "Offer ongoing maintenance and updates to keep websites secure, functional, and up-to-date.",
          longDescription:
            "Keep your website running smoothly and securely with our website maintenance services. From routine updates and security patches to performance optimizations and bug fixes, our team provides ongoing support to ensure that your website remains up-to-date, secure, and functional. Whether you need regular content updates, software upgrades, or emergency troubleshooting, we're here to help you maintain your online presence and keep your visitors engaged. With proactive monitoring and responsive support, we help you mitigate risks, minimize downtime, and ensure that your website continues to meet your business objectives.",
        },
        {
          name: "Code Review and Refactoring",
          description:
            "Review existing codebases, identify areas for improvement, and refactor to enhance performance and maintainability.",
          longDescription:
            "Improve the quality and maintainability of your codebase with our code review and refactoring services. As your software evolves and grows, it's essential to conduct regular code reviews to identify potential issues, improve code quality, and ensure adherence to best practices. Our team of experienced developers conducts comprehensive code reviews to evaluate code structure, readability, performance, and security. From identifying code smells and performance bottlenecks to recommending refactoring strategies and architectural improvements, we help you optimize your codebase for scalability, maintainability, and future growth. With our code review and refactoring services, you can streamline development workflows, reduce technical debt, and deliver higher-quality software products to your users.",
        },
        {
          name: "Version Control and Deployment",
          description:
            "Set up version control (e.g., Git) and implement deployment strategies for continuous integration and deployment (CI/CD).",
          longDescription:
            "Streamline your development workflow and ensure smooth deployment processes with our version control and deployment services. With the rise of agile development practices and continuous integration/continuous deployment (CI/CD) pipelines, version control and deployment are essential components of modern software development. Our team helps you set up version control systems such as Git and implement deployment strategies that automate the deployment process and ensure consistent and reliable releases. Whether you're deploying to traditional web servers, cloud platforms, or containerized environments, we provide tailored solutions to meet your deployment needs and accelerate your time to market.",
        },
      ],
    },
  ],
};
