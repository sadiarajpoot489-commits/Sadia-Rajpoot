import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Explore from '@/components/Explore';
import DreamJournal from '@/components/DreamJournal';
import ImaginationLab from '@/components/ImaginationLab';
import StoryCreator from '@/components/StoryCreator';
import About from '@/components/About';
import Inspiration from '@/components/Inspiration';
import Footer from '@/components/Footer';
import useReveal from '@/hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-midnight-300 text-ivory">
      <Navbar />
      <main>
        <Hero />
        <Explore />
        <DreamJournal />
        <ImaginationLab />
        <StoryCreator />
        <About />
        <Inspiration />
      </main>
      <Footer />
    </div>
  );
}
