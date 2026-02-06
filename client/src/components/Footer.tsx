import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl">CMG</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Instituição de Pagamento especializada em infraestrutura bancária para operações críticas.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-xs font-bold">
                PCI
              </div>
              <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-xs font-bold">
                ISO
              </div>
              <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-xs font-bold">
                LGPD
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#apis" className="hover:text-primary transition-colors">APIs de Pagamento</a></li>
              <li><a href="#apis" className="hover:text-primary transition-colors">PIX-in e PIX-out</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contas Gerenciadas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dashboard Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@cmginvestimentos.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+55 11 9999-9999</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} CMG Investimentos. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
