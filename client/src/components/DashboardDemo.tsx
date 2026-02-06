import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDownLeft, ArrowUpRight, TrendingUp, Activity } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'in' | 'out';
  amount: number;
  description: string;
  status: 'approved' | 'pending' | 'rejected';
  timestamp: Date;
}

const generateTransaction = (): Transaction => {
  // 99% PIX-in, 1% PIX-out
  const type: 'in' | 'out' = Math.random() < 0.99 ? 'in' : 'out';
  
  // 85% aprovado, 10% pendente, 5% rejeitado
  const rand = Math.random() * 100;
  const status: 'approved' | 'pending' | 'rejected' = 
    rand < 85 ? 'approved' : rand < 95 ? 'pending' : 'rejected';
  
  const descriptions = type === 'in' 
    ? ['Pagamento recebido', 'PIX recebido', 'Venda e-commerce', 'Recebimento cliente', 'Pedido Vtex']
    : ['PIX-out fornecedor', 'Transferência saída', 'Pagamento OTC', 'Saque', 'Repasse parceiro'];

  // Ticket médio R$120 (variação realista)
  // 70% entre R$50-150, 20% entre R$15-50, 10% picos R$200-500
  let amount: number;
  const amountRand = Math.random();
  if (amountRand < 0.70) {
    // 70%: R$50-150 (próximo ao ticket médio)
    amount = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
  } else if (amountRand < 0.90) {
    // 20%: R$15-50 (baixo valor)
    amount = Math.floor(Math.random() * (50 - 15 + 1)) + 15;
  } else {
    // 10%: R$200-500 (picos)
    amount = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
  }

  return {
    id: `TXN${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    type,
    amount,
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    status,
    timestamp: new Date()
  };
};

export default function DashboardDemo() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalVolume, setTotalVolume] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);

  useEffect(() => {
    const initialTransactions = Array.from({ length: 5 }, generateTransaction);
    setTransactions(initialTransactions);

    // Função para calcular intervalo baseado no horário
    // Meta: R$5M de VALOR TOTAL por dia com ticket médio R$120
    // = ~41.666 transações/dia = uma a cada ~2 segundos
    const getInterval = () => {
      const hour = new Date().getHours();
      const baseInterval = 2073; // 2073ms (~2 segundos)
      
      // Após 22h até 6h: 20% do fluxo (5x mais lento)
      if (hour >= 22 || hour < 6) {
        return baseInterval * 5; // ~10 segundos
      }
      
      return baseInterval;
    };

    let intervalId: NodeJS.Timeout;

    const scheduleNext = () => {
      const currentInterval = getInterval();
      intervalId = setTimeout(() => {
        const newTransaction = generateTransaction();
        setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]);
        setTotalVolume(prev => prev + newTransaction.amount);
        setTransactionCount(prev => prev + 1);
        scheduleNext(); // Reagenda com novo intervalo
      }, currentInterval);
    };

    scheduleNext();

    return () => clearTimeout(intervalId);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'rejected':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Aprovado';
      case 'pending':
        return 'Pendente';
      case 'rejected':
        return 'Rejeitado';
      default:
        return status;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Dashboard em Tempo Real</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visibilidade Total das Operações
          </h2>
          <p className="text-xl text-muted-foreground">
            Acompanhe cada transação em tempo real com dashboard intuitivo e métricas detalhadas de performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Volume Total
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{formatCurrency(totalVolume)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Últimos 30 segundos
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Transações
              </CardTitle>
              <Activity className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{transactionCount}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Total processadas
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Taxa de Aprovação
              </CardTitle>
              <Activity className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">98.7%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Últimas 24 horas
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Transações Recentes</CardTitle>
              <Badge variant="secondary" className="gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Ao vivo
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((tx, idx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-all"
                  style={{
                    animation: idx === 0 ? 'slideIn 0.5s ease-out' : 'none'
                  }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === 'in' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {tx.type === 'in' ? (
                        <ArrowDownLeft className="w-5 h-5" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-sm">{tx.description}</p>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getStatusColor(tx.status)}`}
                        >
                          {getStatusLabel(tx.status)}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {tx.id} • {formatTime(tx.timestamp)}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`font-bold text-lg ${
                      tx.type === 'in' ? 'text-green-500' : 'text-foreground'
                    }`}>
                      {tx.type === 'in' ? '+' : '-'} {formatCurrency(tx.amount)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
