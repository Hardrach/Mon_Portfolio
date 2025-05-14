import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

const Confetti = () => (
  <div className="confetti">
    {[...Array(30)].map((_, i) => (
      <span key={i} className={`confetti-piece confetti-${i % 6}`}></span>
    ))}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Le nom est requis.';
    if (!data.email.trim()) errs.email = "L'email est requis.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errs.email = 'Email invalide.';
    if (!data.message.trim()) errs.message = 'Le message est requis.';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setIsLoading(true);
    // Simule l'envoi
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setShowConfetti(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowConfetti(false), 2500);
    }, 1800);
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contactez-moi</h2>
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Informations de contact</h3>
            <p>N'hésitez pas à me contacter pour toute opportunité de collaboration.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>email@example.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Paris, France</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && <span className="form-error" id="name-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && <span className="form-error" id="email-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
              />
              {errors.message && <span className="form-error" id="message-error">{errors.message}</span>}
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <span className="loader"></span>
              ) : isSent ? (
                <span className="success-check">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="12" stroke="#50c878" strokeWidth="2" fill="#fff"/><path d="M8 14l3 3 7-7" stroke="#50c878" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              ) : (
                <>
                  Envoyer
                  <span className="send-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L20 2L11 20L10 13L2 11Z" fill="currentColor"/>
                    </svg>
                  </span>
                </>
              )}
            </motion.button>
            <AnimatePresence>
              {isSent && (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  Message envoyé avec succès !
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showConfetti && <Confetti />}
            </AnimatePresence>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 