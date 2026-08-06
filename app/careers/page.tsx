'use client';

import { useState, useRef, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Briefcase,
  Users,
  Zap,
  Heart,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Globe,
  Coffee,
  Award,
  Sparkles,
  MapPin,
  Clock,
  Building2,
  Linkedin,
  CheckCircle,
  XCircle,
  Loader2,
  Send,
  Mail,
  Phone,
  User,
  FileText,
  Upload,
  Trash2,
  AlertCircle,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

// Types
interface Job {
  id: number;
  title: string;
  experience: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  linkedin: string;
  message: string;
  resume: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  position?: string;
  resume?: string;
}

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    message: '',
    resume: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("2rkpAvsHsJpz3Is8m");
  }, []);

  // Job openings
  const jobs: Job[] = [
    { 
      id: 1,
      title: 'React Developer', 
      experience: '2-4 years', 
      location: 'Chennai', 
      type: 'Full-time', 
      department: 'Engineering',
      description: 'Build responsive UIs with React and modern frontend technologies.'
    },
    { 
      id: 2,
      title: 'Next.js Developer', 
      experience: '3-5 years', 
      location: 'Remote', 
      type: 'Full-time', 
      department: 'Engineering',
      description: 'Develop full-stack applications using Next.js and serverless architecture.'
    },
    { 
      id: 3,
      title: 'Full Stack Developer', 
      experience: '4-6 years', 
      location: 'Hyderabad', 
      type: 'Full-time', 
      department: 'Engineering',
      description: 'Work on end-to-end features using MERN/MEAN stack.'
    },
    { 
      id: 4,
      title: 'UI/UX Designer', 
      experience: '2-4 years', 
      location: 'Bangalore', 
      type: 'Full-time', 
      department: 'Design',
      description: 'Create beautiful, intuitive user experiences for enterprise products.'
    },
    { 
      id: 5,
      title: 'QA Engineer', 
      experience: '2-3 years', 
      location: 'Pune', 
      type: 'Full-time', 
      department: 'Quality',
      description: 'Ensure quality through automated and manual testing strategies.'
    },
    { 
      id: 6,
      title: 'AI Engineer', 
      experience: '3-5 years', 
      location: 'Remote', 
      type: 'Full-time', 
      department: 'Engineering',
      description: 'Build ML models and AI solutions for real-world problems.'
    },
    { 
      id: 7,
      title: 'DevOps Engineer', 
      experience: '4-6 years', 
      location: 'Mumbai', 
      type: 'Full-time', 
      department: 'Engineering',
      description: 'Manage cloud infrastructure and CI/CD pipelines.'
    },
    { 
      id: 8,
      title: 'Business Development Executive', 
      experience: '1-3 years', 
      location: 'Delhi NCR', 
      type: 'Full-time', 
      department: 'Sales',
      description: 'Drive growth through strategic partnerships and client acquisition.'
    },
  ];

  // Departments with openings
  const departments = [
    { name: 'Engineering', roles: 15, icon: Briefcase },
    { name: 'Design', roles: 6, icon: Zap },
    { name: 'Product', roles: 4, icon: Sparkles },
    { name: 'Marketing', roles: 5, icon: TrendingUp },
    { name: 'Sales', roles: 7, icon: Users },
    { name: 'Operations', roles: 3, icon: Heart },
  ];

  // Why join us features
  const benefits = [
    { icon: TrendingUp, title: 'Career Growth', description: 'Fast-track promotions and leadership opportunities' },
    { icon: BookOpen, title: 'Learning & Development', description: '$5,000 annual learning budget and certifications' },
    { icon: Coffee, title: 'Flexible Work Culture', description: 'Remote-first, flexible hours, and unlimited PTO' },
    { icon: Award, title: 'Competitive Compensation', description: 'Top-tier salaries, equity, and performance bonuses' },
    { icon: Globe, title: 'Global Projects', description: 'Work with Fortune 500 clients worldwide' },
    { icon: Heart, title: 'Work-Life Balance', description: 'Wellness programs and mental health support' },
  ];

  // Culture pillars
  const cultureItems = [
    { title: 'Innovation First', description: 'We encourage creative thinking and experimentation', icon: Sparkles },
    { title: 'Collaborative Environment', description: 'Cross-functional teams and open communication', icon: Users },
    { title: 'Continuous Learning', description: 'Weekly workshops and conference sponsorships', icon: BookOpen },
    { title: 'Diversity & Inclusion', description: 'Celebrating unique perspectives and backgrounds', icon: Heart },
    { title: 'Leadership Opportunities', description: 'Lead initiatives regardless of tenure', icon: Award },
    { title: 'Employee Recognition', description: 'Quarterly awards and peer recognition programs', icon: Award },
  ];

  // Compress file to stay within EmailJS 50KB limit
  const compressFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let result = reader.result as string;
        
        // If file is too large, truncate it
        if (result.length > 45000) {
          // Keep first 40KB and add note
          const truncated = result.substring(0, 40000);
          result = truncated + '... [FILE TRUNCATED DUE TO SIZE LIMIT - PLEASE REQUEST FULL RESUME FROM CANDIDATE]';
        }
        
        resolve(result);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.resume) {
      newErrors.resume = 'Please upload your resume';
    } else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.resume.type)) {
      newErrors.resume = 'Please upload PDF, DOC, or DOCX file';
    } else if (formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'File size must be less than 5MB';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
    if (errors.resume) setErrors(prev => ({ ...prev, resume: undefined }));
  };

  const removeResume = () => {
    setFormData(prev => ({ ...prev, resume: null }));
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Compress the resume file
      let resumeBase64 = '';
      let isTruncated = false;
      
      if (formData.resume) {
        const compressed = await compressFile(formData.resume);
        resumeBase64 = compressed;
        isTruncated = compressed.includes('TRUNCATED');
      }
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: 'businesshead@nexovatechzone.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience || 'Not specified',
        linkedin: formData.linkedin || 'Not provided',
        message: formData.message || 'No message provided',
        subject: `New Job Application - ${formData.position}`,
        resume_file: resumeBase64,
        resume_name: formData.resume!.name,
        resume_size: `${(formData.resume!.size / 1024).toFixed(2)} KB`,
        is_truncated: isTruncated ? 'Yes - File was too large for EmailJS limit. Please request full resume from candidate.' : 'No',
      };

      // Send notification via EmailJS
      const emailjs = (await import('@emailjs/browser')).default;
      const response = await emailjs.send(
        "service_wti755t",
        "template_nz60wci",
        templateParams,
        "2rkpAvsHsJpz3Is8m"
      );

      if (response.status === 200) {
        let successMessage = 'Thank you for applying. Our recruitment team will contact you shortly.';
        if (isTruncated) {
          successMessage += ' Note: Your resume was partially uploaded due to size limits. Our HR team will contact you for the complete resume.';
        }
        
        setSubmitStatus({ 
          type: 'success', 
          message: successMessage
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          linkedin: '',
          message: '',
          resume: null,
        });
        
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
        // Scroll to success message
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        throw new Error('Failed to send application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  const scrollToForm = (jobTitle?: string) => {
    if (jobTitle) {
      setFormData(prev => ({ ...prev, position: jobTitle }));
    }
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#0F2B45] text-white py-28">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Build your career with a company that values innovation, growth, and impact
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToForm()}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 py-4 font-semibold text-lg shadow-xl transition-all"
              >
               Apply Now <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
                Why Join <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Nexova?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover what makes Nexova an exceptional place to work and grow
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="open-positions">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
                Open <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find your perfect role and join our talented team
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] group-hover:text-red-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {job.department}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Briefcase className="w-4 h-4 text-red-500" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToForm(job.title)}
                    className="w-full mt-2 bg-gradient-to-r from-[#1E3A5F] to-[#1E3A5F] hover:from-red-600 hover:to-red-700 text-white rounded-lg py-2.5 font-semibold transition-all"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
                Explore <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Departments</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join a department that matches your expertise and passion
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, i) => {
                const Icon = dept.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center border border-gray-200 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">{dept.name}</h3>
                    <p className="text-4xl font-bold text-red-600 mt-3">{dept.roles}</p>
                    <p className="text-gray-500 mt-1">Open Positions</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internship Program Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Internship Program
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-red-100 max-w-3xl mx-auto mb-8"
              >
                Start your career with us. Our internship program offers hands-on experience, mentorship, 
                and the opportunity to work on real projects that impact thousands of users globally. 
                Perfect for students and fresh graduates.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToForm('Internship')}
                className="inline-flex items-center gap-2 bg-white text-red-600 rounded-full px-8 py-3 font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                Apply for Internship <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
                Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Culture</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A workplace where you can thrive, innovate, and grow
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Application Form */}
        <section className="py-24" id="application-form">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            >
              <div className="bg-gradient-to-r from-[#1E3A5F] to-[#1E3A5F] px-8 py-8">
                <h2 className="text-3xl font-bold text-white">Apply Now</h2>
                <p className="text-gray-300 mt-2">Take the first step towards an exciting career at Nexova</p>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-6">
                {submitStatus.type && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-start gap-3 ${
                      submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className={`font-semibold ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                        {submitStatus.type === 'success' ? 'Application Submitted!' : 'Submission Failed'}
                      </p>
                      <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </motion.div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                          errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter Your Name"
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter Your Email"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="+91 9238900345"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                      Position Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                        errors.position ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a position</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Internship">Internship Program</option>
                    </select>
                    {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Years of Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher">Fresher (0-1 years)</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-8 years">5-8 years</option>
                      <option value="8+ years">8+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">LinkedIn Profile</label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                      Resume Upload <span className="text-red-500">*</span>
                      <span className="text-gray-400 text-xs font-normal ml-2">(PDF, DOC, DOCX, Max 5MB)</span>
                    </label>
                    <div className={`border-2 border-dashed rounded-xl p-6 text-center transition ${
                      errors.resume ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-red-400'
                    }`}>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      {!formData.resume ? (
                        <label htmlFor="resume" className="cursor-pointer flex flex-col items-center gap-3">
                          <Upload className="w-12 h-12 text-gray-400" />
                          <div>
                            <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 5MB</p>
                          </div>
                        </label>
                      ) : (
                        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="w-8 h-8 text-red-500" />
                            <div className="text-left">
                              <p className="font-medium text-gray-700">{formData.resume.name}</p>
                              <p className="text-xs text-gray-500">
                                {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeResume}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                    {formData.resume && formData.resume.size > 40 * 1024 && (
                      <div className="flex items-center gap-2 mt-2 text-amber-600 text-xs">
                        <AlertCircle className="w-4 h-4" />
                        <span>File is large ({Math.round(formData.resume.size / 1024)} KB). It will be compressed to fit EmailJS limits.</span>
                      </div>
                    )}
                    {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Cover Letter / Message</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us why you'd be a great fit for Nexova..."
                      />
                    </div>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#1E3A5F] to-[#0F2B45]">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join Nexova Tech Zone and help build the future of technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToForm()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 py-4 font-semibold text-lg transition-all shadow-xl"
              >
                Apply Today <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}