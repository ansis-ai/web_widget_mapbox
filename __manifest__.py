# Copyright 2024 ANSIS Pte Ltd
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).

{
    "name": "Web Widget MapBox",
    "summary": "This widget allows to display map using MapBox library",
    "version": "16.0.1.0.0",
    "category": "Hidden",
    "license": "LGPL-3",
    "author": "ANSIS Pte Ltd, Wilson Loh",    
    "maintainer": "ANSIS Pte Ltd, Wilson Lo",
    "website": "https://github.com/wilsonlohws/web",
    "depends": [
        "web", 
    ],
    "data": [
    ],
    "qweb": [
        # "static/src/xml/base.xml",
    ],
    'assets': {
        'web.assets_backend': [
            'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js',
            'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css',
            'web_widget_mapbox/static/src/components/*/*.js',
            'web_widget_mapbox/static/src/components/*/*.xml',
            'web_widget_mapbox/static/src/components/*/*.scss',
        ],
    },
    "external_dependencies": {
    },
    "auto_install": False,
}
