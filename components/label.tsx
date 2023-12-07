import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  author,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  author: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 right-0 flex w-full @container/label', {
        '': position === 'center'
      })}
    >
      <div className=" flex w-full items-center border bg-white/70 px-4 py-2 font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <div>
          <h3 className="mr-4 line-clamp-2 flex-grow font-logo leading-none tracking-tight">
            {title}
          </h3>
          <p className="font-base text-xs">{author}</p>
        </div>
        <Price
          className="flex-none rounded-full bg-blue-600 p-2 text-sm text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
