const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const serviceAccount = require('./firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function autenticar(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ erro: 'Token ausente' });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido' });
  }
}

app.post('/registrar-rota', autenticar, async (req, res) => {
  const userId = req.user.uid;
  const ref = db.collection('usuarios').doc(userId);
  const doc = await ref.get();

  let rotaUnica;

  if (doc.exists && doc.data().rotaUnica) {
    rotaUnica = doc.data().rotaUnica;
  } else {
    rotaUnica = crypto.randomBytes(12).toString('hex');
    await ref.set({ rotaUnica }, { merge: true });
  }

  res.json({ rota: `/privado/${rotaUnica}` });
});

app.get('/privado/:rota', autenticar, async (req, res) => {
  const rota = req.params.rota;
  const userId = req.user.uid;

  const doc = await db.collection('usuarios').doc(userId).get();

  if (!doc.exists || doc.data().rotaUnica !== rota) {
    return res.status(403).json({ erro: 'Acesso negado' });
  }

  res.json({ mensagem: 'Acesso autorizado à área exclusiva!' });
});

app.listen(3000, () => {
  console.log('Servidor backend rodando em http://localhost:3000');
});