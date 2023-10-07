import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    const emailUrl = 'https://kxjmi5reu5ekyhablkpmj76yvu0dsliq.lambda-url.us-west-2.on.aws/'; // Replace with your server URL

    // Customize your headers as needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      , // Add any authorization token if required
    });

    return this.http.post(emailUrl, emailData);
  }
}

