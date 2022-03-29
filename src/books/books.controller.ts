import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDto } from './dto/books.dto';
import { PutBooksDto } from './dto/put_books.dto';
import { RequestBooksDto } from './dto/req_books.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBook(@Query() filter: RequestBooksDto) {
    return await this.bookService.getBooks(filter);
  }

  @Post()
  async createBook(@Body() payload: BooksDto) {
    return await this.bookService.createBook(payload);
  }

  @Put('/:id')
  async updateBook(@Body() payload: PutBooksDto, @Param('id') id: string) {
    return await this.bookService.updateBook(id, payload);
  }

  @Delete('/:id')
  async deleteBook(@Param('id') id: string) {
    return await this.bookService.deleteBook(id);
  }
}
