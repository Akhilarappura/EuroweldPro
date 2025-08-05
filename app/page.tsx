"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Users,
  Globe,
  Shield,
  Zap,
  Factory,
  Ship,
  Fuel,
  Utensils,
  Building2,
  Wrench,
  Award,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

function updateDots(activeIndex: number) {
  const dots = document.querySelectorAll(".slider-dot")
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.className = "slider-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors bg-orange-500"
    } else {
      dot.className = "slider-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors bg-white/50 hover:bg-white/70"
    }
  })
}

export default function EuroWeldProWebsite() {
  useEffect(() => {
    const slider = document.getElementById("slider")
    if (slider) {
      slider.dataset.currentIndex = "0"
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/eagle.jpg"
                alt="EuroWeld Pro Logo"
                width={40}
                height={40}
                className="rounded-lg sm:w-[50px] sm:h-[50px]"
              />
              <h1 className="text-lg sm:text-2xl font-bold">Eagle World</h1>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-orange-500 transition-colors">
                Services
              </a>
              <a href="#candidates" className="hover:text-orange-500 transition-colors">
                For Candidates
              </a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu")
                mobileMenu?.classList.toggle("hidden")
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation Menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                Home
              </a>
              <a href="#about" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                About
              </a>
              <a href="#services" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                Services
              </a>
              <a href="#candidates" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                For Candidates
              </a>
              <a href="#contact" className="hover:text-orange-500 transition-colors py-2">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-8">
            <div className="space-y-4 order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                Your Trusted Partner for Expert{" "}
                <span className="text-orange-500">Welders, Fabricators, Electricians etc</span> Across Europe
              </h1>
              <p className="text-base sm:text-lg text-gray-300">
                Specializing in Boiler Construction, Oil & Gas, Food Industry, Shipbuilding, and Fertilizer Sectors.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                We are a premier company dedicated to providing highly skilled welders, fabricators, electricians to
                industries throughout Europe. Our expertise ensures your projects in critical sectors like Boiler
                Construction, Oil & Gas, Food Industry, Shipbuilding, and Fertilizer are completed efficiently and to
                the highest standards. We focus on timely and effective workforce solutions to boost your productivity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Skilled Workforce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Sector-Specific Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Rapid Deployment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Quality Assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Pan-European Reach</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto">
                  <a href="#contact">Contact Us Today</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent w-full sm:w-auto"
                >
                  <a href="#services">Explore Our Services</a>
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/pic10.jpg"
                alt="Professional welders at work"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Eagle World</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Leading manpower supplier for European industries with expertise in critical sectors
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 lg:order-1">
              <Image
                src="/eagle.jpg"
                alt="Industrial facility"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 flex items-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  To be the leading and most reliable manpower supplier for European industries, particularly in Boiler,
                  Oil & Gas, Food, Shipbuilding, and Fertilizer sectors, by providing skilled and efficient welders and
                  fabricators who meet precise client requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 flex items-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  To achieve excellence in professional manpower solutions, fostering long-term partnerships built on
                  trust, quality, and mutual success for both clients and our workforce.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Specialists in assessing welding and fabrication skills
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Rigorous Vetting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Comprehensive checks on qualifications and experience
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Full adherence to European labor laws and procedures
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Client-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">Dedicated to understanding unique client demands</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manpower solutions for Europe's most demanding industries
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
                  <CardTitle className="text-xl sm:text-2xl text-slate-800">Expert Welders Supply</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm sm:text-base">Welding Techniques:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      TIG
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      MMA
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      MIG
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      SAW
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm sm:text-base">Materials:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Carbon Steel
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Stainless Steel
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Duplex
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Super Duplex
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Aluminum
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Exotic Metals
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">All major welding certifications including TUV ANB</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  <CardTitle className="text-xl sm:text-2xl text-slate-800">Expert Fabricators Supply</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Skilled in reading and interpreting technical drawings (Piping and Structure)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Proficient in cutting, shaping, and assembling metal structures
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Experienced in operating various fabrication machinery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Experience with exotic metals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
                <CardHeader className="pb-4">
                  <Factory className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm sm:text-base">Boiler Construction</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="pb-4">
                  <Fuel className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm sm:text-base">Oil & Gas</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader className="pb-4">
                  <Utensils className="h-12 w-12 sm:h-16 sm:w-16 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm sm:text-base">Food Industry</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-cyan-50 to-cyan-100">
                <CardHeader className="pb-4">
                  <Ship className="h-12 w-12 sm:h-16 sm:w-16 text-cyan-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm sm:text-base">Shipbuilding</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 col-span-2 sm:col-span-1">
                <CardHeader className="pb-4">
                  <Building2 className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm sm:text-base">Fertilizer</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Image Slider Section */}
          <div className="mt-12 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12">
              Our Work in Action
            </h3>
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <div
                id="slider"
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: "translateX(0%)" }}
                data-current-index="0"
              >
                {/* Slide 1 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic1.jpg"
                    alt="Welders working on boiler construction"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 2 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic2.jpg"
                    alt="Oil and gas pipeline welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 3 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.jpg">
                    <source src="/video1.mp4" type="video/mp4" />
                    <source src="/video1.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 4 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic3.jpg"
                    alt="Shipbuilding fabrication work"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 5 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic4.jpg"
                    alt="Food industry stainless steel welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 6 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.jpg">
                    <source src="/video2.mp4" type="video/mp4" />
                    <source src="/video2.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 7 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic5.jpg"
                    alt="Fertilizer plant construction"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 8 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic7.jpg"
                    alt="Industrial boiler welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 9 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.jpg">
                    <source src="/video3.mp4" type="video/mp4" />
                    <source src="/video3.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 10 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic8.jpg"
                    alt="Offshore platform welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 11 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.jpg">
                    <source src="/video4.mp4" type="video/mp4" />
                    <source src="/video4.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 12 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic9.jpg"
                    alt="Precision welding work"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 13 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.jpg">
                    <source src="/video5.mp4" type="video/mp4" />
                    <source src="/video5.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Main Navigation Arrows */}
              <button
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                onClick={() => {
                  const slider = document.getElementById("slider")
                  const currentIndex = Number.parseInt(slider?.dataset.currentIndex || "0")
                  const totalSlides = 13
                  const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
                  if (slider) {
                    const videos = slider.querySelectorAll("video")
                    videos.forEach((video) => video.pause())
                    slider.style.transform = `translateX(-${newIndex * 100}%)`
                    slider.dataset.currentIndex = newIndex.toString()
                    updateDots(newIndex)
                  }
                }}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                onClick={() => {
                  const slider = document.getElementById("slider")
                  const currentIndex = Number.parseInt(slider?.dataset.currentIndex || "0")
                  const totalSlides = 13
                  const newIndex = (currentIndex + 1) % totalSlides
                  if (slider) {
                    const videos = slider.querySelectorAll("video")
                    videos.forEach((video) => video.pause())
                    slider.style.transform = `translateX(-${newIndex * 100}%)`
                    slider.dataset.currentIndex = newIndex.toString()
                    updateDots(newIndex)
                  }
                }}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator - Responsive */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-1 sm:gap-2 z-20 justify-center max-w-[90%] sm:max-w-2xl">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                  <button
                    key={index}
                    className={`slider-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === 0 ? "bg-orange-500" : "bg-white/50 hover:bg-white/70"
                    }`}
                    onClick={() => {
                      const slider = document.getElementById("slider")
                      if (slider) {
                        const videos = slider.querySelectorAll("video")
                        videos.forEach((video) => video.pause())
                        slider.style.transform = `translateX(-${index * 100}%)`
                        slider.dataset.currentIndex = index.toString()
                        updateDots(index)
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Candidates Section */}
      <section id="candidates" className="py-12 sm:py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Expert Team</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Opportunities for skilled welders and fabricators seeking rewarding careers across Europe
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Work With Us?</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Access to leading European industrial projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Competitive remuneration and benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Safe and professional working environments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Support with visa and travel arrangements</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/pic1.jpg"
                alt="Professional team"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Ready to discuss your manpower needs? Get in touch with our team
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Our Location</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    18 OFFICE 3,
                    <br />
                    TRIQ IGNAZIO GAVINO BONAVITA,
                    <br />
                    PEMBROKE
                    <br />
                    PBK 1150
                    <br />
                    Malta
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Phone</h3>
                  <p className="text-gray-600 text-sm sm:text-base">+356 9939 9193</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Profitech@eagleworldlimited.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Operating Hours</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Monday - Friday: 8:00 AM - 6:00 PM CET</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send us a message</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <Input placeholder="Your name" className="text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                      <Input placeholder="Your company" className="text-sm sm:text-base" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <Input type="email" placeholder="your.email@company.com" className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <Input placeholder="How can we help you?" className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-sm sm:text-base">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/eagle.jpg"
                  alt="Eagle World LLC Logo"
                  width={32}
                  height={32}
                  className="rounded-lg sm:w-[40px] sm:h-[40px]"
                />
                <h3 className="text-lg sm:text-xl font-bold">Eagle World LLC</h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Your trusted partner for expert welders and fabricators across Europe.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Expert Welders
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Fabricators
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Industrial Projects
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Quality Assurance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Boiler Construction</li>
                <li>Oil & Gas</li>
                <li>Food Industry</li>
                <li>Shipbuilding</li>
                <li>Fertilizer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    GDPR Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Eagle World LLC | All rights reserved. | GDPR Compliant | Based in
              Malta, EU
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
