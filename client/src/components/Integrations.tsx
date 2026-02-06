import { Badge } from '@/components/ui/badge';

export default function Integrations() {
  const companies = [
    { name: 'Codiguz', url: 'https://codiguz.com.br', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/vJMPcnqQFzznyglO.jpg' },
    { name: 'Hopy', url: 'https://hopy.com.br', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/MXBbbZMiiXYUNJoX.jpg' },
    { name: 'Shield', url: 'https://shieldtecnologia.com/', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/kPTSyWVxQnBXjpGP.jpg' },
    { name: 'A55', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/kLdtcAfNeelHwFmy.jpg' },
    { name: 'OwemPay', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/pVhZYsyCygKwDPNO.png' },
    { name: 'Pagar.me', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/nVwhDFULIvJoCbzf.png' },
    { name: 'Vtex', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/rYNfLVnGStwDkBZQ.png' },
    { name: 'blupay', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663132635673/fMLGtPopGrwfSdra.png' },
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
                <div className="flex items-center justify-center px-6 py-4 rounded-lg bg-card border-2 hover:border-primary/50 transition-all hover:scale-105 min-w-[140px] h-[80px]">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      style={{ filter: 'grayscale(100%) brightness(0.8)', transition: 'filter 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'}
                      onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)'}
                    />
                  ) : (
                    <span className="font-bold text-xl text-foreground">
                      {company.name}
                    </span>
                  )}
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
