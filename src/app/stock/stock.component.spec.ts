import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockComponent } from './stock.component';
import { HttpClientModule } from '@angular/common/http'; // Ensure HttpClientModule is imported

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockComponent], // Corrected to StockComponent
      imports: [HttpClientModule] // Include HttpClientModule here for tests
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
