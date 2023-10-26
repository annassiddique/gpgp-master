import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string;
  children: React.ReactNode;
}

const Root: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { className, children, ...props },
  ref
) => {
  const classes = twMerge(
        "border rounded-sm border-[#0E0C71] flex justify-center items-center text-base font-semibold text-gpgp-blue bg-white px-10",
      className
  );
  return (
    <button type="button" ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
};

export const Button = React.forwardRef(Root);
