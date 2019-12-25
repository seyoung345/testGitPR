import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { of } from 'rxjs'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup
  orders = []

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      orders: ['']
    })
    // async orders
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders
      this.form.controls.orders.patchValue(this.orders[0].id)
    })
   }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.value)
  }

  getOrders(): any[] {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' },
    ]
  }

}
