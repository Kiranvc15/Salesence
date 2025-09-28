import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Star, TrendingUp, Zap, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
      
      {/* 🔮 Elegant Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/70 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 🔖 Pre-Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mb-6"
      >
        <p className="text-sm sm:text-base text-purple-300 font-semibold uppercase tracking-[0.25em]">
          AI-Powered Market Analysis
        </p>
        <span className="absolute left-1/2 -bottom-1 w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full animate-pulse -translate-x-1/2"></span>
      </motion.div>

      {/* 🏆 Headline */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
        <span className="text-white block">Unlock AI insights for</span>
        <span className="text-purple-400 block">any product</span>
      </h1>

      {/* 📝 Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
      >
        Discover trends, track competitors, and stay ahead with real-time AI-driven insights built to supercharge your growth.
      </motion.p>

      {/* 🎯 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-5"
      >
        <Button
          onClick={onGetStarted ? onGetStarted : () => navigate("/login")}
          size="lg"
          className="px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg shadow-purple-500/30 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all flex items-center gap-2"
        >
          Get Started <ArrowRight className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsVideoOpen(true)}
          className="px-8 py-6 text-lg font-semibold rounded-2xl border-gray-700 text-gray-300 hover:bg-gray-800/60 backdrop-blur-sm transition-all flex items-center gap-2"
        >
          <Play className="h-5 w-5 text-purple-400" /> Watch Demo
        </Button>
      </motion.div>

      {/* 🛡️ Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
      >
        {[ 
          { icon: Star, text: "Trusted by 5k+ users", color: "text-yellow-400" },
          { icon: Zap, text: "Lightning-fast insights", color: "text-pink-400" },
          { icon: TrendingUp, text: "Boost growth 2x faster", color: "text-green-400" },
          { icon: Sparkles, text: "AI-driven predictions", color: "text-purple-400" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-gray-300 bg-white/5 backdrop-blur-md rounded-xl p-5 hover:scale-105 hover:bg-white/10 transition-all duration-300"
          >
            <item.icon className={`h-6 w-6 ${item.color} mb-2`} />
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </motion.div>

      {/* 🎥 Demo Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 rounded-2xl shadow-xl w-[90%] max-w-3xl overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <iframe
              className="w-full h-[420px] sm:h-[480px] rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
