import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppsService } from "src/app/shared/services/apps.service";

let recipientData = require("../../../assets/data/pages/recipient-data.json");
declare var require: any;

@Component({
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  view: string = "cardView";
  recipients = [];
  loading = true;

  constructor(
    private router: Router,
    private appsService: AppsService,
  ) {
    this.recipients = recipientData;

    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  recipientDetails(id: string) {
    this.router.navigate(["/pages/recipient-details", id]);
  }
}
