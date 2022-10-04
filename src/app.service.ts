import {Controller, Inject, Logger} from '@nestjs/common';
import {PubSub} from "./shared/amqp/amqp.service";

const Request = require('request');
const parser = require('xml2json');

@Controller()
export class AppService {
    constructor(
        private readonly pubsub: PubSub,
    ) {
    }

    async ping() {
        return "pong";
    }

    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
