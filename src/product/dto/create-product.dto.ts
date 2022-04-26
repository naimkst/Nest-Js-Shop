import { IsBoolean, IsNotEmpty, IsNumber, isString, IsString, MinLength } from "class-validator";

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;

  @IsBoolean()
  published: boolean;

  @IsNumber()
  userId: number;
}
