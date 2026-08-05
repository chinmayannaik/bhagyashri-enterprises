'use client';

import { useState } from 'react';
import { whatsappHref, telHref, phonePrimaryDisplay, business } from '@/lib/site';
import { WhatsAppIcon, PhoneIcon, CheckIcon } from './Icons';

const serviceOptions = [
  'Crane Service',
  'Heavy Lifting',
  'Boat Lifting',
  'Vehicle Towing',
  'Breakdown / Accident Recovery',
  'Other',
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: serviceOptions[0], details: '' });

  const buildMessage = () =>
    `New enquiry for ${business.name}%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0ADetails: ${form.details}`;

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
        <h3 className="h-display mt-4 text-2xl text-white">Request Ready!</h3>
        <p className="mt-2 text-brand-fog">
          We&apos;ve opened WhatsApp with your details. Just hit send, or call us directly for the
          fastest response.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={telHref} className="btn-primary">
            <PhoneIcon className="h-5 w-5" /> Call {phonePrimaryDisplay}
          </a>
          <button type="button" onClick={() => setSent(false)} className="btn-ghost">
            New Request
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
            Your Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Ramesh"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-mist">
            Phone Number
          </label>
          <input
            id="phone"
            required
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="10-digit mobile"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-mist">
          Service Needed
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={field}
        >
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-brand-dark">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-semibold text-brand-mist">
          Location & Details
        </label>
        <textarea
          id="details"
          rows={3}
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          placeholder="Where are you? What do you need lifted or towed?"
          className={field}
        />
      </div>

      <button type="submit" className="btn-wa w-full">
        <WhatsAppIcon className="h-5 w-5" /> Get My Quote on WhatsApp
      </button>
      <p className="text-center text-xs text-brand-fog">
        Prefer to talk? Call{' '}
        <a href={telHref} className="font-semibold text-brand-yellow">
          {phonePrimaryDisplay}
        </a>{' '}
        — we answer 24×7.
      </p>
    </form>
  );
}
