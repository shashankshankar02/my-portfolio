"use client"

import {
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  Mail,
  Phone,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "sonner"

export default function Portfolio() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [auditFormData, setAuditFormData] = useState({
    name: '',
    email: '',
    website: ''
  })
  const [consultationFormData, setConsultationFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: ''
  })

  const handleAuditFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'seo-audit',
          ...auditFormData
        })
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('SEO Audit Request Submitted', {
          description: 'We will review your website and contact you soon.',
          duration: 5000
        })
        setIsAuditModalOpen(false)
        // Reset form
        setAuditFormData({ name: '', email: '', website: '' })
      } else {
        toast.error('Submission Failed', {
          description: result.error || 'Please try again later.',
          duration: 5000
        })
        console.error('Submission error:', result)
      }
    } catch (error) {
      toast.error('Network Error', {
        description: 'Unable to submit request. Please check your connection.',
        duration: 5000
      })
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleConsultationFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'consultation',
          ...consultationFormData
        })
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Consultation Request Submitted', {
          description: 'We will schedule a call with you soon.',
          duration: 5000
        })
        setIsConsultationModalOpen(false)
        // Reset form
        setConsultationFormData({ name: '', email: '', phone: '', goals: '' })
      } else {
        toast.error('Submission Failed', {
          description: result.error || 'Please try again later.',
          duration: 5000
        })
        console.error('Submission error:', result)
      }
    } catch (error) {
      toast.error('Network Error', {
        description: 'Unable to submit request. Please check your connection.',
        duration: 5000
      })
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-900">Shashank Shankar</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
                🚀 Available for New Projects
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                SEO Lead & Digital 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Marketing Automation Expert
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Helping businesses scale through data-driven SEO strategies, AI-powered automation, 
                and measurable digital marketing results. Proven track record of increasing organic 
                traffic by 45% and reducing marketing costs by 30%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Dialog open={isAuditModalOpen} onOpenChange={setIsAuditModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Get Your Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Free SEO Audit Request</DialogTitle>
                      <DialogDescription>
                        Fill out the form to request your comprehensive SEO audit
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAuditFormSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your Name" 
                          required 
                          value={auditFormData.name}
                          onChange={(e) => setAuditFormData({...auditFormData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your Email" 
                          required 
                          value={auditFormData.email}
                          onChange={(e) => setAuditFormData({...auditFormData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website URL</Label>
                        <Input 
                          id="website" 
                          placeholder="Your Website URL" 
                          required 
                          value={auditFormData.website}
                          onChange={(e) => setAuditFormData({...auditFormData, website: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Request Free Audit'}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Dialog open={isConsultationModalOpen} onOpenChange={setIsConsultationModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 text-lg bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      Schedule Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Schedule Consultation</DialogTitle>
                      <DialogDescription>
                        Book a 30-minute strategy session to discuss your digital marketing goals
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleConsultationFormSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="consultation-name">Name</Label>
                        <Input 
                          id="consultation-name" 
                          placeholder="Your Name" 
                          required 
                          value={consultationFormData.name}
                          onChange={(e) => setConsultationFormData({...consultationFormData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="consultation-email">Email</Label>
                        <Input 
                          id="consultation-email" 
                          type="email" 
                          placeholder="Your Email" 
                          required 
                          value={consultationFormData.email}
                          onChange={(e) => setConsultationFormData({...consultationFormData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="consultation-phone">Phone Number</Label>
                        <Input 
                          id="consultation-phone" 
                          type="tel" 
                          placeholder="Your Phone Number" 
                          required 
                          value={consultationFormData.phone}
                          onChange={(e) => setConsultationFormData({...consultationFormData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="consultation-goals">Brief Description of Goals</Label>
                        <Input 
                          id="consultation-goals" 
                          placeholder="What would you like to discuss?" 
                          required 
                          value={consultationFormData.goals}
                          onChange={(e) => setConsultationFormData({...consultationFormData, goals: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600 mb-1">250+</div>
                  <div className="text-slate-600 text-sm">SEO Audits</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-green-600 mb-1">45%</div>
                  <div className="text-slate-600 text-sm">Avg. Traffic Increase</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-600 mb-1">30%</div>
                  <div className="text-slate-600 text-sm">Cost Reduction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="SEO Analytics Dashboard showing traffic growth and keyword rankings"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">SEO Performance</div>
                      <div className="text-xs text-slate-600">+45% Organic Growth</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Marketing Automation</div>
                      <div className="text-xs text-slate-600">30% Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Professional headshot of Shashank Shankar, SEO and Marketing Automation Expert"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Journey</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As an SEO Lead at Cube, I specialize in driving measurable business growth through 
                advanced SEO strategies, client-focused digital marketing, and technical process automation.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm text-slate-700">
                      250+ Website Audits with Actionable Recommendations
                    </span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm text-slate-700">
                      45% Average Increase in Organic Traffic
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-sm text-slate-700">
                      30% Marketing Cost Reduction through Automation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-sm text-slate-700">
                      120+ Qualified Leads Generated Monthly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>SEO Strategy & Optimization</CardTitle>
                <CardDescription>Comprehensive SEO solutions for digital visibility</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Comprehensive SEO audits</li>
                  <li>• Keyword research</li>
                  <li>• Technical optimization</li>
                  <li>• Local SEO strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1200px-Google_Ads_logo.svg.png" 
                    alt="Google Ads Management" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle>Google Ads Management</CardTitle>
                <CardDescription>Strategic PPC campaign development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Campaign strategy</li>
                  <li>• Ad copy optimization</li>
                  <li>• Landing page design</li>
                  <li>• Performance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Analytics & Reporting</CardTitle>
                <CardDescription>Data-driven insights and strategic recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• GA4 optimization</li>
                  <li>• Search Console monitoring</li>
                  <li>• Conversion tracking</li>
                  <li>• ROI analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Marketing Automation</CardTitle>
                <CardDescription>AI-powered lead generation and workflow optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Python automation tools</li>
                  <li>• AI-assisted outreach</li>
                  <li>• Email campaign automation</li>
                  <li>• Competitor analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world impact through strategic digital marketing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="B2B SaaS SEO Transformation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">B2B SaaS SEO Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">+45%</div>
                  <div className="text-sm text-slate-600">Organic Traffic</div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Comprehensive technical SEO strategy resulting in significant organic visibility improvement
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Technical SEO</Badge>
                  <Badge variant="outline">Keyword Strategy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Local SEO Success"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Local SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">+60%</div>
                  <div className="text-sm text-slate-600">Local Footfall</div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  GMB optimization and location-based content strategy driving local business growth
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Local SEO</Badge>
                  <Badge variant="outline">GMB Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Marketing Automation System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">AI-Powered Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-purple-600">+120</div>
                  <div className="text-sm text-slate-600">Qualified Leads</div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Python-based automation system for targeted, personalized business outreach
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Python Automation</Badge>
                  <Badge variant="outline">AI Outreach</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge tools and technologies driving digital marketing excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">SEO & Analytics</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Google Search Console</Badge>
                <Badge>Google Analytics 4</Badge>
                <Badge>SEMrush</Badge>
                <Badge>Schema Markup</Badge>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Automation & Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Python</Badge>
                <Badge>API Integration</Badge>
                <Badge>AI Tools</Badge>
                <Badge>Cursor IDE</Badge>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Marketing Platforms</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Google Ads</Badge>
                <Badge>Google My Business</Badge>
                <Badge>Email Marketing</Badge>
                <Badge>CRM Systems</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Discuss Your Growth Strategy</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your digital presence with data-driven SEO and marketing automation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">shashank.m.s2580@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-400 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-300">+91 9916410170</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <ExternalLink className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-slate-300">Shashank Shankar</div>
                  </div>
                </div>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-slate-800 p-8 rounded-2xl cursor-pointer hover:bg-slate-700 transition-colors">
                  <h3 className="text-2xl font-bold mb-6">Free SEO Consultation</h3>
                  <p className="text-slate-300 mb-6">
                    Get a comprehensive analysis of your digital marketing potential and actionable growth strategies.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-green-400">
                      <TrendingUp className="h-5 w-5 mr-3" />
                      <span>Personalized SEO Audit</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <BarChart3 className="h-5 w-5 mr-3" />
                      <span>Growth Strategy Session</span>
                    </div>
                    <div className="flex items-center text-purple-400">
                      <Target className="h-5 w-5 mr-3" />
                      <span>Competitive Analysis</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <DollarSign className="h-5 w-5 mr-3" />
                      <span>ROI Optimization Insights</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Schedule Free Consultation
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule Consultation</DialogTitle>
                  <DialogDescription>
                    Book a 30-minute strategy session to discuss your digital marketing goals
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleConsultationFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="consultation-name">Name</Label>
                    <Input 
                      id="consultation-name" 
                      placeholder="Your Name" 
                      required 
                      value={consultationFormData.name}
                      onChange={(e) => setConsultationFormData({...consultationFormData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="consultation-email">Email</Label>
                    <Input 
                      id="consultation-email" 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      value={consultationFormData.email}
                      onChange={(e) => setConsultationFormData({...consultationFormData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="consultation-phone">Phone Number</Label>
                    <Input 
                      id="consultation-phone" 
                      type="tel" 
                      placeholder="Your Phone Number" 
                      required 
                      value={consultationFormData.phone}
                      onChange={(e) => setConsultationFormData({...consultationFormData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="consultation-goals">Brief Description of Goals</Label>
                    <Input 
                      id="consultation-goals" 
                      placeholder="What would you like to discuss?" 
                      required 
                      value={consultationFormData.goals}
                      onChange={(e) => setConsultationFormData({...consultationFormData, goals: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Shashank Shankar</div>
            <p className="text-slate-400 mb-4">SEO Lead & Digital Marketing Automation Expert</p>
            <p className="text-slate-500 text-sm">© 2025 Shashank Shankar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
