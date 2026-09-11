import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isSending = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSending = true;

      try {
        const response = await fetch('https://formspree.io/f/xppzbgbd', { // <-- Paste your Formspree endpoint here
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(this.contactForm.value)
        });

        if (response.ok) {
          this.submitted = true;
          this.contactForm.reset();
        } else {
          alert('There was a problem sending your message. Please try again.');
        }
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        this.isSending = false;
      }
    }
  }
}
