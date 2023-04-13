// const express = require('express')
// const app = express()
// const cors = require('cors')

// app.use(cors())
import fetch from "node-fetch";

//['542494671799','541162920404','541130895432','542214817486',]
const telefonos = ['542494671799','541162920404','541130895432','542214817486'];

for (let i = 0; i < telefonos.length; i++) {
  console.log(telefonos[i]);
  var botId = "115810888147278";
  var phoneNbr = telefonos[i];
  var bearerToken =
    "EAADZAWaZCWBNIBAGfyxZC6Mu557Yxj0IyinjH3aWVRqIZAaxLE7xZCATZCASn8toqrDELwLVUF7qvuGEFaQbF4n3Y1m4bpVaQuTvbMK0uuQHdscdgftatiCrV5UqnnkSa8yQHMKgTQsHsbdVLtTJSVIHtMXk4OPdTtqshGx3cgZAWN7RCtOtB8G7oOtbsxxeZCheZCWtkvNkudVG6nWH1KZA40arFFIoqrW9cZD";
  
  var url = "https://graph.facebook.com/v16.0/" + botId + "/messages";
  var data = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: phoneNbr,
    type: "template",
    template: {
      name: "lalo_sumate",
      language: {
        code: "es_AR",
      },
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "image",
              image: {
                link: "https://www.el1digital.com.ar/wp-content/uploads/2022/06/lalo-lalo.jpg",
              },
            },
          ],
        },
      ],
    },
  };
  
  const postReq = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + bearerToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    json: true,
  };
  
  async function enviarMensaje() {
    try {
      const response = await fetch(url, postReq);
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  
  console.log(await enviarMensaje());



}
