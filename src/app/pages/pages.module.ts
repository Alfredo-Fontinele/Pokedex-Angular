import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Declarations
import { PageRoutingModule } from './pages-routing.module'

//Pages
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, PageRoutingModule, SharedModule],
})
export class PagesModule {}
