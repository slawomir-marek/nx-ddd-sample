import { Component, OnInit} from '@angular/core';
import { ManageFacade } from '@sample-app/catalog/domain';

@Component({
  selector: 'catalog-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    


    constructor(private manageFacade: ManageFacade) {
    }


    ngOnInit() {
    }

}

