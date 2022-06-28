
import { Table } from "./Table";

/**
 * A room is composed of many beds
 */
export class Room {
  private tables: Table[] = [];
  constructor(private id: number) {}

  getNumberOfTables() {
    return this.tables.length;
  }

  getTables() {
    return this.tables;
  }

  addTable(table: Table) {
    return this.tables.push(table);
  }
  
}
