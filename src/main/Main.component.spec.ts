import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { MainComponent } from './Main.component';
describe('Main', () => {
  beforeEachProviders(() => [
    MainComponent
  ]);
  it ('should work', inject([MainComponent], (app: MainComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});