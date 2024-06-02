// pages/api/submit-form.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    const filePath = path.join(process.cwd(), 'data', 'form-data.json');

    try {
      const fileData = fs.existsSync(filePath) ? fs.readFileSync(filePath) : '[]';
      const jsonData = JSON.parse(fileData);

      jsonData.push(formData);

      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

      res.status(200).json({ message: 'Form data received and saved.' });
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
