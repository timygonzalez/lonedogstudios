import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/timygonzalez@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Inquiry from Lone Dog Website!",
          _captcha: "false"
        })
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's get your project started.</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to launch? Have questions about our pricing? Fill out the form, and we'll get back to you within 24 hours. No sales pressure, just a conversation about your goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-500 mb-1">For general inquiries and quotes</p>
                  <a href="mailto:timygonzalez@gmail.com" className="text-brand-blue font-medium hover:underline">
                    timygonzalez@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Location</h3>
                  <p className="text-slate-500 mb-1">Proudly serving Mooresville, Lake Norman, and the world.</p>
                  <p className="text-slate-700">Remote Studio</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Privacy Promise</h4>
              <p className="text-sm text-slate-500">
                We hate spam as much as you do. Your email will never be shared with third parties.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-green-50 rounded-xl border border-green-100">
                <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 max-w-xs mx-auto">
                  Thanks for reaching out. We'll be in touch shortly.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-brand-blue font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honey Pot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    id="business"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                    placeholder="Your Company LLC"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Current Website (Optional)</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again later or email us directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg text-base font-bold text-white bg-brand-blue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  {formStatus !== 'submitting' && <Send className="ml-2 h-5 w-5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;