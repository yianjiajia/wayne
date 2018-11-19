import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {State} from '@clr/angular';
import {Page} from '../../../shared/page/page-state';
import {Config} from '../../../shared/model/v1/config';

@Component({
  selector: 'list-config',
  templateUrl: 'list-config.component.html'
})
export class ListConfigComponent implements OnInit {

  @Input() configs: Config[];

  @Input() page: Page;
  currentPage: number = 1;
  state: State;

  @Output() paginate = new EventEmitter<State>();
  @Output() delete = new EventEmitter<Config>();
  @Output() edit = new EventEmitter<Config>();


  constructor() {
  }

  ngOnInit(): void {
  }

  pageSizeChange(pageSize: number) {
    this.state.page.to = pageSize - 1;
    this.state.page.size = pageSize;
    this.currentPage = 1;
    this.paginate.emit(this.state);
  }

  refresh(state: State) {
    this.state = state;
    this.paginate.emit(state);
  }


  deleteConfig(config: Config) {
    this.delete.emit(config);
  }

  editConfig(config: Config){
    this.edit.emit(config);
  }
}