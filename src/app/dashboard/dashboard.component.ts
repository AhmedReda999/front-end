import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../servicess/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  componentData: any;
  updateMessage: string = '';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getComponentData().subscribe((data) => {
      this.componentData = data;
    });
  }

  updateContent() {
    this.dashboardService.updateComponentData(this.componentData).subscribe(
      (res) => {
        this.updateMessage = 'Content updated successfully!';
      },
      (err) => {
        this.updateMessage = 'Failed to update content';
      }
    );
  }

  deleteContent() {
    this.dashboardService.deleteComponentData(this.componentData.id).subscribe(
      (res) => {
        this.updateMessage = 'Content deleted successfully!';
      },
      (err) => {
        this.updateMessage = 'Failed to delete content';
      }
    );
  }
}
