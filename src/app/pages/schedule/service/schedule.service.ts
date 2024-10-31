import { Injectable } from "@angular/core";


export interface DayAppointments {
  date: string;
  appointments: Array<string | null>
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  getAppointments(date: Date): Array<string | null> {
    const storageString = window.localStorage.getItem('appointments')
    if (!storageString) {
      return new Array(24)
    }

    const storage: DayAppointments[] = JSON.parse(storageString)

    const appointments = storage.find((item: DayAppointments) => item.date === date.toDateString())?.appointments

    if (!appointments) {
      return new Array(24)
    }

    return appointments
  }

  saveAppointments(dayAppointments: DayAppointments): void {
    const isAppointment = dayAppointments?.appointments.some(item => item)

    const storageString = window.localStorage.getItem('appointments')

    if (storageString) {
      const storage: DayAppointments[] = JSON.parse(storageString)
      let newStorage: DayAppointments[] = storage.filter(item => item.date !== dayAppointments.date)

      if (isAppointment) {
        newStorage = [...newStorage, dayAppointments]
      }

      const newStorageString = JSON.stringify(newStorage)
      window.localStorage.setItem('appointments', newStorageString)

    } else if(isAppointment) {
      const storage: DayAppointments[] = [dayAppointments]
      const newStorageString = JSON.stringify(storage)
      window.localStorage.setItem('appointments', newStorageString)
    }
  }
}
