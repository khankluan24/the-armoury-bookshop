'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Cloud, Flame } from 'lucide-react';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="relative h-14 w-14 p-0 lg:h-10 lg:w-10"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Cloud className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Flame className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
