import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((page) => page.PagesModule),
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
