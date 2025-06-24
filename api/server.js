const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

let pedidos = [];

// Criar pedido
app.post('/pedido', (req, res) => {
  const { cpf, itens, total } = req.body;
  if (!cpf || !itens || total <= 0) {
    return res.status(400).json({ erro: 'Dados inválidos' });
  }
  const pedido = { id: pedidos.length + 1, cpf, itens, total };
  pedidos.push(pedido);
  res.status(201).json(pedido);
});

// Listar todos os pedidos
app.get('/pedidos', (req, res) => {
  res.json(pedidos);
});

// Consultar pedido por ID
app.get('/pedido/:id', (req, res) => {
  const pedido = pedidos.find(p => p.id == req.params.id);
  if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });
  res.json(pedido);
});

// Atualizar pedido por ID
app.put('/pedido/:id', (req, res) => {
  const { cpf, itens, total } = req.body;
  const pedido = pedidos.find(p => p.id == req.params.id);

  if (!pedido) return res.status(404).json({ erro: 'Pedido não encontrado' });

  if (!cpf || !itens || total <= 0) {
    return res.status(400).json({ erro: 'Dados inválidos' });
  }

  pedido.cpf = cpf;
  pedido.itens = itens;
  pedido.total = total;

  res.json({ mensagem: 'Pedido atualizado com sucesso', pedido });
});

// Deletar pedido por ID
app.delete('/pedido/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = pedidos.findIndex(p => p.id === id);

  if (index === -1) return res.status(404).json({ erro: 'Pedido não encontrado' });

  pedidos.splice(index, 1);
  res.json({ mensagem: 'Pedido deletado com sucesso' });
});

// Deletar todos os pedidos
app.delete('/pedidos', (req, res) => {
  pedidos = [];
  res.json({ mensagem: 'Todos os pedidos foram removidos' });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});