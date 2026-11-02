"use client";

import { FormEvent, useState } from "react";
import { FaceLine } from "@/components/Brand";
import { PortraitImage } from "@/components/PortraitImage";
import { bookingServices, images, site } from "@/content/content";

export function Booking() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const date = String(data.get("date") || "");
    const message = String(data.get("message") || "");
    const text = encodeURIComponent(
      `Hi Rachna, I'd like to book at RBS Make-Over.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nNote: ${message}`,
    );
    setSent(true);
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  }

  return (
    <section id="contact" className="bg-bg-2 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.8rem] lg:grid-cols-2">
        <div className="relative h-[32rem] bg-black lg:min-h-full">
          <PortraitImage
            image={images.ownerLogoWall}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
          <FaceLine className="absolute left-8 top-10 w-40 opacity-90 sm:w-56" color="#fff" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">
              Appointments
            </p>
            <p className="mt-2 font-display text-4xl italic">
              Reserve the chair.
            </p>
            <p className="mt-3 max-w-sm text-sm text-white/80">
              {site.hours}. {site.locationNote}
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 bg-bg p-6 sm:p-10">
          <h2 className="font-display text-4xl">Book your look</h2>
          <p className="text-sm text-muted">
            The form opens WhatsApp with your details. Confirm the number with
            Rachna if needed.
          </p>
          <label className="block text-sm">
            Name
            <input
              required
              name="name"
              className="mt-1 w-full rounded-xl border border-line bg-bg-2 px-4 py-3 outline-none focus:border-pink"
            />
          </label>
          <label className="block text-sm">
            Phone
            <input
              required
              name="phone"
              type="tel"
              className="mt-1 w-full rounded-xl border border-line bg-bg-2 px-4 py-3 outline-none focus:border-pink"
            />
          </label>
          <label className="block text-sm">
            Service
            <select
              name="service"
              className="mt-1 w-full rounded-xl border border-line bg-bg-2 px-4 py-3 outline-none focus:border-pink"
            >
              {bookingServices.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            Preferred date
            <input
              name="date"
              type="date"
              className="mt-1 w-full rounded-xl border border-line bg-bg-2 px-4 py-3 outline-none focus:border-pink"
            />
          </label>
          <label className="block text-sm">
            Note
            <textarea
              name="message"
              rows={3}
              className="mt-1 w-full rounded-xl border border-line bg-bg-2 px-4 py-3 outline-none focus:border-pink"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-pink py-3.5 text-sm font-medium text-white"
          >
            {sent ? "Opening WhatsApp…" : "Send on WhatsApp"}
          </button>
          <p className="text-xs text-muted">
            Or call{" "}
            <a href={site.phoneHref} className="text-pink">
              {site.phone}
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
