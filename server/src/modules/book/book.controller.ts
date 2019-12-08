import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common'
import { BookService } from './book.service'
import { CreateBookDTO } from './dto/create-book.dto'

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) { }
    /** 책 목록 가져오기 **/
    @Get('/list')
    async getBooks() {
      const books = await this.bookService.getBooks()
      return books
    }
    /** 책 한권 가져오기 **/
    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
      const book = await this.bookService.getBook(bookID)
      return book
    }
    /** 책 추가 **/
    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
      const book = await this.bookService.addBook(createBookDTO)
      return book
    }
    /** 책 삭제 **/
    @Delete()
    async deleteBook(@Query() query) {
      const books = await this.bookService.deleteBook(query.bookID)
      return books
    }
}
