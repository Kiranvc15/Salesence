import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Check, Star, Users, Shield, Zap, BarChart3, Target, Globe, Briefcase, Clock, MapPin, DollarSign, GraduationCap, CheckCircle } from "lucide-react";

// Fixed import - using a proper HeroSection component
import HeroSection from "@/components/landing/HeroSection"
import { DemoSection } from "@/components/landing/DemoSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AuthModal } from "@/components/auth/AuthModal";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "react-router-dom";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleGetStarted = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  // About section features
  const aboutFeatures = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Advanced Analytics",
      description: "Leverage powerful D3.js visualizations for deep data insights"
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Precision Tools",
      description: "Professional-grade analysis tools for accurate results"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "User-Centric Design",
      description: "Intuitive interface built with modern React patterns"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Universal Access",
      description: "Cloud-based platform accessible from anywhere"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out our platform",
      features: [
        "Unlock 3 lifetime free credits instantly",
        "Basic optimization tips",
        "Email support",
        "Standard processing speed"
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-gray-600 to-gray-700"
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Best for growing businesses",
      features: [
        "Unlimited analyses",
        "Advanced AI recommendations",
        "Performance tracking & analytics",
        "Priority support",
        "Custom integrations",
        "Team collaboration tools"
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large teams and agencies",
      features: [
        "Everything in Professional",
        "White-label solutions",
        "Dedicated account manager",
        "Custom AI model training",
        "Advanced security features",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar onGetStarted={handleGetStarted} onSignIn={handleSignIn} />

      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <DemoSection />
        <FeaturesSection />
        
        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-gray-300">ABOUT US</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Transforming <span className="text-blue-400">Data into Decisions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building the next generation of data analysis tools that empower professionals 
                to extract meaningful insights from complex datasets with unprecedented ease and precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {aboutFeatures.map((feature, index) => (
                <Card key={index} className="glass-effect border-white/10 text-center hover-lift">
                  <CardHeader className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-blue-900/30 text-blue-400 mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="glass-effect rounded-2xl p-8 md:p-12 border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
                  <p className="text-lg text-gray-300 mb-4">
                    Founded by data scientists and engineers who were frustrated with the limitations 
                    of existing analysis tools, our platform was born from a desire to make advanced 
                    analytics accessible to everyone.
                  </p>
                  <p className="text-lg text-gray-300">
                    Today, we combine cutting-edge D3.js visualizations with modern React architecture 
                    to deliver a seamless experience that professionals trust for their most important 
                    data decisions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-effect p-6 rounded-xl bg-blue-900/20 text-center border-blue-700/30">
                    <div className="text-3xl font-bold text-blue-400">10K+</div>
                    <div className="text-sm text-blue-300">Active Users</div>
                  </div>
                  <div className="glass-effect p-6 rounded-xl bg-purple-900/20 text-center border-purple-700/30">
                    <div className="text-3xl font-bold text-purple-400">5M+</div>
                    <div className="text-sm text-purple-300">Analyses Run</div>
                  </div>
                  <div className="glass-effect p-6 rounded-xl bg-green-900/20 text-center border-green-700/30">
                    <div className="text-3xl font-bold text-green-400">90+</div>
                    <div className="text-sm text-green-300">Uptime</div>
                  </div>
                  <div className="glass-effect p-6 rounded-xl bg-orange-900/20 text-center border-orange-700/30">
                    <div className="text-3xl font-bold text-orange-400">24/7</div>
                    <div className="text-sm text-orange-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-gray-300">Simple Pricing</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Choose your plan
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Start free, scale as you grow. No hidden fees, no surprises.
              </p>
            </div>  
            
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover-lift relative ${
                    plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
                  }`}
                >
            {/* Most Popular Badge */}
            {plan.popular && (
  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
    <div className="bg-purple-600 bg-opacity-90 text-white px-5 py-1.5 rounded-full text-sm font-semibold">
      Most Popular
    </div>
  </div>
)}   
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      onClick={handleGetStarted}
                      className={`w-full py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                        plan.popular 
                          ? 'gradient-primary text-white glow-effect' 
                          : 'glass-effect border-white/20 text-white hover:bg-white/10'
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-gray-300">
                  Experience our premium features with zero risk — upgrade today and explore the difference.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-gray-900 to-indigo-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to transform your
                <br />
                <span className="text-pink-400">marketplace success?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join thousands of sellers who've increased their revenue with AI-powered optimization. 
                Start your free analysis today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Link to="/demo" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    Start Free Analysis
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Button
                  variant="ghost"
                  size="lg"
                  className="glass-effect hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto group"
                  onClick={() => window.open("https://www.youtube.com/embed/dQw4w9WgXcQ", "_blank")}
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>10,000+ active users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span>500K+ products analyzed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span>4+/5 average rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Salesence</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                AI-powered marketplace optimization that helps sellers increase their revenue 
                and dominate their competition.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 Salesence. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 sm:mt-0">
              Made with ❤️ for marketplace sellers            
            </p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;