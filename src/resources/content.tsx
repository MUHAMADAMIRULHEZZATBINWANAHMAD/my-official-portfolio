import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work, Skills } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Amirul",
  lastName: "Hezzat",
  name: `Amirul Hezzat`,
  role: "MLOps Intern",
  avatar: "/images/myavatar.jpg", 
  email: "example@gmail.com",
  location: "Asia/Kuala_Lumpur", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MisterAmirul",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhamad-amirul-hezzat-64864924a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    essential: true,
  },
    {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.link/wjjpkm",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:amirul.hezzat@s.unikl.edu.my",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi! I'm Amirul.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      <br />
      This portfolio showcases my understanding, side-projects, technical skills and articles of broad knowledge, highlighting my passion for building and exploring innovative technology.
      <br />
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Amirul is a graduate of University Kuala Lumpur (MIIT) with a Diploma in Information Technology. Driven by a curiosity for exploring diverse technology domains, he has developed a broad understanding of both technical and business-oriented systems, embracing a T-shaped professional mindset.
        <br />
        <br />
        Through continuous research, reading, and self-directed learning, he translates theoretical knowledge into hands-on experience in areas such as modern web development, infrastructure, data science, system administration, and operationalizing machine learning models.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Studies",
    experiences: [
      {
        company: "University Kuala Lumpur MIIT",
        timeframe: "2024 - 2027",
        role: "Diploma in Information Technology",
        achievements: [
          <>
            Completed extensive 6 semester of various syllabus learning covering fundamental of information technologies, multi-language programming, database, design principles, statistical analysis, discrete mathematics and more.
          </>,
          <>
            Exposure to various real-world case studies, ethical dicsussion, hands-on projects and well-rounded theoretical and practical understanding of the IT industry.
          </>,
        ],
      },
      {
        company: "SMK Mergong",
        timeframe: "2016 - 2021",
        role: "Technical  Stream",
        achievements: [
          <>
            Initial exposure to various technical subjects such as engineering drawing, physics, mathematics, providing a strong foundation for further studies in IT.
          </>,
          <>
            Developed discipline, teamwork, problem-solving abilities, and a strong interest in innovation through academic and extracurricular activities.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Higher Stud",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Dedicated to hands-on lab recaps, technical insights, and knowledge sharing.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const skills: Skills = {
  path: "/skills",
  label: "Qualification",
  title: `Skills & Learning – ${person.name}`,
  description: `${person.name}'s certifications, learning journey, and technical skills`,
  
  certifications: [
    {
      name: "Google Cloud",
      image: "/images/qualifications/gke-gcp.png",
      link: "https://www.skills.google/public_profiles/e364194e-4c7a-4471-bd36-959d262cbbbe/badges/24698269",
    },
    {
      name: "Google Cloud",
      image: "/images/qualifications/gpu-fund.png",
      link: "https://www.skills.google/public_profiles/e364194e-4c7a-4471-bd36-959d262cbbbe/badges/24619248",
    },
    {
      name: "Google Cloud",
      image: "/images/qualifications/vertex-fund.png",
      link: "https://www.skills.google/public_profiles/e364194e-4c7a-4471-bd36-959d262cbbbe",
    },

    {
      name: "Google Cloud",
      image: "/images/qualifications/mlops-gs.png",
      link: "https://www.skills.google/public_profiles/e364194e-4c7a-4471-bd36-959d262cbbbe/badges/24619248",
    },
    {
      name: "Microsoft Learn",
      image: "/images/qualifications/ms-data.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/MUHAMADAMIRULHEZZATBINWANAHMAD-3047/9RWCT8YU?sharingId=194FC49822E4ED2A",
    },
  ],
  
  engagements: [
    {
      images: [
        { src: "/images/qualifications/google-hackt2026.png", alt: "Engagement 1" },
        { src: "/images/qualifications/goonvidia.png", alt: "Engagement 2" },
      ],
    },
  ],
  
  learning: [
    {
      category: "Web Development",
      skills: ["TypeScript", "Node.js", "React", "PostgreSQL"],
    },
    {
      category: "Infrastructure",
      skills: ["Hosting", "Load Balancer", "Docker", "Blockchain"],
    },
    {
      category: "Artificial Intelligence",
      skills: ["Statistical Analysis", "Model Development", "GPU Computing"],
    },
    {
      category: "System Administration",
      skills: ["Linux", "Bash"],
    },
    {
      category: "Tools",
      skills: ["Git", "Github", "Flutter"],
    },

  ],
}



const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },

  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, skills };
