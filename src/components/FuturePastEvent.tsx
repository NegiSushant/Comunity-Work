import React, { useState } from "react";

import {
  Calendar,
  MapPin,
  Clock,
  CreditCard,
  QrCode,
  History,
} from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
}

const futureEvents: Event[] = [
  {
    id: 1,
    title: "Navratri Mahotsav 2026",
    date: "21 September – 30 September 2026",
    time: "6:00 AM – 10:00 PM",
    location: "Maa Kalinka Mandir Courtyard, Ranjeet Moxan",
    description:
      "Join us for nine days of devotion, Garhwali bhajans, aarti, and community langar. The entire village comes together to celebrate the divine power of Maa Durga.",
  },
  {
    id: 2,
    title: "Temple Foundation Day",
    date: "15 November 2026",
    time: "10:00 AM onwards",
    location: "Maa Kalinka Mandir",
    description:
      "Special pooja and cultural program to mark the foundation day of the temple. All devotees are cordially invited.",
  },
];

const pastEvents: Event[] = [
  {
    id: 101,
    title: "Navratri Mahotsav 2025",
    date: "22 September – 1 October 2025",
    time: "Full day",
    location: "Temple Courtyard",
    description:
      "A grand celebration with continuous aarti, bhajans, and langar for all devotees.",
  },
  {
    id: 102,
    title: "Havan & Deepdan Ceremony",
    date: "12 March 2025",
    time: "5:00 PM",
    location: "Maa Kalinka Mandir",
    description:
      "Sacred havan and evening deepdan organized by the village community.",
  },
  {
    id: 103,
    title: "Makar Sankranti Celebration",
    date: "14 January 2025",
    time: "8:00 AM onwards",
    location: "Temple Premises",
    description:
      "Traditional khichdi prasad distribution and community gathering.",
  },
];

const FuturePastEvent: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "qr">("bank");

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-16">
      {/* ===================== FUTURE EVENTS ===================== */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <Calendar className="w-7 h-7 text-orange-500" />
          Upcoming Events
        </h2>

        <div className="space-y-8">
          {futureEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {event.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
                  {event.description}
                </p>

                {/* Payment Section */}
                <div className="bg-orange-50 dark:bg-orange-950/30 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/50">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Support This Event
                  </h4>

                  {/* Toggle Buttons */}
                  <div className="flex gap-3 mb-6">
                    <button
                      onClick={() => setPaymentMethod("bank")}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        paymentMethod === "bank"
                          ? "bg-orange-600 text-white shadow-md"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      Bank Details
                    </button>
                    <button
                      onClick={() => setPaymentMethod("qr")}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        paymentMethod === "qr"
                          ? "bg-orange-600 text-white shadow-md"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <QrCode className="w-4 h-4" />
                      QR Code
                    </button>
                  </div>

                  {/* Bank Details */}
                  {paymentMethod === "bank" && (
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                      <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        <div className="flex justify-between">
                          <span className="font-medium">Account Name</span>
                          <span>Maa Kalinka Mandir Committee</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Bank Name</span>
                          <span>State Bank of India</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Account Number</span>
                          <span className="font-mono">XXXXXXXXXXXX</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">IFSC Code</span>
                          <span className="font-mono">SBIN000XXXX</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Branch</span>
                          <span>Nainidanda / Dhoomakot</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        Please replace the placeholders with actual bank
                        details.
                      </p>
                    </div>
                  )}

                  {/* QR Code */}
                  {paymentMethod === "qr" && (
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                      <div className="w-52 h-52 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                        {/* Replace with actual QR image */}
                        <img
                          src="/assets/donation-qr.png"
                          alt="Donation QR Code"
                          className="w-full h-full object-contain p-3"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                        <span className="text-gray-400 text-sm absolute">
                          QR Code
                        </span>
                      </div>
                      <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                        Scan this QR code using any UPI app
                        <br />
                        (GPay, PhonePe, Paytm, etc.)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PAST EVENTS ===================== */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <History className="w-7 h-7 text-orange-500" />
          Past Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {event.title}
              </h3>
              <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FuturePastEvent;
