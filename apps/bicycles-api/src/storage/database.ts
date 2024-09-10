import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';

export class DatabaseConnector {
    private readonly DATABASE_FILE = './apps/bicycles-api/bicycles-api.db'

    openConnection = async (): Promise<Database> => {
        let db: Database | null = null;
        
        if (!db) {
            db = await open({
                filename: this.DATABASE_FILE,
                driver: sqlite3.Database
            });
        }
    
        return db
    }
}
