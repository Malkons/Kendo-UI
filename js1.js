var horizontalArr = [];
var verticalArr = [];
var keyArr = [];
var legendColorArr = [];
var legendArray = [];
var colorScaleArr = [];

var pickDataItemRelationshipObj = {
    mpg: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, mpg: #= dataItem.mpg # ",
    cylinders: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, cylinders: #= dataItem.cylinders # ",
    displacement: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, displacement: #= dataItem.displacement #",
    horsepower: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, horsepower: #= dataItem.horsepower # ",
    weight: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, weight: #= dataItem.weight # ",
    acceleration: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, acceleration: #= dataItem.acceleration # ",
    modelyear: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, model-year: #= dataItem.modelyear # "
};

var chosenDataItem = [];
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
    },

});

function toolTip() {
    chosenDataItem = [];
    var userColorChoice = colorScaleArr[0];
    $.each(pickDataItemRelationshipObj, function (key, datavalue) {
        if (key === userColorChoice) {
            chosenDataItem.push(datavalue)
            console.log("template to be used: " + chosenDataItem);
            
        }
    });
}

function drawchartChecker() {
    if (horizontalArr.length === 1 || verticalArr.length === 1) {
        drawChart();
    } else {
        alert("Choose a second variable");
    }
};

$(document).ready(function () {
    $("#grid").on("click", ".table-cell", function () {
        console.log("Hello World");
        alert("We are now opening a new Window to www.google.com");
        window.open("http://www.google.com");

    });
});
////////////////////////////////////////////Chart//////////////////////////////////////////////////
function drawChart() {
    $("#chart").kendoChart({
        dataSource: myDataSource,
        seriesColors: legendColorArr,
        legend: {
            visible: false,
            position: "right",
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
            window.open("http://www.google.com");
            console.log(e.dataItem);

        },
        axisLabelClick: function (e) {
            filterGrid(e.value);
            console.log(e.value);
        },
        tooltip: {
            visible: true,
            template: chosenDataItem[0]
        },
        zoomable: true,
        pannable: true,
    });

};
//////////////////////////////////Filters//////////////////////////////////////////////////
function filterGrid(point) {
    $("#grid").data("kendoGrid").dataSource.filter({
        field: horizontalArr[0],
        operator: "eq",
        value: point
    });
};

///////////////////////////////////////////Buttons//////////////////////////////////////////
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

$("#ungroup").kendoButton({
    click: function () {
        var grid = $('#grid').data('kendoGrid');
        grid.dataSource.group([]);
    }
});


//////////////////////////////////////////////////////Dropdowns///////////////////////////////////////////////
$("#dropdownlistVertical").kendoDropDownList({
    dataSource: ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "modelyear"],
    select: function (e) {
        var item = e.item;
        var text = item.text();
        verticalArr = [];
        verticalArr.push(text);
        console.log("vertical Axis: " + verticalArr);
        $("#vertical").html("Dependent Variable (Vertical) set to: " + "<strong>" + verticalArr + "</strong>");
        drawchartChecker();
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
        drawchartChecker();
    }
});

$("#dropdownlistColor").kendoDropDownList({
    dataSource: ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "modelyear"],
    select: function (e) {
        var item = e.item;
        var text = item.text();
        colorScaleArr = [];
        colorScaleArr.push(text);
        console.log("Color Scale: " + colorScaleArr);
        $("#colorScale").html("Color Scale set to: " + "<strong>" + colorScaleArr + "</strong>");
        $("#chart").data("kendoChart").dataSource.group({ field: text });
        populateArray(text);
        toolTip();
        drawChart();

    }
});

///////////////////////////////////////Button Control Groups//////////////////////////////////
$("#buttonGroupControlLegend").kendoButtonGroup();

