"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  IoMailOutline,
  IoArrowForward,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoBookOutline,
  IoVideocamOutline,
  IoPeopleOutline,
  IoCloudUploadOutline,
  IoPersonAddOutline,
  IoGitNetworkOutline,
  IoRocketOutline,
  IoChevronDown
} from "react-icons/io5";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    subscribed_to_updates: false,
  });
  const [heroEmail, setHeroEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleHeroSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!heroEmail) return;

    // Scroll to full waitlist form
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    setFormData({ ...formData, email: heroEmail });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "You're officially on the list! We'll notify you once EduPal goes live.",
        });
        setFormData({ name: "", email: "", university: "", subscribed_to_updates: false });
        setHeroEmail("");
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <IoBookOutline className="text-2xl" />,
      title: "Access Past Questions",
      description: "Find previous exam questions easily organized by course and year.",
    },
    {
      icon: <IoVideocamOutline className="text-2xl" />,
      title: "Join Virtual Classes",
      description: "Attend live sessions from anywhere. Never miss a lecture again.",
    },
    {
      icon: <IoPeopleOutline className="text-2xl" />,
      title: "Connect with Peers",
      description: "Collaborate with classmates in real-time study groups.",
    },
    {
      icon: <IoCloudUploadOutline className="text-2xl" />,
      title: "Secure Cloud Storage",
      description: "Save your study materials safely and access them on any device.",
    },
  ];

  const steps = [
    {
      icon: <IoPersonAddOutline className="text-4xl" />,
      title: "Sign Up",
      description: "Create your student profile with your university email.",
    },
    {
      icon: <IoGitNetworkOutline className="text-4xl" />,
      title: "Connect",
      description: "Join your department groups and find your classmates.",
    },
    {
      icon: <IoRocketOutline className="text-4xl" />,
      title: "Learn Together",
      description: "Start sharing resources and ace your exams together.",
    },
  ];

  const faqs = [
    {
      question: "What is EduPal?",
      answer: "EduPal is a digital learning platform designed specifically for university students to share resources, access past questions, and study collaboratively in a structured environment.",
    },
    {
      question: "Is EduPal free to use?",
      answer: "Yes! The core features of EduPal are free for students. We want to ensure education is accessible to everyone.",
    },
    {
      question: "When will EduPal launch?",
      answer: "We are currently in beta testing at select universities. Join the waitlist to be notified when we launch at your school!",
    },
    {
      question: "Can I upload my own materials?",
      answer: "Absolutely. EduPal thrives on community contributions. You can upload notes, past questions, and helpful resources for your peers.",
    },
  ];

  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCGZhxK9oFDkBk7vX5PNRRYPJIWjwQkjROLoyE9qQaV4OlOUQvhk_K6SbWyo7UjnAxMA5W2Hcyft_gcGnLgHCIYavekM_JkGX9_LHtXqvwmjRxdG1riaOXJ9Usk87QnbM9WzUnZqdLNzZYz5kT2S0KPcqAabsB5a8Pc1h5K780cNu-fNyiXhFaociusPh5pcO0Hi_6E20RC6qcYU0XdmnaI61d3YM5S8Dyp7TIfnuojFlkf3L1FOQXLcNchg4L8qM8zRkCFfud-6MA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDX_MI6TnFN1hP6ElAO2vHx28Rm9KC9of__PXvBeUJWri8YxoqxHiBgl6Kv1PkV6SSD7mOcNMO9aMk-s29NAmu2CDuTyLRjRFX05MFb0t5EabxacA2PlfMoYfVxgcrrF67NzKctDRFQ6WwUqTQnHOX2pA-2Dp6H-3FCb6hdqIQINe57mkxvcQi3DmCHItAIe6CR8bam3-vgkf_ig8RPmILS-koXPkhl0fkmiC0lreJGaAIoPJtuPACM3ESUlT48Myk7_Ua5zuAHO_0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCtYw8W5h15nQuFR_kZI756Rp_KMW_IWmxsE1SsUZ2nA3VypLBby4MSaXhg56TxUKQvJFIcRKJg5cDqu0h1dDQ6m9jrQDKErtiY1Om0aiJoT-MtckehpUEhD0yc6Q6ZoLq27LF6UaQiES_e6j2WMhkR3IWINTESOxPYrtLiPmmXCshelvG32MyZzHpkQr2yRu_xqDWKr6uxFx1npzlgYU2avqQFRwnGTu39baawrDFZLlTJJjg1Gk46F3GbN1XRKOHIM-9luMHNypQ",
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Decorative Gradient Blobs */}
      <div className="fixed top-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0"></div>

      <div className="flex h-full grow flex-col z-10">
        <Navbar />

        <main className="flex flex-1 flex-col items-center w-full">
          {/* Hero Section */}
          <section className="flex flex-1 flex-col items-center justify-center w-full px-6 py-10 md:py-16 lg:py-20 md:px-10 lg:px-20">
            <div className="w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                      Level Up Your{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                        Degree
                      </span>{" "}
                      with EduPal.
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl font-light">
                      Connect with classmates, share notes, and ace your exams on the only platform built for the modern university experience.
                    </p>
                  </div>

                  {/* Waitlist Form - Hero */}
                  <div className="flex flex-col gap-3 w-full max-w-lg" id="waitlist-hero">
                    <form
                      onSubmit={handleHeroSubmit}
                      className="relative flex w-full h-14 sm:h-16 items-center p-1 bg-white/5 border border-white/10 rounded-full focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all shadow-lg shadow-black/20"
                    >
                      <div className="pl-4 sm:pl-5 text-slate-400 flex items-center justify-center">
                        <IoMailOutline className="text-xl" />
                      </div>
                      <input
                        type="email"
                        placeholder="university@email.edu"
                        value={heroEmail}
                        onChange={(e) => setHeroEmail(e.target.value)}
                        className="flex-1 w-full bg-transparent border-none text-white placeholder:text-slate-500 focus:ring-0 px-3 sm:px-4 text-sm sm:text-base font-normal h-full"
                      />
                      <button
                        type="submit"
                        className="h-full px-4 sm:px-6 md:px-8 bg-primary hover:bg-primary-dark text-background-dark text-sm sm:text-base font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(19,236,106,0.4)] whitespace-nowrap flex items-center gap-2"
                      >
                        <span className="hidden sm:inline">Join Waitlist</span>
                        <span className="sm:hidden">Join</span>
                        <IoArrowForward className="text-lg" />
                      </button>
                    </form>

                    {/* Trust Signal */}
                    <div className="flex items-center gap-2 pl-2">
                      <div className="flex -space-x-2">
                        {avatars.map((avatar, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-background-dark bg-gray-300 bg-cover bg-center"
                            style={{ backgroundImage: `url("${avatar}")` }}
                          ></div>
                        ))}
                      </div>
                      <p className="text-primary text-xs sm:text-sm font-medium">
                        🚀 Spots filling fast – 2,000+ students waiting.
                      </p>
                    </div>
                  </div>

                  {/* University Trust Section */}
                  <div className="pt-4 border-t border-white/5 mt-2">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">
                      Trusted by students at
                    </p>
                    <div className="flex flex-wrap gap-4 sm:gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                      <span className="text-white font-serif font-bold text-base sm:text-lg">Stanford</span>
                      <span className="text-white font-serif font-bold text-base sm:text-lg">MIT</span>
                      <span className="text-white font-serif font-bold text-base sm:text-lg">Oxford</span>
                      <span className="text-white font-serif font-bold text-base sm:text-lg">Cambridge</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Illustration */}
                <div className="relative w-full h-full flex items-center justify-center order-1 lg:order-2 group">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30 blur-3xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>

                  {/* Main Illustration Card */}
                  <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXHgm0QuvGU-UPt93zU77tLyGnL9WON2-qaSvIwbJohM3gfMUvTIGfrFkXmdxhhGqvmYYoC9nnpgaqDX2kGDVnFcWckJN3wczc7K5CMLBPjm38oY36PjlGVo7fjpMObE7lhv9NxR5_5f-1pLhc6ClPNLlt4b82PfVduaJsLwjwhs-CzeVoAlZtOmVuW_1ilPo_-8KMvPecxLoF6eKa-mR1-r2I237sfOz0h_kaoqDeg9Cp9_ccnKKhJPCbMRnJxkn3JahB7v4dShk"
                      alt="Students collaborating"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-background-dark/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>

                    {/* Floating UI Elements */}
                    <div className="absolute top-4 sm:top-8 left-4 sm:left-8 p-2 sm:p-3 bg-background-dark/90 backdrop-blur-md rounded-xl border border-white/10 shadow-lg animate-float">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="bg-primary/20 p-1.5 sm:p-2 rounded-lg text-primary">
                          <IoCheckmarkCircle className="text-sm sm:text-base" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-slate-400">Assignment</div>
                          <div className="text-xs sm:text-sm font-bold text-white">Physics 101 Notes Uploaded</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 p-3 sm:p-4 bg-background-dark/90 backdrop-blur-md rounded-xl border border-white/10 shadow-lg max-w-[160px] sm:max-w-[200px]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">Group Chat</span>
                        <span className="text-[10px] text-primary">Active now</span>
                      </div>
                      <div className="flex -space-x-2 mb-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500 border border-background-dark"></div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border border-background-dark"></div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500 border border-background-dark"></div>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem & Solution Section */}
          <section className="w-full max-w-7xl px-6 py-16 md:py-24 md:px-10 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 items-center rounded-3xl bg-card-dark border border-white/10 p-6 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>

              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 rounded-full bg-[#1E4079] text-blue-200 text-xs font-bold mb-4">
                  THE PROBLEM & SOLUTION
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
                  Why EduPal Exists
                </h2>
                <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed">
                  Many students rely on scattered WhatsApp groups and outdated folders to study. It&apos;s chaotic and inefficient.
                </p>
                <p className="text-white text-base md:text-lg font-medium mb-8 leading-relaxed border-l-4 border-primary pl-4">
                  EduPal brings everything into one organized platform — making learning easier, faster, and more collaborative.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-400">
                    <IoCloseCircle className="text-red-400 text-xl flex-shrink-0" />
                    <span>No more endless scrolling for files</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <IoCloseCircle className="text-red-400 text-xl flex-shrink-0" />
                    <span>Stop losing materials in chats</span>
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium">
                    <IoCheckmarkCircle className="text-primary text-xl flex-shrink-0" />
                    <span>Everything organized in one place</span>
                  </li>
                </ul>
              </div>

              <div
                className="order-1 md:order-2 h-full min-h-[250px] md:min-h-[300px] rounded-2xl overflow-hidden bg-cover bg-center border border-white/10"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEOcDs4ewTSreN1zvtRxEWgwfzFKGFq0jR4qIfURvZxnDWeCQqvXDVoiw8HmMu9wl5TV13PA_2VDCUCWsYCyWX8KPezD4wZvU2TFulH6z5PM5lYm6OEhtITtdkS3_p4wOzqrlc5wgzpEq6_nKlZia5MOOv50jBBGUiGNFtJFX7c9J9DcE-_Buqhgptt1jtiNpPz5qnoSCaFbZoPa-yADlIEwcsXbBRWz_r37ASvhApq3kstBB51iWlBR5-f4yL0uh2Ra1CS1z7HTI')",
                }}
              ></div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full max-w-7xl px-6 py-16 md:px-10 lg:px-20">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What You Can Do on EduPal</h2>
              <p className="text-slate-400 text-base md:text-lg">
                Tools that make learning simple, effective, and actually fun.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-card-dark border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <div className="size-12 rounded-full bg-[#1E4079]/30 flex items-center justify-center text-blue-300 mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section
            id="how-it-works"
            className="w-full max-w-7xl mx-6 md:mx-10 lg:mx-20 px-6 py-16 bg-[#16291f] rounded-3xl my-10 relative overflow-hidden"
            style={{ maxWidth: "calc(100% - 3rem)" }}
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#13ec6a 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">How EduPal Works</h2>

              <div className="flex flex-col md:flex-row w-full justify-between items-center gap-8 relative">
                <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/10 -z-10"></div>

                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center max-w-xs">
                    <div className="size-24 rounded-full bg-background-dark border-4 border-card-dark flex items-center justify-center mb-6 shadow-xl relative">
                      <span className="text-primary">{step.icon}</span>
                      <div className="absolute -top-2 -right-2 size-8 bg-primary rounded-full flex items-center justify-center text-background-dark font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="w-full max-w-4xl px-6 py-16 md:px-10">
            <div className="bg-gradient-to-br from-[#1E4079] to-[#0f2444] rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-2xl">
              <div className="absolute top-0 right-0 text-white/5 font-serif text-[150px] md:text-[200px] leading-none -translate-y-10 translate-x-10 pointer-events-none">
                &quot;
              </div>
              <div className="shrink-0">
                <div className="size-20 md:size-32 rounded-full bg-white/10 p-1">
                  <Image
                    alt="Student portrait"
                    className="w-full h-full object-cover rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP_jbU0dixB29BwsphmuGAaaNVjh1X_kdowueixke-doM_lczQZwv-HbRJ6qwWmEDc3SQcK8l_b9n8qCCRRno0m8TEfQRa58n8rfjHH8_6BbRW21SIxrRlM3-D1fKrnEXIxVH7WvgQaYteCb9Ri7JL5JEGYCGblFpnEl-g6vf7f7a8Jq5MuVdbI7BGPAwVX-D4Gsp7DjrQ1vn9k6NoDbeKUm6eGASZgkwdr89HnqvU3INjky1TPZF2wlnte2w82T6Q_08Kp0GooIA"
                    width={128}
                    height={128}
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex flex-col text-center md:text-left z-10">
                <h3 className="text-white/60 font-bold uppercase tracking-wider text-xs md:text-sm mb-4">
                  Student Stories
                </h3>
                <p className="text-lg md:text-2xl font-medium leading-relaxed text-white mb-6">
                  &quot;EduPal makes studying less stressful. I can finally access all my past questions in one place without begging in WhatsApp groups.&quot;
                </p>
                <div>
                  <p className="text-primary font-bold text-base md:text-lg">Chiamaka</p>
                  <p className="text-white/60 text-sm">OOU Student</p>
                </div>
              </div>
            </div>
          </section>

          {/* Waitlist Form */}
          <section id="waitlist" className="w-full max-w-xl px-6 py-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Be the First to Experience EduPal
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8">
              Join our waitlist to get early access updates when we launch on your campus.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 bg-card-dark border border-white/10 p-6 md:p-8 rounded-3xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full h-12 rounded-lg bg-background-dark border border-white/10 text-white placeholder-slate-500 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="University Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-12 rounded-lg bg-background-dark border border-white/10 text-white placeholder-slate-500 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Your University"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                required
                className="w-full h-12 rounded-lg bg-background-dark border border-white/10 text-white placeholder-slate-500 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />

              <div className="flex items-start gap-3 text-left py-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.subscribed_to_updates}
                  onChange={(e) =>
                    setFormData({ ...formData, subscribed_to_updates: e.target.checked })
                  }
                  className="mt-1 rounded bg-background-dark border-white/10 text-primary focus:ring-primary"
                />
                <label htmlFor="newsletter" className="text-sm text-slate-400 cursor-pointer">
                  Subscribe to early updates and study tips.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 mt-2 cursor-pointer items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-background-dark text-base font-bold transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist 🚀"}
              </button>

              {submitStatus.type && (
                <p
                  className={`text-sm mt-2 ${submitStatus.type === "success" ? "text-green-400" : "text-red-400"
                    }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="w-full max-w-3xl px-6 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Got Questions? We&apos;ve Got Answers.
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-card-dark border border-white/10 rounded-xl overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 md:p-6 text-white hover:bg-white/5 transition-colors list-none">
                    <h3 className="font-bold text-base md:text-lg">{faq.question}</h3>
                    <IoChevronDown className="text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-400 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full max-w-7xl px-6 py-16 md:py-20 mb-10">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-emerald-500 p-[1px]">
              <div className="bg-background-dark rounded-[23px] px-6 py-12 md:py-16 md:px-16 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] pointer-events-none"></div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 relative z-10">
                  Join the Future of Campus Learning
                </h2>
                <p className="text-slate-400 text-base md:text-lg mb-8 relative z-10">
                  Studying should be smarter, simpler, and connected.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 relative z-10">
                  <button
                    onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex min-w-[140px] h-12 cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-primary-dark transition-all text-background-dark text-base font-bold px-8"
                  >
                    Join Waitlist
                  </button>
                  <button className="flex min-w-[140px] h-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-base font-bold px-8">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
