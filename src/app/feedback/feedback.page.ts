import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Feedback } from '../models/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedback: Feedback = {
    uname: '',
    description: '',
  };
  submitted = false;

  constructor(
    private feedbackService: FeedbackService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    const data = {
      uname: this.feedback.uname,
      description: this.feedback.description,
    };

    this.feedbackService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/home']);
  }
}
