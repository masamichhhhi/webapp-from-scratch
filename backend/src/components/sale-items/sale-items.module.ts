import { Module } from '@nestjs/common';

import { SaleItemsResolver } from './sale-item.resolvers';

@Module({
  providers: [SaleItemsResolver],
})
export class SaleItemsModule {}
