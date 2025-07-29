import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Server, Cpu, HardDrive } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "الباقة الأولى",
      price: "2.2k",
      features: [
        { icon: <HardDrive className="w-4 h-4" />, text: "512MB Memory" },
        { icon: <Server className="w-4 h-4" />, text: "1024MB Disk" },
        { icon: <Cpu className="w-4 h-4" />, text: "35% CPU" }
      ],
      popular: false
    },
    {
      name: "الباقة الثانية",
      price: "4.2k",
      features: [
        { icon: <HardDrive className="w-4 h-4" />, text: "1024MB Memory" },
        { icon: <Server className="w-4 h-4" />, text: "2048MB Disk" },
        { icon: <Cpu className="w-4 h-4" />, text: "75% CPU" }
      ],
      popular: false
    },
    {
      name: "الباقة الثالثة",
      price: "6.2k",
      features: [
        { icon: <HardDrive className="w-4 h-4" />, text: "1512MB Memory" },
        { icon: <Server className="w-4 h-4" />, text: "3072MB Disk" },
        { icon: <Cpu className="w-4 h-4" />, text: "100% CPU" }
      ],
      popular: true
    },
    {
      name: "الباقة الرابعة",
      price: "8.2k",
      features: [
        { icon: <HardDrive className="w-4 h-4" />, text: "2048MB Memory" },
        { icon: <Server className="w-4 h-4" />, text: "5120MB Disk" },
        { icon: <Cpu className="w-4 h-4" />, text: "150% CPU" }
      ],
      popular: false
    },
    {
      name: "الباقة الخامسة",
      price: "12.2k",
      features: [
        { icon: <HardDrive className="w-4 h-4" />, text: "4096MB Memory" },
        { icon: <Server className="w-4 h-4" />, text: "10240MB Disk" },
        { icon: <Cpu className="w-4 h-4" />, text: "200% CPU" }
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            أسعار الهوستات
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اختر الباقة المناسبة لك من بين خططنا المتنوعة بأفضل الأسعار وأعلى جودة للخدمة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-border shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    الأكثر شعبية
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-foreground text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">/شهر</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  تشمل:
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <span className="text-foreground text-sm">{feature.text}</span>
                  </div>
                ))}
                
                <div className="pt-6">
                  <Button 
                    variant={plan.popular ? "gradient" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    تواصل معنا
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            هل تحتاج باقة مخصصة؟
          </p>
          <Button variant="hero" size="lg">
            تواصل للحصول على عرض مخصص
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;