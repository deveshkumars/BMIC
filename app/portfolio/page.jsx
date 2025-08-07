import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    image: '/work/1.png',
    category: 'Research',
    name: 'Microbiome Visualizer',
    description: 'Interactive dashboard for exploring microbial data.',
    link: '#',
  },
  {
    image: '/work/2.png',
    category: 'Outreach',
    name: 'Community Workshop',
    description: 'Teaching local students about microbes and health.',
    link: '#',
  },
  {
    image: '/work/3.png',
    category: 'Engineering',
    name: 'DIY Incubator',
    description: 'Low-cost hardware for culturing microbes.',
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-12">Our Work</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.image} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

