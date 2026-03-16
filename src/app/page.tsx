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
  Cpu,
  Factory,
  Award,
  Truck
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// ============================================
// NOISE OVERLAY
// ============================================
function NoiseOverlay() {
  return <div className="noise-overlay" />
}

// ============================================
// NAVBAR
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F5F3EE]/95 backdrop-blur-sm border-2 border-[#111111]' 
          : 'bg-transparent border-2 border-transparent'
      }`}
      style={{ borderRadius: '2rem' }}
    >
      <div className="flex items-center justify-between gap-12 px-8 py-3">
        <a href="#">
          <img src="/images/logo.png" alt="УРАЛЭНЕРГО" className="h-12 w-auto" />
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            Продукция
          </a>
          <a href="#philosophy" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            О компании
          </a>
          <a href="#protocol" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            Преимущества
          </a>
          <a href="#contact" className={`text-sm font-medium link-lift tracking-wide ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
            Контакты
          </a>
        </div>
        
        <a href="tel:+73433835658" className={`hidden sm:flex items-center gap-2 ${scrolled ? 'text-[#111111]' : 'text-white'}`}>
          <Phone className="w-4 h-4 text-[#E63B2E]" />
          <span className="text-sm font-medium">+7 (343) 383-56-58</span>
        </a>
      </div>
    </nav>
  )
}

