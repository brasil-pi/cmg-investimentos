import { Badge } from '@/components/ui/badge';

export default function Integrations() {
  const companies = [
    { name: 'Codiguz', url: 'https://codiguz.com.br' },
    { name: 'Hopy', url: 'https://hopy.com.br' },
    { name: 'Shield', url: 'https://shieldtecnologia.com/' },
    { name: 'A55' },
    { name: 'OwemPay' },
    { name: 'Pagar.me' },
    { name: 'Vtex' },
    { name: 'blupay' },
    { name: 'hypercred' },
  ];

  return (
    <section className="py-16 bg-muted/30 border-y">
      <div className="container">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-3">Ecossistema</Badge>
          <h3 className="text-2xl font-bold text-muted-foreground">
            Integrações e Parcerias
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
            {companies.map((company) => {
              const content = (
                <div className="flex items-center justify-center px-6 py-4 rounded-lg bg-card border-2 hover:border-primary/50 transition-all hover:scale-105 min-w-[140px]">
                  <span className="font-bold text-xl text-foreground">
                    {company.name}
                  </span>
                </div>
              );

              return company.url ? (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  {content}
                </a>
              ) : (
                <div key={company.name}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
