import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    results: [
      { id: 1, label: 'Result 1' },
      { id: 2, label: 'Result 2' },
    ],
  });
});

export default router;
