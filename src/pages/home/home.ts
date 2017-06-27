import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


export class StudyCourse{
  img_url:string;
  class_name:string;
  end_date:string;
  is_required:string;
  class_size:number;
}
const COURSES: StudyCourse[] = [
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名1",end_date:"2017-02-12",is_required:"选修",class_size:10.1},
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名2",end_date:"2017-02-12",is_required:"选修",class_size:10.2},
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名3",end_date:"2017-02-12",is_required:"选修",class_size:10.4},
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名4",end_date:"2017-02-12",is_required:"选修",class_size:10.5},
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名5",end_date:"2017-02-12",is_required:"选修",class_size:10.8},
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名6",end_date:"2017-02-12",is_required:"选修",class_size:10.9},
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名7",end_date:"2017-02-12",is_required:"选修",class_size:11.5},
  {img_url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732970172,3112174990&fm=117&gp=0.jpg",
    class_name:"课程名8",end_date:"2017-02-12",is_required:"选修",class_size:12.5}
];
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  courses=COURSES;
}
