import * as startAvailabilities from "availabilities.json"; // TODO: not sure what path needs to be

export class AvailabilityModel {
  startDate: string = "";
  startTime: string = "";
  recurrence: string = "";
}

class AvailabilityService {
  public availabilities: Array<AvailabilityModel> = [];

  constructor() {
    var availabilityJson = localStorage.getItem("availabilities");
    if (availabilityJson) {
      this.availabilities = JSON.parse(availabilityJson) || [];
    } else {
      this.availabilities = JSON.parse(startAvailabilities);
    }
  }

  createAvailability(availability: AvailabilityModel) {
    this.availabilities.push(availability);
    localStorage.setItem("availabilities", JSON.stringify(this.availabilities));
  }
}

export default new AvailabilityService();