import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';

export class DatabaseConnector {
    openConnection = async (): Promise<Database> => {
        let db: Database | null = null;
        
        if (!db) {
            db = await open({
                filename: './apps/bicycles-api/bicycles-api.db',
                driver: sqlite3.Database
            });
            
            console.log('Database SQLite connected successfully')
        }
    
        return db
    }
}
