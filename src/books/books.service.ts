import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { BooksDto } from './dto/books.dto';
import { RequestBooksDto } from './dto/req_books.dto';
import { BooksRepository } from './repository/books.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: BooksRepository,
  ) {}

  async getBooks(filter: RequestBooksDto) {
    return await this.booksRepository.getBooks(filter);
  }

  async createBook(payload: BooksDto) {
    const pushData = { ...payload, id: uuidv4() };
    return await this.booksRepository.createBooks(pushData);
  }

  async updateBook(id: string, payload: BooksDto) {
    const updateData = { ...payload, id };
    return await this.booksRepository.updateBook(updateData);
  }

  async deleteBook(id: string) {
    return await this.booksRepository.deleteBook(id);
  }
}
