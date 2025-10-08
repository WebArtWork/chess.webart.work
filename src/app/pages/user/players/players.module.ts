import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { PlayersComponent } from './players.component';

const routes: Routes = [
	{
		path: '',
		component: PlayersComponent
	},
	{
		path: 'tournament/:id',
		component: PlayersComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [PlayersComponent]
})
export class PlayersModule {}
