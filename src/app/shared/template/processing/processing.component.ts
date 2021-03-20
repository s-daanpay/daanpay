import { Component, Input } from "@angular/core";

@Component({
  selector: "app-processing",
  templateUrl: "./processing.component.html",
})
export class ProcessingComponent {
  @Input() visible: boolean;

  boxStyle: object = {
    zIndex: "999",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
  };

  constructor() {}
}
