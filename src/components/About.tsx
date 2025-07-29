import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Gamepad2, Gift, Music, MessageSquare } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "بيئة آمنة",
      description: "نوفر بيئة آمنة ومحمية لجميع المستخدمين"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "مجتمع ودود",
      description: "تكوين صداقات جديدة في بيئة إيجابية ومرحبة"
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "جوائز وهدايا",
      description: "مسابقات وجيفاويات مستمرة للأعضاء"
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      title: "ألعاب وتحديات",
      description: "شارك في بطولات وتحديات مثيرة"
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "موسيقى وترفيه",
      description: "استمع للموسيقى وشارك في المرح"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "دردشة نشطة",
      description: "تفاعل مستمر ومواضيع متنوعة"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ما هو Vertical Service؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vertical Service هو منصة متكاملة تقدم لك تجربة مميزة من الخدمات الرقمية، الهوستات، والمجتمع التفاعلي في بيئة آمنة ومبتكرة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-foreground text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-card rounded-3xl p-12 border border-border shadow-elegant">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            لماذا تختارنا؟
          </h3>
          <p className="text-xl text-muted-foreground">
            نقدم لك أفضل تجربة رقمية على الإطلاق مع خدمات متطورة وفريق دعم متخصص.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;