import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { ButtonArrowComponent } from 'src/app/shared/components/button-arrow/button-arrow.component';
import { BackgroundDexStyleComponent } from 'src/app/shared/components/background-dex-style/background-dex-style.component';
import { HeaderCurveComponent } from 'src/app/shared/components/header-curve/header-curve.component';
import { CardMemberComponent } from 'src/app/shared/components/card-member/card-member.component';
import { CardFunctionalityComponent } from 'src/app/shared/components/card-functionality/card-functionality.component';

describe('LandingComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				LandingComponent,
				ButtonArrowComponent,
				BackgroundDexStyleComponent,
				HeaderCurveComponent,
				CardMemberComponent,
				CardFunctionalityComponent,
			],
		}).compileComponents();
	});

	it('Component Header works!', () => {
		const fixture = TestBed.createComponent(LandingComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});
});
