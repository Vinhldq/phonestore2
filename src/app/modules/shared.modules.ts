import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiIslandModule } from '@taiga-ui/kit';
import {TuiLinkModule, TuiRootModule} from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiRadioBlockModule } from '@taiga-ui/kit';
import { TuiStepperModule } from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiInputTimeModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { TuiGroupModule } from '@taiga-ui/core';
import { TuiInputSliderModule } from '@taiga-ui/kit';
import { TuiSliderModule } from '@taiga-ui/kit';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { NgOptimizedImage } from '@angular/common';
import { TuiDialogModule } from '@taiga-ui/core';
import { TuiLabelModule } from '@taiga-ui/core';
import {NavbarComponent} from "../components/navbar/navbar.component";
import {ShoppingCartComponent} from "../components/shopping-cart/shopping-cart.component";

const TaigaModules = [
  TuiIslandModule,
  TuiLinkModule,
  TuiButtonModule,
  TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiDataListWrapperModule,
  TuiDataListModule,
  TuiSelectModule,
  TuiRadioBlockModule,
  TuiStepperModule,
  TuiErrorModule,
  TuiInputPhoneModule,
  TuiInputNumberModule,
  TuiInputDateModule,
  TuiInputPasswordModule,
  TuiInputTimeModule,
  TuiMoneyModule,
  TuiCurrencyPipeModule,
  TuiTextfieldControllerModule,
  TuiFieldErrorPipeModule,
  TuiGroupModule,
  TuiInputSliderModule,
  TuiSliderModule,
  TuiScrollbarModule,
  TuiDialogModule,
  TuiLabelModule,

];

@NgModule({
  declarations: [],
  exports: [
    TuiRootModule,

    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    ...TaigaModules,

  ],
  imports: [
    TuiRootModule,

    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    ...TaigaModules,
  ],
})
export class SharedModule {}