////////////////////////////////////////////Range Sliders////////////////////////////////////////////
$(document).ready(function () {
    var modelYearSlider = $("#rangeSliderModelYear").kendoRangeSlider({
        min: 70,
        max: 81,
        orientation: "horizontal",
        smallStep: 1,
        largeStep: 10,
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;

            filters.push({ field: 'modelyear', operator: 'gte', value: modelYearSlider.values()[0] });
            filters.push({ field: 'modelyear', operator: 'lte', value: modelYearSlider.values()[1] });
            filters.push({ field: 'acceleration', operator: 'gte', value: accelerationSlider.values()[0] });
            filters.push({ field: 'acceleration', operator: 'lte', value: accelerationSlider.values()[1] });
            filters.push({ field: 'weight', operator: 'gte', value: weightSlider.values()[0] });
            filters.push({ field: 'weight', operator: 'lte', value: weightSlider.values()[1] });
            filters.push({ field: 'horsepower', operator: 'gte', value: horsepowerSlider.values()[0] });
            filters.push({ field: 'horsepower', operator: 'lte', value: horsepowerSlider.values()[1] });
            filters.push({ field: 'displacement', operator: 'gte', value: displacementSlider.values()[0] });
            filters.push({ field: 'displacement', operator: 'lte', value: displacementSlider.values()[1] });
            filters.push({ field: 'cylinders', operator: 'gte', value: cylindersSlider.values()[0] });
            filters.push({ field: 'cylinders', operator: 'lte', value: cylindersSlider.values()[1] });
            filters.push({ field: 'mpg', operator: 'gte', value: mpgSlider.values()[0] });
            filters.push({ field: 'mpg', operator: 'lte', value: mpgSlider.values()[1] });

            filter = {
                logic: "and",
                filters: filters
            };

            grid.dataSource.filter(filter);
            console.log(legendArray);
        }
    }).data("kendoRangeSlider");

    var accelerationSlider = $("#rangeSliderAcceleration").kendoRangeSlider({
        min: 8,
        max: 24.8,
        orientation: "horizontal",
        smallStep: 1,
        largeStep: 10,
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;

            filters.push({ field: 'modelyear', operator: 'gte', value: modelYearSlider.values()[0] });
            filters.push({ field: 'modelyear', operator: 'lte', value: modelYearSlider.values()[1] });
            filters.push({ field: 'acceleration', operator: 'gte', value: accelerationSlider.values()[0] });
            filters.push({ field: 'acceleration', operator: 'lte', value: accelerationSlider.values()[1] });
            filters.push({ field: 'weight', operator: 'gte', value: weightSlider.values()[0] });
            filters.push({ field: 'weight', operator: 'lte', value: weightSlider.values()[1] });
            filters.push({ field: 'horsepower', operator: 'gte', value: horsepowerSlider.values()[0] });
            filters.push({ field: 'horsepower', operator: 'lte', value: horsepowerSlider.values()[1] });
            filters.push({ field: 'displacement', operator: 'gte', value: displacementSlider.values()[0] });
            filters.push({ field: 'displacement', operator: 'lte', value: displacementSlider.values()[1] });
            filters.push({ field: 'cylinders', operator: 'gte', value: cylindersSlider.values()[0] });
            filters.push({ field: 'cylinders', operator: 'lte', value: cylindersSlider.values()[1] });
            filters.push({ field: 'mpg', operator: 'gte', value: mpgSlider.values()[0] });
            filters.push({ field: 'mpg', operator: 'lte', value: mpgSlider.values()[1] });

            filter = {
                logic: "and",
                filters: filters
            };

            grid.dataSource.filter(filter);
        }
    }).data("kendoRangeSlider");

    var weightSlider = $("#rangeSliderWeight").kendoRangeSlider({
        min: 1800,
        max: 4360,
        orientation: "horizontal",
        smallStep: 50,
        largeStep: 500,
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;

            filters.push({ field: 'modelyear', operator: 'gte', value: modelYearSlider.values()[0] });
            filters.push({ field: 'modelyear', operator: 'lte', value: modelYearSlider.values()[1] });
            filters.push({ field: 'acceleration', operator: 'gte', value: accelerationSlider.values()[0] });
            filters.push({ field: 'acceleration', operator: 'lte', value: accelerationSlider.values()[1] });
            filters.push({ field: 'weight', operator: 'gte', value: weightSlider.values()[0] });
            filters.push({ field: 'weight', operator: 'lte', value: weightSlider.values()[1] });
            filters.push({ field: 'horsepower', operator: 'gte', value: horsepowerSlider.values()[0] });
            filters.push({ field: 'horsepower', operator: 'lte', value: horsepowerSlider.values()[1] });
            filters.push({ field: 'displacement', operator: 'gte', value: displacementSlider.values()[0] });
            filters.push({ field: 'displacement', operator: 'lte', value: displacementSlider.values()[1] });
            filters.push({ field: 'cylinders', operator: 'gte', value: cylindersSlider.values()[0] });
            filters.push({ field: 'cylinders', operator: 'lte', value: cylindersSlider.values()[1] });
            filters.push({ field: 'mpg', operator: 'gte', value: mpgSlider.values()[0] });
            filters.push({ field: 'mpg', operator: 'lte', value: mpgSlider.values()[1] });

            filter = {
                logic: "and",
                filters: filters
            };

            grid.dataSource.filter(filter);
        }
    }).data("kendoRangeSlider");

    var horsepowerSlider = $("#rangeSliderHorsepower").kendoRangeSlider({
        min: 46,
        max: 230,
        orientation: "horizontal",
        smallStep: 10,
        largeStep: 50,
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;

            filters.push({ field: 'modelyear', operator: 'gte', value: modelYearSlider.values()[0] });
            filters.push({ field: 'modelyear', operator: 'lte', value: modelYearSlider.values()[1] });
            filters.push({ field: 'acceleration', operator: 'gte', value: accelerationSlider.values()[0] });
            filters.push({ field: 'acceleration', operator: 'lte', value: accelerationSlider.values()[1] });
            filters.push({ field: 'weight', operator: 'gte', value: weightSlider.values()[0] });
            filters.push({ field: 'weight', operator: 'lte', value: weightSlider.values()[1] });
            filters.push({ field: 'horsepower', operator: 'gte', value: horsepowerSlider.values()[0] });
            filters.push({ field: 'horsepower', operator: 'lte', value: horsepowerSlider.values()[1] });
            filters.push({ field: 'displacement', operator: 'gte', value: displacementSlider.values()[0] });
            filters.push({ field: 'displacement', operator: 'lte', value: displacementSlider.values()[1] });
            filters.push({ field: 'cylinders', operator: 'gte', value: cylindersSlider.values()[0] });
            filters.push({ field: 'cylinders', operator: 'lte', value: cylindersSlider.values()[1] });
            filters.push({ field: 'mpg', operator: 'gte', value: mpgSlider.values()[0] });
            filters.push({ field: 'mpg', operator: 'lte', value: mpgSlider.values()[1] });

            filter = {
                logic: "and",
                filters: filters
            };

            grid.dataSource.filter(filter);
        }
    }).data("kendoRangeSlider");

    var displacementSlider = $("#rangeSliderDisplacement").kendoRangeSlider({
        min: 68,
        max: 455,
        orientation: "horizontal",
        smallStep: 5,
        largeStep: 100,
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;

            filters.push({ field: 'modelyear', operator: 'gte', value: modelYearSlider.values()[0] });
            filters.push({ field: 'modelyear', operator: 'lte', value: modelYearSlider.values()[1] });
            filters.push({ field: 'acceleration', operator: 'gte', value: accelerationSlider.values()[0] });
            filters.push({ field: 'acceleration', operator: 'lte', value: accelerationSlider.values()[1] });
            filters.push({ field: 'weight', operator: 'gte', value: weightSlider.values()[0] });
            filters.push({ field: 'weight', operator: 'lte', value: weightSlider.values()[1] });
            filters.push({ field: 'horsepower', operator: 'gte', value: horsepowerSlider.values()[0] });
            filters.push({ field: 'horsepower', operator: 'lte', value: horsepowerSlider.values()[1] });
            filters.push({ field: 'displacement', operator: 'gte', value: displacementSlider.values()[0] });
            filters.push({ field: 'displacement', operator: 'lte', value: displacementSlider.values()[1] });
            filters.push({ field: 'cylinders', operator: 'gte', value: cylindersSlider.values()[0] });
            filters.push({ field: 'cylinders', operator: 'lte', value: cylindersSlider.values()[1] });
            filters.push({ field: 'mpg', operator: 'gte', value: mpgSlider.values()[0] });
            filters.push({ field: 'mpg', operator: 'lte', value: mpgSlider.values()[1] });

            filter = {
                logic: "and",
                filters: filters
            };

            grid.dataSource.filter(filter);
        }
    }).data("kendoRangeSlider");

    var cylindersSlider = $("#rangeSliderCylinders").kendoRangeSlider({
        min: 3,
        max: 8,
        orientation: "horizontal",
        smallStep: 1,
        largeStep: 10,
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;

            filters.push({ field: 'modelyear', operator: 'gte', value: modelYearSlider.values()[0] });
            filters.push({ field: 'modelyear', operator: 'lte', value: modelYearSlider.values()[1] });
            filters.push({ field: 'acceleration', operator: 'gte', value: accelerationSlider.values()[0] });
            filters.push({ field: 'acceleration', operator: 'lte', value: accelerationSlider.values()[1] });
            filters.push({ field: 'weight', operator: 'gte', value: weightSlider.values()[0] });
            filters.push({ field: 'weight', operator: 'lte', value: weightSlider.values()[1] });
            filters.push({ field: 'horsepower', operator: 'gte', value: horsepowerSlider.values()[0] });
            filters.push({ field: 'horsepower', operator: 'lte', value: horsepowerSlider.values()[1] });
            filters.push({ field: 'displacement', operator: 'gte', value: displacementSlider.values()[0] });
            filters.push({ field: 'displacement', operator: 'lte', value: displacementSlider.values()[1] });
            filters.push({ field: 'cylinders', operator: 'gte', value: cylindersSlider.values()[0] });
            filters.push({ field: 'cylinders', operator: 'lte', value: cylindersSlider.values()[1] });
            filters.push({ field: 'mpg', operator: 'gte', value: mpgSlider.values()[0] });
            filters.push({ field: 'mpg', operator: 'lte', value: mpgSlider.values()[1] });

            filter = {
                logic: "and",
                filters: filters
            };

            grid.dataSource.filter(filter);
        }
    }).data("kendoRangeSlider");

    var mpgSlider = $("#rangeSliderMpg").kendoRangeSlider({
        min: 9,
        max: 46.6,
        orientation: "horizontal",
        smallStep: 1,
        largeStep: 10,
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;

            filters.push({ field: 'modelyear', operator: 'gte', value: modelYearSlider.values()[0] });
            filters.push({ field: 'modelyear', operator: 'lte', value: modelYearSlider.values()[1] });
            filters.push({ field: 'acceleration', operator: 'gte', value: accelerationSlider.values()[0] });
            filters.push({ field: 'acceleration', operator: 'lte', value: accelerationSlider.values()[1] });
            filters.push({ field: 'weight', operator: 'gte', value: weightSlider.values()[0] });
            filters.push({ field: 'weight', operator: 'lte', value: weightSlider.values()[1] });
            filters.push({ field: 'horsepower', operator: 'gte', value: horsepowerSlider.values()[0] });
            filters.push({ field: 'horsepower', operator: 'lte', value: horsepowerSlider.values()[1] });
            filters.push({ field: 'displacement', operator: 'gte', value: displacementSlider.values()[0] });
            filters.push({ field: 'displacement', operator: 'lte', value: displacementSlider.values()[1] });
            filters.push({ field: 'cylinders', operator: 'gte', value: cylindersSlider.values()[0] });
            filters.push({ field: 'cylinders', operator: 'lte', value: cylindersSlider.values()[1] });
            filters.push({ field: 'mpg', operator: 'gte', value: mpgSlider.values()[0] });
            filters.push({ field: 'mpg', operator: 'lte', value: mpgSlider.values()[1] });

            filter = {
                logic: "and",
                filters: filters
            };

            grid.dataSource.filter(filter);
        }
    }).data("kendoRangeSlider");
});



