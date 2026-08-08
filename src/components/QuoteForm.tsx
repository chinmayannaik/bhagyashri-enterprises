'use client';

import { useState } from 'react';
import { telHref, phonePrimaryDisplay, business } from '@/lib/site';
import { WhatsAppIcon, PhoneIcon, CheckIcon } from './Icons';
import type { Dictionary } from '@/i18n/dictionaries/en';

export function QuoteForm({ dict }: { dict: Dictionary }) {
  const options = dict.quote.serviceOptions;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: options[0],
    location: '',
    details: '',
  });

  const buildMessage = () =>
    encodeURIComponent(
      `${business.name}\n\n` +
        `${dict.quote.name}: ${form.name}\n` +
        `${dict.quote.phone}: ${form.phone}\n` +
        `${dict.quote.service}: ${form.service}\n` +
        `${dict.quote.location}: ${form.location}\n` +
        `${dict.quote.details}: ${form.details}`,
    );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${business.whatsapp}?text=${buildMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const field =
    'w-full rounded-xl border border-white/15 bg-brand-dark/60 px-4 py-3 text-[15px] text-white placeholder:text-brand-fog focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/40';

  if (sent) {
    return (
      <div className="card p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-yellow text-black">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="h-display mt-4 text-2xl text-white">{dict.quote.submit}</h3>
        <p className="mt-2 text-brand-fog">{dict.quote.note}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={telHref} className="btn-primary">
            <PhoneIcon className="h-5 w-5" /> {dict.common.call} {phonePrimaryDisplay}
          </a>
          <button type="button" onClick={() => setSent(false)} className="btn-ghost">
            {dict.quote.service}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-mist">
            {dict.quote.name}
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-mist">
            {dict.quote.phone}
          </label>
          <input
            id="phone"
            required
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-mist">
            {dict.quote.service}
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={field}
          >
            {options.map((s) => (
              <option key={s} value={s} className="bg-brand-dark">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-brand-mist">
            {dict.quote.location}
          </label>
          <input
            id="location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-semibold text-brand-mist">
          {dict.quote.details}
        </label>
        <textarea
          id="details"
          rows={3}
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          placeholder={dict.quote.detailsPlaceholder}
          className={field}
        />
      </div>

      <button type="submit" className="btn-wa w-full">
        <WhatsAppIcon className="h-5 w-5" /> {dict.quote.submit}
      </button>
      <p className="text-center text-xs text-brand-fog">
        {dict.quote.note}{' '}
        <a href={telHref} className="font-semibold text-brand-yellow">
          {phonePrimaryDisplay}
        </a>
      </p>
    </form>
  );
}
