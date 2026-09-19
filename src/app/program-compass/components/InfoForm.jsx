"use client";

import { useState } from "react";
import { DEGREE_OPTIONS, gradYearOptions } from "@/data/programCompassData";
import { secondHomeTheme } from "@/app/secondHome/theme";

const GRAD_YEARS = gradYearOptions();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

const FIELD_CLASS =
  "w-full rounded-[10px] border border-slate-200 bg-slate-50/60 px-3.5 py-3 text-[15px] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600/20";

const LABEL_CLASS = "mb-1.5 block text-[13px] font-bold text-slate-600";

/**
 * Screen 2 — registration + consent. Validation mirrors the API route so the
 * student gets the error inline rather than after a round trip; the server
 * still re-validates everything it receives.
 */
export default function InfoForm({ initialCollege = "", onSubmit, onBack }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    currentCollege: initialCollege,
    degree: "",
    gradYear: "",
  });
  const [age, setAge] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!PHONE_RE.test(values.phone.trim()))
      next.phone = "Enter a 10-digit Indian mobile number.";
    if (!EMAIL_RE.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.currentCollege.trim())
      next.currentCollege = "Please tell us your current college.";
    if (!values.degree) next.degree = "Select your degree.";
    if (!values.gradYear) next.gradYear = "Select your graduation year.";
    if (!age) next.age = "You must be 18 or older to take the assessment.";
    if (!consent) next.consent = "Please agree to be contacted about your result.";
    return next;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    onSubmit({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      currentCollege: values.currentCollege.trim(),
      degree: values.degree,
      gradYear: values.gradYear,
      consent: true,
    });
  }

  return (
    <div className="mx-auto max-w-[620px] px-4 py-12 lg:py-16">
      <div className="text-center">
        <span className={secondHomeTheme.eyebrow}>Step 1 of 2</span>
        <h1
          className={`${secondHomeTheme.title} mt-3`}
          style={{ fontSize: "clamp(26px,3.4vw,38px)" }}
        >
          A little about you
        </h1>
        <p className={`${secondHomeTheme.lead} mx-auto mt-3 max-w-[480px]`}>
          So we can send your result across and have a counsellor follow up if you
          want one.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className={`${secondHomeTheme.surface} mt-8 p-6 sm:p-8`}>
        <div className="mb-5">
          <label className={LABEL_CLASS} htmlFor="pc-name">
            Full name
          </label>
          <input
            id="pc-name"
            type="text"
            autoComplete="name"
            className={FIELD_CLASS}
            placeholder="e.g. Priya Reddy"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <FieldError>{errors.name}</FieldError>}
        </div>

        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={LABEL_CLASS} htmlFor="pc-phone">
              Phone number
            </label>
            <input
              id="pc-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              className={FIELD_CLASS}
              placeholder="10-digit mobile"
              value={values.phone}
              onChange={set("phone")}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && <FieldError>{errors.phone}</FieldError>}
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="pc-email">
              Email
            </label>
            <input
              id="pc-email"
              type="email"
              autoComplete="email"
              className={FIELD_CLASS}
              placeholder="you@example.com"
              value={values.email}
              onChange={set("email")}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <FieldError>{errors.email}</FieldError>}
          </div>
        </div>

        <div className="mb-5">
          <label className={LABEL_CLASS} htmlFor="pc-college">
            Current college
          </label>
          <input
            id="pc-college"
            type="text"
            className={FIELD_CLASS}
            placeholder="Your degree college name"
            value={values.currentCollege}
            onChange={set("currentCollege")}
            aria-invalid={Boolean(errors.currentCollege)}
          />
          {errors.currentCollege && <FieldError>{errors.currentCollege}</FieldError>}
        </div>

        <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={LABEL_CLASS} htmlFor="pc-degree">
              Degree
            </label>
            <select
              id="pc-degree"
              className={FIELD_CLASS}
              value={values.degree}
              onChange={set("degree")}
              aria-invalid={Boolean(errors.degree)}
            >
              <option value="">Select degree</option>
              {DEGREE_OPTIONS.map((degree) => (
                <option key={degree} value={degree}>
                  {degree}
                </option>
              ))}
            </select>
            {errors.degree && <FieldError>{errors.degree}</FieldError>}
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="pc-grad">
              Graduating in
            </label>
            <select
              id="pc-grad"
              className={FIELD_CLASS}
              value={values.gradYear}
              onChange={set("gradYear")}
              aria-invalid={Boolean(errors.gradYear)}
            >
              <option value="">Select year</option>
              {GRAD_YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
              <option value="Already graduated">Already graduated</option>
            </select>
            {errors.gradYear && <FieldError>{errors.gradYear}</FieldError>}
          </div>
        </div>

        <Checkline
          id="pc-age"
          checked={age}
          onChange={(v) => {
            setAge(v);
            setErrors((prev) => ({ ...prev, age: undefined }));
          }}
          error={errors.age}
        >
          I am 18 years of age or older.
        </Checkline>

        <div className="mt-3">
          <Checkline
            id="pc-consent"
            checked={consent}
            onChange={(v) => {
              setConsent(v);
              setErrors((prev) => ({ ...prev, consent: undefined }));
            }}
            error={errors.consent}
          >
            I agree that SSIM may store these details and contact me about my result
            and its PGDM programs.
          </Checkline>
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-slate-200 px-5 py-2.5 text-[14px] font-bold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            ← Back
          </button>
          <button
            type="submit"
            className={`${secondHomeTheme.accentGradient} rounded-[12px] px-8 py-[13px] text-[15px] font-extrabold text-white shadow-[0_10px_28px_rgba(16,34,105,0.16)] transition-all hover:-translate-y-[2px]`}
          >
            Start the assessment →
          </button>
        </div>
      </form>
    </div>
  );
}

function FieldError({ children }) {
  return <p className="mt-1.5 text-[12.5px] font-medium text-red-600">{children}</p>;
}

function Checkline({ id, checked, onChange, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`flex cursor-pointer items-start gap-3 rounded-[10px] border p-3.5 transition-colors ${
          error ? "border-red-300 bg-red-50/50" : "border-slate-200 bg-slate-50/60"
        }`}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-0.5 h-[17px] w-[17px] flex-none accent-purple-700"
        />
        <span className="text-[13.5px] leading-6 text-slate-600">{children}</span>
      </label>
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}
