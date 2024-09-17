import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {}
  getHello(): string {
    return `Hello A Im Leaning Nest JS! This Server = ${this.devConfigService.getDBHOST()} And This Port =   ${this.config.port}`;
  }
}
