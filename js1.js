var horizontalArr = [];
var verticalArr = [];
var keyArr = [];
var legendColorArr = [];
var legendArray = [];
var colorScaleArr = [];
var myDataSource = new kendo.data.DataSource({
    data: carData,
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

function drawchartChecker() {
    if (horizontalArr.length === 1 || verticalArr.length === 1) {
        drawChart ();
    } else {
        alert ("Hello");
    }
};

function colorScale(value) {
    colorScaleArr = [];
    colorScaleArr.push(value);
    console.log("Color Scale: " + colorScaleArr);
    $("#colorScale").html("Color Scale set to: " + "<strong>" + colorScaleArr + "</strong>");
};

$(document).ready(function () {
    $("tr").click(function () {
        console.log("Hello World");
        alert("hello");
        window.open("http://www.google.com");
    });
});

function drawChart() {
    $("#chart").kendoChart({
        dataSource: myDataSource,
        seriesColors: legendColorArr,
        legend: {
            visible: false,
        },
        seriesDefaults: {
            type: "scatter"
        },
        title: {
            text: horizontalArr[0] + " vs " + verticalArr[0]
        },
        series: [{
            xField: horizontalArr[0],
            yField: verticalArr[0],
        }],
        color: function (point) {
            console.log(point.value);
        },
        yAxis: {
            title: {
                text: verticalArr[0]
            },
        },
        xAxis: {
            labels: {
                rotation: -90,
            },
            title: {
                text: horizontalArr[0]
            },
        },
        seriesClick: function (e) {
            filterGrid(e.value.x);
            console.log(e.dataItem);
        },
        axisLabelClick: function (e) {
            filterGrid(e.value);
            console.log(e.value);
        },
        tooltip: {
            visible: true,
            template: "#= series.xField #: #= value.x #, #= series.yField #: #=value.y #"
        },
        zoomable: true,
        pannable: true,
    });

};

function filterGrid(point) {
    $("#grid").data("kendoGrid").dataSource.filter({
        field: horizontalArr[0],
        operator: "eq",
        value: point
    });
};

$("#clearGridFilter").kendoButton({
    click: function (e) {
        $("#grid").data("kendoGrid").dataSource.filter({});
    }
});

$("#showLegend").kendoButton({
    click: function () {
        var chart = $("#chart").data("kendoChart");
        chart.options.legend.visible = true;
        chart.refresh();
    }
});

$("#hideLegend").kendoButton({
    click: function () {
        var chart = $("#chart").data("kendoChart");
        chart.options.legend.visible = false;
        chart.refresh();
    }
});


$("#dropdownlistVertical").kendoDropDownList({
    dataSource: ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "modelyear"],
    select: function (e) {
        var item = e.item;
        var text = item.text();
        verticalArr = [];
        verticalArr.push(text);
        console.log("vertical Axis: " + verticalArr);
        $("#vertical").html("Dependent Variable (Vertical) set to: " + "<strong>" + verticalArr + "</strong>");
        drawchartChecker() 
    }
});

$("#dropdownlistHorizontal").kendoDropDownList({
    dataSource: ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "modelyear"],
    select: function (e) {
        var item = e.item;
        var text = item.text();
        horizontalArr = [];
        horizontalArr.push(text);
        console.log("horizontal Axis: " + horizontalArr);
        $("#horizontal").html("Independent Variable (Horizontal) set to: " + "<strong>" + horizontalArr + "</strong>");
        drawchartChecker() 
    }
});
/*
$("#dropdownlistColor").kendoDropDownList({
    dataSource: ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "modelyear"],
    select: function (e) {
        var item = e.item;
        var text = item.text();
        colorScaleArr = [];
        colorScaleArr.push(text);
        console.log("Color Scale: " + colorScaleArr);
        $("#colorScale").html("Color Scale set to: " + "<strong>" + colorScaleArr + "</strong>");

    populateArray(text);
}
  });
*/
$("#buttonGroupControlLegend").kendoButtonGroup();

$("#buttonGroupColorScale").kendoButtonGroup();

function onChange(e) {
    var rows = e.sender.select();
    rows.each(function (e) {
        var grid = $("#grid").data("kendoGrid");
        var dataItem = grid.dataItem(this);

        console.log(dataItem);
    })
};


$("#grid").kendoGrid({
    dataSource: myDataSource,
    filterable: true,
    sortable: true,
    groupable: true,
    group: function (e) {
        populateArray(e.groups[0].field);
        colorScale(e.groups[0].field);
    },
    height: 400,
    scrollable: true,
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
    detailTemplate: "<div>MPG: #: mpg #</div><div>Cylinders: #: cylinders #</div><div>Displacement: #: displacement #</div><div>Horsepower: #: horsepower #</div><div>Weight: #: weight #</div><div>Acceleration: #: acceleration #</div><div>Model-year: #: modelyear #</div>",
    selectable: "multiple, row",
});
