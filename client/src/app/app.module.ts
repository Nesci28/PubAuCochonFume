import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ckeditor4-angular';
import {
  NgbCollapseModule,
  NgbModalModule,
  NgbNavModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { SafePipeModule } from 'safe-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HebergementHebertHotelComponent } from './components/hebergement/hebergement-hebert-hotel/hebergement-hebert-hotel.component';
import { HebergementManoirBecancourComponent } from './components/hebergement/hebergement-manoir-becancour/hebergement-manoir-becancour.component';
import { HebergementComponent } from './components/hebergement/hebergement.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuShowComponent } from './components/menu/menu-show/menu-show.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotreEquipeComponent } from './components/notre-equipe/notre-equipe.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FourOFourComponent } from './components/shared/four-o-four/four-o-four.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ImgOverlayComponent } from './components/shared/img-overlay/img-overlay.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ModalImgComponent } from './components/shared/modal/modal-img/modal-img.component';
import { ModalTextComponent } from './components/shared/modal/modal-text/modal-text.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ToastsContainerComponent } from './components/shared/toast-container/toast-container.component';
import { EditDirective } from './directives/edit.directive';
import { JwtInterceptor } from './interceptors/jwt.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    HebergementComponent,
    ImgOverlayComponent,
    HebergementManoirBecancourComponent,
    HebergementHebertHotelComponent,
    PromotionsComponent,
    NotreEquipeComponent,
    ContactComponent,
    LoginComponent,
    ToastsContainerComponent,
    EditDirective,
    ModalImgComponent,
    ModalTextComponent,
    FourOFourComponent,
    LoadingComponent,
    MenuShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbToastModule,
    NgbNavModule,
    NgbModalModule,
    NgbCollapseModule,
    HttpClientModule,
    NgxTrimDirectiveModule,
    NgImageFullscreenViewModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    AngularCropperjsModule,
    NgxExtendedPdfViewerModule,
    SafePipeModule,
    NgJsonEditorModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
