import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common'
import { BookService } from './book.service'
import { CreateBookDTO } from './dto/create-book.dto'

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) { }

    @Get()
    async getBooks() {
      const books = await this.bookService.getBooks()
      return books
    }

    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
      const book = await this.bookService.getBook(bookID)
      return book
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
      const book = await this.bookService.addBook(createBookDTO)
      return book
    }

    @Delete()
    async deleteBook(@Query() query) {
      const books = await this.bookService.deleteBook(query.bookID)
      return books
    }
}
