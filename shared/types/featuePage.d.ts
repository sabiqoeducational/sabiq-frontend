export interface feature {
  title: string;
  number: string;
}

export interface IFeature {
  title: string;
  description: string;
  mainImage: string;
  card1: string | null;
  card2: string | null;
  extraImage: string | null;
  hasFloating: boolean;
  reverse: boolean;
}

export interface FeatureProps {
  data: IFeature;
  index: number;
}

export interface featureCard {
  id:number,
  title:string,
  description:string
}

export interface JobCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface pricingPlan {
  id: number;
  title: string;
  icongURL: string;
} 