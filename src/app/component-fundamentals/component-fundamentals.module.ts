import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFundamentalsRoutingModule } from './component-fundamentals-routing.module';
import { ParentComponent } from './InputandOutput/parent/parent.component';
import { ChildComponent } from './InputandOutput/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributedireciveComponent } from './AttributeDirective/attributedirective/attributedirecive.component';
import { HighlighterDirective } from './AttributeDirective/Directives/highlighter.directive';
import { LoginformComponent } from './Validation/TemplateDrivenForm/loginform/loginform.component';
import { SignupformComponent } from './Validation/ReactiveForm/signupform/signupform.component';
import { DemoComponent } from './Validation/demo/demo.component';
import { SampleComponent } from './Validation/TemplateDrivenForm/sample/sample.component';
import { NavigateComponent } from './Validation/ReactiveForm/routenavigate/navigate.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ObservableComponent } from './Observables/observable/observable.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PracticeComponent } from './practice/practice.component';
import { MatTableModule } from '@angular/material/table';
import { SubjectpraciceComponent } from './Subject/subjectpracice/subjectpracice.component';
import { SubdemoComponent } from './Subject/sub/subdemo.component';
import { FilesizePipe } from './Pipes/filesize.pipe';
import { PipedemoComponent } from './Pipes/pipe/pipedemo.component';
import { SearchPipe } from './Pipes/search.pipe';
import { SubjectBehavioursubjectExampleComponent } from './behavioursubject/subject-behavioursubject-example/subject-behavioursubject-example.component';
import { Demo1Component } from './behavioursubject/demo1/demo1.component';
import { Demo2Component } from './behavioursubject/demo2/demo2.component';
import { Demo3Component } from './behavioursubject/demo3/demo3.component';
import { Demo4Component } from './behavioursubject/demo4/demo4.component';
import { EventsComponent } from './events/events.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CsswitheventDirective } from './rivision/csswithevent.directive';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    AttributedireciveComponent,
    HighlighterDirective,
    LoginformComponent,
    SignupformComponent,
    DemoComponent,
    SampleComponent,
    NavigateComponent,
    PagenotfoundComponent,
    ObservableComponent,
    PracticeComponent,
    SubjectpraciceComponent,
    SubdemoComponent,
    FilesizePipe,
    SearchPipe,
    PipedemoComponent,
    SubjectBehavioursubjectExampleComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    EventsComponent,
    NgswitchComponent,
    CsswitheventDirective,


  ],
  imports: [
    CommonModule,
    ComponentFundamentalsRoutingModule,
    FormsModule,      // (FormsModule) it is used for (small scale applications) Template-Driven Form (validation) 
    ReactiveFormsModule,   // (ReactiveFormsModule) it is used for (big applications(scalable)) (validation)
    MatSidenavModule,
    MatTableModule


  ],
  exports: [           // export bcoz the parent selector (i.e: app-parent) component create in main html (i.e:<app-parent></app-parent>)  
    ParentComponent,   // we create exports property becoz we write different component selector in main html page i.e.- app.component.html
    ChildComponent,
    AttributedireciveComponent,
    LoginformComponent,
    SignupformComponent,
    DemoComponent,
    MatSidenavModule,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,

    // NavigateComponent

  ],

  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentFundamentalsModule { }
