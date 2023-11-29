import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveForm';
  bookDetail!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.bookDetail=this.formBuilder.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      publication: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      genre: ['', Validators.required],
      publishedDate: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  onSubmit = ()=>{
    console.log(this.bookDetail)
  }

}
