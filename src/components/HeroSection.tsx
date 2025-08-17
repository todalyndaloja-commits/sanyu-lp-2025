import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
const heroImage = "/lovable-uploads/8afd3c1a-85bb-476f-96c5-3f5ac428da83.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sanyu-blue-light to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-sanyu-blue/10 rounded-full border border-sanyu-blue/20 mb-4">
                <span className="text-sm font-medium text-sanyu-blue">🚀 Mais de 5.000 lojistas já confiam na Sanyu</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Transforme sua loja em uma</span>
                <br />
                <span className="bg-gradient-to-r from-sanyu-blue via-sanyu-blue-dark to-sanyu-blue bg-clip-text text-transparent animate-pulse">
                  máquina de vendas
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                <span className="font-semibold text-foreground">Dropshipping de verdade:</span> produtos premium direto da China, 
                inspeção rigorosa, personalização completa e entrega expressa. 
                <span className="text-sanyu-blue font-medium">Sem burocracias, sem surpresas.</span>
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Produtos inspecionados em tempo real</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Envio em 24h garantido</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://lei.sanyudropshipping.com/member/#/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="group shadow-2xl shadow-sanyu-blue/30 hover:shadow-sanyu-blue/50 transition-all duration-300">
                  <span className="font-bold">Começar Agora - É Grátis</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-sanyu-blue">1000+</div>
                <div className="text-sm text-muted-foreground">Lojistas Ativos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-sanyu-blue">24h</div>
                <div className="text-sm text-muted-foreground">Envio Rápido</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-sanyu-blue">100%</div>
                <div className="text-sm text-muted-foreground">Inspecionado</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-2">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Equipe Sanyu trabalhando na inspeção e embalagem de produtos" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="text-sm font-semibold text-sanyu-blue">✓ Qualidade Garantida</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="text-sm font-semibold text-sanyu-blue">✓ Envio no Mesmo Dia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;