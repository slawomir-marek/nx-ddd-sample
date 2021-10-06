import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CatalogItem } from '../entities/catalog-item';
import { CatalogItemDataService } from '../infrastructure/catalog-item.data.service';


@Injectable({ providedIn: 'root' })
export class BoxesFacade {

    private catalogItemListSubject = new BehaviorSubject<CatalogItem[]>([]); 
    catalogItemList$ = this.catalogItemListSubject.asObservable();

    constructor(private catalogItemDataService: CatalogItemDataService) {
    }

    load(): void {
        this.catalogItemDataService.load().subscribe(
            catalogItemList => {
                this.catalogItemListSubject.next(catalogItemList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
