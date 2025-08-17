import { Send, Search, CheckCircle, Package, Truck } from "lucide-react";
const steps = [{
  icon: Send,
  title: "Você envia o pedido",
  description: "Nos envie as especificações do produto que seu cliente deseja",
  color: "bg-blue-500"
}, {
  icon: Search,
  title: "Localizamos o melhor fornecedor",
  description: "Nossa equipe na China encontra o fornecedor ideal com melhor preço e qualidade",
  color: "bg-purple-500"
}, {
  icon: CheckCircle,
  title: "Inspecionamos e testamos",
  description: "Realizamos inspeção rigorosa e testes de qualidade em todos os produtos",
  color: "bg-green-500"
}, {
  icon: Package,
  title: "Embalamos com segurança",
  description: "Embalagem personalizada com sua marca, brindes e papelaria exclusiva",
  color: "bg-orange-500"
}, {
  icon: Truck,
  title: "Enviamos com rastreio",
  description: "Entrega rápida direto ao seu cliente com código de rastreamento completo",
  color: "bg-red-500"
}];
const HowItWorksSection = () => {
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sanyu-blue/10 to-sanyu-blue-dark/10 rounded-full border border-sanyu-blue/20 mb-6">
            <span className="text-sm font-bold text-sanyu-blue">⚙️ PROCESSO OTIMIZADO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sanyu-blue to-sanyu-blue-dark bg-clip-text text-transparent">Simples</span> para você, 
            <span className="text-foreground"> complexo</span> para nós
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Enquanto você foca em <span className="font-semibold text-foreground">vender e crescer, </span> 
            nossa equipe cuida de todos os detalhes técnicos e operacionais. 
            <span className="text-sanyu-blue font-medium">É dropshipping sem as complicações.</span>
          </p>
        </div>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-8 items-start">
              {steps.map((step, index) => {
              const IconComponent = step.icon;
              return <div key={index} className="text-center relative">
                    {/* Connection Line */}
                    {index < steps.length - 1 && <div className="absolute top-12 left-1/2 w-full h-0.5 bg-sanyu-blue/20 -translate-y-1/2 z-0"></div>}
                    
                    <div className="relative z-10">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ backgroundColor: '#0BC2E1' }}>
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-sm font-bold text-sanyu-blue mb-2">
                          PASSO {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
            const IconComponent = step.icon;
            return <div key={index} className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0" style={{ backgroundColor: '#0BC2E1' }}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                    <div className="text-sm font-bold text-sanyu-blue mb-2">
                      PASSO {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Simples assim! Todo o processo é acompanhado em tempo real.
          </p>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;