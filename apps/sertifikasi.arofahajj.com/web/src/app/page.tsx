'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, 
  FileCheck, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Zap,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Get your certifications processed in record time with our streamlined digital workflow.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Trusted',
      description: 'Bank-level security ensures your data is protected with end-to-end encryption.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Support',
      description: 'Our team of certification experts is here to guide you through every step.',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Real-time Tracking',
      description: 'Monitor your application status in real-time with detailed progress updates.',
    },
  ];

  const stats = [
    { label: 'Applications Processed', value: '10,000+', icon: <FileCheck className="h-5 w-5" /> },
    { label: 'Success Rate', value: '98.5%', icon: <CheckCircle className="h-5 w-5" /> },
    { label: 'Happy Clients', value: '5,000+', icon: <Users className="h-5 w-5" /> },
    { label: 'Years of Experience', value: '15+', icon: <Award className="h-5 w-5" /> },
  ];

  const testimonials = [
    {
      name: 'Ahmad Hidayat',
      role: 'Director, PT. Umrah Berkah',
      content: 'Arofahajj has transformed how we handle our PPIU certifications. What used to take months now takes weeks!',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Operations Manager, Hajj Travel',
      content: 'The platform is intuitive and the support team is exceptional. Highly recommended for all travel agencies.',
      rating: 5,
    },
    {
      name: 'Budi Santoso',
      role: 'CEO, Wisata Nusantara',
      content: 'The real-time tracking feature is a game-changer. We can monitor all our applications from one dashboard.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden"
      >
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <Badge variant="outline" className="px-4 py-2">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                #1 Certification Platform in Indonesia
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Revolutionizing
                <span className="text-primary"> Certification </span>
                for the Digital Age
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Streamline your PPIU certification process with our cutting-edge platform. 
                Submit applications, track progress, and receive approvals faster than ever before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/auth/register">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link href="/verify">
                    Verify Certificate
                    <Shield className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Join 5,000+ certified companies</p>
                  <p className="text-xs text-muted-foreground">Trusted by industry leaders</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl shadow-2xl flex items-center justify-center">
                  <Shield className="h-32 w-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section variants={containerVariants} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section variants={containerVariants} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Arofahajj?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of certification management with our innovative platform designed for efficiency and security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="mb-3">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section variants={containerVariants} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Get certified in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Application',
                description: 'Fill out our comprehensive online application form with your company details and upload required documents.',
              },
              {
                step: '02',
                title: 'Review Process',
                description: 'Our expert team reviews your application and may request additional information if needed.',
              },
              {
                step: '03',
                title: 'Get Certified',
                description: 'Receive your PPIU certification and start offering Umrah packages legally.',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                variants={itemVariants}
                className="relative"
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-6">
                    {process.step}
                  </div>
                  <Card className="p-6 text-center">
                    <CardTitle className="mb-4">{process.title}</CardTitle>
                    <CardDescription>{process.description}</CardDescription>
                  </Card>
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section variants={containerVariants} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients have to say about their experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="mb-6 italic">
                    "{testimonial.content}"
                  </CardDescription>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={containerVariants} className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Certified?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies that have already streamlined their certification process with Arofahajj.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/auth/register">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">
                  Schedule a Demo
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8" />
                <span className="text-xl font-bold">Arofahajj</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing certification management for the digital age.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/status" className="hover:text-white">System Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/compliance" className="hover:text-white">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arofahajj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}