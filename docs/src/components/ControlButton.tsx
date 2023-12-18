import type { HTMLAttributes } from 'react';

export function ControlButton(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className='h-[40px] bg-white rounded-[3px] text-[rgb(25,25,25)] cursor-pointer text-base m-[8xp_0_22px] p-[8px_17px] text-center'
      {...props}
    />
  );
}
