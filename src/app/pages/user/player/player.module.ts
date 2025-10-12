import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { PlayerComponent } from './player.component';

const routes: Routes = [
	{
		path: ':id',
		component: PlayerComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [PlayerComponent]
})
export class PlayerModule {}
