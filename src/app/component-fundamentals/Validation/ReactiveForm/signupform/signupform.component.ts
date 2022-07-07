import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {


  // firstName = new FormControl('') // single field create form control object like this way
  // lastName = new FormControl('')

  // next(){
  // // this.route.navigateByUrl('/navigate')
  // this.route.navigate(['navigate'])
  // }
  // sendx(x:any){
  //   this.route.navigateByUrl('navigate',{'state':x})
  //   // this.route.navigate(['navigate'])
  //   console.log()
  // }

  // onsubmit() {
  //   this.firstName.setValue('Rahul')
  //   this.lastName.setValue('Morbale')
  // }


//   educationDetails = new FormGroup({  // For multiple fields we create FormGroup object and create all fields formcontrol instane
//     course: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{3,10}$")]),
//     college: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{5,10}$")]),
//     location: new FormControl('', [Validators.required]),
//     duration: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,1}$")]),
//     id: new FormControl('')
//   })

//   personalDetails = new FormGroup({
//     name: new FormControl('', Validators.required),
//     address: new FormControl('', Validators.required),
//   })

//   onSubmit() {
//     alert("Submitted successfully")
//     // if(this.educationDetails.valid){
//     console.log(this.educationDetails.value)
//     console.log(this.personalDetails.value)
//     let combine = {
//       id: this.educationDetails.value.id,
//       course: this.educationDetails.value.course,
//       college: this.educationDetails.value.college,
//       location: this.educationDetails.value.location,
//       duration: this.educationDetails.value.duration,
//       name: this.personalDetails.value.name,
//       address: this.personalDetails.value.address
//     }
//     this.courseDetails.push(combine)
//     // this.courseDetails.push(this.personalDetails.value)
//     this.educationDetails.reset()
//     this.personalDetails.reset()
//   }
 

//   update() {
//     // alert("Updated successfully")
//     // this.courseDetails.push(this.educationDetails.value)
//     // this.courseDetails.push(this.personalDetails.value)
//     // this.courseDetails.splice(0,)
//     }
  
//   reset() {
//     // alert("All data cleared")
//     this.educationDetails.reset()
//     this.personalDetails.reset()
//   }

//   Delete(a:any) {
//     // alert("Record deleted successfully")
//     var b = this.courseDetails.indexOf(a)  // indexof=> display value position
//     this.courseDetails.splice(b, 1)  // b(position number of value)=> start from 0 position  1(count)=> number of elements to remove
//   }
// //   tblupdate(b:any){
// //     var x=this.courseDetails.indexOf(b)
// //     // var i=this.courseDetails.filter(y=>y.id
// //     //   )
    
// // this.courseDetails.unshift(b.educationDetails.value)
// //   }

//   Edit(edit: any) {
//     // this.route.navigate(['navigate'])
//     this.educationDetails.patchValue({
//       course: edit.course,
//       college: edit.college,
//       location: edit.location,
//       duration: edit.duration,
//     })
//     this.personalDetails.patchValue({
//       name: edit.name,
//       address: edit.address
//     })
//   }

  courseDetails = [   // array of object
    {
      //key:value
      id : 1,
      course: 'Diploama',
      college: 'SGMRP',
      location: 'Kolhapur',
      duration: '3',
      name: 'Rahul',
      address: 'Kolhapur'
    },
    {
      id: 2,
      course: 'BECSE',
      college: 'SGMCOE',
      location: 'Kolhapur',
      duration: '4',
      name: 'Saurabh',
      address: 'Karad'
    },
    {
      id: 3,
      course: 'DPharmacy',
      college: 'DYPatil',
      location: 'Pune',
      duration: '2',
      name: 'Pratik',
      address: 'Pune'
    },
    {
      id: 4,
      course: 'BPharmacy',
      college: 'SGMCOE',
      location: 'Karad',
      duration: '2',
      name: 'Ashish',
      address: 'Sangali'
    },
  ]

  // src = "/assets/Raindropmemory-Artificial-Girl-App.ico"

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
//   private route:Router

//   next(){
// this.route.navigateByUrl('sample')
//   }
}
