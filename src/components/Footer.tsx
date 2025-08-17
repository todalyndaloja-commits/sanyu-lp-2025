import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src="/lovable-uploads/2a64c963-e316-4f45-9518-ef143cc1ed62.png" alt="Sanyu Logo" className="h-12 w-auto mb-4" />
            <p className="text-white/80 mb-6 max-w-md">
              Especialista em dropshipping da China para o Brasil. 
              Conectamos lojistas com produtos de qualidade, oferecendo 
              transparência, agilidade e suporte completo.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sanyu-blue flex-shrink-0" />
                <div>
                  <div className="font-semibold">Brasil</div>
                  <div className="text-sm text-white/70">Rua Líbero Badaró, 501, Sala 601</div>
                  <div className="text-sm text-white/70">Centro Histórico, São Paulo - SP</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sanyu-blue flex-shrink-0" />
                <div>
                  <div className="font-semibold">China</div>
                  <div className="text-sm text-white/70">411 Jianguo Building</div>
                  <div className="text-sm text-white/70">Aiguo Road, Luohu District</div>
                  <div className="text-sm text-white/70">Shenzhen City, Guangdong Province, 311100</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="https://wa.me/5511919532904" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-sm">WhatsApp</div>
                  <div className="text-xs text-white/60">+55 11 91953-2904</div>
                </div>
              </a>
              
              <a href="mailto:sanyudropshipping@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-sanyu-blue" />
                <div>
                  <div className="text-sm">E-mail</div>
                  <div className="text-xs text-white/60">sanyudropshipping@gmail.com</div>
                </div>
              </a>
              
              <a href="tel:+5511919532904" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-sanyu-blue" />
                <div>
                  <div className="text-sm">Telefone</div>
                  <div className="text-xs text-white/60">+55 11 91953-2904</div>
                </div>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#inicio" className="block text-white/80 hover:text-white transition-colors text-sm">
                Início
              </a>
              <a href="#sobre" className="block text-white/80 hover:text-white transition-colors text-sm">
                Sobre a Sanyu
              </a>
              <a href="#como-funciona" className="block text-white/80 hover:text-white transition-colors text-sm">
                Como Funciona
              </a>
              <a href="#diferenciais" className="block text-white/80 hover:text-white transition-colors text-sm">
                Diferenciais
              </a>
              <a href="#depoimentos" className="block text-white/80 hover:text-white transition-colors text-sm">
                Depoimentos
              </a>
              <a href="#faq" className="block text-white/80 hover:text-white transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col items-center gap-6">
            <div className="text-sm text-white/60">
              © {currentYear} Sanyu. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/sanyudropbr/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="Instagram @sanyudropbr">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#833AB4"}} />
                        <stop offset="50%" style={{stopColor: "#E1306C"}} />
                        <stop offset="100%" style={{stopColor: "#F77737"}} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61551984146005" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="Facebook">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@sanyudropshipping" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="TikTok @sanyudropshipping">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#FF0050"}} />
                        <stop offset="100%" style={{stopColor: "#000000"}} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#tiktok-gradient)" d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.372-1.951-1.372-3.338h-2.386v14.821c0 2.623-1.312 4.947-3.321 6.365a7.04 7.04 0 0 1-3.321.832c-3.906 0-7.071-3.165-7.071-7.071S4.435 8.876 8.341 8.876c.63 0 1.238.083 1.815.237v-2.474a9.448 9.448 0 0 0-1.815-.175C3.735 6.464 0 10.199 0 14.805s3.735 8.34 8.341 8.34c4.606 0 8.34-3.734 8.34-8.34V9.188a9.953 9.953 0 0 0 5.319 1.513V8.315a6.165 6.165 0 0 1-2.679-2.753Z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@sanyudropshipping" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="YouTube @sanyudropshipping">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex gap-4 text-xs text-white/60">
                <a href="#" className="hover:text-white/80 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;