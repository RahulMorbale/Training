import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributedireciveComponent } from './AttributeDirective/attributedirective/attributedirecive.component';
import { ParentComponent } from './InputandOutput/parent/parent.component';
import { ObservableComponent } from './Observables/observable/observable.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipedemoComponent } from './Pipes/pipe/pipedemo.component';
import { PracticeComponent } from './practice/practice.component';
import { SubdemoComponent } from './Subject/sub/subdemo.component';
import { SubjectpraciceComponent } from './Subject/subjectpracice/subjectpracice.component';
import { NavigateComponent } from './Validation/ReactiveForm/routenavigate/navigate.component';
import { SignupformComponent } from './Validation/ReactiveForm/signupform/signupform.component';
import { LoginformComponent } from './Validation/TemplateDrivenForm/loginform/loginform.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

const routes: Routes = [
  { path: 'attributeDirective', component: AttributedireciveComponent },
  { path: 'inputOutput', component: ParentComponent },
  { path: 'templateDrivenForm', component: LoginformComponent },
  { path: 'reactiveForm', component: SignupformComponent },
  { path: 'navigate', component: NavigateComponent },
  { path: 'back', component: SignupformComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'subject', component: SubjectpraciceComponent },
  { path: 'subdemo', component: SubdemoComponent },
  { path: 'pipedemo', component: PipedemoComponent },
  { path: 'events', component: EventsComponent },
  { path: 'ngswitch', component: NgswitchComponent },
  { path: '', component: ParentComponent },
  { path: '**', component: PagenotfoundComponent },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentFundamentalsRoutingModule { }
