import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockComponent } from './stock.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'; // Ensure this import

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockComponent],
      imports: [HttpClientModule, MatDialogModule] // Include MatDialogModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
