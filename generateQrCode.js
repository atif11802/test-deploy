const QRCode = require("qrcode");
const path = require("path");
const fs = require("fs");

async function generateQRCode(data, outputDir, fileName) {
	// Ensure the output directory exists
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	const outputPath = path.join(outputDir, `${fileName}.png`);

	try {
		await QRCode.toFile(outputPath, data);
		return outputPath;
	} catch (err) {
		throw new Error("Failed to generate QR code: " + err.message);
	}
}

module.exports = generateQRCode;
