import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TournamentsComponent } from './tournaments.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: TournamentsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [TournamentsComponent]
})
export class TournamentsModule {}
