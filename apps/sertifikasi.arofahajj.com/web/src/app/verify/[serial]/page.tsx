'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Search, Shield, CheckCircle, XCircle, Clock, Calendar, User, Building, FileText, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { apiClient } from '@/lib/api/client';

interface CertificateData {
  id: string;
  serialNumber: string;
  title: string;
  description?: string;
  type: string;
  issuedAt: string;
  expiresAt?: string;
  issuer: string;
  isActive: boolean;
  application: {
    user: {
      firstName: string;
      lastName: string;
      email?: string;
    };
    type: string;
    title: string;
  };
}

export default function VerifyPage() {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  // Auto-verify if serial number is in URL
  useEffect(() => {
    if (params.serial) {
      setSearchQuery(params.serial as string);
      handleVerify(params.serial as string);
    }
  }, [params.serial]);

  const handleVerify = async (serialNumber?: string) => {
    const query = serialNumber || searchQuery;
    if (!query.trim()) {
      setError('Please enter a certificate serial number');
      return;
    }

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const data = await apiClient.get<CertificateData>(`/public/verify/${query}`);
      setCertificate(data);
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError('Certificate not found. Please check the serial number and try again.');
      } else {
        setError('Failed to verify certificate. Please try again later.');
      }
      setCertificate(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  const getStatusColor = (isActive: boolean, expiresAt?: string) => {
    if (!isActive) return 'bg-red-100 text-red-800';
    if (expiresAt && new Date(expiresAt) < new Date()) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-green-100 text-green-800';
  };

  const getStatusText = (isActive: boolean, expiresAt?: string) => {
    if (!isActive) return 'Revoked';
    if (expiresAt && new Date(expiresAt) < new Date()) {
      return 'Expired';
    }
    return 'Active';
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white border-b"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Certificate Verification</h1>
                <p className="text-sm text-muted-foreground">
                  Verify the authenticity of Arofahajj certificates
                </p>
              </div>
            </div>
            <Button variant="outline" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Search Section */}
      <motion.section
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Verify Certificate</CardTitle>
              <CardDescription>
                Enter the certificate serial number to verify its authenticity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Enter certificate serial number (e.g., PPIU_CERTIFICATE-2024-000001)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 pr-24"
                />
                <Button
                  onClick={() => handleVerify()}
                  disabled={loading}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    'Verify'
                  )}
                </Button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Results Section */}
      {certificate && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 pb-12"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-0 overflow-hidden">
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="h-8 w-8" />
                      <h2 className="text-2xl font-bold">Certificate Verified</h2>
                    </div>
                    <p className="text-primary-foreground/80">
                      This certificate is authentic and issued by Arofahajj
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(certificate.isActive, certificate.expiresAt)}>
                      {getStatusText(certificate.isActive, certificate.expiresAt)}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Certificate Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Certificate Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Serial Number</span>
                          <span className="text-sm font-medium">{certificate.serialNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Certificate Type</span>
                          <span className="text-sm font-medium">{certificate.type.replace('_', ' ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Title</span>
                          <span className="text-sm font-medium">{certificate.title}</span>
                        </div>
                        {certificate.description && (
                          <div>
                            <span className="text-sm text-muted-foreground">Description</span>
                            <p className="text-sm mt-1">{certificate.description}</p>
                          </div>
                        )}
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Issued By</span>
                          <span className="text-sm font-medium">{certificate.issuer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Issued Date</span>
                          <span className="text-sm font-medium">
                            {new Date(certificate.issuedAt).toLocaleDateString()}
                          </span>
                        </div>
                        {certificate.expiresAt && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Expires Date</span>
                            <span className="text-sm font-medium">
                              {new Date(certificate.expiresAt).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Recipient Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Recipient Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Name</span>
                          <span className="text-sm font-medium">
                            {certificate.application.user.firstName} {certificate.application.user.lastName}
                          </span>
                        </div>
                        {certificate.application.user.email && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Email</span>
                            <span className="text-sm font-medium">{certificate.application.user.email}</span>
                          </div>
                        )}
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Application Type</span>
                          <span className="text-sm font-medium">{certificate.application.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Application Title</span>
                          <span className="text-sm font-medium">{certificate.application.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Certificate
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Verification
                  </Button>
                </div>

                {/* Verification Badge */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Verified on {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      )}

      {/* Help Section */}
      {!searched && (
        <motion.section
          variants={containerVariants}
          className="container mx-auto px-4 pb-12"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How to Verify a Certificate</CardTitle>
                <CardDescription>
                  Follow these simple steps to verify certificate authenticity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Locate Serial Number</h4>
                    <p className="text-sm text-muted-foreground">
                      Find the serial number on the physical or digital certificate
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Enter Serial Number</h4>
                    <p className="text-sm text-muted-foreground">
                      Type the serial number in the search field above
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">View Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Get instant verification results with certificate details
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      )}
    </div>
  );
}