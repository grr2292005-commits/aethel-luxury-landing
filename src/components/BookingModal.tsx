"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// NOTE TO USER: Replace these entry IDs with the ones from your Google Form
// To find them: View your form -> Inspect each input -> Look for "name="entry.xxxx"
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSev4odpcJ5fFEPHh9qDT5vJs8nByx66GN5hhVCkDmyQsAZFmg/formResponse";
const ENTRY_IDS = {
  name: "entry.2106832708",
  age: "entry.263833479",
  email: "entry.129800878",
  service: "entry.1384918336"
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    service: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // We use a hidden iframe to submit the form to bypass CORS limitations
    const form = document.createElement("form");
    form.action = GOOGLE_FORM_ACTION_URL;
    form.method = "POST";
    form.target = "hidden_iframe";

    const fields = [
      { id: ENTRY_IDS.name, value: formData.name },
      { id: ENTRY_IDS.age, value: formData.age },
      { id: ENTRY_IDS.email, value: formData.email },
      { id: ENTRY_IDS.service, value: formData.service },
      { id: "pageHistory", value: "0" }, // Helps with multi-page form simulation
    ];

    fields.forEach(field => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = field.id;
      input.value = field.value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Assume success after a short delay since we can't observe the iframe's response
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", age: "", email: "", service: "" });
      }, 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
          {/* Hidden iframe for form submission */}
          <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-xl bg-background rounded-[2rem] overflow-hidden shadow-2xl border border-secondary"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-accent hover:text-primary transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-12 md:p-16">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 size={64} className="text-secondary mx-auto mb-8" />
                  <h2 className="text-4xl font-serif text-primary mb-4">Inquiry Received</h2>
                  <p className="text-accent">We will reach out to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-semibold mb-6 block">Reserved for you</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12">
                    Begin your <br />
                    <span className="italic">consultation.</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent mb-2 block group-focus-within:text-primary transition-colors">Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b border-secondary py-3 outline-none focus:border-primary transition-all font-light placeholder:text-accent/30"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent mb-2 block group-focus-within:text-primary transition-colors">Age</label>
                        <input
                          required
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="w-full bg-transparent border-b border-secondary py-3 outline-none focus:border-primary transition-all font-light placeholder:text-accent/30"
                          placeholder="25"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent mb-2 block group-focus-within:text-primary transition-colors">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-secondary py-3 outline-none focus:border-primary transition-all font-light placeholder:text-accent/30"
                        placeholder="hello@example.com"
                      />
                    </div>

                    <div className="group">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent mb-2 block group-focus-within:text-primary transition-colors">Service Interest</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-transparent border-b border-secondary py-3 outline-none focus:border-primary transition-all font-light appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Voice Agent">Voice Agent</option>
                        <option value="CRM">CRM</option>
                        <option value="Payment Processing Integration">Payment Processing Integration</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-off-black text-white py-6 rounded-full text-xs uppercase tracking-[0.4em] font-semibold hover:bg-primary transition-all duration-500 flex items-center justify-center gap-4 group disabled:opacity-50"
                    >
                      {status === "submitting" ? "Processing..." : "Submit Inquiry"}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
