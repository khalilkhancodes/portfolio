import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WhatIBuild from '@/components/WhatIBuild';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import LetsConnect from '@/components/LetsConnect';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollNavigation from '@/components/ScrollNavigation';

import heroImage from '/images/professional_develop_b432f133.jpg';
import healthMateImg from '/images/HealthMate_AI.png';
import pixelBorneImg from '/images/Project 1.png';
import restaurantImg from '/images/Restaurant.png';
import skipperImg from '/images/Skipper.png';
import jsArcadeImg from '/images/JS Arcade.png';
import spotifyImg from '/images/social_clone.png';

export default function Portfolio() {
  const navigationSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'whatibuild', label: 'What I Build' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'lets-connect', label: "Let's Connect" },
    { id: 'contact', label: 'Contact' },
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 70 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 68 },
        { name: 'Express', level: 72 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      title: 'Integrations',
      skills: [
        { name: 'Supabase', level: 72 },
        { name: 'Firebase', level: 68 },
        { name: 'Git', level: 80 },
        { name: 'Vercel', level: 78 },
        { name: 'Neon', level: 65 },
      ],
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'React Native', level: 70 },
        { name: 'Expo', level: 68 },
        { name: 'React Navigation', level: 65 },
        { name: 'Expo Router', level: 60 },
      ],
    },
  ];

  const experienceItems = [
    {
      title: 'Bachelor of Information Technology',
      organization: 'University of The Punjab',
      period: '2024 - Present',
      description: 'Pursuing a comprehensive IT degree with focus on software development and web technologies.',
      achievements: [
        'Maintaining excellent academic performance',
        'Active member of coding club',
        'Completed multiple web development projects',
      ],
      type: 'education' as const,
    },
    {
      title: 'Frontend Developer Intern',
      organization: 'Tech Company',
      period: 'Summer 2025',
      description: 'Worked on developing responsive web applications using React and Tailwind CSS.',
      achievements: [
        'Built 3 client-facing features',
        'Improved page load time by 40%',
        'Collaborated with design team on UI/UX',
      ],
      type: 'work' as const,
    },
    {
      title: 'Freelance Web Developer',
      organization: 'Self-Employed',
      period: '2023 - Present',
      description: 'Creating custom websites and web applications for small businesses and startups.',
      achievements: [
        'Delivered 10+ successful projects',
        'Maintained 5-star client rating',
        'Built long-term client relationships',
      ],
      type: 'work' as const,
    },
  ];

  const projects = [
    {
      title: 'HealthMate AI',
      description: 'A mobile application that provides health insights and recommendations based on user input.',
      image: healthMateImg,
      technologies: ['React Native', 'Expo', 'Tailwind'],
      liveUrl: 'https://www.healthmateai.me/',
    },
    {
      title: 'PixelBorne',
      description: 'A marketplace concept designed to connect artists with customers while supporting product management, artist profiles, marketplace workflows, and administrative operations.',
      image: pixelBorneImg,
      technologies: ['React', 'Tailwind', 'JavaScript'],
      liveUrl: 'https://pixel-borne.vercel.app/',
    },
    {
      title: 'Restaurant Ordering Website',
      description: 'A production restaurant website designed around menu discovery, product browsing, deals, cart functionality, and a streamlined ordering workflow.',
      image: restaurantImg,
      technologies: ['React', 'Tailwind', 'JavaScript'],
      liveUrl: 'https://bitezo-ochre.vercel.app/',
    },
    {
      title: 'Skipper',
      description: 'A modern ecommerce website for medical apparel, focused on product discovery, category browsing, sizing information, ordering, and customer communication.',
      image: skipperImg,
      technologies: ['React', 'Tailwind', 'JavaScript'],
      liveUrl: 'https://skippers-eight.vercel.app/',
    },
    {
      title: 'JS Arcade',
      description: 'A collection of JavaScript projects including counter, quiz master, weather app, and more interactive experiments.',
      image: jsArcadeImg,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://js-arcade-five.vercel.app/',
    },
    {
      title: 'Spotify Clone',
      description: 'A Spotify-inspired music streaming clone with playlist management, player controls, and responsive UI.',
      image: spotifyImg,
      technologies: ['React', 'Firebase', 'CSS'],
      liveUrl: 'https://spotify-eight-ashen.vercel.app/',
    },
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
        subtitle="Building modern web applications, SaaS products and marketplaces"
        backgroundImage={heroImage}
        onProjectsClick={() => scrollToSection('projects')}
        onContactClick={() => scrollToSection('contact')}
      />

      <About
        description="I build modern web applications, SaaS products, marketplaces, and AI-powered experiences with a focus on clean interfaces, practical functionality, and production-ready solutions. I enjoy taking an idea from concept → interface → application → deployment."
        highlights={[
          'Focused on writing clean, maintainable code that follows best practices',
          'Constantly learning new technologies and staying updated with industry trends',
          'Passionate about creating intuitive user experiences and pixel-perfect designs',
        ]}
      />

      <Skills categories={skillCategories} />

      <WhatIBuild />

      <Experience items={experienceItems} />

      <Projects projects={projects} />

      <LetsConnect />

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
