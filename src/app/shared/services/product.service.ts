import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges()
    .map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    });
  }

  get(productId) {
    return this.db.object('/products/' + productId).snapshotChanges();
  }

  update(id, product) {
    return this.db.object('/products/' + id).update(product);
  }
  delete(id) {
    return this.db.object('/products/' + id).remove();
  }
}
