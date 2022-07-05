import { useEffect } from 'react';

/**
 *  Hook to listen to an event on a target element
 * @param target - The target element
 * @param type - The event type
 * @param listener - The listener function
 * @param options - The event options
 */
const useEventListener = (
  target: { hasOwnProperty: (arg0: string) => any; current: any },
  type: any,
  listener: any,
  ...options: any[]
) => {
  useEffect(() => {
    const targetIsRef = target.hasOwnProperty('current');
    const currentTarget = targetIsRef ? target.current : target;

    if (currentTarget) {
      currentTarget.addEventListener(type, listener, ...options);
    }

    //clear while unmount
    return () => {
      if (currentTarget)
        currentTarget.removeEventListener(type, listener, ...options);
    };
  }, [target, type, listener, options]);
};

export { useEventListener };
