import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "A Sanyu tem pedido mínimo?",
    answer: "Não temos pedido mínimo! Você pode começar com apenas um produto. Nosso objetivo é facilitar sua entrada no dropshipping, independente do tamanho do seu negócio."
  },
  {
    question: "Como faço para começar a trabalhar com a Sanyu?",
    answer: "É muito simples! Entre em contato conosco pelo WhatsApp ou formulário, conte sobre seus produtos de interesse, e nossa equipe te acompanhará em todo o processo. Em 24h você já pode estar vendendo."
  },
  {
    question: "Todos os produtos são testados e inspecionados?",
    answer: "Sim! 100% dos produtos passam por nossa rigorosa inspeção de qualidade. Nossa equipe na China testa cada item, tira fotos reais e garante que tudo esteja perfeito antes do envio."
  },
  {
    question: "Como funciona a personalização das embalagens?",
    answer: "Oferecemos personalização completa: sua logo na embalagem, cartões personalizados, brindes exclusivos e papelaria com sua identidade visual. Tudo para fortalecer sua marca junto ao cliente final."
  },
  {
    question: "A Sanyu entrega em todo o Brasil?",
    answer: "Sim! Atendemos todo o território nacional com envio rápido e rastreamento completo. Utilizamos as melhores transportadoras para garantir que seus produtos cheguem com segurança e no prazo."
  },
  {
    question: "Existem taxas escondidas ou mensalidades?",
    answer: "Não! Nossa filosofia é transparência total. Você paga apenas pelo produto, sem taxas ocultas, sem mensalidades, sem surpresas. O preço que cotamos é o preço final."
  },
  {
    question: "Qual o prazo de entrega para o cliente final?",
    answer: "O prazo varia de 7 a 15 dias úteis, dependendo da região. Todos os envios incluem código de rastreamento para que você e seu cliente acompanhem a entrega em tempo real."
  },
  {
    question: "Como é o suporte da Sanyu?",
    answer: "Oferecemos suporte 100% humano, com equipe brasileira especializada. Você pode nos contatar por WhatsApp, e-mail ou telefone. Estamos sempre disponíveis para resolver suas dúvidas e apoiar seu crescimento."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perguntas <span className="text-sanyu-blue">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre como funciona nossa operação e como podemos ajudar seu negócio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-sanyu-blue-light/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-sanyu-blue" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-sanyu-blue" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511919532904" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Falar no WhatsApp
            </a>
            <a 
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sanyu-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-sanyu-blue-dark transition-colors"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;