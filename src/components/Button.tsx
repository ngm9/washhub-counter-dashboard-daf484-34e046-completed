import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
};

export function Button({ variant = 'secondary', icon, className, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cx('button', `button--${variant}`, className)} {...props}>
      {icon}
      {children}
    </button>
  );
}