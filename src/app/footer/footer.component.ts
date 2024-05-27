import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-footer",
  template: ` <p class="text-center">&copy; All rights reserved</p> `,
  styleUrl: "./footer.component.css",
  encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent {}
