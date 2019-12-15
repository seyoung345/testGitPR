import { Injectable, HttpException } from '@nestjs/common'
import { BOOKS } from '../../mocks/book.mock'

@Injectable()
export class BookService {
  books = BOOKS
  /** 책 목록 가져오기 **/
  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books)
    })
  }
  /** 책 한권 가져오기 **/
  getBook(bookID): Promise<any> {
    const id = Number(bookID)
    return new Promise(resolve => {
      // tslint:disable-next-line:no-shadowed-variable
      const book = this.books.find(book => book.id === id)
      if (!book) {
          throw new HttpException('Book does not exist!', 404)
        }
      resolve(book)
    })
  }
  /** 책 추가 **/
  addBook(book): Promise<any> {
    return new Promise(resolve => {
        this.books.push(book)
        resolve(this.books)
    })
  }
  /** 책 삭제 **/
  deleteBook(bookID): Promise<any> {
    const id = Number(bookID)
    return new Promise(resolve => {
      const index = this.books.findIndex(book => book.id === id)
      if (index === -1) {
        throw new HttpException('Book does not exist!', 404)
      }
      this.books.splice(index, 1)
      resolve(this.books)
    })
  }
}
