import productsImage from "@/assets/sanyu-products.jpg";
import warehouseImage from "@/assets/sanyu-warehouse.jpg";
import packagingImage from "@/assets/sanyu-packaging.jpg";
import heroImage from "@/assets/sanyu-hero-team.jpg";
import julianaImage from "@/assets/team-juliana.jpg";
import victoriaImage from "@/assets/team-victoria.jpg";
import allanImage from "@/assets/team-allan.jpg";
import davidImage from "@/assets/team-david.jpg";
const galleryItems = [{
  image: "/lovable-uploads/0dfa220a-4dec-44dd-b446-e9f3552a7bd1.png",
  title: "Inspeção de Qualidade",
  description: "Cada produto é cuidadosamente inspecionado pela nossa equipe"
}, {
  image: "/lovable-uploads/e5d320fd-ffbb-4420-8c45-c47a28ec3af1.png",
  title: "Embalagens Personalizadas",
  description: "Packaging exclusivo com sua marca e identidade visual"
}, {
  image: "/lovable-uploads/becf5659-cbde-43c9-b5f7-f86cf68af1dc.png",
  title: "Centro de Distribuição",
  description: "Operação moderna e eficiente na China"
}, {
  image: "/lovable-uploads/5c933edc-a304-45b8-8164-6503b460f1c0.png",
  title: "Equipe Especializada",
  description: "Profissionais dedicados ao seu sucesso"
}];
const GallerySection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja nosso <span className="text-sanyu-blue">trabalho</span> de perto
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparência total: conheça nossa operação, equipe e os cuidados que temos com cada produto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-slate-800 bg-[081921]">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            </div>)}
        </div>

        {/* Process Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-sanyu-blue-light rounded-2xl">
            <div className="text-2xl font-bold text-sanyu-blue mb-2">100%</div>
            <div className="font-semibold mb-2">Produtos Inspecionados</div>
            <div className="text-sm text-muted-foreground">Garantia de qualidade em cada item</div>
          </div>
          
          <div className="text-center p-6 bg-sanyu-blue-light rounded-2xl">
            <div className="text-2xl font-bold text-sanyu-blue mb-2">24h</div>
            <div className="font-semibold mb-2">Processamento Rápido</div>
            <div className="text-sm text-muted-foreground">Envio no mesmo dia do pedido</div>
          </div>
          
          <div className="text-center p-6 bg-sanyu-blue-light rounded-2xl">
            <div className="text-2xl font-bold text-sanyu-blue mb-2">∞</div>
            <div className="font-semibold mb-2">Possibilidades de Customização</div>
            <div className="text-sm text-muted-foreground">Personalize como quiser</div>
          </div>
        </div>

        {/* Brazilian Team Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nossa equipe <span className="text-sanyu-blue">brasileira</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Conheça os profissionais que trabalham para o seu sucesso no Brasil
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="/lovable-uploads/3d9cebf4-c39e-4e54-860f-def9a7c0961d.png" alt="Juliana - Equipe Sanyu Brasil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-sanyu-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="font-semibold text-lg">Juliana</h4>
              
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="/lovable-uploads/52d7095c-c3a0-4f89-9548-606c0f86af96.png" alt="Vitória - Equipe Sanyu Brasil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-sanyu-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="font-semibold text-lg">Vitória</h4>
              
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="/lovable-uploads/b5bc9aba-6c16-4d98-aa82-ea57489596f3.png" alt="João Silva - Equipe Sanyu Brasil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-sanyu-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="font-semibold text-lg">João Silva</h4>
              
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="/lovable-uploads/e86c0885-9ad2-4eb0-b633-e9083d33b8dc.png" alt="Carlos Santos - Equipe Sanyu Brasil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-sanyu-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="font-semibold text-lg">Carlos Santos</h4>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GallerySection;