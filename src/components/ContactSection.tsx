import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { FARM_CONTACT, PRODUCTS, FAQS } from '../data/farmData.ts';

interface ContactSectionProps {
  initialProduct?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProduct = '', initialMessage = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState(initialProduct || 'Fresh Milk');
  const [message, setMessage] = useState(initialMessage || '');
  
  // Validation state
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync props when user clicks enquiry from another card
  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialProduct, initialMessage]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address (or leave empty).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form submission / recording
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-stone-950 tracking-tight text-balance">
            Enquire for Pure Dairy or Plan a Farm Visit
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Have questions about our milk delivery, fat percentage, cow or buffalo milk supply, or bulk requirements? Send us a message or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              
              <h3 className="text-lg font-serif-display font-bold text-stone-900 mb-1">
                Customer &amp; Visitor Enquiry Form
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Fields marked with <span className="text-red-500">*</span> are required. We will respond promptly.
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 font-bold text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    <span>Enquiry Received Successfully!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Thank you for reaching out to Choudhary Dairy Farm. Our farm representative will call you back at your phone number shortly during our hours (5:00 AM – 7:00 PM).
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={`tel:${FARM_CONTACT.phone}`}
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now: {FARM_CONTACT.formattedPhone}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-stone-800 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-stone-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Phone field */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-stone-800 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9811XXXXXX"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-stone-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email field (optional) */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-stone-800 mb-1">
                        Email Address <span className="text-stone-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-stone-300 focus:border-emerald-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Product selection */}
                  <div>
                    <label htmlFor="product" className="block text-xs font-semibold text-stone-800 mb-1">
                      Product / Enquiry Topic <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="product"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-stone-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 focus:outline-none transition-colors"
                    >
                      <optgroup label="Milk Varieties">
                        <option value="Fresh Milk">Fresh Milk (Standard Farm Whole Milk)</option>
                        <option value="Cow Milk">Cow Milk (Pure Desi Cow Milk)</option>
                        <option value="Buffalo Milk">Buffalo Milk (Murrah Buffalo Milk - Rich &amp; Thick)</option>
                      </optgroup>
                      <optgroup label="Traditional Dairy Products">
                        <option value="Fresh Curd (Dahi)">Fresh Curd (Dahi)</option>
                        <option value="Farm Butter (Makhan)">Farm Butter (Makhan)</option>
                        <option value="Dairy Ghee (Desi Ghee)">Dairy Ghee (Desi Ghee)</option>
                        <option value="Fresh Cream (Malai)">Fresh Cream (Malai)</option>
                      </optgroup>
                      <optgroup label="General Services">
                        <option value="Daily Milk Delivery">Daily Milk Delivery Subscription (Delhi Area)</option>
                        <option value="Farm Visit">Farm Visit / Inspection</option>
                        <option value="Bulk Order">Bulk Order (Functions / Catering)</option>
                        <option value="General Question">General Enquiry</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-stone-800 mb-1">
                      Message / Quantity Details <span className="text-stone-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Need 2 Litres Buffalo Milk daily in Old Gardhi Mendu area..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-stone-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 disabled:opacity-75 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Product Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Contact Information Cards & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200/90 p-6 space-y-4">
              <h3 className="text-base font-serif-display font-bold text-stone-900">
                Direct Contact Information
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs">Direct Phone Line</div>
                    <a
                      href={`tel:${FARM_CONTACT.phone}`}
                      className="font-bold text-emerald-900 hover:text-emerald-700 text-base"
                    >
                      {FARM_CONTACT.formattedPhone}
                    </a>
                    <div className="text-[11px] text-stone-500">Tap to call directly from mobile</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100/80 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs">Farm Location</div>
                    <div className="font-semibold text-stone-900">{FARM_CONTACT.address}</div>
                    <div className="text-[11px] text-stone-500">Delhi, India</div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs">Opening Hours</div>
                    <div className="font-semibold text-stone-900">{FARM_CONTACT.hours}</div>
                    <div className="text-[11px] text-stone-500">{FARM_CONTACT.days}</div>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp action */}
              <div className="pt-3 border-t border-stone-200">
                <a
                  href={FARM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2 border border-emerald-200"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Chat with Us on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Frequently Asked Questions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Frequently Asked Questions
              </h4>
              <div className="space-y-2">
                {FAQS.slice(0, 3).map((faq) => (
                  <div key={faq.question} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-xs">
                    <strong className="block text-stone-900 mb-1">{faq.question}</strong>
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
