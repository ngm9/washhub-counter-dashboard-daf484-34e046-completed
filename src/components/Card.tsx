import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <section className={cx('card', className)} {...props}>
      {children}
    </section>
  );
}