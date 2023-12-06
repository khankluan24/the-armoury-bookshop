import { ShoppingBasket } from 'lucide-react';

export default function OpenCart({ quantity }: { quantity?: number }) {
  return (
    <div className="relative flex items-center justify-center">
      <ShoppingBasket className="h-5 w-5" />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
