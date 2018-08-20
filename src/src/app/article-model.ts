export class ArticleModel {
  id: number;
  title: string;
  url: string;
  publisher: string;
  category: string;
  hostname: string;
  timestamp: string;

  constructor(json: any) {

    this.id = json["ID"];
    this.title = json["TITLE"];
    this.url = json["URL"];
    this.publisher = json["PUBLISHER"];
    this.category = json["CATEGORY"];
    this.hostname = json["HOSTNAME"];
    this.timestamp = json["TIMESTAMP"];
  }
}
