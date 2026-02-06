import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, FileCheck, Building2, Bitcoin, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Proteção Contra Bloqueios Judiciais',
    description: 'Estrutura de contas segregadas com blindagem patrimonial e proteção jurídica avançada para operações de alto volume.',
    highlight: true
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Contas de Securitizadoras',
    description: 'Infraestrutura especializada para securitizadoras com compliance automatizado e gestão de recebíveis em tempo real.',
    highlight: false
  },
  {
    icon: <Bitcoin className="w-8 h-8" />,
    title: 'Suporte para Mesas OTC',
    description: 'Contas dedicadas para operações OTC de criptomoedas com liquidação rápida e integração com exchanges.',
    highlight: false
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Múltiplas Contas por Titular',
    description: 'Crie quantas contas precisar para o mesmo CPF/CNPJ, ideal para dropshippers e operadores com múltiplos negócios.',
    highlight: false
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Discrição Operacional',
    description: 'Operações com máxima confidencialidade, sem exposição desnecessária de dados sensíveis ou padrões de movimentação.',
    highlight: false
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Gerente Dedicado',
    description: 'Cada conta possui um gerente especializado disponível 24/7 para suporte técnico e operacional.',
    highlight: false
  }
];

const complianceBadges = [
  { name: 'PCI-DSS', description: 'Certificação de Segurança de Dados' },
  { name: 'ISO 27001', description: 'Gestão de Segurança da Informação' },
  { name: 'LGPD', description: 'Conformidade com Lei Geral de Proteção de Dados' },
  { name: 'Bacen', description: 'Regulamentado pelo Banco Central' }
];

export default function ManagedAccounts() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Contas Gerenciadas</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Infraestrutura Blindada para Operações Críticas
          </h2>
          <p className="text-xl text-muted-foreground">
            Contas bancárias estruturadas para proteger seu capital e garantir continuidade operacional, mesmo em cenários adversos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className={`border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                feature.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  feature.highlight 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-muted text-foreground'
                }`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Compliance e Segurança Certificados
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa infraestrutura atende aos mais rigorosos padrões internacionais de segurança e conformidade regulatória.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceBadges.map((badge, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background/80 border border-border/30 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">{badge.name}</div>
                  <div className="text-xs text-muted-foreground">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Criptografia de Ponta a Ponta</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Todas as transações e dados sensíveis são protegidos com criptografia AES-256 em repouso e TLS 1.3 em trânsito. 
                  Autenticação multifator obrigatória e monitoramento 24/7 por equipe especializada em segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
