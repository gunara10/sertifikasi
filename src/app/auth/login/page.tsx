'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Shield, Eye, EyeOff, Mail, Lock } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('admin@arofahajj.com')
  const [password, setPassword] = useState('admin123')
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    console.log('Login attempt:', { email, password })

    try {
      // Simulasi login - nanti bisa diganti dengan API auth
      if (email === 'admin@arofahajj.com' && password === 'admin123') {
        console.log('Login successful!')
        
        // Simpan session (simplified)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userEmail', email)
        
        // Redirect ke dashboard
        console.log('Redirecting to dashboard...')
        router.push('/dashboard')
      } else {
        console.log('Login failed: Invalid credentials')
        setError('Email atau password salah')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Terjadi kesalahan saat login')
    } finally {
      setLoading(false)
    }
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div {...fadeIn} className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Arofahajj</h1>
          <p className="text-gray-600">Portal Sertifikasi Digital</p>
        </div>

        {/* Login Card */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Masuk ke Dashboard</CardTitle>
            <CardDescription>
              Masuk dengan akun Anda untuk mengakses dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} id="login-form" className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@arofahajj.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                />
                <Label htmlFor="remember" className="text-sm">
                  Ingat saya
                </Label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Login Button */}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Memproses...' : 'Masuk'}
              </Button>

              {/* Quick Login Button for Demo */}
              <Button 
                type="button" 
                variant="secondary" 
                className="w-full"
                onClick={() => {
                  setEmail('admin@arofahajj.com')
                  setPassword('admin123')
                  setTimeout(() => {
                    const form = document.getElementById('login-form') as HTMLFormElement
                    form?.requestSubmit()
                  }, 100)
                }}
              >
                Login Cepat (Demo)
              </Button>
            </form>

            {/* Demo Account Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-800 font-medium mb-2">Akun Demo:</p>
              <p className="text-sm text-blue-700">Email: admin@arofahajj.com</p>
              <p className="text-sm text-blue-700">Password: admin123</p>
            </div>

            {/* Links */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600">
                Lupa password?{' '}
                <Link href="#" className="text-blue-600 hover:underline">
                  Reset password
                </Link>
              </p>
              <p className="text-sm text-gray-600">
                Belum punya akun?{' '}
                <Link href="#" className="text-blue-600 hover:underline">
                  Daftar sekarang
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link href="/">
                <Button variant="outline" size="sm">
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}