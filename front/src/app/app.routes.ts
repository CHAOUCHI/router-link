import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewGuideComponent } from './components/new-guide/new-guide.component';
import { GuideListComponent } from './components/guide-list/guide-list.component';
import { SingleGuideDetailsComponent } from './components/single-guide-details/single-guide-details.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path : 'guides/:id', component: SingleGuideDetailsComponent },
    { path : 'guides', component: GuideListComponent },
    { path : 'create', component: NewGuideComponent },
    { path : 'signin', component: SigninComponent },
    { path : 'signup', component: SignupComponent },
    { path : '', component: HomeComponent },
];
