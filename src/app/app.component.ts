import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-tailwind-project';
  pricings = [
    {
      tierName: "Apprentice",
      cost: "$ 500,000",
      offerings: [
        "Quick and efficient hit, with no fuss or frills.",
        "Ideal for taking care of pesky rivals or unwanted enemies."
      ]
    },
    {
      tierName: "Maestro",
      cost: "$ 4,500,000",
      offerings: [
        "Extra planning, surveillance, and execution.",
        "Designed for more complex kills.",
        "Ideal for high-profile targets or groups of enemies.",
        "Guaranteed to get the job done."
      ]
    },
    {
      tierName: "Legend",
      cost: "$ 15,000,000",
      offerings: [
        "Maestro with a team of expert operatives.",
        "Government targets, or large rival organizations.",
        "When you absolutely, positively need to get the job done."
      ]
    }
  ]

}
