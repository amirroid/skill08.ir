import React, { useState } from 'react';
import { Mail, ChevronDown, CheckCircle2, Send } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

function PageHeader({ eyebrow, title, sub }) {
  return (
    <div className="anim-fade-up" style={{ paddingTop: 52, paddingBottom: 32, borderBottom: '1px solid var(--border)', marginBottom: 44 }}>
      {eyebrow && (
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: 12 }}>
          {eyebrow}
        </span>
      )}
      <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 900, color: 'var(--text)', marginBottom: sub ? 12 : 0, letterSpacing: '-0.025em' }}>
        {title}
      </h1>
      {sub && <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 600 }}>{sub}</p>}
    </div>
  );
}

const FAQS_FA = [
  { q: 'شرایط سنی شرکت در مسابقات چیست؟', a: 'طبق بند 1.1.4 سند WSC2026_TD08_en، متسابقین در سال برگزاری نباید بیشتر از ۲۲ سال سن داشته باشند.' },
  { q: 'آیا دسترسی به اینترنت در طول مسابقه وجود دارد؟', a: 'آزمون در محیط کاملاً آفلاین برگزار می‌شود. هر متسابق مجاز به استفاده از ایستگاه اینترنت مشترک، حداکثر ۲ نوبت ۱۰ دقیقه‌ای در روز است.' },
  { q: 'چه وسایلی را می‌توان به سالن آورد؟', a: 'تنها کیبورد سیم‌دار و موس سیم‌دار شخصی در روز آشنایی مجاز است. لپ‌تاپ، USB، گوشی و سایر وسایل اکیداً ممنوع است.' },
  { q: 'نمره‌دهی و ارزیابی چگونه انجام می‌شود؟', a: 'ارزیابی از دو روش عینی (Measurement) و توصیفی (Judgement با مقیاس ۰ تا ۳) توسط تیم ۳ نفره کارشناسان در سیستم CIS ثبت می‌شود.' },
];

const FAQS_EN = [
  { q: 'What is the age limit for participating?', a: 'Per section 1.1.4 of WSC2026_TD08_en, competitors must not be older than 22 years in the competition year.' },
  { q: 'Is internet access available during competition?', a: 'Runs in a fully offline environment. Each competitor may use the shared internet station up to 2 × 10-minute sessions per day.' },
  { q: 'What items are allowed in the competition hall?', a: 'Only a wired keyboard and wired mouse on Familiarization Day. Laptops, USB drives, phones, and other devices are strictly prohibited.' },
  { q: 'How is scoring and assessment carried out?', a: 'Two methods: objective (Measurement) and subjective (Judgement on a 0–3 scale) by a team of 3 expert assessors, recorded in the CIS system.' },
];

