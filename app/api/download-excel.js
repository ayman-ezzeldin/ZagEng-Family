// pages/api/download-excel.js
import { Workbook } from 'exceljs';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'data', 'form-data.json');
    const fileData = fs.existsSync(filePath) ? fs.readFileSync(filePath) : '[]';
    const formData = JSON.parse(fileData);

    // Create a new workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Form Data');

    // Add columns
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Address', key: 'address', width: 30 },
      { header: 'Hobbies', key: 'hobbies', width: 30 },
      { header: 'Age', key: 'age', width: 10 },
      { header: 'Gender', key: 'gender', width: 10 },
      { header: 'Bio', key: 'bio', width: 30 },
    ];

    // Add rows
    formData.forEach((data) => {
      worksheet.addRow(data);
    });

    // Write to buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Send the buffer as a file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="form-data.xlsx"');
    res.send(buffer);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
