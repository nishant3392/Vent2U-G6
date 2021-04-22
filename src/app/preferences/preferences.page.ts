import { Component, OnInit } from '@angular/core';

import { Preference } from 'src/app/models/preference.model';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
  preferences: Preference[];

  constructor(private preferenceService: PreferenceService) {}

  ngOnInit(): void {
    this.retrievePreferences();
  }

  retrievePreferences(): void {
    this.preferenceService.getAll().subscribe(
      (data) => {
        this.preferences = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
