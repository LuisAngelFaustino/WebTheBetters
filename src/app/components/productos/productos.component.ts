import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ProductosComponent {
  form = new FormGroup({
    nameProduct: new FormControl('',[Validators.required]),
    select: new FormControl('0'),
    startingprice: new FormControl('',[Validators.required]),
    finalprice: new FormControl('',[Validators.required]),
    amount: new FormControl('',[Validators.required, Validators.maxLength(5),Validators.minLength(1), Validators.pattern("^[0-9]+$")]),
    description: new FormControl('',[Validators.required]),
  });

  iconvisible: boolean;
  constructor(
  ) {
    this.iconvisible = true;
  }
  ngOnInit(): void { 
    this.form.get('nameProduct')?.valueChanges
      .subscribe(value => {
        console.log(value);
      });

    this.form.get('select')?.valueChanges
      .subscribe(value => {
        console.log(value);
      });

    this.form.get('agreecheck')?.valueChanges
      .subscribe(value => {
        console.log(value);
      });

    this.form.get('radioForm')?.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }
  EventIconLis(){
    if(this.iconvisible){
      this.iconvisible = false
    }else{
      this.iconvisible = true
    }
  }
  EventaddActivate(){

  }
  Save(event:any){
    console.log(this.form.valid);
    if(this.form.valid){
      console.log(this.form.value);
    }
  }


  get NameProductInvalidInput(){
    return this.form.get('nameProduct')?.touched && this.form.get('nameProduct')?.invalid;
  }
  get startingpriceInvalid(){
    return this.form.get('startingprice')?.touched && this.form.get('startingprice')?.invalid;
  }
  get finalpriceInvalid(){
    return this.form.get('finalprice')?.touched && this.form.get('finalprice')?.invalid;
  }
  get amountInvalid(){
    return this.form.get('Email')?.touched && this.form.get('Email')?.invalid;
  }

  get descriptionInvalid(){
    return this.form.get('description')?.touched && this.form.get('description')?.invalid;
  }

  get SelectValid(){
    return this.form.get('select')?.touched && this.form.get('select')?.value == '0';
  }
  

}
