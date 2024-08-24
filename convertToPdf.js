const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Ruta absoluta al archivo index.html
    const filePath = path.resolve('C:/Users/evo_l/Desktop/CV/index.html');
    const fileUrl = `file://${filePath}`;

    // Cargar la página con todos los recursos
    await page.goto(fileUrl, { waitUntil: 'load' });

    // Generar el PDF con dimensiones personalizadas
    await page.pdf({
        path: 'C:/Users/evo_l/Desktop/CV/resume.pdf',
        width: '17in',  // Ancho personalizado (puedes ajustarlo)
        height: '13in', // Alto (puedes ajustarlo según tus necesidades)
        printBackground: true // Incluye fondos y colores de fondo del CSS
    });

    await browser.close();
    console.log('PDF generado exitosamente');
})();
