import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Plug, Handshake } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    { name: 'Codiguz', url: 'https://codiguz.com.br' },
    { name: 'Hopy', url: 'https://hopy.com.br' },
    { name: 'Shield', url: 'https://shieldtecnologia.com/' },
  ];

  const partners = [
    { name: 'A55', type: 'IP' },
    { name: 'OwemPay', type: 'IP' },
    { name: 'Pagar.me', type: 'IP' },
    { name: 'Vtex', type: 'IP' },
    { name: 'blupay', type: 'IP' },
    { name: 'hypercred', type: 'IP' },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Ecossistema</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Integrações e Parcerias
          </h2>
          <p className="text-lg text-muted-foreground">
            Conecte-se com as principais plataformas do mercado e aproveite nossa rede de instituições de pagamento parceiras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Integrações */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Plug className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Integrações</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Plataformas e sistemas integrados à nossa infraestrutura
              </p>
              <div className="space-y-3">
                {integrations.map((integration) => (
                  <a
                    key={integration.name}
                    href={integration.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-accent transition-colors border group"
                  >
                    <span className="font-semibold text-lg">{integration.name}</span>
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Parcerias com IPs */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Instituições Parceiras</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Rede de instituições de pagamento conectadas
              </p>
              <div className="grid grid-cols-2 gap-3">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-card border hover:border-primary/50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-center">{partner.name}</span>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {partner.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
