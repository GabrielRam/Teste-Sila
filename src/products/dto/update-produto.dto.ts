import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-produto.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}