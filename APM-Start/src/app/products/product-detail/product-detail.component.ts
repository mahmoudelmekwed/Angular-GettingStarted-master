import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product.servise';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle : string= 'Product Detail';
  product: IProduct | undefined;

  constructor(private route : ActivatedRoute
    ,private router : Router,
    private productservice: ProductService) { }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.pageTitle += `: ${id}`;

    this.route.params.subscribe((params)=>{
      this.productservice.getProducts().subscribe((res)=>
      this.product = res.find(
        (item)=> item.productId == params['id']
      ))
    })
    
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
