import { IsBoolean, IsNotEmpty, IsNumber, isString, IsString, MinLength } from "class-validator";

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;

  @IsString()
  price: string;

  @IsString()
  image: string;

  @IsBoolean()
  published: boolean;

  userId: number;
}
