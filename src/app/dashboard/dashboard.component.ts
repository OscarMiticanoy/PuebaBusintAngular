import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Result } from '../Model/Result.interface ';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dataSource: Result[]= [];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.service.getMovies().subscribe(data =>{
      this.dataSource = data.results;
    })
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
