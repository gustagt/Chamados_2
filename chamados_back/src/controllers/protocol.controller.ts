import { NextFunction, Request, Response } from "express";

import ProtocolService from "../service/protocol.service";
import Protocol from "../database/models/protocol.model";
import IProtocol from "../interfaces/IProtocol";
import { respE } from "../utils/resp";
import Mail from "../smtp/config/mail"
import { putProtocol, sucessProtocol } from "../smtp/templates/template";

class ProtocolController {
  private service = new ProtocolService();
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.service.getAll();
      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
  async getId(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.service.getId(req.params.id);
      if(!data) return res.status(200).json({message: "Protocolo não encontrado."});
      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }


  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const form: IProtocol = req.body;

      const { status, data } = await this.service.insert(form);
      res.status(status).json(data);
     
      if(form.email){
        Mail.to = form.email
        Mail.subject = `Chamados Transcon - Abertura de protocolo`
        Mail.message = sucessProtocol(data)
         Mail.sendMail()
      }
  
    } catch (error) {
      next(error);
    }
  }

  async put(req: Request, res: Response, next: NextFunction) {
    try {
      const { data: chamado } = await this.service.getId(req.params.id);
      const {form , message}: {form: IProtocol, message?: string} = req.body;

    

      if (chamado instanceof Protocol) {
        const { status, data } = await this.service.put(chamado, form);

        res.status(status).json(data);
        if(form.email && form.idStatus===3){
          Mail.to = form.email
          Mail.subject = `Chamados Transcon - Finalização de protocolo`
          Mail.message = putProtocol(chamado, message)
          Mail.sendMail()
        }
    
      } else {
        res.status(404).json(respE("Protocolo não encontrado"));
      }

    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { data: chamado } = await this.service.getId(req.params.id);

      if (chamado instanceof Protocol) {
        const { status, data } = await this.service.delete(chamado);
        res.status(status).json(data);
      } else {
        res.status(404).json(respE("Protocolo não encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }


}

export default ProtocolController;
