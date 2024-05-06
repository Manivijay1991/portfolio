import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import { Mandali } from 'next/font/google'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experiences'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
    
  )
}
