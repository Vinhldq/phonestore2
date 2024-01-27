import { Component } from '@angular/core';
import {SharedModule} from "../../modules/shared.modules";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DocumentData} from "@angular/fire/compat/firestore";
import {FirebaseService} from "../../services/firebase/firebase.service";
@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {
  testValue = new FormControl(true);
  constructor(
    public fbService: FirebaseService
  ) {

  }
  updateForm: FormGroup = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    quantity: new FormControl(''),
  });

  openUpdateDialog = false;

  showUpdateDialog(item: DocumentData) {
    console.log('open');
    this.openUpdateDialog = true;
    this.updateForm.setValue(item);
  }
  update() {
    let item = {
      id: this.updateForm.controls['id'].value,
      ...this.updateForm.value,
    };
    this.fbService.update(item);
    this.updateForm.reset();
    this.openUpdateDialog = false;
  }

  delete(item: DocumentData) {
    this.fbService.delete(item).then();
  }
}
