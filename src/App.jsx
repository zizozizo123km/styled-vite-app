import React from 'react';
import { Menu, X, Zap, Shield, Rocket } from 'lucide-react';

// --- Components ---

const NavItem = ({ children, href }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-indigo-600 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">
              المعماري
            </span>
          </div>

          {/* Desktop Navigation (RTL) */}
          <nav className="hidden md:flex space-x-4 space-x-reverse">
            <NavItem href="#home">الرئيسية</NavItem>
            <NavItem href="#features">المميزات</NavItem>
            <NavItem href="#services">الخدمات</NavItem>
            <NavItem href="#contact">اتصل بنا</NavItem>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium shadow-lg">
              ابدأ الآن
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end">
            <NavItem href="#home">الرئيسية</NavItem>
            <NavItem href="#features">المميزات</NavItem>
            <NavItem href="#services">الخدمات</NavItem>
            <NavItem href="#contact">اتصل بنا</NavItem>
            <button className="w-full text-center mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium">
              ابدأ الآن
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="bg-gray-50 py-20 md:py-32 text-right">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        {/* Text Content (RTL) */}
        <div className="lg:col-span-7 xl:col-span-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            حلول معمارية رقمية <span className="text-indigo-600">لمستقبلك</span>
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl lg:text-xl">
            نحن نقدم أحدث التقنيات في تصميم وتخطيط المشاريع، مما يضمن جودة لا مثيل لها وكفاءة عالية في التنفيذ.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-end sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 shadow-xl"
            >
              اطلب استشارة مجانية
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-indigo-100 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition duration-300 shadow-md"
            >
              شاهد أعمالنا
            </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-6">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
            {/* Placeholder for a modern architectural image or illustration */}
            <div className="bg-indigo-100 h-96 w-full flex items-center justify-center text-indigo-600 text-2xl font-semibold">
              تصميم عصري ثلاثي الأبعاد
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 text-right border border-gray-100">
    <div className="flex items-center justify-end mb-4">
      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
        <Icon className="h-6 w-6" />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          لماذا نحن؟
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          المميزات التي تجعلنا خيارك الأول
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={Zap}
          title="سرعة التنفيذ"
          description="نستخدم منهجيات عمل سريعة وفعالة لضمان تسليم المشاريع في المواعيد المحددة دون المساس بالجودة."
        />
        <FeatureCard
          icon={Shield}
          title="جودة مضمونة"
          description="التزامنا بأعلى معايير الجودة العالمية يضمن لك الحصول على نتائج متينة وموثوقة تدوم طويلاً."
        />
        <FeatureCard
          icon={Rocket}
          title="تصميم مبتكر"
          description="فريقنا من المهندسين والمصممين يقدم حلولاً إبداعية تتجاوز التوقعات وتلبي احتياجات المستقبل."
        />
      </div>
    </div>
  </section>
);

const CTA = () => (
    <section className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between text-right">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">هل أنت مستعد للبدء؟</span>
                <span className="block text-indigo-200 mt-2">لا تضيع الوقت، تواصل معنا اليوم.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300"
                    >
                        تحدث مع خبير
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-right">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-white">المعماري</span>
                    <p className="text-gray-400 text-sm mt-1">حلول معمارية رقمية متكاملة.</p>
                </div>
                <div className="flex space-x-4 space-x-reverse text-sm">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">الخصوصية</a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">الشروط والأحكام</a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">الأسئلة الشائعة</a>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} المعماري. جميع الحقوق محفوظة.
                </p>
            </div>
        </div>
    </footer>
);


// --- Main App Component ---

function App() {
  // Setting dir="rtl" on the main container ensures proper RTL layout for text and flex items.
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;