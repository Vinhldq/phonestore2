import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { Product } from '../../models/product.models';
import {FirebaseService} from "../../services/firebase/firebase.service";
import {AuthService} from "../../services/auth/auth.service";



export interface MenuItems {
  name: string;
  activeBtn: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  title = 'demo';
  menuItems: MenuItems[] = [
    {
      name: 'Home',
      activeBtn: true,
    },
    {
      name: 'About',
      activeBtn: false,
    },
    {
      name: 'Contact',
      activeBtn: false,
    },
    {
      name: 'Login',
      activeBtn: false,
    },
    {
      name: 'Cart ',
      activeBtn: false,
    },
  ];
  constructor(public fbService: FirebaseService, private authService:AuthService, private route: Router) {}
  // listItems: Product[] = [];
  clickBtn(index: number) {
    console.log(index);
    for (let i = 0; i < this.menuItems.length; i++) {
      this.menuItems[i].activeBtn = false;
    }
    //active when clicked
    this.menuItems[index].activeBtn = true;
  }
  @Output() newItemEvent = new EventEmitter<Product>();

  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }
  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }
  nextId = 0;

  itemform = new FormGroup({
    // create id random formcontrol
    id: new FormControl(Math.floor(Math.random() * 10000) + 1 || null),
    name: new FormControl('' || null),
    price: new FormControl('' || null),
    description: new FormControl('' || null),
    image: new FormControl('' || null),
    category: new FormControl('' || null),
    quantity: new FormControl('' || null),
    status: new FormControl('' || null),
  });
  submit() {
    let newForm: Product = {
      id: this.nextId++,
      name: this.itemform.value.name || '',
      description: this.itemform.value.description || '',
      price: this.itemform.value.price || 0,
      image: this.itemform.value.image || '',
      quantity: this.itemform.value.quantity || 0,
      status: this.itemform.value.status || '',
    };

    this.newItemEvent.emit(newForm);
    this.closeDialog();
  }



  signOut() {
    this.authService.SignOut();
  }
}
