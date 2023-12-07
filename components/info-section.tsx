import { ExternalLink } from 'lucide-react';
import { Tweet } from 'react-tweet';
import { buttonVariants } from './ui/button';

export default function InfoSection() {
  return (
    <section className="flex  w-full items-center justify-center bg-white px-4 py-12 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        <p className="font-mono text-sm uppercase">Renewing minds</p>
        <h1 className="font-logo text-4xl font-bold">Haddon Institute</h1>
        <p className="max-w-2xl">
          Our mission at Haddon institute is to provide a Christ-centered education grounded in
          Reformed theology. We are dedicated to equipping students with a strong foundation in both
          faith and academics, so our students flourish in their love for God, pursuing a great
          knowledge of Christ, and a commitment to serve others.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://haddoninstitute.org"
            target="_blank"
            className={`flex gap-2 ${buttonVariants({
              variant: 'outline'
            })}`}
          >
            Learn More <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        <div className="flex justify-center">
          <Tweet id="1731828465949909195" />
        </div>
      </div>
    </section>
  );
}
