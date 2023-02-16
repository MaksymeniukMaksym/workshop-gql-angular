import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-gql-angular';
  constructor(private apollo: Apollo) {

  }
  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
      {
        allSets{
          id,
          name,
          numParts
        }
      }`
    }).valueChanges.subscribe((res)=>{
      console.log(res)
    })
  }
}
