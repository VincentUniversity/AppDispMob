import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any;

  constructor(private database : AngularFirestore,private authservice: AuthService) {
    firebase.auth().onAuthStateChanged(user => {    

      if (user) { 
       database.collection("profile").doc("${this.authService.getUserUid()}").valueChanges()
        .subscribe(singleDoc =>{
        this.profile = singleDoc;
        });
      }
    })
   }

  ngOnInit() {   
  }
}
