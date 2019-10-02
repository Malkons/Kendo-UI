/*
var carData = [
    {
        "mpg": 18,
        "cylinders": 8,
        "displacement": 307,
        "horsepower": 130,
        "weight": 3504,
        "acceleration": 12,
        "modelyear": 70
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 165,
        "weight": 3693,
        "acceleration": 11.5,
        "modelyear": 70
    },
    {
        "mpg": 18,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 3436,
        "acceleration": 11,
        "modelyear": 70
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 150,
        "weight": 3433,
        "acceleration": 12,
        "modelyear": 70
    },
    {
        "mpg": 17,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 140,
        "weight": 3449,
        "acceleration": 10.5,
        "modelyear": 70
    }
]
*/
var myDataSource = new kendo.data.DataSource({
    data: carData,
    pageSize: 10,
    schema: {
        model: {
            field: {
                mpg: { type: "number" },
                cylinders: { type: "number" },
                displacement: { type: "number" },
                horsepower: { type: "number" },
                weight: { type: "number" },
                acceleration: { type: "number" },
                modelyear: { type: "number" },
            }
        }
    }
});



$("#grid").kendoGrid({
    columns: [
        {
            title: "MPG",
            field: "mpg"
        },
        {
            title: "Cylinders",
            field: "cylinders"
        },
        {
            title: "displacement",
            field: "displacement"
        },
        {
            title: "horsepower",
            field: "horsepower"
        },
        {
            title: "weight",
            field: "weight"
        },
        {
            title: "acceleration",
            field: "acceleration"
        },
        {
            title: "model-year",
            field: "modelyear"
        }],

    dataSource: myDataSource,
    filterable: true,
    sortable: true,
    groupable: true,
    pageable: true,
});

$("#chart").kendoChart({
    dataSource: myDataSource,
    seriesDefaults: { type: "line" },
    series: [
        {
            name: "MPG",
            field: "mpg", 
        },
    ],
   
    catagoryAxis: {
        field: "mpg"
    },

    valueAxis: {
        field: "horsepower"
    }
});