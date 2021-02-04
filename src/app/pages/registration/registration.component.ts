import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Md5 } from 'ts-md5';
import { SubSink } from 'subsink';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../models/country';
import { PasswordStrengthValidator } from "../../services/password-strength.validators";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers:[ CountriesService ]
})
export class RegistrationComponent implements OnInit {
  selectedPhoneNumber: any = '';
  selectedImageCountry: string;
  selectItem: any = null;
  activePhone: any = true;

  errorMessage: string;
  firstName = new FormControl();
  lastName = new FormControl();
  address = new FormControl();
  country = new FormControl();
  phone = new FormControl();
  email = new FormControl();
  password = new FormControl();
  confirmPassword = new FormControl();
  signupForm: FormGroup;
  subSink = new SubSink();
  countries: ICountry[] = [];
  isDisabled = true;
  compileData: boolean = true;
 
  constructor(
    private formBuilder: FormBuilder, 
    private countriesService: CountriesService) { 
  }

  ngOnInit(): void {
    this.firstName = this.formBuilder.control(null, [ Validators.required ]);
    this.lastName = this.formBuilder.control(null, [ Validators.required ]);
    this.address = this.formBuilder.control(null, [ Validators.required ]);
    this.country = this.formBuilder.control(null, [ Validators.required ]);
    this.phone = this.formBuilder.control(null, [ Validators.required, Validators.minLength(10) ]);
    this.email = this.formBuilder.control(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
    ]);
    this.password = this.formBuilder.control(null, [ Validators.compose ([Validators.required, Validators.minLength(2), Validators.maxLength(6), PasswordStrengthValidator ])]),
    this.confirmPassword = this.formBuilder.control(null, [ Validators.required ])
    this.signupForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      country: this.country,
      phone: this.phone,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }, { 
      // check whether our password and confirm password match
      validator: this.passwordMatchValidator 
    });
    this.activePhone = 'disabled';
    this.getCountry();
  }

  passwordMatchValidator(g: FormGroup) {
    if (g.get('password').value !== g.get('confirmPassword').value) {
      // if they don't match, set an error in our confirmPassword form control
      g.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }

  getCountry(){
    this.subSink.add(this.countriesService.getCountries().subscribe( res => {
      this.countries = (res as any);
    }))
  }
  
  changeCountry(event){
    this.activePhone = false;
    this.selectedPhoneNumber = this.selectItem.callingCodes[0];
    this.selectedImageCountry = this.selectItem.flag;
  }


  onSubmit(signupForm) {
    signupForm.value.password = Md5.hashStr(signupForm.value.password).toString();
    signupForm.value.phone = '+' + this.selectedPhoneNumber + signupForm.value.phone;
    this.compileData = false;
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
