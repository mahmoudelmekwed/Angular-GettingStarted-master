import { Component , OnInit} from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.servise";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle : string= 'Product List';
    imageWidth : number= 50;
    imageMargin : number= 2;
    showImage : boolean = false;
    private _listFilter : string = '';
    get listFilter(){
      return this._listFilter;
    }
    set listFilter(value : string){
      this._listFilter = value;
      console.log('In Setter:', value);
      this.filteredProducts = this.performFilter(value)
    }

    filteredProducts : IProduct[] = [];

    products : IProduct[] = [];

    constructor(private productService : ProductService){}

      ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        // this.listFilter = '';
      }

      toggleImage(){
        this.showImage = !this.showImage
      }

      performFilter(selected : string): IProduct[] {
        selected = selected.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().includes(selected));
      }
      onClick(message : string){
        this.pageTitle = 'Product List: '  + message;
      }
}