import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  clickedRed = false;
  clickedYellow = false;
  clickedGreen = false;

  red(event) {
    this.clickedRed = true;
    this.clickedYellow = false;
    this.clickedGreen = false;
    let clique = event.click;
  }

  yellow(event) {
    this.clickedRed = false;
    this.clickedYellow = true;
    this.clickedGreen = false;
    let clique = event.click;
  }

  green(event) {
    this.clickedRed = false;
    this.clickedYellow = false;
    this.clickedGreen = true;
    let clique = event.click;
  }
}
