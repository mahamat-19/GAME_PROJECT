import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const RAWG_API_KEY = '2a70e71ae2034005a8d8023f44880be0';

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Game Proxy Server is running');
});
app.get('/games', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

app.get('/genres', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${RAWG_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch genres' });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
