import { Check, Factory, Award, Clock, Palette, DollarSign, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Acesso a milhares de fábricas na China",
    description: "Conexão direta com os melhores fornecedores e fábricas chinesas"
  },
  {
    icon: Award,
    title: "Produtos de alta qualidade com preço competitivo",
    description: "Seleção rigorosa para garantir o melhor custo-benefício"
  },
  {
    icon: Check,
    title: "Equipe própria na China para inspeção",
    description: "Profissionais dedicados para inspeção e fotos reais dos produtos"
  },
  {
    icon: Clock,
    title: "Envio no mesmo dia",
    description: "Agilidade máxima no processamento e envio dos pedidos"
  },
  {
    icon: DollarSign,
    title: "Sem taxa mensal, sem intermediários",
    description: "Transparência total: você paga apenas pelo produto"
  },
  {
    icon: HeartHandshake,
    title: "Suporte 100% humano no Brasil",
    description: "Atendimento personalizado com nossa equipe brasileira"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sanyu-blue/10 to-sanyu-blue-dark/10 rounded-full border border-sanyu-blue/20 mb-6">
            <span className="text-sm font-bold text-sanyu-blue">💎 DIFERENCIAIS EXCLUSIVOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            A <span className="bg-gradient-to-r from-sanyu-blue to-sanyu-blue-dark bg-clip-text text-transparent">diferença real</span> está nos detalhes
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Enquanto outros prometem, nós <span className="font-semibold text-foreground">entregamos resultados.</span> 
            Veja por que mais de 1000 lojistas escolheram a Sanyu como parceira estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white via-white to-sanyu-blue-light/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-sanyu-blue/10 h-full relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sanyu-blue/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-sanyu-blue to-sanyu-blue-dark p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 mb-6 w-fit shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <h3 className="font-bold text-lg text-foreground leading-tight">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sanyu-blue-light to-sanyu-gray-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Tudo isso para fazer seu negócio <span className="text-sanyu-blue">crescer</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não é apenas dropshipping, é uma parceria estratégica para o seu sucesso. 
              Oferecemos todas as ferramentas e suporte que você precisa para escalar suas vendas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;