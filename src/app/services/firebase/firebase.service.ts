import {
  DocumentData,
  Firestore,
  collection,
  onSnapshot,
  setDoc,
  doc,
  updateDoc,
  deleteDoc
} from "@angular/fire/firestore";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  prodList: DocumentData[] = [];
  cartList: DocumentData[] = [];
  total = 0;
  constructor(private firestore: Firestore) {
    // this.getAll().then();
    onSnapshot(collection(this.firestore, 'products'), (collection) => {
      this.prodList = [];
      collection.forEach((doc) => {
        this.prodList.push(doc.data() as any);
      });
    });
    onSnapshot(collection(this.firestore, 'cart'), (collection) => {
      this.cartList = [];
      collection.forEach((doc) => {
        this.cartList.push(doc.data() as any);
      });
    });
  }

  async add() {
    try {
      let id = Math.floor(Math.random() * 1000).toString();
      const docRef = await setDoc(doc(this.firestore, 'products', id), {
        id: id,
        name: 'Iphone 10',
        price: 1000,
        description: 'Iphone 10',
        image:
          'https://th.bing.com/th/id/OIP.DH9BbfWK3GFAv8xTph6HsAHaKr?w=124&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        quantity: 10,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  async update(item: DocumentData) {
    await updateDoc(doc(this.firestore, 'products', item['id']), item);
  }

  async delete(item: DocumentData) {
    await deleteDoc(doc(this.firestore, 'products', item['id']));
  }

  async addCart(item: DocumentData) {
    try {
      let index = this.cartList.findIndex((i) => i['id'] === item['id']);
      if (index === -1) {
        // Item chưa tồn tại, thêm mới
        let id = Math.floor(Math.random() * 1000).toString();
        const docRef = await setDoc(doc(this.firestore, 'cart', id), {
          id: id,
          name: item['name'],
          price: item['price'],
          description: item['description'],
          image: item['image'],
          quantity: 1,
        });
      } else {
        // Item đã tồn tại, tăng quantity
        let index = this.cartList.findIndex((i) => i['id'] === item['id']);
        this.cartList[index]['quantity']++;
        await updateDoc(
          doc(this.firestore, 'cart', this.cartList[index]['id']),
          this.cartList[index]
        );
      }
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async deleteCart(item: DocumentData) {
    await deleteDoc(doc(this.firestore, 'cart', item['id']));
  }

  async updateCart(i: number) {
    //if click add to cart quantity ++
    await updateDoc(doc(this.firestore, 'cart', this.cartList[i]['id']), {
      quantity: this.cartList[i]['quantity'] + 1,
    });
  }

  async addItems(i: number) {
    try {
      this.cartList[i]['quantity']++;
      await updateDoc(
        doc(this.firestore, 'cart', this.cartList[i]['id']),
        this.cartList[i]
      );
    } catch (e) {
      console.log(e);
    }
  }

  async removeItems(item: DocumentData) {
    const index = this.cartList.findIndex((item) => item['id'] === item['id']);
    if (index != -1) {
      this.cartList.splice(index, 1);
    }
    await deleteDoc(doc(this.firestore, 'cart', item['id']));
  }

  totalPrice() {
    this.total = 0;

    for (let i = 0; i < this.cartList.length; i++) {
      this.total += this.cartList[i]['price'] * this.cartList[i]['quantity'];
    }
    return this.total;
  }

  async removeQuantity(i: number) {
    if (this.cartList[i]['quantity'] > 1) {
      this.cartList[i]['quantity']--;
    }
    await updateDoc(doc(this.firestore, 'cart', this.cartList[i]['id']), {
      quantity: this.cartList[i]['quantity'],
    });
  }
}
