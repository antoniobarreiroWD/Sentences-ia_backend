require("dotenv").config();

const { summarizeText } = require("./textProcessing");

(async () => {
  const text = `
    En el derecho mercantil, los contratos de compraventa internacional de bienes tienen un marco normativo
    regido por la Convención de Viena de 1980. Este instrumento establece las obligaciones de las partes
    contratantes, entre las que destacan el deber del vendedor de entregar bienes conformes al contrato y el 
    del comprador de aceptar y pagar por los bienes en los términos acordados. En caso de incumplimiento,
    se prevén remedios como la reparación, sustitución, reducción del precio, y en casos graves, la resolución
    del contrato. La Convención también aborda temas como la transferencia de riesgo, el pago de intereses y
    las comunicaciones entre las partes. Comprender y aplicar estas normas es esencial para garantizar el
    cumplimiento efectivo de los contratos y minimizar conflictos legales en el comercio internacional.
  `;

  try {
    const summary = await summarizeText(text);
    console.log("Resumen Generado:", summary);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
