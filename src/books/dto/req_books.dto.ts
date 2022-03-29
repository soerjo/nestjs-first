import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { BooksDto } from './books.dto';

export class RequestBooksDto implements BooksDto {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  author: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  year: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  maxYear: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  minYear: number;
}
