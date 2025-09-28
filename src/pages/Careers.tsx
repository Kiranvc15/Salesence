import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

// ICONS
const Briefcase = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);
const Users = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);
const TrendingUp = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
);
const BookOpen = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h7z"></path>
    </svg>
);
const ChevronDown = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6 9 6 6 6-6"></path>
    </svg>
);
const MapPin = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);
const Coffee = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
        <line x1="6" x2="6" y1="2" y2="4"></line>
        <line x1="10" x2="10" y1="2" y2="4"></line>
        <line x1="14" x2="14" y1="2" y2="4"></line>
    </svg>
);
const Award = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
);
const HeartHandshake = ({ className = 'w-6 h-6' }) => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l.96-.96.06.06c.8.8 2.12.8 2.94 0v0a2.17 2.17 0 0 0 0-3.08L12 5Z"></path>
    </svg>
);
const Moon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);
const Sun = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
);
const X = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const CheckCircle = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const Home = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);
const Star = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);
const Heart = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20.84 4.61a5.5 极狐 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);
const Zap = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);
const Globe = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);
const Calendar = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);
const Search = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

// MOCK DATA
const jobOpenings = [
    {
        title: 'Senior Frontend Engineer',
        location: 'Remote', department: 'Engineering', type: 'Full-time',
        responsibilities: ['Develop and maintain user-facing features using React and TypeScript.', 'Collaborate with product managers and designers.', 'Optimize applications for maximum speed and scalability.'],
        requirements: ['5+ years of experience in frontend development.', 'Expertise in React, TypeScript, HTML, and CSS.', 'Strong understanding of web performance.'],
        experience: '5+ years',
        postedDate: '2 days ago',
    },
    {
        title: 'Product Designer',
        location: 'Remote', department: 'Design', type: 'Full-time',
        responsibilities: ['Lead design projects across the entire product lifecycle.', 'Create user flows, wireframes, and prototypes.', 'Conduct user research and usability testing.'],
        requirements: ['4+ years of experience in product design.', 'A strong portfolio showcasing your design process.', 'Proficiency in Figma, Sketch, or Adobe XD.'],
        experience: '4+ years',
        postedDate: '1 week ago',
    },
    {
        title: 'Marketing Intern',
        location: 'Remote', department: 'Marketing', type: 'Internship',
        responsibilities: ['Assist with social media management and content creation.', 'Help organize and promote marketing events.', 'Conduct market research.'],
        requirements: ['Currently pursuing or recently graduated with a relevant degree.', 'Strong written and verbal communication skills.', 'A proactive and eager-to-learn attitude.'],
        experience: 'Student/Entry-level',
        postedDate: '3 days ago',
    },
    {
        title: 'Backend Engineer (Node.js)',
        location: 'Remote', department: 'Engineering', type: 'Full-time',
        responsibilities: ['Design and implement scalable backend services.', 'Work with databases like PostgreSQL and MongoDB.', 'Build and maintain APIs.'],
        requirements: ['4+ years of experience with Node.js.', 'Experience with cloud platforms like AWS or GCP.', 'Strong understanding of RESTful API design.'],
        experience: '4+ years',
        postedDate: '5 days ago',
    },
    {
        title: 'Content Strategist',
        location: 'Remote', department: 'Marketing', type: 'Full-time',
        responsibilities: ['Develop and execute a comprehensive content strategy.', 'Create engaging blog posts, whitepapers, and case studies.', 'Manage the editorial calendar.'],
        requirements: ['3+ years of experience in content marketing.', 'Exceptional writing and editing skills.', 'Deep understanding of SEO best practices.'],
        experience: '3+ years',
        postedDate: '2 weeks ago',
    }
];

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Senior Developer',
        quote: 'The culture here is incredible. I\'ve grown more in my career here than anywhere else.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'Product Designer',
        quote: 'The work-life balance is perfect, and the projects are challenging and rewarding.',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        rating: 5
    },
    {
        name: 'Jessica Williams',
        role: 'Marketing Lead',
        quote: 'I love how the company invests in our professional development and growth.',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQ极狐jEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        rating: 5
    }
];

type JobOpening = typeof jobOpenings[0];