// ============================================
// HERO SECTION
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
      <div ref={contentRef} className="relative z-10 w-full pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 mb-8 border border-[#F5F3EE]/20 px-5 py-2">
            <Radio className="w-4 h-4 text-[#E63B2E]" />
            <span className="text-[#F5F3EE]/70 text-xs font-mono tracking-widest uppercase">
              Завод-изготовитель • Екатеринбург
            </span>
          </div>
          
          {/* Hero Headline */}
          <h1 className="mb-8">
            <span className="block text-[#F5F3EE] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              Оборудование для сетей
            </span>
            <span className="block text-[#E63B2E] text-5xl md:text-7xl lg:text-8xl font-bold italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              до 110 кВ
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-[#F5F3EE]/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            ООО «Урал Энерго» — производственное предприятие. Силовые трансформаторы, КТП, распределительные устройства. 
            Серийные и индивидуальные решения по ГОСТ и ТУ.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E63B2E] hover:bg-[#CC2F24] text-white font-semibold px-10 py-7 text-lg btn-magnetic group"
              style={{ borderRadius: '0' }}
            >
              Получить расчёт стоимости
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#F5F3EE]/30 text-[#F5F3EE] hover:bg-[#F5F3EE]/5 font-medium px-10 py-7 text-lg"
              style={{ borderRadius: '0' }}
            >
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FEATURES — Преимущества КТП
// ============================================
function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Shuffler state
  const [shufflerCards, setShufflerCards] = useState([
    'Толщина железа от 2 мм',
    'Усиленная конструкция',
    'Защита от деформации'
  ])
  
  // Typewriter state
  const [typewriterText, setTypewriterText] = useState('')
  const messages = [
    'Порошковая покраска нанесена',
    'Срок службы: 20+ лет',
    'Защита от коррозии активна',
    'Стойкость к царапинам ✓'
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
    <section ref={sectionRef} id="features" className="py-16 md:py-20 bg-[#F5F3EE]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-3 uppercase">
            ПРЕИМУЩЕСТВА КТП
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">
            Прочность и надёжность
          </h2>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Card 1 — Толщина железа */}
          <div 
            className="feature-card bg-white p-6 card-hover border-2 border-[#111111]"
            style={{ borderRadius: '0' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#E63B2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] tracking-wide">ТОЛЩИНА ЖЕЛЕЗА ОТ 2 ММ</h3>
            </div>
            
            {/* Shuffler */}
            <div className="relative h-32 mb-6 overflow-hidden">
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
            
            <p className="text-[#111111]/60 text-sm">
              Конструкция не деформируется, выдерживает транспортировку без повреждений и защищена от коррозии.
            </p>
          </div>
          
          {/* Card 2 — Порошковая покраска */}
          <div 
            className="feature-card bg-white p-6 card-hover border-2 border-[#111111]"
            style={{ borderRadius: '0' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#E63B2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] tracking-wide">ПОРОШКОВАЯ ПОКРАСКА</h3>
            </div>
            
            {/* Typewriter */}
            <div className="bg-[#111111] p-5 mb-6" style={{ borderRadius: '0' }}>
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-4 h-4 text-[#E63B2E] animate-pulse-dot" />
                <span className="text-[#E63B2E] text-xs font-mono tracking-widest">LIVE</span>
              </div>
              <div className="font-mono text-[#F5F3EE] text-sm h-6">
                {typewriterText}
                <span className="inline-block w-2 h-4 bg-[#E63B2E] ml-1 cursor-blink" />
              </div>
            </div>
            
            <p className="text-[#111111]/60 text-sm">
              Стойкое покрытие до 20 лет. Защищает от коррозии, царапин и внешних воздействий.
            </p>
          </div>
          
          {/* Card 3 — Готово к подключению */}
          <div 
            className="feature-card bg-white p-6 card-hover border-2 border-[#111111]"
            style={{ borderRadius: '0' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#E63B2E]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] tracking-wide">ГОТОВО К ПОДКЛЮЧЕНИЮ</h3>
            </div>
            
            {/* Scheduler */}
            <div className="bg-[#111111] p-5 mb-6" style={{ borderRadius: '0' }}>
              <div className="grid grid-cols-7 gap-2 mb-3">
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
              <div className="flex items-center justify-between border-t border-[#F5F3EE]/10 pt-3">
                <span className="text-[#F5F3EE]/50 text-xs font-mono">STATUS: READY</span>
                <CheckCircle2 className="w-4 h-4 text-[#E63B2E]" />
              </div>
            </div>
            
            <p className="text-[#111111]/60 text-sm">
              Трансформатор на усиленном основании. Установил и запитал — экономия времени и денег.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// PHILOSOPHY — О компании
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
    <section ref={sectionRef} id="philosophy" className="py-16 md:py-20 bg-[#111111] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(230, 59, 46, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 59, 46, 0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-6 uppercase">
            О КОМПАНИИ
          </span>
          
          {/* Main text */}
          <p className="philosophy-text text-[#F5F3EE] text-2xl md:text-3xl font-light mb-8 leading-relaxed">
            ООО «Урал Энерго» — <span className="text-[#E63B2E] font-medium">проверенный завод-изготовитель</span> с опытом, репутацией и технологической базой.
          </p>
          
          <p className="philosophy-text text-[#F5F3EE]/60 text-lg md:text-xl mb-10 leading-relaxed">
            Специализируемся на изготовлении оборудования для сетей до 110 кВ. 
            Предлагаем серийные и индивидуальные инженерные решения.
          </p>
          
          {/* Products list */}
          <div className="philosophy-text grid sm:grid-cols-2 gap-4 mb-10">
            {['Силовые трансформаторы', 'КТП — комплектные подстанции', 'Распределительные устройства', 'Шкафы автоматики'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E63B2E]" />
                <span className="text-[#F5F3EE]/80">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="philosophy-text text-[#F5F3EE]/40 text-lg italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            «В каждом сделанном нами продукте — сила уральского духа»
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================
// PROTOCOL — Преимущества
// ============================================
function ProtocolSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const steps = [
    {
      number: '01',
      title: 'Индивидуальный подход',
      description: 'Каждый проект уникален — предлагаем оборудование под ваши условия эксплуатации и требования.',
      icon: Cpu
    },
    {
      number: '02', 
      title: 'Качество и надёжность',
      description: 'Проверенные технологии и материалы. Гарантия до 5 лет. Все сертификаты ГОСТ и ТУ.',
      icon: Award
    },
    {
      number: '03',
      title: 'Доставка по России',
      description: 'Транспортными компаниями или самовывоз со склада в Екатеринбурге, ул. Артинская, 31/1.',
      icon: Truck
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.protocol-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="protocol" className="py-16 md:py-20 bg-[#F5F3EE]">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-3 uppercase">
            ПРЕИМУЩЕСТВА
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">
            Почему выбирают нас
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => { if (el) cardsRef.current[index] = el }}
              className="protocol-card bg-white p-8 card-hover border-2 border-[#111111]"
              style={{ borderRadius: '0' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[#E63B2E] font-mono text-sm">{step.number}</span>
                  <h3 className="text-xl font-bold text-[#111111] tracking-wide">{step.title}</h3>
                </div>
              </div>
              <p className="text-[#111111]/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
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
      voltage: '6-10/0,4 кВ',
      power: '25–2500 кВА',
      description: 'Приём, преобразование и распределение электроэнергии',
      featured: false
    },
    {
      title: 'ТМГ',
      subtitle: 'Масляные трансформаторы',
      voltage: '6кВ, 10кВ',
      power: '16–3150 кВА',
      description: 'Герметичное исполнение, серии ТМГ11, ТМГ12, ТМГ13',
      featured: true
    },
    {
      title: 'ТСЛ',
      subtitle: 'Сухие трансформаторы',
      voltage: '6кВ, 10кВ',
      power: '16–3150 кВА',
      description: 'Литая изоляция, пожаробезопасные',
      featured: false
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-3 uppercase">
            КАТАЛОГ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F3EE] tracking-tight">
            Оборудование до 110 кВ
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className={`pricing-card p-6 ${
                product.featured 
                  ? 'bg-[#E63B2E] text-white border-2 border-[#E63B2E]' 
                  : 'bg-[#1A1A1A] text-[#F5F3EE] border-2 border-[#F5F3EE]/10'
              } card-hover`}
              style={{ borderRadius: '0' }}
            >
              <div className="mb-4">
                <span className={`text-xs font-mono uppercase ${product.featured ? 'text-white/70' : 'text-[#E63B2E]'}`}>
                  {product.subtitle}
                </span>
                <h3 className="text-2xl font-bold mt-1 tracking-wide">{product.title}</h3>
              </div>
              
              <div className="flex gap-3 mb-4">
                <span className={`text-xs font-mono px-3 py-1 ${product.featured ? 'bg-white/20' : 'bg-[#E63B2E]/20 text-[#E63B2E]'}`}>
                  {product.voltage}
                </span>
                <span className={`text-xs font-mono px-3 py-1 ${product.featured ? 'bg-white/20' : 'bg-white/10 text-white/60'}`}>
                  {product.power}
                </span>
              </div>
              
              <p className={`text-sm mb-6 ${product.featured ? 'text-white/80' : 'text-[#F5F3EE]/60'}`}>
                {product.description}
              </p>
              
              <Button 
                className={`w-full btn-magnetic font-mono text-sm tracking-wide ${
                  product.featured 
                    ? 'bg-white text-[#E63B2E] hover:bg-white/90' 
                    : 'bg-[#E63B2E] hover:bg-[#CC2F24] text-white'
                }`}
                style={{ borderRadius: '0' }}
              >
                ЗАПРОСИТЬ ЦЕНУ
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
// CONTACTS
// ============================================
function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    <section ref={sectionRef} id="contact" className="py-16 md:py-20 bg-[#F5F3EE]">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-[#E63B2E] text-xs font-mono tracking-widest mb-3 uppercase">
            КОНТАКТЫ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">
            Свяжитесь с нами
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <a href="tel:+73433835658" className="contact-item flex items-start gap-4 p-6 bg-white border-2 border-[#111111] card-hover">
            <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs text-[#111111]/50 font-mono uppercase">Телефон</span>
              <div className="text-lg font-bold text-[#111111]">+7 (343) 383-56-58</div>
            </div>
          </a>
          
          <a href="tel:+79226080737" className="contact-item flex items-start gap-4 p-6 bg-white border-2 border-[#111111] card-hover">
            <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs text-[#111111]/50 font-mono uppercase">Мобильный</span>
              <div className="text-lg font-bold text-[#111111]">+7 (922) 608-07-37</div>
            </div>
          </a>
          
          <a href="mailto:ural-energy@internet.ru" className="contact-item flex items-start gap-4 p-6 bg-white border-2 border-[#111111] card-hover">
            <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs text-[#111111]/50 font-mono uppercase">Email</span>
              <div className="text-lg font-bold text-[#111111]">ural-energy@internet.ru</div>
            </div>
          </a>
          
          <div className="contact-item flex items-start gap-4 p-6 bg-white border-2 border-[#111111]">
            <div className="w-12 h-12 bg-[#E63B2E] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs text-[#111111]/50 font-mono uppercase">Адрес</span>
              <div className="text-base font-bold text-[#111111]">Екатеринбург, ул. Артинская, 31/1</div>
            </div>
          </div>
        </div>
        
        <div className="contact-item mt-8 flex items-center gap-4 p-6 bg-[#111111]">
          <div className="w-3 h-3 bg-[#E63B2E] animate-pulse-dot" />
          <span className="text-[#E63B2E] text-sm font-mono tracking-widest">СИСТЕМА АКТИВНА</span>
          <span className="text-[#F5F3EE]/50 text-sm">Пн-Пт с 9:00 до 18:00</span>
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
    <footer className="bg-[#111111] py-10 border-t-2 border-[#F5F3EE]/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="УРАЛЭНЕРГО" className="h-10 w-auto" />
            <div className="text-[#F5F3EE]/40 text-sm">
              ООО «УралЭнерго» — завод полного цикла
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://всетрансформаторы.рф" target="_blank" className="text-[#F5F3EE]/40 hover:text-[#E63B2E] transition-colors text-sm">
              всетрансформаторы.рф
            </a>
            <span className="text-[#F5F3EE]/20">|</span>
            <span className="text-[#F5F3EE]/30 text-sm">
              © 2024 Все права защищены
            </span>
          </div>
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
      <ContactSection />
      <Footer />
    </main>
  )
}
