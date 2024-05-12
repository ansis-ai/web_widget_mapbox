/** @odoo-module */

import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { Component, onWillStart, onMounted, useRef } from "@odoo/owl";
import { loadJS, loadCSS } from "@web/core/assets";
import { registry } from "@web/core/registry";

export default class MapBoxField extends Component {

    /**
    * @param {boolean} newValue
    */

    setup() {

        this.mapbox = useRef("mapbox")

        super.setup()
        // console.log('MAPBOX :', this.props.value)

        onMounted(() => {

            mapboxgl.accessToken = 'pk.eyJ1Ijoid3Nsb2gxNjAyMjAiLCJhIjoiY2x3MHZzZ2sxMDV5bjJqbDhvcmFsNmg1OCJ9.PmAFa3GJRhc-zTHuRmnYxw';

            this.value = JSON.parse(this.props.record.data[this.props.name]);

            const map = new mapboxgl.Map({
                container: this.mapbox.el, // container ID
                center: { lat: this.value.location.lat, lng: this.value.location.lng },
                point: { lat: this.value.marker.lat, lng: this.value.marker.lng },
                style: 'mapbox://styles/mapbox/streets-v12',
                zoom: 15 // starting zoom
            });


            // Create a default Marker, colored black, rotated 45 degrees.
            const marker = new mapboxgl.Marker({
                color: 'red',
            })
                .setLngLat({ lat: this.value.marker.lat, lng: this.value.marker.lng })
                .addTo(map);


        }

        );

    }

    onChange(newValue) {
        this.props.update(newValue);
    }

    initMap() {
        console.log('LOADED OK')
    }

}

MapBoxField.template = "web_widget_mapbox.MapBoxField";

MapBoxField.props = {
    ...standardFieldProps,
};
MapBoxField.supportedTypes = ["text"];


export const mapBoxField = {
    component: MapBoxField,
    supportedTypes: ["text"],
};

registry.category("fields").add("mapbox", MapBoxField);
