import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EJS_SERVICE_ID, EJS_TEMPLATE_ID } from '../emailjsConfig';

const SERVICE_OPTIONS: Record<string, string> = {
  powerapp: 'Power Apps Development',
  automate: 'Power Automate / Flows',
  pbi: 'Power BI Dashboard',
  copilot: 'Copilot Studio Bot',
  sharepoint: 'SharePoint / M365',
  other: 'Something Else',
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  msg: string;
}

interface FormErrors {
  name: boolean;
  email: boolean;
  service: boolean;
  msg: boolean;
}

const INITIAL_FORM: FormState = { name: '', email: '', company: '', service: '', msg: '' };
const INITIAL_ERRORS: FormErrors = { name: false, email: false, service: false, msg: false };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const field = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submitForm() {
    const newErrors: FormErrors = {
      name: !form.name.trim(),
      email: !validateEmail(form.email.trim()),
      service: !form.service,
      msg: !form.msg.trim(),
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.service || newErrors.msg) return;

    setSending(true);
    setSendError(null);

    const templateParams = {
      from_name: form.name.trim(),
      from_email: form.email.trim(),
      company: form.company.trim() || 'Not provided',
      service: SERVICE_OPTIONS[form.service] || form.service,
      message: form.msg.trim(),
      to_email: 'logadeepkannan2024@gmail.com',
    };

    try {
      await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, templateParams);
      setSuccess(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError('⚠ Failed to send. Please check your EmailJS config or email directly.');
    } finally {
      setSending(false);
    }
  }

  function resetForm() {
    setForm(INITIAL_FORM);
    setErrors(INITIAL_ERRORS);
    setSendError(null);
    setSending(false);
    setSuccess(false);
  }

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="contact-glow"></div>
      <div className="contact-wrap">
        <div className="contact-header reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Contact
          </div>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>
            Let's <em>Work Together</em>
          </h2>
          <p className="contact-intro">
            Have a Power Platform project, automation challenge, or just want to connect? Drop me
            a message — I usually respond within 24 hours.
          </p>
        </div>

        <div className="contact-columns">
          <div className="contact-info reveal reveal-delay-1">
            <div className="contact-detail-list">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">
                    <a href="mailto:logadeep@email.com">logadeepkannan2024@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-value">Chennai, Tamil Nadu, India</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Response Time</div>
                  <div className="contact-detail-value">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="social-btn" title="Resume">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap reveal reveal-delay-2">
            {!success && (
              <div id="contactFormInner">
                <div className="form-row">
                  <div className={`form-group${errors.name ? ' has-error' : ''}`} id="grp-name">
                    <label className="form-label" htmlFor="cf-name">
                      Your Name
                    </label>
                    <input
                      className="form-input"
                      id="cf-name"
                      type="text"
                      placeholder="John Doe"
                      autoComplete="off"
                      value={form.name}
                      onChange={field('name')}
                    />
                    <span className="field-error">Please enter your name.</span>
                  </div>
                  <div className={`form-group${errors.email ? ' has-error' : ''}`} id="grp-email">
                    <label className="form-label" htmlFor="cf-email">
                      Email Address
                    </label>
                    <input
                      className="form-input"
                      id="cf-email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={field('email')}
                    />
                    <span className="field-error">Enter a valid email address.</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group" id="grp-company">
                    <label className="form-label" htmlFor="cf-company">
                      Company <span style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>(optional)</span>
                    </label>
                    <input
                      className="form-input"
                      id="cf-company"
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={field('company')}
                    />
                  </div>
                  <div className={`form-group${errors.service ? ' has-error' : ''}`} id="grp-service">
                    <label className="form-label" htmlFor="cf-service">
                      I Need Help With
                    </label>
                    <select className="form-select" id="cf-service" value={form.service} onChange={field('service')}>
                      <option value="" disabled>
                        Select a service...
                      </option>
                      <option value="powerapp">Power Apps Development</option>
                      <option value="automate">Power Automate / Flows</option>
                      <option value="pbi">Power BI Dashboard</option>
                      <option value="copilot">Copilot Studio Bot</option>
                      <option value="sharepoint">SharePoint / M365</option>
                      <option value="other">Something Else</option>
                    </select>
                    <span className="field-error">Please select a service.</span>
                  </div>
                </div>

                <div className={`form-group full${errors.msg ? ' has-error' : ''}`} id="grp-msg">
                  <label className="form-label" htmlFor="cf-msg">
                    Your Message
                  </label>
                  <textarea
                    className="form-textarea"
                    id="cf-msg"
                    placeholder="Tell me about your project, challenge, or idea..."
                    maxLength={500}
                    value={form.msg}
                    onChange={field('msg')}
                  ></textarea>
                  <span className="field-error">Please enter a message.</span>
                </div>

                <div className="form-footer-row">
                  <span className="char-count">
                    <span id="charNum">{form.msg.length}</span> / 500
                  </span>
                  <button className="btn-submit" onClick={submitForm} disabled={sending}>
                    {sending ? (
                      <>
                        Sending...
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10" opacity={0.25} />
                          <path d="M12 2a10 10 0 0 1 10 10">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 12 12"
                              to="360 12 12"
                              dur="0.8s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </svg>
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
                {sendError && <p className="form-send-error">{sendError}</p>}
              </div>
            )}

            {success && (
              <div className="form-success visible" id="formSuccess">
                <div className="success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00f5a0" strokeWidth={2} strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="success-title">Message Sent!</div>
                <p className="success-sub">Thanks for reaching out, I'll get back to you within 24 hours.</p>
                <button className="send-another-btn" onClick={resetForm}>
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
