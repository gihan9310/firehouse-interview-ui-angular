import { Component, OnInit } from '@angular/core';
import {USER_NAME} from "../../utils/constrains";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  username =sessionStorage.getItem(USER_NAME)

  constructor() { }

  ngOnInit(): void {
  }

}
