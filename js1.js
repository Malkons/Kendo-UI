// arrays that hold the info to be used in contruction of the chart
var horizontalArr = []; //populated by the dropdown list
var verticalArr = []; //populated by the dropdown list
var legendColorArr = []; //used by the populateArray function and createColorArray function in js2.js
var legendArray = []; //used by the populateArray function in js2.js
var colorScaleArr = []; //populated by the dropdown list

// template object, injects the template to be used in the charts tooptip
var pickDataItemRelationshipObj = {
    mpg: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, mpg: #= dataItem.mpg # ",
    cylinders: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, cylinders: #= dataItem.cylinders # ",
    displacement: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, displacement: #= dataItem.displacement #",
    horsepower: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, horsepower: #= dataItem.horsepower # ",
    weight: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, weight: #= dataItem.weight # ",
    acceleration: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, acceleration: #= dataItem.acceleration # ",
    modelyear: "#= series.xField #: #= value.x #, #= series.yField #: #= value.y #, model-year: #= dataItem.modelyear # "
};

// kendo's data set up, defines data to be used and data type
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
                make: { type: "string" }
            }
        }
    },

});

// this function uses the tooltip object, picks which template to use based on the value in the colorscaleArr array
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

// when the conditional is set to && will have an alert pop up telling the user to choose a second variable
function drawchartChecker() {
    if (horizontalArr.length === 1 || verticalArr.length === 1) {
        drawChart();
    } else {
        alert("Choose a second variable");
    }
};

// when ever a user clicks a cell in the kendo grid, this function will fire and a new window will open
$(document).ready(function () {
    $("#grid").on("click", ".table-cell", function () {
        console.log("Hello World");
        alert("We are now opening a new Window to www.google.com");
        window.open("http://www.google.com");

    });
});

////////////////////////////////////////////Chart//////////////////////////////////////////////////

//defines the chart perameters
function drawChart() {
    $("#chart").kendoChart({
        dataSource: myDataSource,
        seriesColors: legendColorArr, //an array of hexadecimal color values generated by the createColorArray function in js2.js
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
        //clicking  on a marker (dot) will open a new window
        seriesClick: function (e) {
            window.open("http://www.google.com");
            console.log(e.dataItem);

        },
        //clicking on the horizontal axis will focus the chart to the number that was clicked
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

// this function is tied to the axisLabelClick function is the chart function
function filterGrid(point) {
    $("#grid").data("kendoGrid").dataSource.filter({
        field: horizontalArr[0],
        operator: "eq",
        value: point
    });
};

///////////////////////////////////////////Buttons//////////////////////////////////////////

// this is to the "show all cars" button, removes all filters
$("#clearGridFilter").kendoButton({
    click: function (e) {
        $("#grid").data("kendoGrid").dataSource.filter({});
    }
});

//this button shows the legend that is generated be kendo
$("#showLegend").kendoButton({
    click: function () {
        var chart = $("#chart").data("kendoChart");
        chart.options.legend.visible = true;
        chart.refresh();
    }
});

//this button hides the legend that is generated by kendo
$("#hideLegend").kendoButton({
    click: function () {
        var chart = $("#chart").data("kendoChart");
        chart.options.legend.visible = false;
        chart.refresh();
    }
});

//this button will ungroup a category from the grid
$("#ungroup").kendoButton({
    click: function () {
        var grid = $('#grid').data('kendoGrid');
        grid.dataSource.group([]);
    }
});

//////////////////////////////////////////////////////Dropdowns///////////////////////////////////////////////

//drop down list for the vertical axis.
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

//drop down list for the horizontal axis
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

//drop down list for the color scale
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

///////////////////////////////////////Button Control Groups/////////////////////////////////////////

//all the buttons are in a group for easier layout formatting
$("#buttonGroupControlLegend").kendoButtonGroup();

////////////////////////////////////////////Range Sliders////////////////////////////////////////////

//range slider for model-year
$(document).ready(function () {
    var modelYearSlider = $("#rangeSliderModelYear").kendoRangeSlider({
        min: 70,
        max: 81,
        orientation: "horizontal",
        smallStep: 1,
        largeStep: 10,
        //when the range slider has been moved (changed) this function will pass the filters object to the datasource of the grid
        change: function (e) {
            var grid = $('#grid').data('kendoGrid');
            var filters = [],
                filter;
            //filters being pushed to the filters array
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
            //defining what logic and filters to use on the grid data source
            filter = {
                logic: "and",
                filters: filters
            };
            //passing the info in
            grid.dataSource.filter(filter);
            console.log(legendArray);
        }
    }).data("kendoRangeSlider");

    //range slider for acceleration
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

    //range slider for weight
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

    //range slider for horsepower
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

    //range slider for displacement
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

    //range slider for cylinders
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

    //range slider for mpg
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



////////////////////////////////////////Grid////////////////////////////////////////////////////////////////

//sets up and defines the perameters of the grid
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
        if (e.groups.length === 0) {
            var grid = $('#grid').data('kendoGrid');
            grid.dataSource.group([]);
        } else
            colorScaleArr = [];
        colorScaleArr.push(e.groups[0].field);
        console.log("Color Scale: " + colorScaleArr);
        $("#colorScale").html("Color Scale set to: " + "<strong>" + colorScaleArr + "</strong>");
        toolTip();
        populateArray(e.groups[0].field);
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
        },
        {
            title: "make",
            field: "make",
            attributes: {
                "class": "table-cell",
            },

        }],
    detailTemplate: "<div>MPG: #: mpg #</div><div>Cylinders: #: cylinders #</div><div>Displacement: #: displacement #</div><div>Horsepower: #: horsepower #</div><div>Weight: #: weight #</div><div>Acceleration: #: acceleration #</div><div>Model-year: #: modelyear #</div>",
    selectable: "multiple, row",
});
