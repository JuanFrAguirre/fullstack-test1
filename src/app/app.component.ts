import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any
  loading

  constructor(public _http: HttpClient) {
    this.loading = true
  }
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    setTimeout(() => {
      this._http.get('http://localhost:3001/api').subscribe((x) => {
        this.data = x
        this.loading = false
      })
    }, 700)
  }
}
