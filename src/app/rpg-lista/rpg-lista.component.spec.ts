import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgListaComponent } from './rpg-lista.component';

describe('RpgListaComponent', () => {
  let component: RpgListaComponent;
  let fixture: ComponentFixture<RpgListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
