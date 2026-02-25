import { Component,signal } from '@angular/core';
import axios from 'axios';
import { FlightModel } from '../../models/flightModel';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {
        flights=signal<FlightModel[]>([])
    
    constructor(){
        const url="https://flight.pequla.com/api/flight/list?type=departure"
        axios.get(url).then(rsp=>this.flights.set(rsp.data))
    }
}
