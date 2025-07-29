import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            مرحباً بك في
            <span className="block text-primary">Vertical Service</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            منصتك المتكاملة للخدمات الرقمية والهوستات عالية الجودة مع تجربة مميزة وأسعار منافسة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="gradient" size="hero" className="min-w-[200px]">
              ابدأ الآن
            </Button>
            <Button variant="outline" size="hero" className="min-w-[200px]">
              اكتشف المزيد
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-elegant hover:shadow-hover transition-all duration-300">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">100+</div>
              <div className="text-muted-foreground">عضو نشط</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-elegant hover:shadow-hover transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-muted-foreground">دعم فني</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-elegant hover:shadow-hover transition-all duration-300">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-muted-foreground">وقت التشغيل</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-elegant hover:shadow-hover transition-all duration-300">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">سريع</div>
              <div className="text-muted-foreground">الأداء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;