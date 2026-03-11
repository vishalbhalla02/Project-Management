import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceForm } from './add-resource-form';

describe('AddResourceForm', () => {
  let component: AddResourceForm;
  let fixture: ComponentFixture<AddResourceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResourceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResourceForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
