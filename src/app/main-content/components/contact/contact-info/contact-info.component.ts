import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguageServiceService } from '../../../../languageData.services';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent {
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageServiceService,
    private router: Router
  ) {}

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  messageSent = false;

  post = {
    endPoint: 'https://weigert-webdev.de/sendMail.php', //hier noch HTML Adresse eintragen
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.messageSent = true;

            setTimeout(() => {
              this.messageSent = false;
            }, 5000);
          },
          error: (error) => {
            console.error('Error submitting request: ', error);
          },
          complete: () => console.info('Request sent successfully'),
        });
    }
  }

  scrollToPrivacysTop() {
    this.router.navigateByUrl('/privacy').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
