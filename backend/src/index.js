import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from './config.js';
import { router } from './routes.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/api', router);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unexpected error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(config.port, () => {
  console.log(`Weather service listening on http://localhost:${config.port}`);
});