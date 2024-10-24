import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data: any;
  closeResult!: string;
  form: boolean = false;
  stock: any;
  productId!: string | null; // Store product ID once retrieved
  product = {
    title: null,
    category: null,
    price: null,
    quantity: null
  };

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute, 
    private modalService: NgbModal,
    private stockService: StockService
  ) {}

  ngOnInit() {
    // Subscribe to paramMap to get 'id'
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.fetchData();
      this.getStock();
    });
  }

  fetchData() {
    if (this.productId) {
      console.log(this.productId);
      this.productService.fetchData(this.productId).subscribe((response) => {
        this.data = response;
      });
    }
  }

  addProduct(product: any) {
    if (this.productId) {
      this.productService.addProduct(product, this.productId).subscribe((response) => {
        this.data = response;
        this.fetchData(); // Refresh the data after adding the product
      });
    }
  }

  getStock() {
    if (this.productId) {
      this.stockService.fetchData(this.productId).subscribe((response) => {
        this.stock = response;
      });
    }
  }

  deleteItem(itemId: any) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.productService.deleteData(itemId).subscribe(() => {
        console.log('Item deleted');
        this.fetchData(); // Refresh the data after deletion
      });
    }
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  closeForm() {
    // Close form logic here
  }

  cancel() {
    this.form = false;
  }
}
