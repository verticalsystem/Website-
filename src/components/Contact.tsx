import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "البريد الإلكتروني",
      description: "تواصل معنا عبر البريد الإلكتروني",
      value: "verticalservice.host@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "لمؤسس",
      description: "صانع الموقع  ",
      value: "Momen Khater او !  SA"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "الدردشة المباشرة",
      description: "دعم فوري على مدار الساعة",
      value: "متاح 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في أي وقت. تواصل معنا اليوم وابدأ رحلتك نحو النجاح الرقمي
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="text-foreground text-2xl text-center">
                أرسل لنا رسالة
              </CardTitle>
              <CardDescription className="text-muted-foreground text-center">
                املأ النموذج وسنتواصل معك في أقرب وقت ممكن
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">الاسم</label>
                  <Input placeholder="اسمك الكامل" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">البريد الإلكتروني</label>
                  <Input type="email" placeholder="example@email.com" className="bg-background/50" />
                </div>
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">الموضوع</label>
                <Input placeholder="موضوع الرسالة" className="bg-background/50" />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">الرسالة</label>
                <Textarea 
                  placeholder="اكتب رسالتك هنا..." 
                  className="bg-background/50 min-h-32" 
                />
              </div>
              <Button variant="gradient" size="lg" className="w-full">
                <Send className="w-4 h-4 ml-2" />
                إرسال الرسالة
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-right">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                كيفية التواصل معنا
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                فريقنا متاح لمساعدتك في أي استفسار أو طلب دعم. اختر الطريقة الأنسب لك للتواصل معنا.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-gradient-card border-border shadow-elegant hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">{method.title}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{method.description}</p>
                        <p className="text-primary font-medium">{method.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-elegant text-center">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                استجابة سريعة مضمونة
              </h4>
              <p className="text-muted-foreground mb-6">
                نتعهد بالرد على جميع استفساراتكم خلال 24 ساعة كحد أقصى
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://discord.gg/2G29KM3Z3K', '_blank')}
              >
                انضم إلينا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;