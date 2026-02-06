import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Package, TrendingUp, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const useCases = [
  {
    icon: <Package className="w-8 h-8" />,
    title: 'E-commerce',
    description: 'Infraestrutura completa para operações de alto volume',
    benefits: [
      'Integração nativa com Vtex e principais plataformas',
      'Múltiplas contas para segmentar operações',
      'Processamento instantâneo de PIX',
      'Conciliação automática de recebimentos',
      'Split de pagamento para parceiros',
      'Gestão de chargebacks e disputas'
    ],
    metrics: [
      { label: 'Uptime garantido', value: '99.9%' },
      { label: 'Tempo de aprovação', value: '< 2s' }
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Operadores Financeiros',
    description: 'Discrição e agilidade para operações críticas',
    benefits: [
      'Contas de securitizadoras com compliance',
      'Suporte para mesas OTC de criptomoedas',
      'Liquidação rápida de operações',
      'Integração com exchanges e corretoras',
      'Relatórios detalhados para auditoria',
      'Gerente dedicado 24/7'
    ],
    metrics: [
      { label: 'Uptime garantido', value: '99.9%' },
      { label: 'Suporte técnico', value: '24/7' }
    ]
  }
];

export default function UseCases() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Solicitação enviada! Nossa equipe entrará em contato em até 24 horas.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Casos de Uso</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Especializadas para Cada Operação
          </h2>
          <p className="text-xl text-muted-foreground">
            Infraestrutura adaptada às necessidades específicas de e-commerce e operadores financeiros de alto volume.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="border-border/50 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent pb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                <CardDescription className="text-base">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 mb-6">
                  {useCase.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
                  {useCase.metrics.map((metric, midx) => (
                    <div key={midx} className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="contact" className="max-w-4xl mx-auto">
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <CardTitle className="text-3xl mb-3">Solicite Acesso à Plataforma</CardTitle>
              <CardDescription className="text-base">
                Preencha o formulário abaixo e nossa equipe comercial entrará em contato para configurar sua infraestrutura personalizada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Conte-nos sobre sua operação</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva brevemente seu volume de transações, necessidades específicas e objetivos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" size="lg" className="flex-1 gap-2">
                    Solicitar Acesso
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="gap-2"
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  >
                    <Zap className="w-5 h-5" />
                    Falar com Gerente
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-4">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade e aceita receber comunicações comerciais.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
