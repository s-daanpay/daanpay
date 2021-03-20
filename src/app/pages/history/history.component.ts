import { Component } from "@angular/core";
import { TableService } from "../../shared/services/table.service";

interface DataItem {
  id: number;
  description: string;
  date: string;
  type: string;
  amount: number;
  status: string;
}

@Component({
  templateUrl: "./history.component.html",
})
export class HistoryComponent {
  selectedCategory: string;
  selectedStatus: string;
  searchInput: any;
  displayData = [];

  orderColumn = [
    {
      title: "ID",
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
    },
    {
      title: "Description",
      compare: (a: DataItem, b: DataItem) =>
        a.description.localeCompare(b.description),
    },
    {
      title: "Date",
      compare: (a: DataItem, b: DataItem) => a.date.localeCompare(b.date),
    },
    {
      title: "Type",
      compare: (a: DataItem, b: DataItem) => a.type.localeCompare(b.type),
    },
    {
      title: "Amount",
      compare: (a: DataItem, b: DataItem) => a.amount - b.amount,
    },
    {
      title: "Status",
      compare: (a: DataItem, b: DataItem) => a.status.localeCompare(b.status),
    },
  ];

  productsList = [
    {
      id: "31",
      description: "Kashi Vishwanath",
      date: "Feb 21, 2021",
      type: "Sent",
      img: "../../../assets/images/recipients/T-00003.jpg",
      amount: "2100",
      status: "successful",
    },
    {
      id: "32",
      description: "Badrinath Temple",
      date: "Feb 22, 2021",
      type: "Sent",
      img: "../../../assets/images/recipients/T-00002.jpg",
      amount: "2100",
      status: "successful",
    },
    {
      id: "33",
      description: "Vaishno Devi Mandir",
      date: "Feb 23, 2021",
      type: "Sent",
      img: "../../../assets/images/recipients/T-00001.jpg",
      amount: "2100",
      status: "successful",
    },
    {
      id: "34",
      description: "Gurudwara Hari Mandir Sahib",
      date: "Feb 24, 2021",
      type: "Not Delivered",
      img: "../../../assets/images/recipients/G-00003.jpg",
      amount: "2100",
      status: "decline",
    },
    {
      id: "35",
      description: "Gurudwara Bangla Sahib",
      date: "Feb 25, 2021",
      type: "Sent",
      img: "../../../assets/images/recipients/G-00002.jpg",
      amount: "2100",
      status: "successful",
    },
    {
      id: "36",
      description: "Gurudwara Baba Atal Sahib",
      date: "Feb 26, 2021",
      type: "Not Delivered",
      img: "../../../assets/images/recipients/G-00001.jpg",
      amount: "2100",
      status: "decline",
    },
  ];

  constructor(private tableSvc: TableService) {
    this.displayData = this.productsList;
  }

  search(): void {
    const data = this.productsList;
    this.displayData = this.tableSvc.search(this.searchInput, data);
  }

  categoryChange(value: string): void {
    const data = this.productsList;
    value !== "All"
      ? (this.displayData = data.filter((elm) => elm.description === value))
      : (this.displayData = data);
  }

  statusChange(value: string): void {
    const data = this.productsList;
    value !== "All"
      ? (this.displayData = data.filter((elm) => elm.status === value))
      : (this.displayData = data);
  }
}
