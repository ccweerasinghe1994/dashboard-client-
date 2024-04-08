type expenseCategory = "salaries" | "supplies" | "services";

export interface IKPI {
  _id: string;
  id: string;
  __V: number;
  createAt: string;
  updatedAt: string;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  monthlyData: IMonthlyExpenses[];
  dailyData: IDailyExpenses[];
  expensesByCategory: Map<expenseCategory, string>;
}

interface IMonthlyExpenses {
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

interface IDailyExpenses {
  date: string;
  revenue: number;
  expenses: number;
}

export interface IProductResponse {
  _id: string;
  id: string;
  __V: number;
  createAt: string;
  updatedAt: string;
  price: number;
  expense: number;
  transactions: [string];
}
