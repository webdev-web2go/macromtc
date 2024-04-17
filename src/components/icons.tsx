interface Props {
  className?: string;
  fill?: string;
}

export function WhatsApp({ className, fill = "#fff" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      viewBox="0 0 17.01 17.01"
      className={className}
    >
      <g data-name="Capa 1">
        <circle
          cx="8.51"
          cy="8.51"
          r="8.51"
          className="cls-2"
          fill={fill}
        ></circle>
        <path
          d="M12.6 4.52a5.354 5.354 0 00-3.82-1.58c-2.97 0-5.4 2.42-5.4 5.39 0 .95.25 1.88.72 2.7l-.77 2.8 2.86-.75c.79.43 1.68.66 2.58.66 2.97 0 5.4-2.42 5.4-5.4 0-1.44-.56-2.8-1.58-3.82zm-3.82 8.3c-.8 0-1.59-.22-2.28-.62l-.16-.1-1.7.44.45-1.65-.11-.17c-.45-.71-.69-1.54-.69-2.39 0-2.47 2.01-4.48 4.49-4.48 1.2 0 2.32.47 3.17 1.31.85.85 1.31 1.97 1.31 3.17 0 2.47-2.01 4.48-4.49 4.48zm2.46-3.36c-.13-.07-.8-.39-.92-.44-.12-.04-.21-.07-.3.07-.09.13-.35.44-.43.53s-.16.1-.29.03c-.13-.07-.57-.21-1.08-.67-.4-.36-.67-.8-.75-.93-.08-.13 0-.21.06-.27.06-.06.14-.16.2-.24.07-.08.09-.13.13-.22.04-.09.02-.17-.01-.24s-.3-.73-.42-1c-.11-.26-.22-.23-.3-.23h-.26c-.09 0-.24.03-.36.17-.12.13-.47.46-.47 1.12s.48 1.3.55 1.39.95 1.45 2.3 2.04c.32.14.57.22.77.28.32.1.62.09.85.05.26-.04.8-.33.91-.64s.11-.58.08-.64-.12-.09-.26-.16z"
          className="cls-1"
          data-name="WA Logo"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}

export function Menu({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );
}

export function Close({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );
}
