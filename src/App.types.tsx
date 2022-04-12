export interface Stock {
    timestamp:any,
    data:StockInfo[]  
  }
  
  export interface StockInfo {
    code: string;
    price: number;
  }
  
  export interface StockHistory {
    code: string;
    rate: number[];
  }