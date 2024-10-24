import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => 'test-id' // Mock the paramMap with a value
            })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
