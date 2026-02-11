import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollNavigation from '@/components/ScrollNavigation';

import heroImage from '/images/professional_develop_b432f133.jpg';
import project1 from '/images/project1.png';
import project2 from '/images/Keep_Notes_App.png';
import project3 from '/images/portfolio_image.png';
import project4 from '/images/weather_Dashboard.png';
import project5 from '/images/social_clone.png';
import project6 from '/images/Blog.webp';

export default function Portfolio() {
  const navigationSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { name: 'HTML', level: 95, category: 'frontend' as const },
    { name: 'CSS', level: 90, category: 'frontend' as const },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' as const },
    { name: 'JavaScript', level: 88, category: 'frontend' as const },
    { name: 'React', level: 85, category: 'frontend' as const },
    { name: 'Node.js', level: 68, category: 'backend' as const },
    { name: 'Express', level: 72, category: 'backend' as const },
    { name: 'MongoDB', level: 70, category: 'backend' as const },
    { name: 'Git', level: 80, category: 'tools' as const },
  ];

  const experienceItems = [
    {
      title: "Bachelor of Information Technology",
      organization: "University of The Punjab",
      period: "2024 - Present",
      description: "Pursuing a comprehensive IT degree with focus on software development and web technologies.",
      achievements: [
        "Maintaining excellent academic performance",
        "Active member of coding club",
        "Completed multiple web development projects"
      ],
      type: 'education' as const
    },
    {
      title: "Frontend Developer Intern",
      organization: "Tech Company",
      period: "Summer 2025",
      description: "Worked on developing responsive web applications using React and Tailwind CSS.",
      achievements: [
        "Built 3 client-facing features",
        "Improved page load time by 40%",
        "Collaborated with design team on UI/UX"
      ],
      type: 'work' as const
    },
    {
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      period: "2023 - Present",
      description: "Creating custom websites and web applications for small businesses and startups.",
      achievements: [
        "Delivered 10+ successful projects",
        "Maintained 5-star client rating",
        "Built long-term client relationships"
      ],
      type: 'work' as const
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive online store with shopping cart, product filters, and checkout system.",
      image: project1,
      technologies: ["React", "Tailwind", "JavaScript"],
      githubUrl: "https://github.com/khalilkhancodes",
      liveUrl: "https://example.com"
    },
    {
      title: "Keep Notes App",
      description: "Productivity app with drag-and-drop functionality, task categories, and due date tracking.",
      image: project2,
      technologies: ["React", "CSS", "Tailwind" , "Local Storage"],
      githubUrl: "https://github.com/khalilkhancodes/Keep-Notes-App",
      liveUrl: "https://www.linkedin.com/posts/khalilkhancodes_react-mernstack-tailwindcss-activity-7391155105229877249-K3fr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFkwKpcBDoGB0562EeAAwB5MOBvoAxz-638"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio template with smooth animations and responsive design.",
      image: project3,
      technologies: ["HTML", "Tailwind", "React"],
      githubUrl: "https://github.com/khalilkhancodes/portfolio",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location search and 7-day forecast.",
      image: project4,
      technologies: ["React", "API", "Tailwind"],
      githubUrl: "https://github.com/khalilkhancodes",
      liveUrl: "https://example.com"
    },
    {
      title: "Social Media Clone",
      description: "Instagram-inspired social platform with posts, likes, and user profiles.",
      image: project5,
      technologies: ["React", "Firebase", "CSS"],
      githubUrl: "https://github.com/khalilkhancodes",
    },
    {
      title: "Blog Platform",
      description: "Full-featured blogging platform with markdown support and dark mode.",
      image: project6,
      technologies: ["React", "Tailwind", "Markdown"],
      githubUrl: "https://github.com/khalilkhancodes",
      liveUrl: "https://example.com"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation sections={navigationSections} />
      
      <Hero
        name="Khalil Khan"
        title="Fullstack Developer"
        subtitle="Turns complex problems into seamless digital products."
        backgroundImage={heroImage}
        onProjectsClick={() => scrollToSection('projects')}
        onContactClick={() => scrollToSection('contact')}
      />

      <About
        description="I'm an IT student and a Full-Stack Developer who loves building fast, functional, and visually clean web applications. My work spans both frontend and backend — from crafting responsive interfaces with React, Tailwind, and JavaScript, to developing robust APIs using Node.js, Express, and MongoDB."
        highlights={[
          "Focused on writing clean, maintainable code that follows best practices",
          "Constantly learning new technologies and staying updated with industry trends",
          "Passionate about creating intuitive user experiences and pixel-perfect designs"
        ]}
      />

      <Skills skills={skills} />

      <Experience items={experienceItems} />

      <Projects projects={projects} />

      <Contact
        email="khlilkhn911@gmail.com"
        phone="+92 329-7132915"
        location="Gujranwala, Pakistan"
      />

      <Footer name="Khalil Khan" />

      <ScrollNavigation />
    </div>
  );
}
