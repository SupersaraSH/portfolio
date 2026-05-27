import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.AWS_REGION });

export async function handler(event) {
  // El navegador hace una petición OPTIONS antes del POST real (CORS preflight).
  // Hay que responderla correctamente o el navegador bloquea la petición.
  if (event.requestContext?.http?.method === "OPTIONS") {
    return corsResponse(200, "");
  }

  try {
    const body = JSON.parse(event.body ?? "{}");
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return corsResponse(400, JSON.stringify({ error: "Faltan campos obligatorios" }));
    }

    await ses.send(
      new SendEmailCommand({
        // Enviamos desde la misma dirección que recibe (SES solo permite
        // enviar desde emails/dominios verificados)
        Source: process.env.CONTACT_EMAIL,
        Destination: {
          ToAddresses: [process.env.CONTACT_EMAIL],
        },
        Message: {
          Subject: {
            Data: `Portfolio — mensaje de ${nombre}`,
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
              Charset: "UTF-8",
            },
          },
        },
        // ReplyTo: el email de quien escribe, para que Sara pueda responder
        // directamente sin copiar y pegar la dirección
        ReplyToAddresses: [email],
      })
    );

    return corsResponse(200, JSON.stringify({ ok: true }));
  } catch (err) {
    console.error("Error al enviar email:", err);
    return corsResponse(500, JSON.stringify({ error: "Error interno del servidor" }));
  }
}

function corsResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      // Permite peticiones desde cualquier origen (necesario porque el portfolio
      // está en un dominio distinto al de la Lambda)
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    body,
  };
}
