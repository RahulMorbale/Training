import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributedireciveComponent } from './AttributeDirective/attributedirective/attributedirecive.component';
import { ParentComponent } from './InputandOutput/parent/parent.component';
import { ObservableComponent } from './Observables/observable/observable.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PracticeComponent } from './practice/practice.component';
import { NavigateComponent } from './Validation/ReactiveForm/routenavigate/navigate.component';
import { SignupformComponent } from './Validation/ReactiveForm/signupform/signupform.component';
import { LoginformComponent } from './Validation/TemplateDrivenForm/loginform/loginform.component';

const routes: Routes = [
  { path: 'attributeDirective', component: AttributedireciveComponent },
  { path: 'inputOutput', component: ParentComponent },
  { path: 'templateDrivenForm', component: LoginformComponent },
  { path: 'reactiveForm', component: SignupformComponent },
  { path: 'navigate', component: NavigateComponent },
  { path: 'back', component: SignupformComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '', component: ParentComponent },
  { path: '**', component: PagenotfoundComponent },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentFundamentalsRoutingModule { }
