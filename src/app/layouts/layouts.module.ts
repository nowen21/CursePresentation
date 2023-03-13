import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Iportafolio/components/profile/profile.component';
import { NavbarComponent } from './Iportafolio/components/navbar/navbar.component';
import { PresentacionComponent } from './Iportafolio/components/presentacion/presentacion.component';
import { AboutComponent } from './Iportafolio/components/about/about.component';
import { FactsComponent } from './Iportafolio/components/facts/facts.component';
import { SkillsComponent } from './Iportafolio/components/skills/skills.component';
import { ResumeComponent } from './Iportafolio/components/resume/resume.component';
import { PortfolioComponent } from './Iportafolio/components/portfolio/portfolio.component';
import { ServicesComponent } from './Iportafolio/components/services/services.component';
import { TestimonialsComponent } from './Iportafolio/components/testimonials/testimonials.component';
import { ContactComponent } from './Iportafolio/components/contact/contact.component';
import { FooterComponent } from './Iportafolio/components/footer/footer.component';



@NgModule({
  declarations: [
    ProfileComponent,
    NavbarComponent,
    PresentacionComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ProfileComponent,
    NavbarComponent,
    PresentacionComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
