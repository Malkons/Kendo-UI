function getMpgColor(mpg) {
    if (mpg > 60) {
        return "#090";
    } else if (mpg < 30) {
        return "#f00";
    } else {
        return "#00c";
    }
}

var testArr = [];

function verticalAxis(value) {
    testArr = [];
    testArr.push(value);
    console.log("Test Axis: " + testArr);
};


var gridDataSource = new kendo.data.DataSource({
    data: carData,
    schema: {
        model: {
            fields: {
                mpg: { type: "number" },
                cylinders: { type: "number" },
                displacement: { type: "number" },
                horsepower: { type: "number" },
                weight: { type: "number" },
                acceleration: { type: "number" },
                modelyear: { type: "number" }
            }
        }
    },
    pageSize: 10,
    sort: {
        field: "mpg",
        dir: "asc"
    }
});

//Kendo Chart
+


    $("#ordersChart").kendoChart({
        dataSource: {
            data: [],
            sort: {
                field: "mpg",
                dir: "asc"
            }
        },
        title: {
            text: "mpg vs horsepower",
            font: "20px sans-serif",
            color: "#ff6800"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            field: "mpg",
            categoryField: "horsepower"
        }
        ],
        seriesClick: function (e) {
            filterGrid(e.category);
        },
        axisLabelClick: function (e) {
            filterGrid(e.value);
        },
        categoryAxis: {
            labels: {
                rotation: -45,
                visual: function (e) {
                    var visual = e.createVisual();
                    visual.options.cursor = "default"; return visual;
                }
            },
            title: {
                text: "horsepower"
            }
        },
        valueAxis: {
            title: {
                text: "mpg"
            },
            labels: {
                format: "{0:n0}"
            }
        },
        tooltip: {
            visible: true,
            template: "#= category #: #= value # mpg"
        }
    });


function filterGrid(horsepower) {
    $("#ordersGrid").data("kendoGrid").dataSource.filter({
        field: "horsepower",
        operator: "eq",
        value: horsepower
    });
};   

//Kendo Button
$("#clearGridFilter").kendoButton({
    click: function (e) {
        $("#ordersGrid").data("kendoGrid").dataSource.filter({});
    }
});

//Kendo Grid
$("#ordersGrid").kendoGrid({
    dataSource: gridDataSource,
    dataBound: function (e) {
        var grid = e.sender,
            chart = $("#ordersChart").data("kendoChart");

        chart.dataSource.data(grid.dataSource.data());
        grid.unbind("dataBound");
    },
    height: 400,
    pageable: true,
    sortable: true,
    filterable: true,
    groupable: true,
    columns: [{
        field: "mpg",
        title: "MPG",

    }, {
        field: "cylinders",
        title: "Cylinders",

    }, {
        field: "displacement",
        title: "Displacement",

    }, {
        field: "horsepower",
        title: "Horsepower"
    }, {
        field: "weight",
        title: "Weight"
    }, {
        field: "acceleration",
        title: "Acceleration"
    }, {
        field: "modelyear",
        title: "Model-Year"
    }
    ]
});
