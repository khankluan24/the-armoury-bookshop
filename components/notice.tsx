import Link from 'next/link';

export default function Notice() {
  return (
    <div className="my-auto flex w-full items-center justify-center bg-[#bf1a2a] px-4">
      <Link
        href="/gift-cards"
        className="py-4 text-center text-sm font-semibold text-white underline-offset-4 hover:underline"
      >
        Christmas is right around the corner! Pick up a gift card for your loved ones.
      </Link>
    </div>
  );
}
