import { Component, OnInit } from "@angular/core";
import { PollutionService, Pollution } from "../../services/pollution.service";

@Component({
  selector: "app-pollution-list",
  templateUrl: "./pollution-list.component.html",
  styleUrls: ["./pollution-list.component.css"],
})
export class PollutionListComponent implements OnInit {
  pollutions: Pollution[] = [];
  filtered: Pollution[] = [];
  filterText = "";

  constructor(private pollutionService: PollutionService) {}

  ngOnInit() {
    this.loadPollutions();
  }

  loadPollutions() {
    this.pollutionService.getAll().subscribe((data) => {
      this.pollutions = data;
      this.filtered = data;
    });
  }

  deletePollution(id: number) {
    this.pollutionService.delete(id).subscribe(() => {
      this.loadPollutions();
    });
  }
  filter() {
    this.filtered = this.pollutions.filter((p) =>
      p.city.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
