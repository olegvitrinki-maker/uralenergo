'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  Radio,
  Activity,
  Cpu
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// ============================================
// NOISE OVERLAY
// ============================================
function NoiseOverlay() {
  return <div className="noise-overlay" />
}

// ============================================
// NAVBAR — "The Floating Island"
// ============================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F5F3EE]/90 backdrop-blur-sm border-2 border-[#111111]' 
          : 'bg-transparent border-2 border-transparent'
      }`}
      style={{ borderRadius: '2rem' }}
    >
      <div className="flex items-center gap-8 px-8 py-3">
        <a href="#">
          <img src="/images/logo.png" alt="УРАЛЭНЕРГО" className="h-8 w-auto" />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            Продукция
          </a>
          <a href="#philosophy" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            О нас
          </a>
          <a href="#protocol" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            Процесс
          </a>
          <a href="#contact" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            Контакты
          </a>
        </div>
        
        <Button 
          className="bg-[#E63B2E] hover:bg-[#CC2F24] text-white font-semibold px-6 py-2 btn-magnetic"
          style={{ borderRadius: '2rem' }}
        >
          Заказать звонок
        </Button>
      </div>
    </nav>
  )
}

// ============================================
// HERO SECTION — "The Opening Shot"
// ============================================
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15,
          ease: 'power3.out'
        }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-end overflow-hidden bg-[#111111]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" 
          alt="Industrial brutalism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/50 to-transparent" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(245, 243, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 243, 238, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Content */}
      <div ref={contentRef} className="relative z-10 w-full pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 mb-10 border border-[#F5F3EE]/20 px-5 py-2" style={{ borderRadius: '0' }}>
            <Radio className="w-4 h-4 text-[#E63B2E]" />
            <span className="text-[#F5F3EE]/70 text-xs font-mono tracking-widest uppercase">
              Завод полного цикла • Екатеринбург
            </span>
          </div>
          
          {/* Hero Headline */}
          <h1 className="mb-10">
            <span className="block text-[#F5F3EE] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              Запусти объект
            </span>
            <span className="block text-[#F5F3EE]/40 text-2xl md:text-3xl font-light mb-3">
              без
            </span>
            <span className="block text-[#E63B2E] text-5xl md:text-7xl lg:text-8xl font-bold italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Аварий.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-[#F5F3EE]/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
            Трансформаторы и КТП до 110 кВ. Толщина металла от 2 мм. 
            Срок службы — 20+ лет.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E63B2E] hover:bg-[#CC2F24] text-white font-semibold px-10 py-7 text-lg btn-magnetic group"
              style={{ borderRadius: '0' }}
            >
              Получить расчёт
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#F5F3EE]/30 text-[#F5F3EE] hover:bg-[#F5F3EE]/5 font-medium px-10 py-7 text-lg"
              style={{ borderRadius: '0' }}
            >
              Скачать каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FEATURES — "Interactive Functional Artifacts"
// ============================================
function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Shuffler state
  const [shufflerCards, setShufflerCards] = useState([
    'Толщина стенки 2+ мм',
    'Усиленный каркас',
    'Защита от деформации'
  ])
  
  // Typewriter state
  const [typewriterText, setTypewriterText] = useState('')
  const messages = [
    'Покрытие: порошковое нанесено',
    'Срок службы: 20+ лет активен',
    'Статус: защита подтверждена',
    'Устойчивость: УФ/коррозия ✓'
  ]
  const [messageIndex, setMessageIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  
  // Scheduler state
  const [activeDay, setActiveDay] = useState<number | null>(null)
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  // Shuffler effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShufflerCards(prev => {
        const newArr = [...prev]
        const last = newArr.pop()
        if (last) newArr.unshift(last)
        return newArr
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentMessage = messages[messageIndex]
    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(prev => prev + currentMessage[charIndex])
        setCharIndex(prev => prev + 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setTypewriterText('')
        setCharIndex(0)
        setMessageIndex(prev => (prev + 1) % messages.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, messageIndex, messages])

  // Scheduler animation
  useEffect(() => {
    const animateScheduler = () => {
      let day = 0
      const interval = setInterval(() => {
        setActiveDay(day % 7)
        day++
        if (day > 10) {
          clearInterval(interval)
          setActiveDay(null)
        }
      }, 800)
      return () => clearInterval(interval)
    }
    animateScheduler()
    const loopInterval = setInterval(animateScheduler, 12000)
    return () => clearInterval(loopInterval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="py-32 bg-[#F5F3EE]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-4 uppercase">
ТЕХНОЛОГИИ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Система надёжности
          </h2>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 — Diagnostic Shuffler */}
          <div 
            className="feature-card bg-white p-8 card-hover border-2 border-[#111111]"
            style={{ borderRadius: '0' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center" style={{ borderRadius: '0' }}>
                <Shield className="w-6 h-6 text-[#E63B2E]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] tracking-wide">КОНСТРУКЦИЯ</h3>
            </div>
            
            {/* Shuffler */}
            <div className="relative h-36 mb-8 overflow-hidden">
              {shufflerCards.map((card, index) => (
                <div
                  key={`${card}-${index}`}
                  className={`absolute w-full p-4 bg-[#111111] text-[#F5F3EE] transition-all duration-500 ${
                    index === 0 ? 'top-0 opacity-100' : 
                    index === 1 ? 'top-6 opacity-60' : 
                    'top-12 opacity-30'
                  }`}
                  style={{ borderRadius: '0' }}
                >
                  <span className="font-mono text-sm">{card}</span>
                </div>
              ))}
            </div>
            
            <p className="text-[#111111]/60 text-sm font-mono">
              → Не деформируется при транспортировке
            </p>
          </div>
          
          {/* Card 2 — Telemetry Typewriter */}
          <div 
            className="feature-card bg-white p-8 card-hover border-2 border-[#111111]"
            style={{ borderRadius: '0' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center" style={{ borderRadius: '0' }}>
                <Zap className="w-6 h-6 text-[#E63B2E]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] tracking-wide">ПОКРЫТИЕ</h3>
            </div>
            
            {/* Typewriter */}
            <div className="bg-[#111111] p-6 mb-8" style={{ borderRadius: '0' }}>
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-4 h-4 text-[#E63B2E] animate-pulse-dot" />
                <span className="text-[#E63B2E] text-xs font-mono tracking-widest">TELEMETRY FEED</span>
              </div>
              <div className="font-mono text-[#F5F3EE] text-sm h-6">
                {typewriterText}
                <span className="inline-block w-2 h-4 bg-[#E63B2E] ml-1 cursor-blink" />
              </div>
            </div>
            
            <p className="text-[#111111]/60 text-sm font-mono">
              → Стойкое покрытие на 20+ лет
            </p>
          </div>
          
          {/* Card 3 — Cursor Protocol Scheduler */}
          <div 
            className="feature-card bg-white p-8 card-hover border-2 border-[#111111]"
            style={{ borderRadius: '0' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center" style={{ borderRadius: '0' }}>
                <Clock className="w-6 h-6 text-[#E63B2E]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] tracking-wide">ГОТОВНОСТЬ</h3>
            </div>
            
            {/* Scheduler */}
            <div className="bg-[#111111] p-6 mb-8" style={{ borderRadius: '0' }}>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square flex items-center justify-center text-xs font-mono transition-all duration-300 ${
                      activeDay === index 
                        ? 'bg-[#E63B2E] text-white scale-95' 
                        : 'bg-[#2A2A2A] text-[#F5F3EE]/40'
                    }`}
                    style={{ borderRadius: '0' }}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#F5F3EE]/10 pt-4">
                <span className="text-[#F5F3EE]/50 text-xs font-mono">STATUS: READY</span>
                <CheckCircle2 className="w-4 h-4 text-[#E63B2E]" />
              </div>
            </div>
            
            <p className="text-[#111111]/60 text-sm font-mono">
              → Готово к подключению сразу
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// PHILOSOPHY — "The Manifesto"
// ============================================
function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.philosophy-text',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%'
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(230, 59, 46, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 59, 46, 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-8 uppercase">
ФИЛОСОФИЯ
          </span>
          
          {/* First statement */}
          <p className="philosophy-text text-[#F5F3EE]/40 text-xl md:text-2xl mb-8 font-light">
            Большинство производителей фокусируется на:
            <span className="text-[#F5F3EE]/60"> низкой цене.</span>
          </p>
          
          {/* Second statement */}
          <p className="philosophy-text text-[#F5F3EE] text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Мы фокусируемся на:
            <span className="text-[#E63B2E] italic block mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              безаварийной работе.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================
// PROTOCOL — "Sticky Stacking Archive"
// ============================================
function ProtocolSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const steps = [
    {
      number: '01',
      title: 'Проектирование',
      description: 'Индивидуальный подход. Чертежи DWG в день обращения. Гарантия прохождения технадзора.',
      icon: Cpu
    },
    {
      number: '02', 
      title: 'Производство',
      description: 'Сборка по ГОСТ на европейском оборудовании. Контроль качества на каждом этапе.',
      icon: Activity
    },
    {
      number: '03',
      title: 'Доставка',
      description: 'По всей России. Оборудование полностью готово к подключению. Гарантия 5 лет.',
      icon: Radio
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      steps.forEach((_, index) => {
        if (index < steps.length - 1) {
          ScrollTrigger.create({
            trigger: cardsRef.current[index],
            start: 'top top',
            end: 'bottom top',
            onUpdate: (self) => {
              const progress = self.progress
              gsap.to(cardsRef.current[index], {
                scale: 1 - progress * 0.1,
                filter: `blur(${progress * 20}px)`,
                opacity: 1 - progress * 0.5,
                duration: 0.1
              })
            }
          })
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [steps.length])

  return (
    <section ref={sectionRef} id="protocol" className="bg-[#F5F3EE]">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-20">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-4 uppercase">
ПРОЦЕСС
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            От проекта до запуска
          </h2>
        </div>
      </div>
      
      {steps.map((step, index) => (
        <div
          key={index}
          ref={el => { if (el) cardsRef.current[index] = el }}
          className="min-h-[80vh] flex items-center justify-center sticky top-0 py-8"
          style={{ zIndex: index + 1 }}
        >
          <div 
            className="w-full max-w-4xl mx-6 bg-[#111111] border-2 border-[#111111] overflow-hidden"
            style={{ borderRadius: '0' }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Icon side */}
              <div className="aspect-square flex items-center justify-center bg-[#E63B2E] p-12">
                <step.icon className="w-32 h-32 text-white animate-signal-pulse" />
              </div>
              
              {/* Content side */}
              <div className="flex flex-col justify-center p-10 md:p-12">
                <span className="text-[#E63B2E] font-mono text-sm mb-4">{step.number}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#F5F3EE] mb-6 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-[#F5F3EE]/60 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

// ============================================
// PRICING
// ============================================
function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pricing-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const products = [
    {
      title: 'КТП',
      subtitle: 'Комплектные подстанции',
      price: 'от 99 000 ₽',
      features: ['6-10/0,4 кВ', '25–2500 кВА', 'Готово к подключению'],
      featured: false
    },
    {
      title: 'ТМГ',
      subtitle: 'Масляные трансформаторы',
      price: 'от 99 000 ₽',
      features: ['6кВ, 10кВ', '16–3150 кВА', 'Герметичное исполнение'],
      featured: true
    },
    {
      title: 'ТСЛ',
      subtitle: 'Сухие трансформаторы',
      price: 'от 164 000 ₽',
      features: ['6кВ, 10кВ', '16–3150 кВА', 'Пожаробезопасные'],
      featured: false
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-[#F5F3EE]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-4 uppercase">
КАТАЛОГ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Оборудование до 110 кВ
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`pricing-card p-8 ${
                product.featured 
                  ? 'bg-[#111111] text-[#F5F3EE] border-2 border-[#E63B2E]' 
                  : 'bg-white text-[#111111] border-2 border-[#111111]'
              } card-hover`}
              style={{ borderRadius: '0' }}
            >
              <div className="mb-6">
                <span className={`text-xs font-mono uppercase ${product.featured ? 'text-[#E63B2E]' : 'text-[#111111]/50'}`}>
                  {product.subtitle}
                </span>
                <h3 className="text-3xl font-bold mt-2 tracking-wide">{product.title}</h3>
              </div>
              
              <div className="mb-8 pb-8 border-b-2 border-current/20">
                <span className="text-4xl font-bold">{product.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${product.featured ? 'text-[#E63B2E]' : 'text-[#E63B2E]'}`} />
                    <span className={product.featured ? 'text-[#F5F3EE]/80' : 'text-[#111111]/80'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full btn-magnetic font-mono text-sm tracking-wide ${
                  product.featured 
                    ? 'bg-[#E63B2E] hover:bg-[#CC2F24] text-white' 
                    : 'bg-[#111111] hover:bg-[#2A2A2A] text-[#F5F3EE]'
                }`}
                style={{ borderRadius: '0' }}
              >
                ЗАПРОСИТЬ КП
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] pt-20 pb-12" style={{ borderRadius: '4rem 4rem 0 0' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img src="/images/logo.png" alt="УРАЛЭНЕРГО" className="h-10 w-auto" />
            </a>
            <p className="text-[#F5F3EE]/40 text-sm leading-relaxed mb-6">
              Завод полного цикла. Оборудование для распределения электроэнергии до 110 кВ.
            </p>
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#E63B2E] animate-pulse-dot" />
              <span className="text-[#E63B2E] text-xs font-mono tracking-widest">СИСТЕМА АКТИВНА</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-[#F5F3EE] font-bold mb-6 tracking-wide">ПРОДУКЦИЯ</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">КТП — Подстанции</a></li>
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">ТМГ — Масляные</a></li>
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">ТСЛ — Сухие</a></li>
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">Высоковольтные</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#F5F3EE] font-bold mb-6 tracking-wide">КОМПАНИЯ</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">О заводе</a></li>
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">Сертификаты</a></li>
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">Доставка</a></li>
              <li><a href="#" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">Гарантия</a></li>
            </ul>
          </div>
          
          {/* Contacts */}
          <div>
            <h4 className="text-[#F5F3EE] font-bold mb-6 tracking-wide">КОНТАКТЫ</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+73433835658" className="flex items-center gap-3 text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">
                  <Phone className="w-4 h-4 text-[#E63B2E]" />
                  +7 (343) 383-56-58
                </a>
              </li>
              <li>
                <a href="mailto:ural-energy@internet.ru" className="flex items-center gap-3 text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">
                  <Mail className="w-4 h-4 text-[#E63B2E]" />
                  ural-energy@internet.ru
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#F5F3EE]/40 text-sm">
                <MapPin className="w-4 h-4 text-[#E63B2E] flex-shrink-0 mt-0.5" />
                Екатеринбург, ул. Артинская, 31/1
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-[#F5F3EE]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F3EE]/20 text-xs font-mono">
            © 2024 ООО «УралЭнерго». Все права защищены.
          </p>
          <a href="#" className="text-[#F5F3EE]/20 hover:text-[#E63B2E] transition-colors text-xs font-mono">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <NoiseOverlay />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <ProtocolSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
