'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Slide } from './components/Slide';
import { CompareView } from './components/Compare';

type TSlideSection = {
  id: number;
  title: string;
  desc?: string;
  contents?: React.ReactNode;
};

const KEYNOTE_SLIDE_PAGES: TSlideSection[] = [
  {
    id: 1,
    title: 'Keynote',
    contents: <CompareView />,
  },
  {
    id: 2,
    title: 'Keynote',
  },
  {
    id: 3,
    title: 'Keynote',
  },
  {
    id: 4,
    title: 'Keynote',
  },
  {
    id: 5,
    title: 'Keynote',
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div>
      {KEYNOTE_SLIDE_PAGES.map((slide, _) => {
        return <Slide id={slide.id} key={slide.id} contents={slide.contents} />;
      })}

      <motion.div className="progress" style={{ scaleX }} />
    </motion.div>
  );
}
