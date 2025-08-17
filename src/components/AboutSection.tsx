import { Users, Globe, Shield, TrendingUp } from "lucide-react";
const AboutSection = () => {
  return <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sanyu-blue/10 to-sanyu-blue-dark/10 rounded-full border border-sanyu-blue/20 mb-6">
            <span className="text-sm font-bold text-sanyu-blue">📦 CONHEÇA A SANYU</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Seus parceiros em</span>
            <br />
            <span className="bg-gradient-to-r from-sanyu-blue to-sanyu-blue-dark bg-clip-text text-transparent">
              dois continentes
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            <span className="font-semibold text-white">Não somos apenas uma empresa de dropshipping. </span> 
            Somos <span className="text-sanyu-blue font-medium">especialistas em conectar mundos:</span> sua visão empreendedora 
            brasileira com a excelência produtiva chinesa. 
            <span className="font-semibold text-white"> Transparência total, sem pegadinhas.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-sanyu-blue-light p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow bg-slate-800">
              <Users className="h-12 w-12 text-sanyu-blue mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Equipe Especializada</h3>
            <p className="text-white/70">
              Profissionais brasileiros e chineses dedicados ao seu sucesso
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-sanyu-blue-light p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow bg-slate-800">
              <Globe className="h-12 w-12 text-sanyu-blue mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Conexão Global</h3>
            <p className="text-white/70">
              Acesso direto a milhares de fábricas e fornecedores na China
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-sanyu-blue-light p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow bg-[1] bg-slate-800">
              <Shield className="h-12 w-12 text-sanyu-blue mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Transparência Total</h3>
            <p className="text-white/70">
              Sem taxas escondidas. Você paga apenas pelo produto
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-sanyu-blue-light p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow bg-slate-800">
              <TrendingUp className="h-12 w-12 text-sanyu-blue mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Resultados Reais</h3>
            <p className="text-white/70">
              Mais de 1000 lojistas ativos com produtos entregues todos os dias
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-2xl p-8 text-center bg-transparent">
          <h3 className="text-2xl font-bold mb-4 text-white">Por que escolher a Sanyu?</h3>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            Entendemos as dores de quem vende online. Por isso, criamos uma solução completa 
            que cuida de todo o processo: desde a busca pelo melhor fornecedor até a entrega 
            no seu cliente final. Você foca nas vendas, nós cuidamos do resto.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;