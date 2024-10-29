import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteShellComponent } from './remote-shell.component';

describe('RemoteShellComponent', () => {
  let component: RemoteShellComponent;
  let fixture: ComponentFixture<RemoteShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
