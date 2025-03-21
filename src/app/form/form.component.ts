
import { Component,  ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentStateService } from '../component-state.service';
@Component({
  selector: 'app-form',
  styleUrl: './form.component.css',
  standalone : true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `<section class="startform" *ngIf="stateService.getActive() === 'component1'">
  <div class="startform-inputs">
      <span style="font-size: 1.3rem;">Select Employer</span>
      <select class="startform-inputs-select" id="employer" name="">
      </select>
      
      <span style="font-size: 1.3rem;">Enter Amount</span>
      <input class="startform-inputs-input" id="amount" name="">
      
      <span style="font-size: 1.3rem;">Duration</span>
      <select class="startform-inputs-select" id="duration" name="">
      </select>
  </div>
  
  <div>
  </div>
</section>
<section style="display: flex; flex-direction: column; gap: 90px;" *ngIf="stateService.getActive() === 'component2'">
  <div class="get-a-loan">
    <div style="color: #000000; font-size: 24px; font-weight: 700;">Payment Plan</div>
    <div style="font-size: 20px;">
      You repayment on a
      <span style="font-size: 32px; color: #39B7E9; font-weight: 700;">N150,000</span>
      loan is
      <span style="font-size: 32px; color: #39B7E9; font-weight: 700;">N24,000</span>
      per month for
      <span style="font-size: 32px; color: #39B7E9; font-weight: 700;">6 months</span>
    </div>
    <div style="text-decoration: underline; color: #39B7E9; cursor: pointer;">Tap here to see full details</div>
  </div>
  <div></div>
</section>
<div class="payment-plan"  *ngIf="stateService.getActive() === 'component3'">
  <div style="color: #000000; font-size: 24px; font-weight: 700;">Payment Plan</div>
  <div style="background-color: #39B7E933; display: flex; flex-direction: column; padding: 40px 40px; border-radius: 5px; justify-content: space-between; gap: 100px;">
    <section style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;" class="loan-options-container">
      <div class="loan-options">
        <span class="loan-titles">Loan Amount</span>
        <span class="loan-specifics">N150,000</span>
      </div>
      <div class="loan-options">
        <span class="loan-titles">Repayment Date</span>
        <span class="loan-specifics">31-07-2024</span>
      </div>
    </section>
    <section style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;" class="loan-options-container">
      <div class="loan-options">
        <span class="loan-titles">Interest Rate</span>
        <span class="loan-specifics">12.5%</span>
      </div>
      <hr class="styled-line" />
      <div class="loan-options">
        <span class="loan-titles">Loan Repayment</span>
        <span class="loan-specifics">N24,000</span>
      </div>
    </section>
  </div>
</div>
  <div class='button-container'>
<span
*ngIf="stateService.getActive() === 'component2'"
class='back-button' 
style="color: #C42222; cursor: pointer"
(click)="backButton()">Back</span> 
<span
*ngIf="stateService.getActive() === 'component3'"
class='back-button' 
style="color: #C42222; cursor: pointer"
(click)="backButton()">Back</span>
<button class="general-continue-button" (click)="changeContent()">Continue</button>
</div>
`
})
export class FormComponent {
  constructor(public stateService: ComponentStateService) {}

  backButton() {
    if (this.stateService.getActive() === 'component2') {
      this.stateService.setActive('component1');
    } else if (this.stateService.getActive() === 'component3') {
      this.stateService.setActive('component2');
    }
  }

  changeContent() {
    if (this.stateService.getActive() === 'component1') {
      this.stateService.setActive('component2');
    } else if (this.stateService.getActive() === 'component2') {
      this.stateService.setActive('component3');
    } else {
      this.stateService.setActive('component1'); // Loop back to component1
    }
  }
}

