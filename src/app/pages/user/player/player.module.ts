import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { PlayerComponent } from './player.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PlayerComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [PlayerComponent]
})
export class PlayerModule {}
