import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SaleItemModel {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;
}
