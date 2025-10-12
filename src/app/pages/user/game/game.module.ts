import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { GameComponent } from './game.component';

const routes: Routes = [
	{
		path: '',
		component: GameComponent
	},
	{
		path: ':_id',
		component: GameComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [GameComponent]
})
export class GameModule {}
