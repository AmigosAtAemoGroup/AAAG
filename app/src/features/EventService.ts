//import * as startEvents from "./events.json"; // TODO: not sure what path needs to be

export class EventModel {
  name: string = "";
  startDate: string = "";
  startTime: string = "";
  endDate: string = "";
  endTime: string = "";
  recurring: boolean = false;
  location: string = "";
  description: string = "";
  minimumAttendees: number = 0;
  maximumAttendees: number = 100;
}

class EventService {
  public events: Array<EventModel> = [];

  constructor() {
    var eventJson = localStorage.getItem("events");
    if (eventJson) {
      this.events = JSON.parse(eventJson) || [];
    } else {
      //this.events = JSON.parse(startEvents);
    }
  }

  createEvent(event: EventModel) {
    this.events.push(event);
    localStorage.setItem("events", JSON.stringify(this.events));
  }
}

export default new EventService();