////////////////////////////////////////Grid////////////////////////////////////////
$("#grid").kendoGrid({
    dataSource: myDataSource,
    filterable: true,
    sortable: true,
    reorderable: true,
    mobile: "phone",
    toolbar: ["search"],
    search: {
        fields: ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "modelyear"],
    },
    groupable: true,
    group: function (e) {
        populateArray(e.groups[0].field);
        colorScale(e.groups[0].field);
        console.log(legendColorArr);
    },
    height: 400,
    scrollable: true,
    columns: [
        {
            title: "MPG",
            field: "mpg",
            attributes: {
                "class": "table-cell",
            },
        },
        {
            title: "Cylinders",
            field: "cylinders",
            attributes: {
                "class": "table-cell",
            },
        },
        {
            title: "displacement",
            field: "displacement",
            attributes: {
                "class": "table-cell",
            },
        },
        {
            title: "horsepower",
            field: "horsepower",
            attributes: {
                "class": "table-cell",
            },
        },
        {
            title: "weight",
            field: "weight",
            attributes: {
                "class": "table-cell",
            },
        },
        {
            title: "acceleration",
            field: "acceleration",
            attributes: {
                "class": "table-cell",
            },
        },
        {
            title: "model-year",
            field: "modelyear",
            attributes: {
                "class": "table-cell",
            },
        }],
    detailTemplate: "<div>MPG: #: mpg #</div><div>Cylinders: #: cylinders #</div><div>Displacement: #: displacement #</div><div>Horsepower: #: horsepower #</div><div>Weight: #: weight #</div><div>Acceleration: #: acceleration #</div><div>Model-year: #: modelyear #</div>",
    selectable: "multiple, row",
});
