import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] =
    useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // REQUIRED FormSubmit fields added here!
    formData.append("_subject", "New Inquiry from Lone Dog Website!");
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_origin", "https://lonedogstudios.com");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/b32b482cf51c80d44cb4f2766605d6e7",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Network response was not OK");

      const result = await response.json();
      console.log("FormSubmit response:", result);

      setFormStatus("success");
      form.reset();

    } catch (error) {
      console.error("FormSubmit error:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Let's get your project started.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to launch? Have questions about our pricing? Fill out the form,
              and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-500 mb-1">General inquiries & quotes</p>
                  <a href="mailto:timygonzalez@gmail.com"
                     className="text-brand-blue font-medium hover:underline">
                    timygonzalez@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">Location</h3>
                  <p className="text-slate-500 mb-1">
                    Serving Mooresville, Lake Norman & Worldwide.
                  </p>
                  <p className="text-slate-700">Remote Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h2>

            {/* SUCCESS */}
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center bg-green-50 rounded-xl border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
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

              // FORM
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-brand-blue"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-brand-blue"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Business */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300"
                    placeholder="Your Company LLC"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Website (optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300"
                    placeholder="https://"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* ERROR */}
                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Try again.
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex justify-center items-center py-4 px-6 rounded-lg text-base font-bold text-white bg-brand-blue hover:brightness-110 shadow-lg disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? "Sending..." : "Send Message"}
                  {formStatus !== 'submitting' && <Send className="ml-2" size={20} />}
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
