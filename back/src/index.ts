import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import authRoutes from './routes/auth';
import imagesRoutes from './routes/images';
import resultsRoutes from './routes/results';
import { swaggerOptions } from './config/swaggerConfig';

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
app.use('/auth', authRoutes);
app.use('/images', imagesRoutes);
app.use('/results', resultsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
