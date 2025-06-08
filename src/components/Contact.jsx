import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thanks for your message! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-10 flex items-center bg-portfolio-gray-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-portfolio-black-mid text-lg mb-12 max-w-2xl">
          Have a project in mind or just want to chat? Feel free to reach out
          through the form or using the contact information below.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start">
              <div className="mr-4 bg-white p-3 rounded-full shadow-md">
                <Mail className="text-yellow-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a
                  href="mailto:Chetankanade8@gmail.com"
                  className="text-portfolio-gray-mid hover:text-yellow-300 transition-colors"
                >
                  Chetankanade8@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-white p-3 rounded-full shadow-md">
                <Phone className="text-yellow-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <a
                  href="tel:+918770912209"
                  className="text-portfolio-gray-mid hover:text-yellow-300 transition-colors"
                >
                  +918770912209
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-white p-3 rounded-full shadow-md">
                <MapPin className="text-yellow-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-portfolio-gray-mid">India</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                  {submitMessage}
                </div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-portfolio-gray-dark mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-portfolio-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-portfolio-gray-dark mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-portfolio-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-portfolio-gray-dark mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-portfolio-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary bg-blue-500 h-14 rounded-md font-medium transition-all hover:bg-portfolio-blue-dark w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
