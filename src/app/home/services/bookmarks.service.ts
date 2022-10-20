import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {JSONDATA, USER_ID} from "../../utils/constrains";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  saveAllBookMarks() {
    // this.httpClient.get<any[]>(`http://demo.dreamsquadgroup.com/test/index.json`).subscribe(res=>{
    //   console.log("json : ",res)
    // }) // not working crossorgin issue

    let listOfData: any[] = JSON.parse(JSONDATA);
    let temArry: any[] = [];

    listOfData.forEach(value => {
      temArry.push({
        id: null,
        bookmarkId: value.id,
        name: value.name,
        url: value.url,
        description: value.description,
        status: value.status,
        expiryDate: value.expiry_date,
        userId: Number(sessionStorage.getItem(USER_ID)),
        featured: value.featured,
        image: value.image,
        createdAt: value.created_at
      })
    });
    console.log(temArry)
    this.httpClient.post<any[]>(environment.BASE_USRL + `bookmarks/save-all/${sessionStorage.getItem(USER_ID)}`, temArry).subscribe(res => {
      if (res) {
        console.log(res)
        alert("successfully created bookmarks.")
      }
    })
  }


  getAllBookmarks(){
   return  this.httpClient.get<any[]>(environment.BASE_USRL + `bookmarks/find-all/${sessionStorage.getItem(USER_ID)}`);
  }

  deleteBookmark(bookMarkId:any){
    return  this.httpClient.delete<any>(environment.BASE_USRL + `bookmarks/delete-bookmark/${sessionStorage.getItem(USER_ID)}/${bookMarkId}`);
  }

  updateBookmark(bookmark:any){
    return  this.httpClient.put<any>(environment.BASE_USRL + `bookmarks/update-bookmark/${sessionStorage.getItem(USER_ID)}`,bookmark);
  }

}
