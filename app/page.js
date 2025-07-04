import React from 'react';
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Projects from '@/components/projects/projects';
import Gallery from '@/components/gallery/gallery';
import Credits from '@/components/credits';
import {promises as fs} from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between gap-12">
        <div className="lg:w-1/2 max-w-full min-w-0 overflow-hidden break-words">
          <Header data={data.general}></Header>
        </div>
        <div className="lg:w-1/2 max-w-full min-w-0 overflow-hidden break-words">
          <About data={data.general}></About>
          <Experiences data={data.experiences}></Experiences>
          <Education data={data.education}></Education>
          <Projects data={data.projects}></Projects>
          <Gallery />
          <Credits data={data.general}></Credits>
        </div>
      </div>
    </main>
  )
}
