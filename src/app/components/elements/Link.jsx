import Link from "next/link";

export default function LinkElement({
  className,
  isHome,
  href,
  children: text,
}) {
  return (
    <Link className={className} href={isHome ? href : `/${href}`}>
      {text}
    </Link>
  );
}
