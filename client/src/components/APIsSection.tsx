import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRightLeft, ArrowUpRight, UserPlus, Wallet, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface APIEndpoint {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  method: string;
  endpoint: string;
  codeExample: string;
  features: string[];
}

const apis: APIEndpoint[] = [
  {
    id: 'pix-in',
    title: 'PIX-in',
    description: 'Receba pagamentos PIX em tempo real com webhook instantâneo',
    icon: <ArrowRightLeft className="w-6 h-6" />,
    method: 'POST',
    endpoint: '/v1/pix/receive',
    codeExample: `curl -X POST https://api.cmginvestimentos.com/v1/pix/receive \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "account_id": "acc_abc123",
    "amount": 150.00,
    "description": "Pagamento pedido #1234",
    "webhook_url": "https://seu-sistema.com/webhook"
  }'`,
    features: ['Webhook em tempo real', 'QR Code dinâmico', 'Conciliação automática', 'Split de pagamento']
  },
  {
    id: 'pix-out',
    title: 'PIX-out',
    description: 'Envie transferências PIX com aprovação em segundos',
    icon: <ArrowUpRight className="w-6 h-6" />,
    method: 'POST',
    endpoint: '/v1/pix/send',
    codeExample: `curl -X POST https://api.cmginvestimentos.com/v1/pix/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "account_id": "acc_abc123",
    "recipient_key": "email@exemplo.com",
    "amount": 500.00,
    "description": "Pagamento fornecedor"
  }'`,
    features: ['Processamento instantâneo', 'Validação de chave PIX', 'Agendamento de transferências', 'Lote de pagamentos']
  },
  {
    id: 'accounts',
    title: 'Criação de Contas',
    description: 'Crie contas bancárias gerenciadas para seus clientes',
    icon: <UserPlus className="w-6 h-6" />,
    method: 'POST',
    endpoint: '/v1/accounts/create',
    codeExample: `curl -X POST https://api.cmginvestimentos.com/v1/accounts/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "holder_name": "João Silva",
    "holder_document": "12345678900",
    "account_type": "payment",
    "metadata": {
      "customer_id": "cust_xyz789"
    }
  }'`,
    features: ['Onboarding digital', 'KYC automatizado', 'Múltiplas contas por CPF/CNPJ', 'Gestão de limites']
  },
  {
    id: 'balance',
    title: 'Gerenciamento de Saldo',
    description: 'Consulte e gerencie saldos em tempo real',
    icon: <Wallet className="w-6 h-6" />,
    method: 'GET',
    endpoint: '/v1/accounts/:id/balance',
    codeExample: `curl -X GET https://api.cmginvestimentos.com/v1/accounts/acc_abc123/balance \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Resposta:
{
  "account_id": "acc_abc123",
  "available_balance": 15000.00,
  "blocked_balance": 500.00,
  "currency": "BRL",
  "updated_at": "2026-02-05T18:30:00Z"
}`,
    features: ['Consulta em tempo real', 'Histórico de transações', 'Bloqueio preventivo', 'Relatórios detalhados']
  }
];

export default function APIsSection() {
  const [selectedAPI, setSelectedAPI] = useState<string>('pix-in');
  const [copiedCode, setCopiedCode] = useState(false);

  const currentAPI = apis.find(api => api.id === selectedAPI) || apis[0];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentAPI.codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="apis" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">APIs RESTful</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Infraestrutura Completa de Pagamentos
          </h2>
          <p className="text-xl text-muted-foreground">
            Integre em minutos com nossas APIs robustas e documentação técnica detalhada. Suporte dedicado para implementação crítica.
          </p>
        </div>

        <Tabs value={selectedAPI} onValueChange={setSelectedAPI} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto">
            {apis.map(api => (
              <TabsTrigger 
                key={api.id} 
                value={api.id}
                className="flex flex-col items-center gap-2 py-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {api.icon}
                </div>
                <span className="font-semibold">{api.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {apis.map(api => (
            <TabsContent key={api.id} value={api.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{api.title}</CardTitle>
                        <CardDescription className="text-base">{api.description}</CardDescription>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {api.icon}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Endpoint</h4>
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 font-mono text-sm">
                        <Badge variant="secondary" className="font-bold">{api.method}</Badge>
                        <span className="text-foreground">{api.endpoint}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Funcionalidades</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {api.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-card/50">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Exemplo de Requisição</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyToClipboard}
                      className="gap-2"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 rounded-lg bg-background/80 overflow-x-auto">
                      <code className="text-sm font-mono text-foreground/90 whitespace-pre">
                        {api.codeExample}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            Acessar Documentação Completa
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
