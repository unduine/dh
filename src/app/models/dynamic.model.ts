export interface DynamicTable {
  columns: DynamicTableCols[];
  rows: DynamicTableRows[];
}

export interface DynamicTableRows {
  id: string | number;
  firstName: string;
  lastName?: string;
  city?: string;
  age?: number;
}

export interface DynamicTableCols {
  name: string;
  val: string;
  color: Colors,
  type: string;
}

// string just in case I missed smth, but should be stricked enum of colors. Same would use for type
type Colors = "black" | "green" | "blue" | "red" | string; 
