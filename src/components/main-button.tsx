import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export default function MainButton({
  children,
  className,
  href,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href) {
    return (
      <a
        href={href}
        className={`bg-secondary inline-block px-9 py-3 rounded-full font-bold ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`bg-secondary px-9 py-3 rounded-full font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
