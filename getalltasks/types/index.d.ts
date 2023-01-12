import * as express from "express";
declare global {
    namespace Express {
        interface Request {
            user?: any;
            // flash(): { [key: string]: string[] };
            // flash(message: string): string[];
            // flash(type: string, message: string[] | string): number;
            // flash(type: string, format: string, ...args: any[]): number;
            // logout(): void;
        }
    }
}
