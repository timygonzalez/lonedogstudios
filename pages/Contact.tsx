import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // FormSubmit required fields (ONLY here)
    formData.append("_subject", "New Inquiry from Lone Dog Website!");
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_origin", "https://lonedogstudios.com");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/b32b482cf51c80d44cb4f2766605d6e7",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Network error");

      await response.json();
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
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Let's get your project started.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Tell us about your goals. We reply within 24 hours.
            </p>
          </div>

          {/* FORM SIDE */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            {formStatus === "success" ? (
              <div className="py-12 text-center">
                <CheckCircle size={48} className="mx-auto text-green-500" />
                <h3 className="text-2xl font-bold mt-4">Message Sent!</h3>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-brand-blue font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honey Pot */}
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                />

                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1">Business</label>
                  <input
                    type="text"
                    name="business"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1">Website</label>
                  <input
                    type="url"
                    name="website"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full p-3 border rounded-lg"
                  ></textarea>
                </div>

                {formStatus === "error" && (
                  <div className="text-red-600 flex items-center gap-2">
                    <AlertCircle size={18} /> Something went wrong.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 px-6 rounded-lg text-white font-bold bg-brand-blue"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  {formStatus !== "submitting" && (
                    <Send className="ml-2 inline-block" size={20} />
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
