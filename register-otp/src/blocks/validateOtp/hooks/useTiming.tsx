import { useEffect, useState } from "react";

/**
 *
 *
 * @param {number} [seconds]
 * @return {*}  {[number]}
 */
export const useTiming = (seconds?: number, action?: Function): [number] => {

  const [count, setCount] = useState(seconds || 120);

  const [timing, setTiming] = useState<boolean>(true);

  /**
   * Initialize timing for code request
   */
  useEffect(() => {
    let interval: number = 0;
    if (timing) {
      interval = window.setInterval(() => {
        setCount((preSecond) => {
          if (preSecond === 0) {
            setTiming(false);
            if (action) {
                action();
            }
            clearInterval(interval);
            return 0;
          }
          return preSecond - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timing]);

  return [count];
};
