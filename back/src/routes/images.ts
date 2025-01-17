import { Router } from 'express';

const router = Router();

router.post('/upload', (req, res) => {
  res.status(200).json({ message: 'Image uploaded successfully' });
});

export default router;
