'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Shield,
  FileCheck,
  BarChart3,
  Search,
  Bell,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/lib/hooks/use-auth';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  roles?: string[];
}

const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: 'Applications',
    href: '/applications',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'Certificates',
    href: '/certificates',
    icon: <FileCheck className="h-5 w-5" />,
  },
  {
    title: 'Verification',
    href: '/verify',
    icon: <Search className="h-5 w-5" />,
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: <BarChart3 className="h-5 w-5" />,
    roles: ['ADMIN', 'REVIEWER'],
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: <Users className="h-5 w-5" />,
    roles: ['ADMIN'],
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();

  const filteredNavItems = navigationItems.filter(item => {
    if (!item.roles) return true;
    return item.roles.some(role => user?.roles?.includes(role));
  });

  const handleLogout = () => {
    // Get session ID from localStorage (you might want to store this during login)
    const sessionId = localStorage.getItem('session_id');
    if (sessionId) {
      logout.mutate(sessionId);
    } else {
      logout.mutate('default-session');
    }
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: -300,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className={cn(
          'fixed left-0 top-0 h-full w-72 bg-background border-r border-border z-50',
          'lg:translate-x-0 lg:static lg:z-auto',
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Arofahajj</h1>
                <p className="text-sm text-muted-foreground">Sertifikasi</p>
              </div>
            </div>
          </div>

          {/* User info */}
          {isAuthenticated && user && (
            <div className="p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.firstName} />
                  <AvatarFallback>
                    {user.firstName?.[0]}{user.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    {user.roles?.map((role) => (
                      <Badge key={role} variant="secondary" className="text-xs">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <AnimatePresence>
              {filteredNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between w-full p-3 rounded-lg transition-colors',
                      'hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'text-foreground'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-2">
            <Link href="/settings">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Button>
            </Link>
            
            <Separator />
            
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
              disabled={logout.isPending}
            >
              <LogOut className="h-5 w-5 mr-3" />
              {logout.isPending ? 'Logging out...' : 'Logout'}
            </Button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}