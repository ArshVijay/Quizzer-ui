import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionSetNavComponent } from './question-set-nav/question-set-nav.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'QuestionSetNav', component: QuestionSetNavComponent},
  {path: 'Question', component: QuestionComponent},
  {path: 'Score', component: ScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
