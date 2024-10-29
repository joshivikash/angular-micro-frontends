import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteWebComponentComponent } from './remote-web.component';

describe('RemoteWebComponentComponent', () => {
  let component: RemoteWebComponentComponent;
  let fixture: ComponentFixture<RemoteWebComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteWebComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
