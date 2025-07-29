import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "عنا", href: "#about" },
    { name: "الخدمات", href: "#services" },
    { name: "أسعار الهوستات", href: "#pricing" },
    { name: "التواصل", href: "#contact" }
  ];

  const services = [
    "استضافة المواقع",
    "خوادم مخصصة",
    "شهادات SSL",
    "النسخ الاحتياطية",
    "حماية DDoS"
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Vertical Service</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              منصتك المتكاملة للخدمات الرقمية والهوستات عالية الجودة. نقدم حلولاً مبتكرة لنجاح مشاريعك على الإنترنت.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@verticalservice.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+966 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div>
              <h5 className="font-medium mb-2">اشترك في النشرة الإخبارية</h5>
              <p className="text-primary-foreground/80 text-sm mb-3">
                احصل على آخر الأخبار والعروض الخاصة
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border border-primary-foreground/20 focus:border-primary-foreground/40 focus:outline-none"
                />
                <button className="px-4 py-2 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors duration-300">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Vertical Service. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                شروط الاستخدام
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                اتفاقية الخدمة
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;