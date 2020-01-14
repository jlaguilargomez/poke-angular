import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { ButtonArrowComponent } from 'src/app/shared/components/button-arrow/button-arrow.component';
import { BackgroundDexStyleComponent } from 'src/app/shared/background-dex-style/background-dex-style.component';

describe('LandingComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				LandingComponent,
				ButtonArrowComponent,
				BackgroundDexStyleComponent,
			],
		}).compileComponents();
	});

	it('Component Header works!', () => {
		const fixture = TestBed.createComponent(LandingComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
