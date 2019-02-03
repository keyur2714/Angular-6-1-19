import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  fname : string = 'Hiten';
  friendsList : string[] = ["keyur","denish"];
  errorMsg : string = '';
  selectedFriend : string = '';
  isUpdate : boolean = false;
  updateIdx: number  = 0;
  constructor() { 
    console.log("When Selector is called....");
  }

  ngOnInit() {
    console.log("After Constructor....");
    this.friendsList.push("vinit");
  }

  addNewFriend():void{
    if(this.fname === ''){
      this.errorMsg = 'Name is Empty.';
    }else{
      let idx = this.friendsList.indexOf(this.fname);
      if(idx === -1){
        this.errorMsg = '';
        this.friendsList.push(this.fname);
        this.fname = '';
      }else{
        this.errorMsg = this.fname+ ' Already Exist.';
        this.fname = '';
      }
    }        
  }

  delete(idx):void{
    let deleteName = this.friendsList[idx];
    this.friendsList.splice(idx,1);
    this.errorMsg = deleteName+" is Deleted.";
    this.fname = '';
  }

  edit(idx):void{
    this.isUpdate = true;
    this.updateIdx = idx;
    this.errorMsg = '';
    this.fname = this.friendsList[idx];
  }

  updateFriend():void{
    this.friendsList[this.updateIdx] = this.fname;
    this.isUpdate = false;
  }

  setSelected(friendName):void{
    this.selectedFriend = friendName;
  }

}
