import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.retrieveReviews();
  }

  retrieveReviews(): void {
    this.feedbackService.getAll().subscribe(
      (data) => {
        this.feedbacks = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
