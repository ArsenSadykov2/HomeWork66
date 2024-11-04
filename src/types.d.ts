export interface IFood {
  id: string;
  name: string;
  description: string;
  calories: number;
}

export interface IFoodMutation {
  name: string;
  description: string;
  calories: number;
}

export interface FoodCart {
  dish: IFood;
}
