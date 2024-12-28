import { Routes } from '@angular/router';
import { CreateLinkFormComponent } from './create-link-form/create-link-form.component';
import { LinkReadyComponent } from './link-ready/link-ready.component';
import { RedirectComponent } from './redirect/redirect.component';

export const routes: Routes = [
    {path: "", component: CreateLinkFormComponent},
    {path: "link-ready", component: LinkReadyComponent },
    {path: ":nickname", component: RedirectComponent}
];
