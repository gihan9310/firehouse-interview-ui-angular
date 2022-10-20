import {Component, OnInit} from '@angular/core';
import {BookmarksService} from "../../services/bookmarks.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-view-bookmark-page',
  templateUrl: './view-bookmark-page.component.html',
  styleUrls: ['./view-bookmark-page.component.scss']
})
export class ViewBookmarkPageComponent implements OnInit {

  listOfBookmark: any[] = [];
  bookmarkForm: FormGroup;

  constructor(private bookmarksService: BookmarksService, private fb: FormBuilder) {

    this.bookmarkForm = this.fb.group({
      id: [null, []],
      bookmarkId: [null, [Validators.required]],
      name: [null, []],
      url: [null, []],
      description: [null, []],
      status: [[]],
      expiryDate: [null, []],
      featured: [[]],
      userId: [null, []],
      image: [null, []],
      createdAt: [null, []]
    })
  }

  ngOnInit(): void {
    this.getAllBookMarks();
  }

  slectedRow(rowData: any) {
    this.bookmarkForm.patchValue(rowData);
  }

  updateData() {
    if (this.bookmarkForm.invalid) {
      return;
    }
    this.bookmarksService.updateBookmark(this.bookmarkForm.value).subscribe(res => {
      if (res) {
        alert('book mark updated.');
        this.bookmarkForm.reset();
        this.getAllBookMarks();
      }
    })
  }

  getAllBookMarks() {
    this.bookmarksService.getAllBookmarks().subscribe(res => {
      if (res) {
        this.listOfBookmark = res;
      }
    })
  }

  deleteRow(item: any) {
    this.bookmarkForm.reset();
    console.log(item)
    this.bookmarksService.deleteBookmark(item.bookmarkId).subscribe(res => {
      if (res) {
        this.bookmarkForm.reset();
        alert('book mark deleted.');
        this.getAllBookMarks();
      }
    })
  }
}
