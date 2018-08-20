import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "./articles.service";
import { Title } from "../../node_modules/@angular/platform-browser";
import { ArticleModel } from "./article-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  articlesObj: ArticleModel[] = [];

  constructor(private arService: ArticlesService) {}

  ngOnInit() {
    this.arService.articlesList().subscribe(
      response => {
        response.forEach(element => {
          console.log(JSON.stringify(element));
          const article = new ArticleModel(element);
          this.articlesObj.push(article);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  sortByAscendingOrder() {
    console.log("Sort Called");
    this.articlesObj.sort((t1, t2) => {
      return t1.title.localeCompare(t2.title);
    });
  }
}
