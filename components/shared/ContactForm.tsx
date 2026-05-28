'use client';

import { useState } from 'react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

type ContactFormProps = {
  isRigger?: boolean;
};

export function ContactForm({ isRigger = false }: ContactFormProps) {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const inputClass = `border px-4 py-3 outline-none transition-colors font-body text-base ${
    isRigger
      ? 'border-stroke-dark bg-deep-surface text-warm focus:border-arcade-green placeholder:text-warm-muted/40'
      : 'border-stroke bg-surface text-navy focus:border-comment placeholder:text-navy-muted/40'
  }`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
    };

    const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;
    if (!apiUrl) {
      setErrorMsg('Servicio de contacto no disponible todavía.');
      setState('error');
      return;
    }

    setState('sending');
    setErrorMsg('');
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setState('success');
    } catch {
      setErrorMsg('No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por email.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className={`border p-8 ${isRigger ? 'border-stroke-dark' : 'border-stroke'}`}>
        <p className={`mb-2 text-sm font-bold uppercase tracking-widest ${isRigger ? 'text-arcade-green' : 'text-comment'}`}>
          {'// mensaje enviado'}
        </p>
        <p className={isRigger ? 'text-warm' : 'text-navy'}>Gracias por escribirme. Te responderé en breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="nombre"
          className={`text-sm uppercase tracking-widest ${isRigger ? 'text-warm-muted' : 'text-navy-muted'}`}
        >
          {'// nombre'}
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className={inputClass}
          placeholder="Tu nombre"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className={`text-sm uppercase tracking-widest ${isRigger ? 'text-warm-muted' : 'text-navy-muted'}`}
        >
          {'// email'}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="tu@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="mensaje"
          className={`text-sm uppercase tracking-widest ${isRigger ? 'text-warm-muted' : 'text-navy-muted'}`}
        >
          {'// mensaje'}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="¿En qué puedo ayudarte?"
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-arcade-red">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className={`self-start px-8 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
          isRigger
            ? 'bg-warm text-deep hover:bg-arcade-green'
            : 'bg-navy text-white hover:bg-comment'
        }`}
      >
        {state === 'sending' ? '// enviando...' : '// enviar mensaje'}
      </button>
    </form>
  );
}
