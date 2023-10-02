import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    const emailUrl = 'https://hkbt.tech/send-email.php'; // Replace with your server URL
    return this.http.post(emailUrl, emailData);
  }
}

