import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Zap, Headphones, Globe, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "استضافة بوتات متطورة",
      description: "خوادم عالية الأداء مع ضمان وقت تشغيل 99.9% وسرعة تحميل فائقة"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "حماية متقدمة",
      description: "حماية شاملة ضد الهجمات الإلكترونية مع نسخ احتياطية يومية"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "أداء فائق السرعة",
      description: "تقنيات SSD وشبكة CDN عالمية لضمان أسرع أداء ممكن"
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "دعم فني 24/7",
      description: "فريق دعم متخصص متاح على مدار الساعة لحل جميع استفساراتك"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "شبكة عالمية",
      description: "خوادم موزعة في أنحاء العالم لضمان أفضل تجربة لزوار موقعك"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "قواعد بيانات قوية",
      description: "إدارة متقدمة لقواعد البيانات مع أدوات مراقبة وتحليل شاملة"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            خدماتنا المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لضمان نجاح مشاريعك على الإنترنت
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-3xl p-12 border border-border shadow-elegant">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              مستعد لبدء مشروعك؟
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-hover transition-all duration-300">
                احصل على استشارة مجانية
              </button>
              <button className="border border-primary text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                تصفح الباقات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;