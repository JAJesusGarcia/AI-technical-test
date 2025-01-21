export type AnalysisStatus = 'completed' | 'processing' | 'failed';

export type Analysis = {
  id: string;
  patientName: string;
  type: 'KI67' | 'HER2' | 'ESTROGEN' | 'PROGESTERONE';
  cancer: 'breast' | 'prostate';
  status: AnalysisStatus;
  result: string;
  confidence: number;
  date: string;
  images: {
    original: string;
    processed: string;
  };
};
