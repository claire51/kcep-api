import { Injectable, Logger, BadRequestException } from '@nestjs/common';
const ldapClient = require('simple-ldap-client');

@Injectable()
export class AuthService {
  constructor(
  ) {}

  async ldap(upn: string, password: string) {
    const ldap = new ldapClient(
      process.env.LDAP_SERVER_URL,
      `DC=CO-OPBANK,DC=CO.KE`,
    );
    try {
      const ret = await ldap.authenticate({
        upn: `${upn}@${process.env.LDAP_DOMAIN}`,
        password,
      });
      return true;
    } catch (e) {
      Logger.error('ADERRORZ', e.LdapErr);
      if (e.code === 'ENOTFOUND' || e.code === 'ECONNREFUSED') {
        throw new BadRequestException(
          'Could not connect to Active directory. Please try again later',
        );
      } else {
        throw new BadRequestException('Invalid Credentials');
      }
    }
  }

  // tslint:disable-next-line:no-empty
  async logout(userid) {
  }

}
