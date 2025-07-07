import { app, connectToDatabase } from '../index.js';

export default async function handler(req, res) {
  await connectToDatabase();
  return app(req, res);
}
