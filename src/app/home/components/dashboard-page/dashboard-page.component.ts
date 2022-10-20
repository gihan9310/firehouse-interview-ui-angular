import {Component, OnInit} from '@angular/core';
import {BookmarksService} from "../../services/bookmarks.service";
import {Router} from "@angular/router";
import {ISLOGIN, USER_ID} from "../../../utils/constrains";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private bookmarksService: BookmarksService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveAllBookMarks() {
    this.bookmarksService.saveAllBookMarks();
  }

  navigateToBookmarksPage() {
    this.router.navigate(['/bookmarks']);
  }

  logout() {
    sessionStorage.removeItem(USER_ID);
    sessionStorage.removeItem(ISLOGIN);
    sessionStorage.removeItem(ISLOGIN);
    this.router.navigate(['/login']);
  }
}