// App Component
export default function CareersPage() {
    const [openJob, setOpenJob] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [applyingFor, setApplyingFor] = useState<JobOpening | null>(null);
    const [notification, setNotification] = useState<{ show: boolean; title: string; message: string; } | null>(null);
    const [filters, setFilters] = useState({ department: 'all', type: 'all' });
    const [searchTerm, setSearchTerm] = useState('');
    const [stats, setStats] = useState({
        employees: 0,
        countries: 0,
        projects: 0,
        satisfaction: 0
    });

    useEffect(() => {
        if (isDarkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [isDarkMode]);

    useEffect(() => {
        if (notification?.show) {
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    useEffect(() => {
        // Animate stats counters
        const interval = setInterval(() => {
            setStats(prev => ({
                employees: prev.employees < 150 ? prev.employees + 5 : 150,
                countries: prev.countries < 25 ? prev.countries + 1 : 25,
                projects: prev.projects < 300 ? prev.projects + 10 : 300,
                satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 2 : 98
            }));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const handleApplyClick = (job: JobOpening) => {
        setApplyingFor(job);
        setIsModalOpen(true);
    };

    const handleFormSubmit = () => {
        setIsModalOpen(false);
        setNotification({
            show: true,
            title: 'Application Sent!',
            message: 'We will reach out on weekdays if your resume is shortlisted. Thank you!',
        });
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const uniqueDepartments = useMemo(() => ['all', ...Array.from(new Set(jobOpenings.map(job => job.department)))], []);
    const uniqueTypes = useMemo(() => ['all', ...Array.from(new Set(jobOpenings.map(job => job.type)))], []);

    const filteredJobs = useMemo(() => {
        return jobOpenings.filter(job => {
            const departmentMatch = filters.department === 'all' || job.department === filters.department;
            const typeMatch = filters.type === 'all' || job.type === filters.type;
            const searchMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                               job.department.toLowerCase().includes(searchTerm.toLowerCase());
            return departmentMatch && typeMatch && searchMatch;
        });
    }, [filters, searchTerm]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-gray-200 font-sans antialiased transition-colors duration-300">
            <ToastNotification notification={notification} onClose={() => setNotification(null)} />
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={applyingFor} onSubmit={handleFormSubmit} />
            
            {/* Back to Home Button */}
            <div className="fixed top-6 left-6 z-50">
                <Link 
                    to="/"
                    className="flex items-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 group backdrop-blur-md px-4 py-3 rounded-lg shadow-lg border border-indigo-500/30 hover:shadow-xl animate-pulse"
                >
                    <Home className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>
            
            {/* Salesence Logo */}
            <div className="fixed top-6 right-6 z-50">
                <div className="font-bold text-2xl text-cyan-400">Salesence</div>
            </div>
            
            <main>
                {/* Hero Section with Parallax Effect */}
                <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-pink-900/60"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-no-repeat opacity-20"
                        style={{ transform: 'translateZ(-10px) scale(2)' }}
                    ></div>
                    
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white animate-fade-in">
                            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Dream Team</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto mb-10">
                            We're looking for passionate individuals to help us build the future together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#openings" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Explore Open Positions
                            </a>
                            <a href="#culture" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                Our Culture
                            </a>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <div className="w-1极狐 h-3 bg-white rounded-full mt-2"></div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-gradient-to-b from-indigo-900/50 to-purple-900/50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <StatCard number={stats.employees} label="Team Members" icon={<Users className="w-8 h-8 text-cyan-400" />} />
                            <StatCard number={stats.countries} label="Countries" icon={<Globe className="w-8 h-8 text-cyan-400" />} />
                            <StatCard number={stats.projects} label="Projects" icon={<Briefcase className="w-8 h-8 text-cyan-400" />} />
                            <StatCard number={stats.satisfaction} suffix="%" label="Employee Satisfaction" icon={<Heart className="w-8 h-8 text-cyan-400" />} />
                        </div>
                    </div>
                </section>

                {/* Culture Section */}
                <section id="culture" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-indigo-900">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why You'll Love Working Here</h2>
                        <p className="text-gray-400 max-w-3xl mx-auto mb-12">We're building a community where everyone can thrive and grow.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                            <FeatureCard icon={<Users className="w-8 h-8 text-cyan-400" />} title="Thriving Culture" description="A collaborative, inclusive, and supportive environment where every voice is heard and valued." />
                            <FeatureCard icon={<TrendingUp className="w-8 h-8 text-cyan-400" />} title="Career Growth" description="Clear paths for advancement, mentorship, and professional development opportunities." />
                            <FeatureCard icon={<BookOpen className="w-8 h-8 text-cyan-400" />} title="Continuous Learning" description="Access to learning resources, workshops, and a culture that encourages curiosity." />
                            <FeatureCard icon={<Briefcase className="w-8 h-8 text-cyan-400" />} title="Meaningful Work" description="Contribute to projects that have a real-world impact and solve challenging problems." />
                        </div>
                    </div>
                </section>
                
                {/* Work Environment Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900">
                    <div className="极狐-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="pr-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Environment</h2>
                            <p className="text-gray-300 mb-4 text-lg">We believe a great work environment is the foundation of innovation. Our space is open, flexible, and inspiring.</p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1">✓</span> 
                                    <span><strong>Collaborative Spaces:</strong> Open-plan offices and breakout areas that encourage teamwork.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1">✓</span> 
                                    <span><strong>Flexible Work:</strong> We offer flexible hours and remote work options to support work-life balance.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1">✓</span> 
                                    <span><strong>Modern Tools:</strong> Access to the latest technology and software to help you do your best work.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-400 mr-3 mt-1">✓</span> 
                                    <span><strong>Innovation Days:</strong> Dedicated time to explore new ideas and work on passion projects.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Collaborative work environment" className="rounded-xl shadow-2xl object-cover w-full h-full" />
                            <div className="absolute -bottom-5 -right-5 bg-cyan-500 text-white p-4 rounded-lg shadow-lg">
                                <Zap className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-indigo-900">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Team Says</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Job Openings Section */}
                <section id="openings" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-indigo-900">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Current Job Openings</h2>
                        <p className="text-center text-gray-400 mb-10">Found {filteredJobs.length} remote opportunities</p>
                        
                        {/* Search and Filters */}
                        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg p-6 mb-10 border border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative">
                                    <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-1">Search Positions</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="search"
                                            placeholder="Find your dream job..."
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            className="w-full p-3 pl-10 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-cyan-500 focus:border-cyan-500"
                                        />
                                        <Search className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-1">Department</label>
                                    <select name="department" id="department" value={filters.department} onChange={handleFilterChange} className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-cyan-500 focus:border-cyan-500">
                                        {uniqueDepartments.map(dep => <option key={dep} value={dep}>{dep === 'all' ? 'All Departments' : dep}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">Job Type</label>
                                    <select name="type" id="type" value={filters.type} onChange={handleFilterChange} className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-cyan-500 focus:border-cyan-500">
                                        {uniqueTypes.map(typ => <option key={typ} value={typ}>{typ === 'all' ? 'All Types' : typ}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        {/* Jobs List */}
                        <div className="space-y-6">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <JobCard key={job.title} job={job} isOpen={openJob === job.title} onToggle={() => setOpenJob(openJob === job.title ? null : job.title)} onApply={() => handleApplyClick(job)} />
                                ))
                            ) : (
                                <div className="text-center py-10 px-6 bg-gray-800/50 backdrop-blur-md rounded-lg shadow-md border border-gray-700">
                                    <h3 className="text-xl font-semibold">No openings match your criteria</h3>
                                    <p className="text-gray-400 mt-2">Please check back later or adjust your filters.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                
                {/* Hiring For Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-indigo-900">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We're Looking For</h2>
                        <p className="text-gray-300 max-w-3xl mx-auto mb-12">We believe diverse teams build better products. We're looking for talented individuals from all backgrounds and experience levels.</p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <HiringCard title="Seasoned Experts" description="We value the deep knowledge and mentorship that experienced professionals bring to our team." />
                            <HiringCard title="Ambitious Freshers" description="We're excited to help kickstart your career. We look for potential, passion, and a willingness to learn." />
                            <HiringCard title="Eager Interns" description="Our internship program offers hands-on experience and a chance to make a real impact." />
                        </div>
                    </div>
                </section>

                {/* Perks & Benefits Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-indigo-900">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Perks & Benefits</h2>
                        <p className="text-gray-400 max-w-3xl mx-auto mb-12">We invest in our team's well-being and success with a comprehensive benefits package.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                            <Perk icon={<HeartHandshake />} text="Comprehensive Health Insurance" />
                            <Perk icon={<Coffee />} text="Flexible Paid Time Off" />
                            <Perk icon={<Award />} text="Development Stipend" />
                            <Perk icon={<Users />} text="Team Retreats" />
                            <Perk icon={<TrendingUp />} text="Stock Options" />
                            <Perk icon={<BookOpen />} text="Free Lunches & Snacks" />
                            <Perk icon={<Briefcase />} text="Remote Work Support" />
                            <Perk icon={<MapPin />} text="Commuter Benefits" />
                        </div>
                    </div>
                </section>
                
                {/* Application CTA Section */}
                <section id="apply" className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900">
                    <div className="max-w-3xl mx-auto text-center bg-gray-800/40 backdrop-blur-md p-10 rounded-xl shadow-lg relative overflow-hidden border border-cyan-500/20">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20"></div>
                        
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Don't See a Role That Fits?</h2>
                        <p className="text-gray-300 mb-6 relative z-10">We are always looking for talented people. If you believe you have what it takes, send us your resume and a note about why you want to work with us.</p>
                        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-cyan-600 hover:to-blue-600 transition-colors duration-300 transform hover:scale-105 inline-block shadow-md relative z-10">
                            Contact Us
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Salesence</h3>
                        <p className="text-gray-400">Building the future together with innovative solutions and a passionate team.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semib极狐 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                            <li><a href="#culture" className="hover:text-cyan-400 transition-colors">About</a></li>
                            <li><a href="#openings" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                            <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Open Positions</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#openings" className="hover:text-cyan-400 transition-colors">Engineering</a></li>
                            <li><a href="#openings" className="hover:text-cyan-400 transition-colors">Design</a></li>
                            <li><a href="#openings" className="hover:text-cyan-400 transition-colors">Marketing</a></li>
                            <li><a href="#openings" className="hover:text-cyan-400 transition-colors">Internships</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">careers@salesence.com</p>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Salesence. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

// Helper Components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
        <div className="mb-4 inline-block bg-cyan-900/30 p-3 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const JobCard = ({ job, isOpen, onToggle, onApply }: { job: JobOpening, isOpen: boolean, onToggle: () => void, onApply: () => void }) => (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-700">
        <button onClick={onToggle} className="w-full text-left p-6 flex justify-between items-center">
            <div className="flex-grow">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-cyan-400">{job.title}</h3>
                        <div className="flex flex-wrap items-center text-gray-400 mt-2 gap-x-4 gap-y-1 text-sm">
                            <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" />{job.department}</span>
                            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" />{job.location}</span>
                            <span className="flex items-center bg-cyan-900/30 text-cyan-400 px-2 py-1 rounded-full text-xs">{job.type}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.postedDate}
                    </div>
                </div>
            </div>
            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
        </button>
        {isOpen && (
            <div className="p-6 border-t border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-lg mb-2">Responsibilities</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2">Requirements</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {job.requirements.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-cyan-900/20 rounded-lg border border-cyan-800/30">
                    <h5 className="font-semibold text-cyan-400">Experience Level</h5>
                    <p className="text-gray-300">{job.experience}</p>
                </div>
                <div className="mt-6 text-right">
                    <button onClick={onApply} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors duration-300 transform hover:scale-105 shadow-md">
                        Apply for this position
                    </button>
                </div>
            </div>
        )}
    </div>
);

const HiringCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
        <h3 className="text-2xl font-bold mb-3 text-cyan-400">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Perk = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex flex-col items-center text-center">
        <div className="bg-cyan-900/30 p-4 rounded-full mb-3 text-cyan-400">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
        </div>
        <p className="font-semibold text-gray-300 text-sm">{text}</p>
    </div>
);

const StatCard = ({ number, label, icon, suffix = '' }: { number: number, label: string, icon: React.ReactNode, suffix?: string }) => (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-md text-center border border-gray-700">
        <div className="flex justify-center mb-3">{icon}</div>
        <div className="text-4xl font-bold text-cyan-400 mb-2">{number}{suffix}</div>
        <div className="text-gray-400">{label}</div>
    </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-md border border-gray-700">
        <div className="flex items-center mb-4">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
            <div className="ml-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
        </div>
        <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
        </div>
        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
    </div>
);

const ApplicationModal = ({ isOpen, onClose, job, onSubmit }: { isOpen: boolean, onClose: () => void, job: JobOpening | null, onSubmit: () => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity" onClick={onClose}>
            <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-gray-700 sticky top-0 bg-gray-800/80 backdrop-blur-sm flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-cyan-400">Apply for {job?.title}</h2>
                        <p className="text-gray-400">Join the Salesence Team</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <ApplicationForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

const ApplicationForm = ({ onSubmit }: { onSubmit: () => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };
    return (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                    <input type="text" name="fullName" id="fullName" required className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300">LinkedIn Profile</label>
                    <input type="url" name="linkedin" id="linkedin" className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300">Portfolio/GitHub URL</label>
                    <input type="url" name="portfolio" id="portfolio" className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
            </div>
            <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-300">Key Skills</label>
                <textarea id="skills" name="skills" rows={3} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" placeholder="e.g., React, Node.js, Figma, SEO..."></textarea>
            </div>
            <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-300">Resume/CV</label>
                <input type="file" name="resume" id="resume" required className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-900/30 file:text-cyan-400 hover:file:bg-cyan-800/40"/>
            </div>
            <div className="pt-4">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-transform hover:scale-[1.02]">
                    Submit Application
                </button>
            </div>
        </form>
    );
};

const ToastNotification = ({ notification, onClose }: { notification: { show: boolean, title: string, message: string } | null, onClose: () => void }) => {
    if (!notification?.show) return null;
    return (
        <div className="fixed top-5 right-5 z-50 w-full max-w-sm">
            <div className="bg-gray-800 border border-cyan-500/30 rounded-xl shadow-2xl p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0"><CheckCircle className="h-6 w-6 text-green-400" /></div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-bold text-white">{notification.title}</p>
                        <p className="mt-1 text-sm text-gray-300">{notification.message}</p>
                    </div>
                    <div className="ml-4 flex-shrink极狐 flex">
                        <button onClick={onClose} className="rounded-md inline-flex text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};