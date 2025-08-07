import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-y-6">
          <h1 className="h1">About B-MIC</h1>
          <p className="max-w-2xl">
            The Brown Microbiome Innovation Community (B-MIC) brings together
            students who are passionate about microbes, engineering and human
            health. We collaborate on research projects, develop open-source
            tools and host workshops to share our findings with the broader
            community.
          </p>
          <p className="max-w-2xl">
            Whether you are curious about microbiology or looking to apply
            computational methods to biological questions, B-MIC provides a
            welcoming space to learn and experiment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

