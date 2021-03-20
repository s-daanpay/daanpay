import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

let recipientData = require("../../../assets/data/pages/recipient-data.json");
declare var require: any;

@Component({
  templateUrl: "./recipient-details.component.html",
})
export class RecipientDetailsComponent implements OnInit {
  recipientId: string;
  recipientDetails: any;
  amountListData = [11, 21, 51, 101, 501, 1001, 2101];
  loading = true;

  constructor(private route: ActivatedRoute) {
    setTimeout(() => {
      this.loading = false;
    }, 1500);

    this.recipientId = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.recipientDetails = recipientData.find(
      (recipient) => recipient.id === this.recipientId
    );
    this.recipientDetails.longDesc = this.recipientDetails.longDesc.split("|");
  }
}
