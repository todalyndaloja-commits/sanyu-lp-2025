import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
const CTASection = () => {
  return <section className="py-20 bg-gradient-to-r from-sanyu-blue to-sanyu-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 mb-6">
            <span className="text-sm font-bold text-white">⚡ OFERTA LIMITADA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="block">Sua loja merece ser</span>
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              EXTRAORDINÁRIA
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-white">Chega de produtos com defeito, entregas atrasadas e clientes insatisfeitos.</span>
            <br />
            Junte-se aos mais de 1000 lojistas que já descobriram o segredo para vender com 
            <span className="font-semibold text-white"> qualidade profissional e escala real.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://wa.me/5511919532904"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="xl" className="bg-white text-sanyu-blue border-white hover:bg-sanyu-blue hover:text-white group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero trabalhar com a Sanyu
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            
            <a 
              href="https://wa.me/5511919532904"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="xl" className="border-white hover:bg-white hover:text-sanyu-blue text-[0BC2E1] text-[#0bc2e1]">
                Solicitar Orçamento Gratuito
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm">
                Resposta em até 2 horas
              </p>
               <a href="https://wa.me/5511919532904" className="text-white/90 hover:text-white text-sm underline" target="_blank" rel="noopener noreferrer">
                +55 11 91953-2904
              </a>
            </div>
            
            <div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-white/80 text-sm">
                Resposta em até 4 horas
              </p>
              <a href="mailto:sanyudropshipping@gmail.com" className="text-white/90 hover:text-white text-sm underline">
                sanyudropshipping@gmail.com
              </a>
            </div>
            
            <div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Escritórios</h3>
              <p className="text-white/80 text-sm">
                Brasil e China
              </p>
              <p className="text-white/90 text-sm">
                São Paulo • Shenzhen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;