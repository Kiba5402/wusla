import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'
import sanitizeHtml from 'sanitize-html';

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name;
    const email = sanitizeHtml(formData.email, { allowedTags: [], allowedAttributes: {} });
    const tel = sanitizeHtml(formData.phone, { allowedTags: [], allowedAttributes: {} });
    const text = sanitizeHtml(formData.message, { allowedTags: [], allowedAttributes: {} });
    const subject = 'Contacto por pagina web'
    const message = `Un cliente se ha contactado por medio de la pagina de contacto del sitio web, y ha enviado el siguiente mensaje:
    
    ${text}
    
    ----------------------------------------------------------------------
        De: ${name} • email: ${email} • tel: ${tel}
    `
    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
      /[\r\n]/g,
      '<br>'
    )}</div>`

    // sendmail
    let mailTransporter = nodemailer.createTransport({
      host: 'mail.wuslam2m.com',
      port: 465,
      auth: {
        user: import.meta.env.MAIL_USER,
        pass: import.meta.env.MAIL_PASS 
      }
    })

    let mailDetails = {
      from: '"Contacto por pagina web" <formcontacto@wuslam2m.com>',
      to: "formcontacto@wuslam2m.com",
      subject: subject,
      html: html,
    }

    let mailresult;

    try {
      mailresult = await mailTransporter.sendMail(mailDetails);
    } catch (error) {
      console.log('******* Error: ', error)
    }
    // return endpoint response
    return new Response(JSON.stringify({ 'Message sent: %s': mailresult?.messageId }), {
      status: 200,
    })
  }

  return new Response(null, { status: 400 });
}