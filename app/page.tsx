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

export default function Portfolio() {
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
        {/* Background Elements */}
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
                SEO & Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Automation Expert
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                I help businesses skyrocket their online presence through data-driven SEO strategies and cutting-edge
                marketing automation. Proven track record of increasing organic traffic by 150%+ and reducing marketing
                costs by 30%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Get Free SEO Audit
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600 mb-1">250+</div>
                  <div className="text-slate-600 text-sm">Websites Analyzed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-green-600 mb-1">150%</div>
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
                      <div className="text-sm font-semibold text-slate-900">Organic Traffic</div>
                      <div className="text-xs text-slate-600">+180% this month</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Keywords Ranking</div>
                      <div className="text-xs text-slate-600">Top 3 positions</div>
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

              {/* Achievement Badges */}
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Turning Data Into Growth</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As a Business Operations Analyst with deep expertise in SEO and marketing automation, I've helped
                businesses transform their digital presence through strategic optimization and intelligent automation.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                My approach combines technical SEO mastery with advanced Python automation to deliver measurable results
                that drive real business growth.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm text-slate-700">SEO Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-sm text-slate-700">Automation</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm text-slate-700">Lead Generation</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-sm text-slate-700">Client Management</span>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Services That Drive Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive SEO and marketing automation solutions designed to maximize your ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>SEO Optimization</CardTitle>
                <CardDescription>Complete technical and content SEO audits with actionable strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Technical SEO audits</li>
                  <li>• Keyword research & strategy</li>
                  <li>• On-page optimization</li>
                  <li>• Performance monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Marketing Automation</CardTitle>
                <CardDescription>Custom Python solutions for lead generation and campaign management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Automated lead enrichment</li>
                  <li>• Email campaign automation</li>
                  <li>• API integrations</li>
                  <li>• Performance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Business Analysis</CardTitle>
                <CardDescription>Data-driven insights and personalized growth strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Competitor analysis</li>
                  <li>• Market research</li>
                  <li>• Custom proposals</li>
                  <li>• ROI optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real case studies from recent projects showing measurable impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce website analytics dashboard showing traffic growth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-green-600">Success Story</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">E-commerce SEO Overhaul</CardTitle>
                  <Badge variant="secondary">6 Months</Badge>
                </div>
                <CardDescription>Complete SEO transformation for a mid-size e-commerce platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+180%</div>
                    <div className="text-sm text-slate-600">Organic Traffic</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+250%</div>
                    <div className="text-sm text-slate-600">Keyword Rankings</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+120%</div>
                    <div className="text-sm text-slate-600">Conversion Rate</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Implemented comprehensive technical SEO fixes, optimized product pages, and developed content strategy
                  resulting in significant organic growth.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Technical SEO</Badge>
                  <Badge variant="outline">Content Strategy</Badge>
                  <Badge variant="outline">Schema Markup</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Marketing automation dashboard showing lead generation metrics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-blue-600">Automation</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Marketing Automation System</CardTitle>
                  <Badge variant="secondary">3 Months</Badge>
                </div>
                <CardDescription>Custom Python automation for lead generation and outreach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-30%</div>
                    <div className="text-sm text-slate-600">Marketing Costs</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">250+</div>
                    <div className="text-sm text-slate-600">Leads Processed</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+85%</div>
                    <div className="text-sm text-slate-600">Response Rate</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Built intelligent lead enrichment pipeline with automated personalization, resulting in higher
                  engagement and lower acquisition costs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python Automation</Badge>
                  <Badge variant="outline">API Integration</Badge>
                  <Badge variant="outline">Lead Enrichment</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=300"
                  alt="SaaS platform growth analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">SaaS Platform Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">+200%</div>
                  <div className="text-sm text-slate-600">Organic Visibility</div>
                </div>
                <p className="text-sm text-slate-600">
                  Comprehensive SEO strategy for B2B SaaS platform targeting high-value keywords
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=300"
                  alt="Local business SEO results"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Local Business SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">+150%</div>
                  <div className="text-sm text-slate-600">Local Searches</div>
                </div>
                <p className="text-sm text-slate-600">
                  Local SEO optimization resulting in top 3 rankings for target location-based keywords
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=300"
                  alt="Content marketing performance metrics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Content Marketing ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-purple-600">+300%</div>
                  <div className="text-sm text-slate-600">Content Engagement</div>
                </div>
                <p className="text-sm text-slate-600">
                  Strategic content optimization and distribution increasing engagement and conversions
                </p>
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
              Cutting-edge tools and technologies I use to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">SEO & Analytics</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Semrush</Badge>
                <Badge>Google Analytics</Badge>
                <Badge>Search Console</Badge>
                <Badge>Screaming Frog</Badge>
                <Badge>Ahrefs</Badge>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Automation & Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Python</Badge>
                <Badge>API Integration</Badge>
                <Badge>Web Scraping</Badge>
                <Badge>Cursor AI</Badge>
                <Badge>OpenAI API</Badge>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Business Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>Google Sheets</Badge>
                <Badge>Excel</Badge>
                <Badge>PowerPoint</Badge>
                <Badge>Instantly.io</Badge>
                <Badge>SQL</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Let's discuss how I can help you achieve your SEO and marketing automation goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
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

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Free SEO Audit</h3>
              <p className="text-slate-300 mb-6">
                Get a comprehensive analysis of your website's SEO performance and actionable recommendations for
                improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-green-400">
                  <TrendingUp className="h-5 w-5 mr-3" />
                  <span>Technical SEO Analysis</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Keyword Opportunity Assessment</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <Target className="h-5 w-5 mr-3" />
                  <span>Competitor Benchmarking</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <DollarSign className="h-5 w-5 mr-3" />
                  <span>ROI Improvement Strategies</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Request Free Audit</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Shashank Shankar</div>
            <p className="text-slate-400 mb-4">SEO & Marketing Automation Expert | Driving Growth Through Data</p>
            <p className="text-slate-500 text-sm">© 2025 Shashank Shankar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
