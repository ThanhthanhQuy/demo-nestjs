import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { fsReadFile } from 'ts-loader/dist/utils';

@Injectable()
export class UploadService {
  upload(file: Express.Multer.File): String {

    if (file.mimetype === 'plain/text') {
      const content = file.buffer.toString('utf-8');
      return content;
    }
    if (file.mimetype === 'image/png') {
      const content = file.buffer.toString('base64');
      return content;
    }
    return 'image';
  }
}
