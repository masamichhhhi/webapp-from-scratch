import { Resolver, Query } from '@nestjs/graphql';

import { SaleItemModel } from './interfaces/sale-item.model';

@Resolver((of) => SaleItemModel)
export class SaleItemsResolver {
  constructor() {}

  @Query(() => [SaleItemModel], { name: 'saleItems', nullable: true })
  async getSaleItems() {
    return [
      {
        id: 1,
        name: 'iphone',
      },
      {
        id: 2,
        name: 'androind',
      },
    ];
  }
}
