import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Required FormSubmit fields
    formData.append("_subject", "New Inquiry from Lone Dog Website!");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/b32b482cf51c80d44cb4f2766605d6e7",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Network error");

      const result = await response.json();
      console.log("FormSubmit OK:", result);

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — INFO */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Let's get your project started.
            </h1>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to launch? Have questions about pricing?
              Fill out the form and we'll respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    Email Us
                  </h3>
                  <a
                    href="mailto:timygonzalez@gmail.com"
                    className="text-brand-blue hover:underline"
                  >
                    timygonzalez@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    Location
                  </h3>
                  <p className="text-slate-700">Remote Studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h2>

            {/* SUCCESS */}
            {formStatus === "success" ? (
              <div className="text-center py-12 bg-green-50 border border-green-100 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex justify-center items-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Sent!
                </h3>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-brand-blue hover:underline font-semibold"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* BUSINESS */}
                <div>
                  <label className="block text-sm mb-1">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    className="w-full px-4 py-3 rounded-lg border"
                    placeholder="Your Company LLC"
                  />
                </div>

                {/* WEBSITE */}
                <div>
                  <label className="block text-sm mb-1">Website</label>
                  <input
                    type="url"
                    name="website"
                    className="w-full px-4 py-3 rounded-lg border"
                    placeholder="https://"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* ERROR */}
                {formStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Try again.
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 bg-brand-blue text-white font-bold rounded-lg disabled:opacity-60"
                >
                  {formStatus === "submitting"
                    ? "Sending..."
                    : "Send Message"}
                  {formStatus !== "submitting" && (
                    <Send className="inline ml-2" size={20} />
                  )}
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
