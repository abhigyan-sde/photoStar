import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-availability',
  imports: [CommonModule],
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css'
})
export class AvailabilityComponent {
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();

  minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  maxDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() + 11, 1);

  navigateMonth(offset: number) {
    const newMonth = this.currentMonth + offset;
    const newDate = new Date(this.currentYear, newMonth, 1);

    if (newDate >= this.minDate && newDate <= this.maxDate) {
      this.currentMonth = newDate.getMonth();
      this.currentYear = newDate.getFullYear();
    }
  }

  // Mock: List of available dates in YYYY-MM-DD format
  availableDates: Set<string> = new Set([
    '2025-05-10', '2025-05-12', '2025-05-15', '2025-05-18',
    '2025-05-21', '2025-05-25'
  ]);

  getCalendarDays(): { date: Date, isAvailable: boolean }[] {
    const days: { date: Date, isAvailable: boolean }[] = [];

    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const offset = firstDay.getDay(); // 0 = Sunday

    for (let i = 0; i < offset; i++) {
      days.push({ date: null as any, isAvailable: false }); // empty cells
    }

    for (let d = 1; d <= totalDays; d++) {
      const date = new Date(this.currentYear, this.currentMonth, d);
      const dateStr = date.toISOString().split('T')[0];
      const isAvailable = this.availableDates.has(dateStr);
      days.push({ date, isAvailable });
    }

    return days;
  }

  onDateClick(date: Date) {
    if (!date) return;
    const dateStr = date.toISOString().split('T')[0];
    if (this.availableDates.has(dateStr)) {
      alert(`You selected ${dateStr}`);
    }
  }

  isPrevDisabled(): boolean {
    const prevDate = new Date(this.currentYear, this.currentMonth - 1, 1);
    return prevDate < this.minDate;
  }
  
  isNextDisabled(): boolean {
    const nextDate = new Date(this.currentYear, this.currentMonth + 1, 1);
    return nextDate > this.maxDate;
  }
  
  get displayedDate(): Date {
    return new Date(this.currentYear, this.currentMonth);
  }
  
}
