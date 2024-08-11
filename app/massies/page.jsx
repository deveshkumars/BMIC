'use client'

import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import {useState} from "react";

const projectData = [
  {
      image: '/starter/f9.JPG',
      category: 'Drone Pictures',
      name: 'February 11, 2024',
      description:
      "Lorem Ipsum",
      link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
      codepen: '/',
  },
  {
    image: '/starter/vt.jpg',
    category: 'Virtual Twilight',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f8.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
},
{
  image: '/starter/f7.JPG',
  category: 'Drone Pictures',
  name: 'February 11, 2024',
  description:
  "Lorem Ipsum",
  link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
  codepen: '/',
},
{
  image: '/starter/f6.JPG',
  category: 'Drone Pictures',
  name: 'February 11, 2024',
  description:
  "Lorem Ipsum",
  link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
  codepen: '/',
},
{
  image: '/starter/f5.JPG',
  category: 'Drone Pictures',
  name: 'February 11, 2024',
  description:
  "Lorem Ipsum",
  link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
  codepen: '/',
},
{
  image: '/starter/f4.JPG',
  category: 'Drone Pictures',
  name: 'February 11, 2024',
  description:
  "Lorem Ipsum",
  link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
  codepen: '/',
},
  {
    image: '/starter/t2.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/t3.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/t4.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/t5.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f1.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f2.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f3.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/t1.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f10.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f11.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f12.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f13.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f14.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/f15.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/b1.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/b2.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/b3.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/b4.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },
  {
    image: '/starter/b5.JPG',
    category: 'Drone Pictures',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1dmUMWQXWjuuShxroTuxRG8qTStX8oKFn?usp=share_link',
    codepen: '/',
  },

  
];

const uniqueCategories = [
  'all photos',
  ...new Set(projectData.map((item) => item.category))
];

const portfolio = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all photos');
  const filteredProjects = projectData.filter((project) => {
    return category === 'all photos'
    ? project
    : project.category === category
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>


        <h2 className='section-title text-center mx-auto'>
          My Portfolio Sample
        </h2>
        <p className='subtitle mb-8 text-center xl:mb-16'>455 Massies Ln</p>

        <center className='mb-12 xl:mb-24'>
        <iframe width="840" height="473" src="https://www.youtube.com/embed/pIiWFO9KcTw?si=uxvjpuzyGEwFLXPo&vq=hd1080" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true'></iframe>
        <p>  </p>
        </center>

        {/* Tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none'>
            {
              categories.map((category, index) => {
                return (
                  <TabsTrigger
                  value={category}
                  key={index}
                  onClick={() => setCategory(category)}
                  className='capitalize w-[162px] md:w-auto'
                  >
                    {category}
                  </TabsTrigger>
                )
              })
            }
          </TabsList>

          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
            filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })
            }
          </div>

        </Tabs>
      </div>
    </section>
  );
}

export default portfolio