import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-y-6">
          <h1 className="h1">Want to join B-MIC?</h1>
          <p className="max-w-xl">
            We are always looking for new members and collaborators. Reach out
            with questions or ideas and we will get back to you as soon as
            possible.
          </p>
          <p className="h3">
            <a
              href="mailto:bmic@brown.edu"
              className="text-primary hover:underline"
            >
              bmic@brown.edu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

