import { useState } from 'react';
import Button from '../components/Button';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shakeField, setShakeField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[0-9]{10,}$/.test(formData.phone.replace(/[\s\-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        console.log('Form submitted:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submit: 'Failed to submit. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      const firstField = Object.keys(newErrors)[0];
      setShakeField(firstField);
      setTimeout(() => setShakeField(null), 500);
    }
  };

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98200 12345' },
  ];

  const infoItems = [
    { label: 'Address', content: <p>Off Link Road, Malad East,<br />Mumbai 400097, Maharashtra</p> },
    { label: 'Phone', content: <a href="tel:+919820012345">+91 98200 12345</a> },
    { label: 'Email', content: <a href="mailto:sales@sgfelegance.com">sales@sgfelegance.com</a> },
    { label: 'RERA Registration', content: <p>P51800012345</p> },
    { label: 'Business Hours', content: <p>Monday - Sunday<br />10:00 AM - 6:00 PM</p> },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__subtitle">Have questions about Elegance Heights? We're here to help you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-content">
          <div className="contact-form-wrapper">
            <h2>Quick Enquiry</h2>

            {submitted && (
              <div className="form-success">
                ✓ Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {errors.submit && (
              <div className="form-error">
                ✗ {errors.submit}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {fields.map((field, i) => (
                <div
                  className={`form-group ${shakeField === field.name ? 'form-group--shake' : ''}`}
                  key={field.name}
                  style={{ '--i': i }}
                >
                  <label htmlFor={field.name}>{field.label} *</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={errors[field.name] ? 'input-error' : ''}
                    placeholder={field.placeholder}
                    disabled={isSubmitting}
                  />
                  {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
                </div>
              ))}

              <div
                className={`form-group ${shakeField === 'message' ? 'form-group--shake' : ''}`}
                style={{ '--i': 3 }}
              >
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                  rows="5"
                  placeholder="Tell us about your interest in Elegance Heights..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={`btn btn--primary btn--lg ${isSubmitting ? 'is-loading' : ''}`}
                disabled={isSubmitting}
                style={{ '--i': 4 }}
              >
                {isSubmitting && <span className="btn__spinner" aria-hidden="true" />}
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>

            {infoItems.map((item, i) => (
              <div className="info-item" key={item.label} style={{ '--i': i }}>
                <span className="info-label">{item.label}</span>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}