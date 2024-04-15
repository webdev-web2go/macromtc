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
        className={`bg-blue inline-block px-9 py-3 rounded-full font-bold text-white hover:bg-blue/90 transition ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`bg-blue px-9 py-3 rounded-full font-bold text-white hover:bg-blue/90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
