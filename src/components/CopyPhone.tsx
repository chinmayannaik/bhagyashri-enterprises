'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

export function CopyPhone({ value, display }: { value: string; display: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-brand-mist/90 transition-colors hover:bg-white/10"
      aria-label={`Copy phone number ${display}`}
    >
      {copied ? (
        <>
          <CheckIcon className="h-3.5 w-3.5 text-brand-yellow" /> Copied
        </>
      ) : (
        <>
          <CopyIcon className="h-3.5 w-3.5" /> Copy
        </>
      )}
    </button>
  );
}
