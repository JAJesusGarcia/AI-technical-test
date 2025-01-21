export type AnalysisType = 'KI67' | 'HER2' | 'ESTROGEN' | 'PROGESTERONE';

export type AnalysisResult = {
  id: string;
  type: AnalysisType;
  originalImage: string;
  processedImage: string;
  values: {
    positiveNuclei: number;
    negativeNuclei: number;
    totalNuclei: number;
    positivePercentage: number;
    confidence: number;
  };
  createdAt: Date;
};
