import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Marina Silva",
  business: "Loja de Eletrônicos",
  content: "Depois que comecei com a Sanyu, meus clientes passaram a elogiar a qualidade da entrega. Nunca mais tive dor de cabeça! A personalização das embalagens fez toda a diferença na experiência do cliente.",
  rating: 5,
  location: "São Paulo, SP"
}, {
  name: "Carlos Mendes",
  business: "E-commerce de Casa e Decoração",
  content: "A equipe da Sanyu é incrível! Eles realmente entendem do negócio e me ajudam a encontrar os melhores produtos. O suporte é excepcional e os preços são competitivos. Meu faturamento triplicou!",
  rating: 5,
  location: "Rio de Janeiro, RJ"
}, {
  name: "Ana Paula Costa",
  business: "Loja de Moda e Acessórios",
  content: "O que mais me impressiona é a transparência. Sem taxas escondidas, inspeção de qualidade e envio rápido. A Sanyu transformou minha forma de trabalhar com dropshipping. Recomendo de olhos fechados!",
  rating: 5,
  location: "Belo Horizonte, MG"
}];
const TestimonialsSection = () => {
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sanyu-blue/10 to-sanyu-blue-dark/10 rounded-full border border-sanyu-blue/20 mb-6">
            <span className="text-sm font-bold text-sanyu-blue">💬 HISTÓRIAS DE SUCESSO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sanyu-blue to-sanyu-blue-dark bg-clip-text text-transparent">Resultados reais</span> de quem já vive disso
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Não são apenas depoimentos, são <span className="font-semibold text-foreground">histórias de transformação. </span> 
            Lojistas que saíram do amadorismo e construíram negócios sólidos e lucrativos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-sanyu-blue p-3 rounded-full shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-sanyu-blue font-medium">{testimonial.business}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>)}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-sanyu-blue mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sanyu-blue mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Lojistas Ativos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sanyu-blue mb-2">50k+</div>
            <div className="text-sm text-muted-foreground">Produtos Entregues</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sanyu-blue mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;