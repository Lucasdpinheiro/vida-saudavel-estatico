export interface User {
    id?: number;
    fullName: string;
    birthDay?: Date;
    weight: number;
    height: number;
    sex: string;
    activityLevel: string;
    goal?: Goals;
  }

export interface Goals {
    id?: number;
    hydration?: number;
    weightLoss?: number;
}

export interface HydrationRecord {
    id?: number;
    date: Date;
    user: User;
    waterIntake: number;
}

export interface WeightLossRecord {
    id?: number;
    date: Date;
    user: User;
    currentWeight: number;
}