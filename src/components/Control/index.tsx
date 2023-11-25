import { useEffect, useRef } from 'react';

import { createPortal } from 'react-dom';

import { ControlProps } from './type';
import { useMapContext } from '../Provider/MapProvider';

export function Control({ position, children, ...props }: ControlProps) {
  const map = useMapContext();
  const fragment = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    const targetControls = position && map.controls[position];

    if (!targetControls) {
      return;
    }

    targetControls.push(fragment.current);

    return () => {
      const idx = targetControls
        .getArray()
        .findIndex((v) => v === fragment.current);

      targetControls.removeAt(idx);
    };
  }, [position]);

  return createPortal(<div {...props}>{children}</div>, fragment.current);
}
