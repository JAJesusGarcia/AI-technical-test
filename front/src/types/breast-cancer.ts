export type AnalysisType = 'KI67' | 'HER2' | 'ESTROGEN' | 'PROGESTERONE';

// breast-cancer.ts
export type AnalysisResult = {
  id: string;
  type: string;
  originalImage: string;
  processedImage: string;
  values: {
    positiveNuclei: number;
    negativeNuclei: number;
    totalNuclei: number;
    positivePercentage: number;
    confidence: number;
    iaKI67: number;
    iaTotalCells: number;
    iaPositiveCells: number;
    ki67: number;
    wrongKI67: number;
    wrongTotalCells: number;
    wrongPositiveCells: number;
    wrongNegativeCells: number;
  };
  createdAt: Date;
};
