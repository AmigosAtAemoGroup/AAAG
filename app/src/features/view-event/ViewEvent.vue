<template>
  <v-container class="mt-2">
    <v-sheet min-height="70vh" rounded="lg" class="pa-6">
      <v-row>
        <v-col>
          <h2>View Event</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Name *"
            v-model="model.name"
            hide-details
            readonly
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-menu
            ref="startDateMenu"
            v-model="startDateMenu"
            :close-on-content-click="false"
            :return-value.sync="model.startDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.startDate"
                label="Start Date"
                readonly
                v-bind="attrs"
                hide-details
              ></v-text-field>
            </template>
            <v-date-picker v-model="model.startDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="startDateMenu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.startDateMenu.save(model.startDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-col>
          <v-menu
            ref="startTimeMenu"
            v-model="startTimeMenu"
            :close-on-content-click="false"
            :return-value.sync="model.startTime"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.startTime"
                label="Start Time"
                readonly
                v-bind="attrs"
                hide-details
              ></v-text-field>
            </template>
            <v-time-picker v-model="model.startTime" format="24hr" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="startTimeMenu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.startTimeMenu.save(model.startTime)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
      <!--  END DATE TIME -->
      <v-row>
        <v-col>
          <v-menu
            ref="endDateMenu"
            v-model="endDateMenu"
            :close-on-content-click="false"
            :return-value.sync="model.endDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.endDate"
                label="End Date"
                readonly
                v-bind="attrs"
                hide-details
              ></v-text-field>
            </template>
            <v-date-picker v-model="model.endDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="endDateMenu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.endDateMenu.save(model.endDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-col>
          <v-menu
            ref="endTimeMenu"
            v-model="endTimeMenu"
            :close-on-content-click="false"
            :return-value.sync="model.endTime"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.endTime"
                label="End Time"
                readonly
                v-bind="attrs"
                hide-details
              ></v-text-field>
            </template>
            <v-time-picker v-model="model.endTime" format="24hr" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="endTimeMenu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.endTimeMenu.save(model.endTime)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
      <!-- END END DATE TIME -->

      <v-row>
        <v-col>
          <v-checkbox
            v-model="model.recurring"
            label="Recurring"
            hide-details
            readonly
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            label="Location *"
            v-model="model.location"
            hide-details
            readonly
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-textarea
            solo
            label="Description"
            v-model="model.description"
            hide-details
            readonly
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <v-text-field
            label="Minimum Attendees"
            :value="model.minimumAttendees"
            type="number"
            hide-details
            readonly
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <v-text-field
            label="Maximum Attendees"
            :value="model.maximumAttendees"
            type="number"
            hide-details
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import router from "@/router/index";
import { Route, NavigationGuardNext } from "vue-router";
import eventService, { EventModel } from "../EventService";

class CreateEventModel implements EventModel {
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

@Component({
  components: {},
})
export default class CreateEvent extends Vue {
  model: CreateEventModel = new CreateEventModel();
  startDateMenu = false;
  startTimeMenu = false;
  endDateMenu = false;
  endTimeMenu = false;

  get events() {
    return eventService.events;
  }

  mounted() {
    var eventId = this.$route.params.id;
    this.model = eventService.events[Number(eventId)];
  }
}
</script>
