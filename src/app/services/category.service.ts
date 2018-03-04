import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  categoryList;
  categories$;
  constructor(private db: AngularFireDatabase) { }
  getAll() {

    this.categoryList = this.db.list('/categories', ref => ref.orderByChild('size'));
    this.categories$ = this.categoryList.snapshotChanges()
    .map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    });
    return this.categories$;
  }
}
