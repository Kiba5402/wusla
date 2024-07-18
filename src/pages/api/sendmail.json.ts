import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'


const emailTo = "mizlagata5402@gmail.com"
const emailToPass = "Bd6ed70cba00c!"
const host = "smtp.gmail.com"

export const POST: APIRoute = async ({ request }) => {
  console.log('request', request)

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const surname = formData.surname
    const email = 'cristian5402@gmail.com'
    const tel = formData.tel
    const subject = formData.subject
    const message = `${formData.message}
    ----------------------------------------------------------------------
    From: ${name} ${surname} • email: ${email} • tel: ${tel}
    `
    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
      /[\r\n]/g,
      '<br>'
    )}</div>`

    //formcontacto@wuslam2m.com
  //CtNU?,v1KT%J

    // sendmail
    let mailTransporter = nodemailer.createTransport({
      host: 'mail.wuslam2m.com',
      port: 465,
      auth: {
          user: 'formcontacto@wuslam2m.com',
          pass: 'CtNU?,v1KT%J'
      }
    })

    let mailDetails = {
      from: email,
      to: emailTo,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: message,
      html,
    }

    let mailresult
    try {
      mailresult = await mailTransporter.sendMail({
        from: '"Contacto por pagina" <formcontacto@wuslam2m.com>', // sender address
        to: "formcontacto@wuslam2m.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      })
    } catch (error) {
      console.log('******* Error: ', error)
    }
    console.log('Message sent: %s', mailresult?.messageId)

    // return endpoint response
    return new Response(JSON.stringify(mailDetails), {
      status: 200,
    })
  }
  return new Response(null, { status: 400 }) // if not a json request
}