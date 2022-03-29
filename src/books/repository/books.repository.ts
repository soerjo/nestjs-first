import { EntityRepository, Repository, TypeORMError } from 'typeorm';
import { RequestBooksDto } from '../dto/req_books.dto';
import { Books, IBooks } from '../entity/books.entity';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@EntityRepository(Books)
export class BooksRepository extends Repository<Books> {
  //get books Query
  async getBooks(filter: RequestBooksDto) {
    const { id, title, author, category, year, minYear, maxYear } = filter;
    const query = this.createQueryBuilder('books');

    if (id) query.where(`books.id = :id`, { id });
    if (title) query.where(`books.title like :title`, { title: `%${title}%` });
    if (author)
      query.where(`books.author like :author`, { author: `%${author}%` });
    if (category)
      query.where(`books.category like :category`, {
        category: `%${category}%`,
      });
    if (year) query.where(`books.year = :year`, { year });
    if (minYear) query.where(`books.year >= :minYear`, { minYear });
    if (maxYear) query.where(`books.year <= :maxYear`, { maxYear });
    try {
      return await query.getMany();
    } catch (error) {
      throw new InternalServerErrorException(error.massage);
    }
  }

  //create book query
  async createBooks(payload: IBooks) {
    try {
      return await this.create(payload).save();
    } catch (error) {
      throw new InternalServerErrorException(error.massage);
    }
  }

  //update book query
  async updateBook(payload: IBooks) {
    try {
      return await this.save(payload);
    } catch (error) {
      throw new InternalServerErrorException(error.massage);
    }
  }

  async deleteBook(id: string) {
    const query = this.createQueryBuilder('books');
    try {
      await query.delete().where('books.id = :id', { id }).execute();
    } catch (error) {
      if (error instanceof TypeORMError) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException(error.massage);
    }
  }
}
