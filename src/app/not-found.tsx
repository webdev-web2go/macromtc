import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue text-white flex flex-col gap-6 justify-center items-center text-xl">
      <img src="/hero/logo.webp" alt="Logo de MTC" className="w-64" />
      <div className="flex flex-col gap-2 items-center">
        <span>La página que buscas no existe.</span>
        <Link href="/" className="text-secondary">
          &larr; Volver
        </Link>
      </div>
    </div>
  );
}
