const header = `
<!doctype html>
<html ⚡4email>
    <head>
    <meta charset="utf-8">
    
    <style type="text/css">
        @font-face {
        font-family: 'Timmana';
        font-style: normal;
        font-weight: 400;
        src: local('Timmana'), url(https://fonts.gstatic.com/s/timmana/v3/6xKvdShfL9yK-rvpOmzRKV4KQOI.woff2) format('woff2');
        }

        .contentText{
            margin: 40px auto;
            width: 582px;

        
        }
        .contentText h1{
            font-size: 28px;
        }
        .contentText p{   
            font-size: 18px;
        }
        .contentText h3{
            font-size: 22px;
        }
        .contentText span{
            font-weight: 700;
        }
        .numProtocol {
            margin-top: 40px;
            margin-bottom: 40px;
            text-align: center;
            line-height: 8px;
        }
        .numProtocol h1{
            font-size:xx-large;
        }
        
        .imgHeader{
            text-align: center;
            margin-bottom: 40px;
            margin-top: 40px;
        }
        .assinaturaGeti{
            margin-top: 10px;
        }
        </style>
    </head>

    <body>
        <div class="imgHeader" ”>
            <img src="cid:topImage@email" alt="ImgTopo" srcset="">
        </div>
        <div class="contentText">
            <hr>`;

const footer = `
        <p>Agradecemos pela confiança.</p>

        <p>Atenciosamente,<span> GETI <\></span></p>
        <hr>

        <img src="cid:signature@email" alt="assinatura" class="assinaturaGeti">
    </div>
   </body>
 </html>`;
export function sucessProtocol(protocol: any) {
  return `
        ${header}
        <h1>Prezado(a) ${
          protocol.name.split(" ")[0] +
          " " +
          protocol.name.split(" ")[protocol.name.split(" ").length - 1]
        }</h1>

        <p>Informamos que o protocolo de atendimento foi aberto com sucesso.<br>Abaixo estão os detalhes para sua
            referência:</p>
        <div class="numProtocol">
            <p>Número do Protocolo:</p>
            <h1>${protocol.id}</h1>
        </div>

        <p>Nossa equipe já está ciente e irá acompanhar sua solicitação. Em breve, entraremos em contato com
            atualizações ou com a solução para sua demanda.</p>
              ${footer}

     
`;
}

export function putProtocol(protocol: any, customMessage?: string) {
  return `${header}
        <h1>Prezado(a) ${
  protocol.name.split(" ")[0] +
  " " +
  protocol.name.split(" ")[protocol.name.split(" ").length - 1]
}</h1>

<p>Informamos que o protocolo de atendimento foi encerrado com sucesso.<br>Abaixo estão os detalhes para sua
    referência:</p>
<div class="numProtocol">
    <p>Número do Protocolo:</p>
    <h1>${protocol.id}</h1>
</div>

<p>${customMessage || ""}</p>

<p>Agradecemos por utilizar nossos serviços. Caso tenha mais dúvidas ou precise de assistência, estamos à disposição.</p>
  ${footer}
  `;
}
