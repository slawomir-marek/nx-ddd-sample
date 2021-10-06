import { Component, OnInit} from '@angular/core';
import { BoxesFacade } from '@sample-app/catalog/domain';

@Component({
  selector: 'catalog-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {
    
    
    catalogItemList$ = this.boxesFacade.catalogItemList$;


    constructor(private boxesFacade: BoxesFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.boxesFacade.load();
    }

}