function FaqItem({ faq, index, isOpen, onToggle }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className="card"
      style={{
        overflow: 'hidden',
        borderRadius: index === 0 ? '10px 10px 4px 4px' : index === 3 ? '4px 4px 10px 10px' : 4,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.4s ease ${index * 0.07}s, transform 0.4s ease ${index * 0.07}s`,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 12,
          padding: '15px 18px', cursor: 'pointer',
          background: isOpen ? 'var(--surface-hover)' : 'none',
          border: 'none', textAlign: 'inherit',
          transition: 'background 0.15s ease',
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600, color: isOpen ? 'var(--accent)' : 'var(--text)', flex: 1, transition: 'color 0.15s ease' }}>
          {faq.q}
        </span>
        <ChevronDown
          size={15}
          style={{
            color: 'var(--text-3)', flexShrink: 0,
            transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
            transform: isOpen ? 'rotate(180deg)' : 'none',
          }}
        />
      </button>

      <div style={{
        maxHeight: isOpen ? '200px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{
          padding: '0 18px 16px',
          fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8,
          borderTop: '1px solid var(--border)',
          paddingTop: 14,
        }}>
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage({ lang }) {
  const isRtl = lang === 'fa';
  const faqs = isRtl ? FAQS_FA : FAQS_EN;
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState(null);

  const fieldStyle = (name) => ({
    width: '100%',
    padding: '10px 14px',
    borderRadius: 9,
    border: `1px solid ${focused === name ? 'var(--accent)' : 'var(--border)'}`,
    background: 'var(--bg)',
    color: 'var(--text)',
    fontSize: 13,
    fontFamily: 'IRANSansX, sans-serif',
    outline: 'none',
    boxShadow: focused === name ? '0 0 0 3px var(--accent-subtle)' : 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  });

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow="Contact & Official Information"
        title={isRtl ? 'ارتباط با دبیرخانه' : 'Contact the Secretariat'}
        sub={isRtl
          ? 'برای ارتباط با دبیرخانه فنی مسابقات از آدرس پست الکترونیکی رسمی استفاده فرمایید.'
          : 'Contact the technical secretariat via the official email address.'}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
        alignItems: 'start',
      }}>
        {/* ── Left: email + form ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Email card */}
          <div className="card anim-slide-r" style={{ padding: '20px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Mail size={16} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 3 }}>
                  {isRtl ? 'پست الکترونیکی رسمی' : 'Official Email'}
                </div>
                <a
                  href="mailto:contact@skill08.ir"
                  style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                >
                  contact@skill08.ir
                </a>
              </div>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.7, margin: 0, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
              {isRtl
                ? 'پاسخگویی به مکاتبات مربیان، کارشناسان استانی و متسابقین.'
                : 'Correspondence from coaches, provincial experts, and competitors is handled here.'}
            </p>
          </div>

          {/* Contact form */}
          <div className="card anim-slide-r delay-1" style={{ padding: '22px 24px' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>
              {isRtl ? 'ارسال پیام' : 'Send a Message'}
            </div>

            {submitted ? (
              <div style={{
                padding: '28px 20px', textAlign: 'center',
                background: 'var(--bg)', borderRadius: 10,
                border: '1px solid var(--border)',
              }}>
                <CheckCircle2 size={28} style={{ color: 'var(--green)', margin: '0 auto 12px' }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                  {isRtl ? 'پیام شما با موفقیت ارسال شد.' : 'Message sent successfully.'}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-2)' }}>
                  {isRtl ? 'پاسخ به آدرس ایمیل شما ارسال خواهد شد.' : 'A reply will be sent to your email address.'}
                </div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { name: 'name',    type: 'text',  labelFa: 'نام و نام خانوادگی', labelEn: 'Full Name',     phFa: 'نام کامل', phEn: 'Your name' },
                  { name: 'email',   type: 'email', labelFa: 'پست الکترونیکی',     labelEn: 'Email Address', phFa: 'email@example.com', phEn: 'email@example.com', dir: 'ltr' },
                  { name: 'subject', type: 'text',  labelFa: 'موضوع',               labelEn: 'Subject',       phFa: 'موضوع پیام', phEn: 'Message subject' },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ fontSize: 12, color: 'var(--text-2)', display: 'block', marginBottom: 6 }}>
                      {isRtl ? field.labelFa : field.labelEn}
                    </label>
                    <input
                      type={field.type}
                      required
                      dir={field.dir}
                      placeholder={isRtl ? field.phFa : field.phEn}
                      value={form[field.name]}
                      onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                      style={fieldStyle(field.name)}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize: 12, color: 'var(--text-2)', display: 'block', marginBottom: 6 }}>
                    {isRtl ? 'متن پیام' : 'Message'}
                  </label>
                  <textarea
                    required rows={4}
                    placeholder={isRtl ? 'متن کامل پیام...' : 'Your full message...'}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: 100 }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-md" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={14} />
                  <span>{isRtl ? 'ارسال پیام' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Right: FAQ ── */}
        <div className="anim-slide-l">
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
            {isRtl ? 'پرسش‌های متداول' : 'Frequently Asked Questions'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
