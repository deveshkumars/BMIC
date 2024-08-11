'use client'

import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import {useState} from "react";

const projectData = [
  {
      image: '/ellingham/o1.JPG',
      category: 'Exterior',
      name: 'February 11, 2024',
      description:
      "Lorem Ipsum",
      link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
      codepen: '/',
  },
  {
    image: '/ellingham/o33.jpeg',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o2.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o3.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o4.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o5.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o6.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o7.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o8.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o9.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o10.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o11.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o12.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o13.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o14.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o15.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o16.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o17.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o18.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o19.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o21.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o22.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o23.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o24.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o25.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o26.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o27.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o28.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o29.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o30.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o31.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/o32.JPG',
    category: 'Exterior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i1.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i2.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i3.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i4.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i5.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i6.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i7.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i8.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i9.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i10.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i11.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i12.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i13.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i14.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i15.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i16.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
    codepen: '/',
},
{
    image: '/ellingham/i17.JPG',
    category: 'Interior',
    name: 'February 11, 2024',
    description:
    "Lorem Ipsum",
    link: 'https://drive.google.com/drive/folders/1Imk_81nvNcWwe5j4w10IoXu0_VDrX210?usp=sharing',
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
          7293 Ellingham Ct
        </h2>
        <p className='subtitle mb-8 text-center xl:mb-16'>Click on any picture to get google drive link</p>

        <center className='mb-12 xl:mb-24'>
        <iframe width="840" height="473" src="https://www.youtube.com/embed/Rgdf8dyXdfs?si=8O4UJPJAxZKj7l6u&vq=hd1080" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true'></iframe>
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