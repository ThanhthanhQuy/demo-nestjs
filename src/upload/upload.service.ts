import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { fsReadFile } from 'ts-loader/dist/utils';

@Injectable()
export class UploadService {
  upload(file: Express.Multer.File): String {
    if (file.mimetype === 'text/plain') {
      const content = file.buffer.toString('utf-8');
      return content;
    } else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      const content = file.buffer.toString('base64');
      return content;
    } else {
      return 'image';
    }
  }
}
