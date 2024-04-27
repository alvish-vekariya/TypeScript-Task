import errorHandler from "../handlers/errorHandler";
import PDFDocument from 'pdfkit';
import fs from 'fs';
import cartModel from "../models/CartModel";
import ProfilesModel from "../models/ProfilesModel";
import path from "path";
import { NextFunction, Request, Response } from "express";

const getPDF = async (req:Request, res:Response, next:NextFunction) => {
    const { profileID } = req.body;
    if (!profileID) return res.end('profileID is required!');
    try {
        const doc = new PDFDocument();
    const Data = await cartModel.find({"profileID": profileID});

    // Pipe the PDF to a file
    const pdfPath = path.join(__dirname, "..", "cart pdfs", `${profileID}.pdf`);
    doc.pipe(fs.createWriteStream(pdfPath));

    // Add content to the PDF
    doc.fontSize(16).text(`${profileID}'s cart`, { align: 'center' });
    doc.moveDown();

    // Define table properties
    const tableHeaders = ['Index', 'ProductID', 'Quantity', 'Total'];
    const tableRows = Data.map((item, index) => [index + 1, item.productID, item.quantity, item.total]);

    // Calculate column widths
    const colWidths = [70, 150, 100, 100];
    const tableWidth = colWidths.reduce((acc, width) => acc + width, 0);

    // Set cell padding
    const cellPadding = 5;

    // Function to draw table
    const drawTable = (tableHeaders:any, tableRows:any, colWidths:any, tableWidth:any) => {
        doc.font('Helvetica-Bold');

        // Calculate row heights
        const rowHeights = tableRows.map(row:any => {
            // Calculate height of each cell
            const cellHeights = row.map((cell, i) => {
                const cellWidth = colWidths[i] - (2 * cellPadding);
                return doc.heightOfString(cell.toString(), { width: cellWidth });
            });
            // Ensure all cell heights are valid numbers
            if (cellHeights.some(height => isNaN(height))) {
                return 0; // If any height is NaN, return 0
            }
            // Return maximum cell height plus padding
            return Math.max(...cellHeights) + 2 * cellPadding;
        });

        // Calculate height of header row
        const headerHeight = Math.max(...tableHeaders.map((header, i) => {
            const headerWidth = colWidths[i] - (2 * cellPadding);
            return doc.heightOfString(header.toString(), { width: headerWidth }) + 2 * cellPadding;
        }));

        let y = doc.y + headerHeight;
        const startX = (doc.page.width - tableWidth) / 2;
        const startY = y - headerHeight;

        // Draw table headers
        tableHeaders.forEach((header, i) => {
            doc.rect(startX + colWidths.slice(0, i).reduce((acc, width) => acc + width, 0), startY, colWidths[i], headerHeight).stroke();
            doc.text(header, startX + colWidths.slice(0, i).reduce((acc, width) => acc + width, 0) + cellPadding, startY + cellPadding, { width: colWidths[i] - (2 * cellPadding), align: 'center' });
        });

        // Draw table rows
        doc.font('Helvetica');
        tableRows.forEach((row, rowIndex) => {
            const rowHeight = rowHeights[rowIndex];
            row.forEach((cell, i) => {
                doc.rect(startX + colWidths.slice(0, i).reduce((acc, width) => acc + width, 0), y, colWidths[i], rowHeight).stroke();
                const cellHeight = doc.heightOfString(cell.toString(), { width: colWidths[i] - (2 * cellPadding) });
                const lineHeight = Math.max(cellHeight, rowHeight);
                doc.text(cell.toString(), startX + colWidths.slice(0, i).reduce((acc, width) => acc + width, 0) + cellPadding, y + cellPadding, { width: colWidths[i] - (2 * cellPadding), align: 'center' });
            });
            y += rowHeight;
        });
        
        // Draw bottom border
        doc.rect(startX, startY, tableWidth, y - startY).stroke();
    };

    // Draw the table
    drawTable(tableHeaders, tableRows, colWidths, tableWidth);

    // Finalize the PDF and close the stream
    doc.end();

    return res.end('PDF created!');

    } catch (err:any) {
        return next(new errorHandler(err.message, 500));
    }
}

export default {
    getPDF
}