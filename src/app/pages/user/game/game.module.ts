import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { GameComponent } from './game.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: GameComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [GameComponent]
})
export class GameModule {}
