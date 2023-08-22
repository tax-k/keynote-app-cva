'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Slide } from './components/Slide';

const KEYNOTE_SLIDE_PAGES = [
  {
    id: 1,
    title: 'Keynote',
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
        return <Slide id={slide.id} key={slide.id} />;
      })}

      <motion.div className="progress" style={{ scaleX }} />
    </motion.div>
  );
}
