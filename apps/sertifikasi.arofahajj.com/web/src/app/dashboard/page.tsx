'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Users,
  Award,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/hooks/use-auth';
import { useApplicationStatistics } from '@/lib/hooks/use-applications';
import { useApplications } from '@/lib/hooks/use-applications';
import { cn } from '@/lib/utils';

// Stat card component
interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

function StatCard({ title, value, description, icon, trend, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className={cn('relative overflow-hidden', className)}
    >
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className="h-8 w-8 text-muted-foreground">
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-muted-foreground">{description}</p>
            {trend && (
              <div className={cn(
                'flex items-center text-xs',
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              )}>
                <TrendingUp className={cn(
                  'h-3 w-3 mr-1',
                  !trend.isPositive && 'rotate-180'
                )} />
                {trend.value}%
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Recent application item
interface RecentApplicationItemProps {
  application: any;
  index: number;
}

function RecentApplicationItem({ application, index }: RecentApplicationItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DRAFT': return 'bg-gray-100 text-gray-800';
      case 'SUBMITTED': return 'bg-blue-100 text-blue-800';
      case 'IN_REVIEW': return 'bg-yellow-100 text-yellow-800';
      case 'APPROVED': return 'bg-green-100 text-green-800';
      case 'REJECTED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="mb-3">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-sm">{application.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">
                {application.type} • {application.serialNumber}
              </p>
            </div>
            <Badge className={cn('text-xs', getStatusColor(application.status))}>
              {application.status.replace('_', ' ')}
            </Badge>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              {new Date(application.createdAt).toLocaleDateString()}
            </p>
            <Button variant="ghost" size="sm" className="text-xs">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function DashboardPage() {
  const { user, isAdmin, isReviewer } = useAuth();
  const { data: statistics, isLoading: statsLoading } = useApplicationStatistics();
  const { data: recentApplications, isLoading: appsLoading } = useApplications(
    { limit: 5 },
    { enabled: !isAdmin && !isReviewer }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  if (statsLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8 space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back, {user?.firstName}! 👋
            </h1>
            <p className="text-muted-foreground mt-2">
              Here's what's happening with your certification applications today.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <FileText className="h-4 w-4 mr-2" />
            New Application
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Applications"
            value={statistics?.total || 0}
            description="All time applications"
            icon={<FileText className="h-8 w-8" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="In Review"
            value={statistics?.inReview || 0}
            description="Currently being reviewed"
            icon={<Clock className="h-8 w-8" />}
            trend={{ value: 8, isPositive: false }}
          />
          <StatCard
            title="Approved"
            value={statistics?.approved || 0}
            description="Successfully approved"
            icon={<CheckCircle className="h-8 w-8" />}
            trend={{ value: 24, isPositive: true }}
          />
          <StatCard
            title="Certified"
            value={statistics?.certified || 0}
            description="Certificates issued"
            icon={<Award className="h-8 w-8" />}
            trend={{ value: 15, isPositive: true }}
          />
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Recent Applications
              </CardTitle>
              <CardDescription>
                Your latest certification applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              {appsLoading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-20 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : recentApplications?.data.length > 0 ? (
                <div className="space-y-0">
                  {recentApplications.data.map((application, index) => (
                    <RecentApplicationItem
                      key={application.id}
                      application={application}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No applications yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start by creating your first certification application.
                  </p>
                  <Button>Create Application</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions & Progress */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Application Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Application Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Completion Rate</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Documents Uploaded</span>
                  <span>3/5</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Review Progress</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Create New Application
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="h-4 w-4 mr-2" />
                Check Certificate Status
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertCircle className="h-4 w-4 mr-2" />
                Upload Documents
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}