'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Button = ({ children, ...props }) => (
  <button {...props} className="w-full bg-[#EF4D48] hover:bg-[#f4514b] text-white transition-colors py-2 px-4 rounded-md">
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input {...props} className="w-full border border-gray-200 rounded-md p-2 focus:border-[#EF4D48] focus:ring-[#EF4D48] outline-none" />
);

const Textarea = ({ ...props }) => (
  <textarea {...props} className="w-full border border-gray-200 rounded-md p-2 focus:border-[#EF4D48] focus:ring-[#EF4D48] outline-none" />
);

const Label = ({ children, ...props }) => (
  <label {...props} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);

const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "WhatsApp",
      details: "+44 737 694 9419",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: "contact@iptvstate.com",
      description: "Online support 24/7"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      details: "162 Juniok Street",
      description: "Berlin, Germany"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: "24/7 Support",
      description: "Always here for you"
    }
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Contact Information Section */}
        <div className="space-y-8 bg-white">
          <div>
            <h2 className="text-3xl font-bold text-[#EF4D48]">Get in Touch</h2>
            <p className="mt-4 text-gray-600 max-w-md">
              Have questions about our IPTV service? We're here to help! Contact us through any of these channels or fill out the form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 bg-[#ff8b87] bg-opacity-20 rounded-full flex items-center justify-center text-[#EF4D48]">
                  {info.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{info.title}</h3>
                <p className="mt-2 text-[#f4514b]">{info.details}</p>
                <p className="mt-1 text-sm text-gray-500">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-[#EF4D48]">Send us a Message</h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 text-[#EF4D48]"
              >
                <p className="text-lg font-semibold">Thank you for contacting us!</p>
                <p className="mt-2">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    required
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

