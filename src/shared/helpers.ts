import { extname } from 'path';
import { UnprocessableEntityException } from '@nestjs/common';
require('dotenv').config;

export const XLCSVFileFilter = (req, file, cb) => {
  if (
    file.mimetype !== 'text/csv' &&
    file.mimetype !== 'application/vnd.ms-excel' &&
    file.mimetype !==
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ) {
    req.fileValidationError = 'Only Excel and CSV Files allowed';
    return cb(new UnprocessableEntityException('Invalid File type'), false);
  }
  cb(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  callback(null, `${new Date().getTime()}-${name}${fileExtName}`);
};

export const getFullURL = function(path) {
  return `${process.env.PORTAL_URL}/${path}`;
};
