import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  constructor(private route: Router, private activated: ActivatedRoute, private loc: Location) {
  }

  ngOnInit(): void {
          // Activated route service line no.17 - 38
    // console.log(this.activated)
    // this.activated.paramMap.subscribe(value => {
    //   console.log(value.get('x'))
    //   console.log(value.get('y'))
    //   this.onsubmit()
    // })
    // console.log(this.activated)
    // this.activated.paramMap.subscribe( (xyz:any) => {
    //   // console.log(xyz.get('a'))
    //   // console.log(xyz.get('b'))
    //   this.educationDetails.patchValue({
    //     course:xyz.get('course'),
    //     college:xyz.params.college,
    //     location:xyz.params.location,
    //     duration:xyz.get('duration'),   
    //   })
    //   this.personalDetails.patchValue({
    //     name:xyz.params.name,
    //     address:xyz.params.address
    //   })
    // }) 
    console.log(history.state)
    // this.route.navigate(['/navigate'],{queryParams:{a:'hello16545',b:'akdbadvjadj'}})
    // this.route.navigateByUrl('/navigate')
    // console.log(this.loc.getState())
  }

  firstName = new FormControl('') // single field create form control object like this way
  lastName = new FormControl('')
  
  onsubmit() {
    this.firstName.setValue('Rahul')
    this.lastName.setValue('Morbale')
  }


  educationDetails = new FormGroup({  // For multiple fields we create FormGroup object and create all fields formcontrol instane
    course: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{3,10}$")]),
    college: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{5,10}$")]),
    location: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,1}$")]),
    id: new FormControl('')
  })

  personalDetails = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })

  onSubmit() {
    alert("Submitted successfully")
    // if(this.educationDetails.valid){
    console.log(this.educationDetails.value)
    console.log(this.personalDetails.value)
    let combine = {
      id: this.educationDetails.value.id,
      course: this.educationDetails.value.course,
      college: this.educationDetails.value.college,
      location: this.educationDetails.value.location,
      duration: this.educationDetails.value.duration,
      name: this.personalDetails.value.name,
      address: this.personalDetails.value.address
    }
    this.courseDetails.push(combine)
    // this.courseDetails.push(this.personalDetails.value)
    this.educationDetails.reset()
    this.personalDetails.reset()
  }

  update() {
    // alert("Updated successfully")
    // this.courseDetails.push(this.educationDetails.value)
    // this.courseDetails.push(this.personalDetails.value)
    
  }

  reset() {
    // alert("All data cleared")
    this.educationDetails.reset()
    this.personalDetails.reset()
  }

  Delete(a: any) {
    // alert("Record deleted successfully")
    var b = this.courseDetails.indexOf(a)  // indexof=> display value position
    this.courseDetails.splice(b, 1)  // b(position number of value)=> start from 0 position  1(count)=> number of elements to remove
  }
  //   tblupdate(b:any){
  //     var x=this.courseDetails.indexOf(b)
  //     // var i=this.courseDetails.filter(y=>y.id
  //     //   )

  // this.courseDetails.unshift(b.educationDetails.value)
  //   }
  // Edit(edit: any) {
  //   this.educationDetails.patchValue({
  //     course: edit.course,
  //     college: edit.college,
  //     location: edit.location,
  //     duration: edit.duration,
  //   })
  //   this.personalDetails.patchValue({
  //     name: edit.name,
  //     address: edit.address
  //   })
  // }


  Edit(edit: any) {
    this.educationDetails.patchValue({
      course: edit.course,
      college: edit.college,
      location: edit.location,
      duration: edit.duration,
    })
    this.personalDetails.patchValue({
      name: edit.name,
      address: edit.address
    })
  }

  courseDetails = [   // array of object
    {
      id: 1,
      course: 'Diploama',
      college: 'SGM',
      location: 'Kolhapur',
      duration: '3',
      name: 'Rahul',
      address: 'Kolhapur'
    },
    {
      id: 2,
      course: 'BE',
      college: 'SGMCOE',
      location: 'Kolhapur',
      duration: '4',
      name: 'Saurabh',
      address: 'Karad'
    },
    {
      id: 3,
      course: 'D-Pharmacy',
      college: 'D.Y.Patil',
      location: 'Pune',
      duration: '2',
      name: 'Pratik',
      address: 'Pune'
    },
    {
      id: 4,
      course: 'B-Pharmacy',
      college: 'KIT',
      location: 'Karad',
      duration: '2',
      name: 'Ashish',
      address: 'Sangali'
    },
  ]


}
