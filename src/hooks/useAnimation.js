import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function useCustomAnimation(trigger) {
  const controls = useAnimation();

  useEffect(() => {
    if (trigger) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0.5, scale: 0.95 });
    }
  }, [trigger, controls]);

  return controls;
}
