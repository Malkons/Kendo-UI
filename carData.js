//car data in JSON format, kendo can only read JSON it can not read csv
var carData = [
    {
        "mpg": 18,
        "cylinders": 8,
        "displacement": 307,
        "horsepower": 130,
        "weight": 3504,
        "acceleration": 12,
        "modelyear": 70,
        "make": "Toyota"
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 165,
        "weight": 3693,
        "acceleration": 11.5,
        "modelyear": 70,
        "make": "Toyota"
    },
    {
        "mpg": 18,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 3436,
        "acceleration": 11,
        "modelyear": 70,
        "make": "Toyota"
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 150,
        "weight": 3433,
        "acceleration": 12,
        "modelyear": 70,
        "make": "Toyota"
    },
    {
        "mpg": 17,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 140,
        "weight": 3449,
        "acceleration": 10.5,
        "modelyear": 70,
        "make": "Toyota"
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 429,
        "horsepower": 198,
        "weight": 4341,
        "acceleration": 10,
        "modelyear": 70,
        "make": "Toyota"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 454,
        "horsepower": 220,
        "weight": 4354,
        "acceleration": 9,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 440,
        "horsepower": 215,
        "weight": 4312,
        "acceleration": 8.5,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 455,
        "horsepower": 225,
        "weight": 4425,
        "acceleration": 10,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 390,
        "horsepower": 190,
        "weight": 3850,
        "acceleration": 8.5,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 383,
        "horsepower": 170,
        "weight": 3563,
        "acceleration": 10,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 340,
        "horsepower": 160,
        "weight": 3609,
        "acceleration": 8,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 150,
        "weight": 3761,
        "acceleration": 9.5,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 455,
        "horsepower": 225,
        "weight": 3086,
        "acceleration": 10,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 113,
        "horsepower": 95,
        "weight": 2372,
        "acceleration": 15,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 22,
        "cylinders": 6,
        "displacement": 198,
        "horsepower": 95,
        "weight": 2833,
        "acceleration": 15.5,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 199,
        "horsepower": 97,
        "weight": 2774,
        "acceleration": 15.5,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 21,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 85,
        "weight": 2587,
        "acceleration": 16,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 88,
        "weight": 2130,
        "acceleration": 14.5,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 46,
        "weight": 1835,
        "acceleration": 20.5,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 110,
        "horsepower": 87,
        "weight": 2672,
        "acceleration": 17.5,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 107,
        "horsepower": 90,
        "weight": 2430,
        "acceleration": 14.5,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 104,
        "horsepower": 95,
        "weight": 2375,
        "acceleration": 17.5,
        "modelyear": 70,
        "make": "Chevy"
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 113,
        "weight": 2234,
        "acceleration": 12.5,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 21,
        "cylinders": 6,
        "displacement": 199,
        "horsepower": 90,
        "weight": 2648,
        "acceleration": 15,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 10,
        "cylinders": 8,
        "displacement": 360,
        "horsepower": 215,
        "weight": 4615,
        "acceleration": 14,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 10,
        "cylinders": 8,
        "displacement": 307,
        "horsepower": 200,
        "weight": 4376,
        "acceleration": 15,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 11,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 210,
        "weight": 4382,
        "acceleration": 13.5,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 9,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 193,
        "weight": 4732,
        "acceleration": 18.5,
        "modelyear": 70,
        "make": "Ford"
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 88,
        "weight": 2130,
        "acceleration": 14.5,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 90,
        "weight": 2264,
        "acceleration": 15.5,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 113,
        "horsepower": 95,
        "weight": 2228,
        "acceleration": 14,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 88,
        "weight": 2046,
        "acceleration": 19,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 100,
        "weight": 2634,
        "acceleration": 13,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 16,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 105,
        "weight": 3439,
        "acceleration": 15.5,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 17,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 100,
        "weight": 3329,
        "acceleration": 15.5,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 88,
        "weight": 3302,
        "acceleration": 15.5,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 100,
        "weight": 3288,
        "acceleration": 15.5,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 165,
        "weight": 4209,
        "acceleration": 12,
        "modelyear": 71,
        "make": "Toyota"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 175,
        "weight": 4464,
        "acceleration": 11.5,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 153,
        "weight": 4154,
        "acceleration": 13.5,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 4096,
        "acceleration": 13,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 12,
        "cylinders": 8,
        "displacement": 383,
        "horsepower": 180,
        "weight": 4955,
        "acceleration": 11.5,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 170,
        "weight": 4746,
        "acceleration": 12,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 175,
        "weight": 5140,
        "acceleration": 12,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 258,
        "horsepower": 110,
        "weight": 2962,
        "acceleration": 13.5,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 22,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 72,
        "weight": 2408,
        "acceleration": 19,
        "modelyear": 71,
        "make": "Ford"
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 100,
        "weight": 3282,
        "acceleration": 15,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 88,
        "weight": 3139,
        "acceleration": 14.5,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 122,
        "horsepower": 86,
        "weight": 2220,
        "acceleration": 14,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 116,
        "horsepower": 90,
        "weight": 2123,
        "acceleration": 14,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 30,
        "cylinders": 4,
        "displacement": 79,
        "horsepower": 70,
        "weight": 2074,
        "acceleration": 19.5,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 30,
        "cylinders": 4,
        "displacement": 88,
        "horsepower": 76,
        "weight": 2065,
        "acceleration": 14.5,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 31,
        "cylinders": 4,
        "displacement": 71,
        "horsepower": 65,
        "weight": 1773,
        "acceleration": 19,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 35,
        "cylinders": 4,
        "displacement": 72,
        "horsepower": 69,
        "weight": 1613,
        "acceleration": 18,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 60,
        "weight": 1834,
        "acceleration": 19,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 70,
        "weight": 1955,
        "acceleration": 20.5,
        "modelyear": 71,
        "make": "Chevy"
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 113,
        "horsepower": 95,
        "weight": 2278,
        "acceleration": 15.5,
        "modelyear": 72
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 97.5,
        "horsepower": 80,
        "weight": 2126,
        "acceleration": 17,
        "modelyear": 72
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 54,
        "weight": 2254,
        "acceleration": 23.5,
        "modelyear": 72
    },
    {
        "mpg": 20,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 90,
        "weight": 2408,
        "acceleration": 19.5,
        "modelyear": 72
    },
    {
        "mpg": 21,
        "cylinders": 4,
        "displacement": 122,
        "horsepower": 86,
        "weight": 2226,
        "acceleration": 16.5,
        "modelyear": 72
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 165,
        "weight": 4274,
        "acceleration": 12,
        "modelyear": 72
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 175,
        "weight": 4385,
        "acceleration": 12,
        "modelyear": 72
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 4135,
        "acceleration": 13.5,
        "modelyear": 72
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 153,
        "weight": 4129,
        "acceleration": 13,
        "modelyear": 72
    },
    {
        "mpg": 17,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 150,
        "weight": 3672,
        "acceleration": 11.5,
        "modelyear": 72
    },
    {
        "mpg": 11,
        "cylinders": 8,
        "displacement": 429,
        "horsepower": 208,
        "weight": 4633,
        "acceleration": 11,
        "modelyear": 72
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 155,
        "weight": 4502,
        "acceleration": 13.5,
        "modelyear": 72
    },
    {
        "mpg": 12,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 160,
        "weight": 4456,
        "acceleration": 13.5,
        "modelyear": 72
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 190,
        "weight": 4422,
        "acceleration": 12.5,
        "modelyear": 72
    },
    {
        "mpg": 19,
        "cylinders": 3,
        "displacement": 70,
        "horsepower": 97,
        "weight": 2330,
        "acceleration": 13.5,
        "modelyear": 72
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 150,
        "weight": 3892,
        "acceleration": 12.5,
        "modelyear": 72
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 307,
        "horsepower": 130,
        "weight": 4098,
        "acceleration": 14,
        "modelyear": 72
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 140,
        "weight": 4294,
        "acceleration": 16,
        "modelyear": 72
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 4077,
        "acceleration": 14,
        "modelyear": 72
    },
    {
        "mpg": 18,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 112,
        "weight": 2933,
        "acceleration": 14.5,
        "modelyear": 72
    },
    {
        "mpg": 22,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 76,
        "weight": 2511,
        "acceleration": 18,
        "modelyear": 72
    },
    {
        "mpg": 21,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 87,
        "weight": 2979,
        "acceleration": 19.5,
        "modelyear": 72
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 96,
        "horsepower": 69,
        "weight": 2189,
        "acceleration": 18,
        "modelyear": 72
    },
    {
        "mpg": 22,
        "cylinders": 4,
        "displacement": 122,
        "horsepower": 86,
        "weight": 2395,
        "acceleration": 16,
        "modelyear": 72
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 92,
        "weight": 2288,
        "acceleration": 17,
        "modelyear": 72
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 97,
        "weight": 2506,
        "acceleration": 14.5,
        "modelyear": 72
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 80,
        "weight": 2164,
        "acceleration": 15,
        "modelyear": 72
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 88,
        "weight": 2100,
        "acceleration": 16.5,
        "modelyear": 72
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 175,
        "weight": 4100,
        "acceleration": 13,
        "modelyear": 73
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 150,
        "weight": 3672,
        "acceleration": 11.5,
        "modelyear": 73
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 145,
        "weight": 3988,
        "acceleration": 13,
        "modelyear": 73
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 137,
        "weight": 4042,
        "acceleration": 14.5,
        "modelyear": 73
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 3777,
        "acceleration": 12.5,
        "modelyear": 73
    },
    {
        "mpg": 12,
        "cylinders": 8,
        "displacement": 429,
        "horsepower": 198,
        "weight": 4952,
        "acceleration": 11.5,
        "modelyear": 73
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 150,
        "weight": 4464,
        "acceleration": 12,
        "modelyear": 73
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 158,
        "weight": 4363,
        "acceleration": 13,
        "modelyear": 73
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 4237,
        "acceleration": 14.5,
        "modelyear": 73
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 440,
        "horsepower": 215,
        "weight": 4735,
        "acceleration": 11,
        "modelyear": 73
    },
    {
        "mpg": 12,
        "cylinders": 8,
        "displacement": 455,
        "horsepower": 225,
        "weight": 4951,
        "acceleration": 11,
        "modelyear": 73
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 360,
        "horsepower": 175,
        "weight": 3821,
        "acceleration": 11,
        "modelyear": 73
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 105,
        "weight": 3121,
        "acceleration": 16.5,
        "modelyear": 73
    },
    {
        "mpg": 16,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 100,
        "weight": 3278,
        "acceleration": 18,
        "modelyear": 73
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 100,
        "weight": 2945,
        "acceleration": 16,
        "modelyear": 73
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 88,
        "weight": 3021,
        "acceleration": 16.5,
        "modelyear": 73
    },
    {
        "mpg": 23,
        "cylinders": 6,
        "displacement": 198,
        "horsepower": 95,
        "weight": 2904,
        "acceleration": 16,
        "modelyear": 73
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 46,
        "weight": 1950,
        "acceleration": 21,
        "modelyear": 73
    },
    {
        "mpg": 11,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 150,
        "weight": 4997,
        "acceleration": 14,
        "modelyear": 73
    },
    {
        "mpg": 12,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 167,
        "weight": 4906,
        "acceleration": 12.5,
        "modelyear": 73
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 360,
        "horsepower": 170,
        "weight": 4654,
        "acceleration": 13,
        "modelyear": 73
    },
    {
        "mpg": 12,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 180,
        "weight": 4499,
        "acceleration": 12.5,
        "modelyear": 73
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 100,
        "weight": 2789,
        "acceleration": 15,
        "modelyear": 73
    },
    {
        "mpg": 20,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 88,
        "weight": 2279,
        "acceleration": 19,
        "modelyear": 73
    },
    {
        "mpg": 21,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 72,
        "weight": 2401,
        "acceleration": 19.5,
        "modelyear": 73
    },
    {
        "mpg": 22,
        "cylinders": 4,
        "displacement": 108,
        "horsepower": 94,
        "weight": 2379,
        "acceleration": 16.5,
        "modelyear": 73
    },
    {
        "mpg": 18,
        "cylinders": 3,
        "displacement": 70,
        "horsepower": 90,
        "weight": 2124,
        "acceleration": 13.5,
        "modelyear": 73
    },
    {
        "mpg": 19,
        "cylinders": 4,
        "displacement": 122,
        "horsepower": 85,
        "weight": 2310,
        "acceleration": 18.5,
        "modelyear": 73
    },
    {
        "mpg": 21,
        "cylinders": 6,
        "displacement": 155,
        "horsepower": 107,
        "weight": 2472,
        "acceleration": 14,
        "modelyear": 73
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 90,
        "weight": 2265,
        "acceleration": 15.5,
        "modelyear": 73
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 145,
        "weight": 4082,
        "acceleration": 13,
        "modelyear": 73
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 230,
        "weight": 4278,
        "acceleration": 9.5,
        "modelyear": 73
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 68,
        "horsepower": 49,
        "weight": 1867,
        "acceleration": 19.5,
        "modelyear": 73
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 116,
        "horsepower": 75,
        "weight": 2158,
        "acceleration": 15.5,
        "modelyear": 73
    },
    {
        "mpg": 20,
        "cylinders": 4,
        "displacement": 114,
        "horsepower": 91,
        "weight": 2582,
        "acceleration": 14,
        "modelyear": 73
    },
    {
        "mpg": 19,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 112,
        "weight": 2868,
        "acceleration": 15.5,
        "modelyear": 73
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 3399,
        "acceleration": 11,
        "modelyear": 73
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 110,
        "weight": 2660,
        "acceleration": 14,
        "modelyear": 73
    },
    {
        "mpg": 20,
        "cylinders": 6,
        "displacement": 156,
        "horsepower": 122,
        "weight": 2807,
        "acceleration": 13.5,
        "modelyear": 73
    },
    {
        "mpg": 11,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 180,
        "weight": 3664,
        "acceleration": 11,
        "modelyear": 73
    },
    {
        "mpg": 20,
        "cylinders": 6,
        "displacement": 198,
        "horsepower": 95,
        "weight": 3102,
        "acceleration": 16.5,
        "modelyear": 74
    },
    {
        "mpg": 21,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 85,
        "weight": 2875,
        "acceleration": 17,
        "modelyear": 74
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 100,
        "weight": 2901,
        "acceleration": 16,
        "modelyear": 74
    },
    {
        "mpg": 15,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 100,
        "weight": 3336,
        "acceleration": 17,
        "modelyear": 74
    },
    {
        "mpg": 31,
        "cylinders": 4,
        "displacement": 79,
        "horsepower": 67,
        "weight": 1950,
        "acceleration": 19,
        "modelyear": 74
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 122,
        "horsepower": 80,
        "weight": 2451,
        "acceleration": 16.5,
        "modelyear": 74
    },
    {
        "mpg": 32,
        "cylinders": 4,
        "displacement": 71,
        "horsepower": 65,
        "weight": 1836,
        "acceleration": 21,
        "modelyear": 74
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 75,
        "weight": 2542,
        "acceleration": 17,
        "modelyear": 74
    },
    {
        "mpg": 16,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 100,
        "weight": 3781,
        "acceleration": 17,
        "modelyear": 74
    },
    {
        "mpg": 16,
        "cylinders": 6,
        "displacement": 258,
        "horsepower": 110,
        "weight": 3632,
        "acceleration": 18,
        "modelyear": 74
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 105,
        "weight": 3613,
        "acceleration": 16.5,
        "modelyear": 74
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 140,
        "weight": 4141,
        "acceleration": 14,
        "modelyear": 74
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 150,
        "weight": 4699,
        "acceleration": 14.5,
        "modelyear": 74
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 4457,
        "acceleration": 13.5,
        "modelyear": 74
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 140,
        "weight": 4638,
        "acceleration": 16,
        "modelyear": 74
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 150,
        "weight": 4257,
        "acceleration": 15.5,
        "modelyear": 74
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 83,
        "weight": 2219,
        "acceleration": 16.5,
        "modelyear": 74
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 79,
        "horsepower": 67,
        "weight": 1963,
        "acceleration": 15.5,
        "modelyear": 74
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 78,
        "weight": 2300,
        "acceleration": 14.5,
        "modelyear": 74
    },
    {
        "mpg": 31,
        "cylinders": 4,
        "displacement": 76,
        "horsepower": 52,
        "weight": 1649,
        "acceleration": 16.5,
        "modelyear": 74
    },
    {
        "mpg": 32,
        "cylinders": 4,
        "displacement": 83,
        "horsepower": 61,
        "weight": 2003,
        "acceleration": 19,
        "modelyear": 74
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 75,
        "weight": 2125,
        "acceleration": 14.5,
        "modelyear": 74
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 75,
        "weight": 2108,
        "acceleration": 15.5,
        "modelyear": 74
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 116,
        "horsepower": 75,
        "weight": 2246,
        "acceleration": 14,
        "modelyear": 74
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 97,
        "weight": 2489,
        "acceleration": 15,
        "modelyear": 74
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 108,
        "horsepower": 93,
        "weight": 2391,
        "acceleration": 15.5,
        "modelyear": 74
    },
    {
        "mpg": 31,
        "cylinders": 4,
        "displacement": 79,
        "horsepower": 67,
        "weight": 2000,
        "acceleration": 16,
        "modelyear": 74
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 95,
        "weight": 3264,
        "acceleration": 16,
        "modelyear": 75
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 105,
        "weight": 3459,
        "acceleration": 16,
        "modelyear": 75
    },
    {
        "mpg": 15,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 72,
        "weight": 3432,
        "acceleration": 21,
        "modelyear": 75
    },
    {
        "mpg": 15,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 72,
        "weight": 3158,
        "acceleration": 19.5,
        "modelyear": 75
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 170,
        "weight": 4668,
        "acceleration": 11.5,
        "modelyear": 75
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 145,
        "weight": 4440,
        "acceleration": 14,
        "modelyear": 75
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 4498,
        "acceleration": 14.5,
        "modelyear": 75
    },
    {
        "mpg": 14,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 148,
        "weight": 4657,
        "acceleration": 13.5,
        "modelyear": 75
    },
    {
        "mpg": 17,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 110,
        "weight": 3907,
        "acceleration": 21,
        "modelyear": 75
    },
    {
        "mpg": 16,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 105,
        "weight": 3897,
        "acceleration": 18.5,
        "modelyear": 75
    },
    {
        "mpg": 15,
        "cylinders": 6,
        "displacement": 258,
        "horsepower": 110,
        "weight": 3730,
        "acceleration": 19,
        "modelyear": 75
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 95,
        "weight": 3785,
        "acceleration": 19,
        "modelyear": 75
    },
    {
        "mpg": 21,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 110,
        "weight": 3039,
        "acceleration": 15,
        "modelyear": 75
    },
    {
        "mpg": 20,
        "cylinders": 8,
        "displacement": 262,
        "horsepower": 110,
        "weight": 3221,
        "acceleration": 13.5,
        "modelyear": 75
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 129,
        "weight": 3169,
        "acceleration": 12,
        "modelyear": 75
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 75,
        "weight": 2171,
        "acceleration": 16,
        "modelyear": 75
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 83,
        "weight": 2639,
        "acceleration": 17,
        "modelyear": 75
    },
    {
        "mpg": 20,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 100,
        "weight": 2914,
        "acceleration": 16,
        "modelyear": 75
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 78,
        "weight": 2592,
        "acceleration": 18.5,
        "modelyear": 75
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 134,
        "horsepower": 96,
        "weight": 2702,
        "acceleration": 13.5,
        "modelyear": 75
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 71,
        "weight": 2223,
        "acceleration": 16.5,
        "modelyear": 75
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 119,
        "horsepower": 97,
        "weight": 2545,
        "acceleration": 17,
        "modelyear": 75
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 171,
        "horsepower": 97,
        "weight": 2984,
        "acceleration": 14.5,
        "modelyear": 75
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 70,
        "weight": 1937,
        "acceleration": 14,
        "modelyear": 75
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 90,
        "weight": 3211,
        "acceleration": 17,
        "modelyear": 75
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 115,
        "horsepower": 95,
        "weight": 2694,
        "acceleration": 15,
        "modelyear": 75
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 88,
        "weight": 2957,
        "acceleration": 17,
        "modelyear": 75
    },
    {
        "mpg": 22,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 98,
        "weight": 2945,
        "acceleration": 14.5,
        "modelyear": 75
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 115,
        "weight": 2671,
        "acceleration": 13.5,
        "modelyear": 75
    },
    {
        "mpg": 33,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 53,
        "weight": 1795,
        "acceleration": 17.5,
        "modelyear": 75
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 107,
        "horsepower": 86,
        "weight": 2464,
        "acceleration": 15.5,
        "modelyear": 76
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 116,
        "horsepower": 81,
        "weight": 2220,
        "acceleration": 16.9,
        "modelyear": 76
    },
    {
        "mpg": 25,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 92,
        "weight": 2572,
        "acceleration": 14.9,
        "modelyear": 76
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 79,
        "weight": 2255,
        "acceleration": 17.7,
        "modelyear": 76
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 101,
        "horsepower": 83,
        "weight": 2202,
        "acceleration": 15.3,
        "modelyear": 76
    },
    {
        "mpg": 17.5,
        "cylinders": 8,
        "displacement": 305,
        "horsepower": 140,
        "weight": 4215,
        "acceleration": 13,
        "modelyear": 76
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 4190,
        "acceleration": 13,
        "modelyear": 76
    },
    {
        "mpg": 15.5,
        "cylinders": 8,
        "displacement": 304,
        "horsepower": 120,
        "weight": 3962,
        "acceleration": 13.9,
        "modelyear": 76
    },
    {
        "mpg": 14.5,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 152,
        "weight": 4215,
        "acceleration": 12.8,
        "modelyear": 76
    },
    {
        "mpg": 22,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 100,
        "weight": 3233,
        "acceleration": 15.4,
        "modelyear": 76
    },
    {
        "mpg": 22,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 105,
        "weight": 3353,
        "acceleration": 14.5,
        "modelyear": 76
    },
    {
        "mpg": 24,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 81,
        "weight": 3012,
        "acceleration": 17.6,
        "modelyear": 76
    },
    {
        "mpg": 22.5,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 90,
        "weight": 3085,
        "acceleration": 17.6,
        "modelyear": 76
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 52,
        "weight": 2035,
        "acceleration": 22.2,
        "modelyear": 76
    },
    {
        "mpg": 24.5,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 60,
        "weight": 2164,
        "acceleration": 22.1,
        "modelyear": 76
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 70,
        "weight": 1937,
        "acceleration": 14.2,
        "modelyear": 76
    },
    {
        "mpg": 33,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 53,
        "weight": 1795,
        "acceleration": 17.4,
        "modelyear": 76
    },
    {
        "mpg": 20,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 100,
        "weight": 3651,
        "acceleration": 17.7,
        "modelyear": 76
    },
    {
        "mpg": 18,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 78,
        "weight": 3574,
        "acceleration": 21,
        "modelyear": 76
    },
    {
        "mpg": 18.5,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 110,
        "weight": 3645,
        "acceleration": 16.2,
        "modelyear": 76
    },
    {
        "mpg": 17.5,
        "cylinders": 6,
        "displacement": 258,
        "horsepower": 95,
        "weight": 3193,
        "acceleration": 17.8,
        "modelyear": 76
    },
    {
        "mpg": 29.5,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 71,
        "weight": 1825,
        "acceleration": 12.2,
        "modelyear": 76
    },
    {
        "mpg": 32,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 70,
        "weight": 1990,
        "acceleration": 17,
        "modelyear": 76
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 75,
        "weight": 2155,
        "acceleration": 16.4,
        "modelyear": 76
    },
    {
        "mpg": 26.5,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 72,
        "weight": 2565,
        "acceleration": 13.6,
        "modelyear": 76
    },
    {
        "mpg": 20,
        "cylinders": 4,
        "displacement": 130,
        "horsepower": 102,
        "weight": 3150,
        "acceleration": 15.7,
        "modelyear": 76
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 3940,
        "acceleration": 13.2,
        "modelyear": 76
    },
    {
        "mpg": 19,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 88,
        "weight": 3270,
        "acceleration": 21.9,
        "modelyear": 76
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 156,
        "horsepower": 108,
        "weight": 2930,
        "acceleration": 15.5,
        "modelyear": 76
    },
    {
        "mpg": 16.5,
        "cylinders": 6,
        "displacement": 168,
        "horsepower": 120,
        "weight": 3820,
        "acceleration": 16.7,
        "modelyear": 76
    },
    {
        "mpg": 16.5,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 180,
        "weight": 4380,
        "acceleration": 12.1,
        "modelyear": 76
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 145,
        "weight": 4055,
        "acceleration": 12,
        "modelyear": 76
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 130,
        "weight": 3870,
        "acceleration": 15,
        "modelyear": 76
    },
    {
        "mpg": 13,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 150,
        "weight": 3755,
        "acceleration": 14,
        "modelyear": 76
    },
    {
        "mpg": 31.5,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 68,
        "weight": 2045,
        "acceleration": 18.5,
        "modelyear": 77
    },
    {
        "mpg": 30,
        "cylinders": 4,
        "displacement": 111,
        "horsepower": 80,
        "weight": 2155,
        "acceleration": 14.8,
        "modelyear": 77
    },
    {
        "mpg": 36,
        "cylinders": 4,
        "displacement": 79,
        "horsepower": 58,
        "weight": 1825,
        "acceleration": 18.6,
        "modelyear": 77
    },
    {
        "mpg": 25.5,
        "cylinders": 4,
        "displacement": 122,
        "horsepower": 96,
        "weight": 2300,
        "acceleration": 15.5,
        "modelyear": 77
    },
    {
        "mpg": 33.5,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 70,
        "weight": 1945,
        "acceleration": 16.8,
        "modelyear": 77
    },
    {
        "mpg": 17.5,
        "cylinders": 8,
        "displacement": 305,
        "horsepower": 145,
        "weight": 3880,
        "acceleration": 12.5,
        "modelyear": 77
    },
    {
        "mpg": 17,
        "cylinders": 8,
        "displacement": 260,
        "horsepower": 110,
        "weight": 4060,
        "acceleration": 19,
        "modelyear": 77
    },
    {
        "mpg": 15.5,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 145,
        "weight": 4140,
        "acceleration": 13.7,
        "modelyear": 77
    },
    {
        "mpg": 15,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 130,
        "weight": 4295,
        "acceleration": 14.9,
        "modelyear": 77
    },
    {
        "mpg": 17.5,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 110,
        "weight": 3520,
        "acceleration": 16.4,
        "modelyear": 77
    },
    {
        "mpg": 20.5,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 105,
        "weight": 3425,
        "acceleration": 16.9,
        "modelyear": 77
    },
    {
        "mpg": 19,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 100,
        "weight": 3630,
        "acceleration": 17.7,
        "modelyear": 77
    },
    {
        "mpg": 18.5,
        "cylinders": 6,
        "displacement": 250,
        "horsepower": 98,
        "weight": 3525,
        "acceleration": 19,
        "modelyear": 77
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 180,
        "weight": 4220,
        "acceleration": 11.1,
        "modelyear": 77
    },
    {
        "mpg": 15.5,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 170,
        "weight": 4165,
        "acceleration": 11.4,
        "modelyear": 77
    },
    {
        "mpg": 15.5,
        "cylinders": 8,
        "displacement": 400,
        "horsepower": 190,
        "weight": 4325,
        "acceleration": 12.2,
        "modelyear": 77
    },
    {
        "mpg": 16,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 149,
        "weight": 4335,
        "acceleration": 14.5,
        "modelyear": 77
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 78,
        "weight": 1940,
        "acceleration": 14.5,
        "modelyear": 77
    },
    {
        "mpg": 24.5,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 88,
        "weight": 2740,
        "acceleration": 16,
        "modelyear": 77
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 75,
        "weight": 2265,
        "acceleration": 18.2,
        "modelyear": 77
    },
    {
        "mpg": 25.5,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 89,
        "weight": 2755,
        "acceleration": 15.8,
        "modelyear": 77
    },
    {
        "mpg": 30.5,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 63,
        "weight": 2051,
        "acceleration": 17,
        "modelyear": 77
    },
    {
        "mpg": 33.5,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 83,
        "weight": 2075,
        "acceleration": 15.9,
        "modelyear": 77
    },
    {
        "mpg": 30,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 67,
        "weight": 1985,
        "acceleration": 16.4,
        "modelyear": 77
    },
    {
        "mpg": 30.5,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 78,
        "weight": 2190,
        "acceleration": 14.1,
        "modelyear": 77
    },
    {
        "mpg": 22,
        "cylinders": 6,
        "displacement": 146,
        "horsepower": 97,
        "weight": 2815,
        "acceleration": 14.5,
        "modelyear": 77
    },
    {
        "mpg": 21.5,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 110,
        "weight": 2600,
        "acceleration": 12.8,
        "modelyear": 77
    },
    {
        "mpg": 21.5,
        "cylinders": 3,
        "displacement": 80,
        "horsepower": 110,
        "weight": 2720,
        "acceleration": 13.5,
        "modelyear": 77
    },
    {
        "mpg": 43.1,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 48,
        "weight": 1985,
        "acceleration": 21.5,
        "modelyear": 78
    },
    {
        "mpg": 36.1,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 66,
        "weight": 1800,
        "acceleration": 14.4,
        "modelyear": 78
    },
    {
        "mpg": 32.8,
        "cylinders": 4,
        "displacement": 78,
        "horsepower": 52,
        "weight": 1985,
        "acceleration": 19.4,
        "modelyear": 78
    },
    {
        "mpg": 39.4,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 70,
        "weight": 2070,
        "acceleration": 18.6,
        "modelyear": 78
    },
    {
        "mpg": 36.1,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 60,
        "weight": 1800,
        "acceleration": 16.4,
        "modelyear": 78
    },
    {
        "mpg": 19.9,
        "cylinders": 8,
        "displacement": 260,
        "horsepower": 110,
        "weight": 3365,
        "acceleration": 15.5,
        "modelyear": 78
    },
    {
        "mpg": 19.4,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 140,
        "weight": 3735,
        "acceleration": 13.2,
        "modelyear": 78
    },
    {
        "mpg": 20.2,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 139,
        "weight": 3570,
        "acceleration": 12.8,
        "modelyear": 78
    },
    {
        "mpg": 19.2,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 105,
        "weight": 3535,
        "acceleration": 19.2,
        "modelyear": 78
    },
    {
        "mpg": 20.5,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 95,
        "weight": 3155,
        "acceleration": 18.2,
        "modelyear": 78
    },
    {
        "mpg": 20.2,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 85,
        "weight": 2965,
        "acceleration": 15.8,
        "modelyear": 78
    },
    {
        "mpg": 25.1,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 88,
        "weight": 2720,
        "acceleration": 15.4,
        "modelyear": 78
    },
    {
        "mpg": 20.5,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 100,
        "weight": 3430,
        "acceleration": 17.2,
        "modelyear": 78
    },
    {
        "mpg": 19.4,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 90,
        "weight": 3210,
        "acceleration": 17.2,
        "modelyear": 78
    },
    {
        "mpg": 20.6,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 105,
        "weight": 3380,
        "acceleration": 15.8,
        "modelyear": 78
    },
    {
        "mpg": 20.8,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 85,
        "weight": 3070,
        "acceleration": 16.7,
        "modelyear": 78
    },
    {
        "mpg": 18.6,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 110,
        "weight": 3620,
        "acceleration": 18.7,
        "modelyear": 78
    },
    {
        "mpg": 18.1,
        "cylinders": 6,
        "displacement": 258,
        "horsepower": 120,
        "weight": 3410,
        "acceleration": 15.1,
        "modelyear": 78
    },
    {
        "mpg": 19.2,
        "cylinders": 8,
        "displacement": 305,
        "horsepower": 145,
        "weight": 3425,
        "acceleration": 13.2,
        "modelyear": 78
    },
    {
        "mpg": 17.7,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 165,
        "weight": 3445,
        "acceleration": 13.4,
        "modelyear": 78
    },
    {
        "mpg": 18.1,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 139,
        "weight": 3205,
        "acceleration": 11.2,
        "modelyear": 78
    },
    {
        "mpg": 17.5,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 140,
        "weight": 4080,
        "acceleration": 13.7,
        "modelyear": 78
    },
    {
        "mpg": 30,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 68,
        "weight": 2155,
        "acceleration": 16.5,
        "modelyear": 78
    },
    {
        "mpg": 27.5,
        "cylinders": 4,
        "displacement": 134,
        "horsepower": 95,
        "weight": 2560,
        "acceleration": 14.2,
        "modelyear": 78
    },
    {
        "mpg": 27.2,
        "cylinders": 4,
        "displacement": 119,
        "horsepower": 97,
        "weight": 2300,
        "acceleration": 14.7,
        "modelyear": 78
    },
    {
        "mpg": 30.9,
        "cylinders": 4,
        "displacement": 105,
        "horsepower": 75,
        "weight": 2230,
        "acceleration": 14.5,
        "modelyear": 78
    },
    {
        "mpg": 21.1,
        "cylinders": 4,
        "displacement": 134,
        "horsepower": 95,
        "weight": 2515,
        "acceleration": 14.8,
        "modelyear": 78
    },
    {
        "mpg": 23.2,
        "cylinders": 4,
        "displacement": 156,
        "horsepower": 105,
        "weight": 2745,
        "acceleration": 16.7,
        "modelyear": 78
    },
    {
        "mpg": 23.8,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 85,
        "weight": 2855,
        "acceleration": 17.6,
        "modelyear": 78
    },
    {
        "mpg": 23.9,
        "cylinders": 4,
        "displacement": 119,
        "horsepower": 97,
        "weight": 2405,
        "acceleration": 14.9,
        "modelyear": 78
    },
    {
        "mpg": 20.3,
        "cylinders": 5,
        "displacement": 131,
        "horsepower": 103,
        "weight": 2830,
        "acceleration": 15.9,
        "modelyear": 78
    },
    {
        "mpg": 17,
        "cylinders": 6,
        "displacement": 163,
        "horsepower": 125,
        "weight": 3140,
        "acceleration": 13.6,
        "modelyear": 78
    },
    {
        "mpg": 21.6,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 115,
        "weight": 2795,
        "acceleration": 15.7,
        "modelyear": 78
    },
    {
        "mpg": 16.2,
        "cylinders": 6,
        "displacement": 163,
        "horsepower": 133,
        "weight": 3410,
        "acceleration": 15.8,
        "modelyear": 78
    },
    {
        "mpg": 31.5,
        "cylinders": 4,
        "displacement": 89,
        "horsepower": 71,
        "weight": 1990,
        "acceleration": 14.9,
        "modelyear": 78
    },
    {
        "mpg": 29.5,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 68,
        "weight": 2135,
        "acceleration": 16.6,
        "modelyear": 78
    },
    {
        "mpg": 21.5,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 115,
        "weight": 3245,
        "acceleration": 15.4,
        "modelyear": 79
    },
    {
        "mpg": 19.8,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 85,
        "weight": 2990,
        "acceleration": 18.2,
        "modelyear": 79
    },
    {
        "mpg": 22.3,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 88,
        "weight": 2890,
        "acceleration": 17.3,
        "modelyear": 79
    },
    {
        "mpg": 20.2,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 90,
        "weight": 3265,
        "acceleration": 18.2,
        "modelyear": 79
    },
    {
        "mpg": 20.6,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 110,
        "weight": 3360,
        "acceleration": 16.6,
        "modelyear": 79
    },
    {
        "mpg": 17,
        "cylinders": 8,
        "displacement": 305,
        "horsepower": 130,
        "weight": 3840,
        "acceleration": 15.4,
        "modelyear": 79
    },
    {
        "mpg": 17.6,
        "cylinders": 8,
        "displacement": 302,
        "horsepower": 129,
        "weight": 3725,
        "acceleration": 13.4,
        "modelyear": 79
    },
    {
        "mpg": 16.5,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 138,
        "weight": 3955,
        "acceleration": 13.2,
        "modelyear": 79
    },
    {
        "mpg": 18.2,
        "cylinders": 8,
        "displacement": 318,
        "horsepower": 135,
        "weight": 3830,
        "acceleration": 15.2,
        "modelyear": 79
    },
    {
        "mpg": 16.9,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 155,
        "weight": 4360,
        "acceleration": 14.9,
        "modelyear": 79
    },
    {
        "mpg": 15.5,
        "cylinders": 8,
        "displacement": 351,
        "horsepower": 142,
        "weight": 4054,
        "acceleration": 14.3,
        "modelyear": 79
    },
    {
        "mpg": 19.2,
        "cylinders": 8,
        "displacement": 267,
        "horsepower": 125,
        "weight": 3605,
        "acceleration": 15,
        "modelyear": 79
    },
    {
        "mpg": 18.5,
        "cylinders": 8,
        "displacement": 360,
        "horsepower": 150,
        "weight": 3940,
        "acceleration": 13,
        "modelyear": 79
    },
    {
        "mpg": 31.9,
        "cylinders": 4,
        "displacement": 89,
        "horsepower": 71,
        "weight": 1925,
        "acceleration": 14,
        "modelyear": 79
    },
    {
        "mpg": 34.1,
        "cylinders": 4,
        "displacement": 86,
        "horsepower": 65,
        "weight": 1975,
        "acceleration": 15.2,
        "modelyear": 79
    },
    {
        "mpg": 35.7,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 80,
        "weight": 1915,
        "acceleration": 14.4,
        "modelyear": 79
    },
    {
        "mpg": 27.4,
        "cylinders": 4,
        "displacement": 121,
        "horsepower": 80,
        "weight": 2670,
        "acceleration": 15,
        "modelyear": 79
    },
    {
        "mpg": 25.4,
        "cylinders": 5,
        "displacement": 183,
        "horsepower": 77,
        "weight": 3530,
        "acceleration": 20.1,
        "modelyear": 79
    },
    {
        "mpg": 23,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 125,
        "weight": 3900,
        "acceleration": 17.4,
        "modelyear": 79
    },
    {
        "mpg": 27.2,
        "cylinders": 4,
        "displacement": 141,
        "horsepower": 71,
        "weight": 3190,
        "acceleration": 24.8,
        "modelyear": 79
    },
    {
        "mpg": 23.9,
        "cylinders": 8,
        "displacement": 260,
        "horsepower": 90,
        "weight": 3420,
        "acceleration": 22.2,
        "modelyear": 79
    },
    {
        "mpg": 34.2,
        "cylinders": 4,
        "displacement": 105,
        "horsepower": 70,
        "weight": 2200,
        "acceleration": 13.2,
        "modelyear": 79
    },
    {
        "mpg": 34.5,
        "cylinders": 4,
        "displacement": 105,
        "horsepower": 70,
        "weight": 2150,
        "acceleration": 14.9,
        "modelyear": 79
    },
    {
        "mpg": 31.8,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 65,
        "weight": 2020,
        "acceleration": 19.2,
        "modelyear": 79
    },
    {
        "mpg": 37.3,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 69,
        "weight": 2130,
        "acceleration": 14.7,
        "modelyear": 79
    },
    {
        "mpg": 28.4,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 90,
        "weight": 2670,
        "acceleration": 16,
        "modelyear": 79
    },
    {
        "mpg": 28.8,
        "cylinders": 6,
        "displacement": 173,
        "horsepower": 115,
        "weight": 2595,
        "acceleration": 11.3,
        "modelyear": 79
    },
    {
        "mpg": 26.8,
        "cylinders": 6,
        "displacement": 173,
        "horsepower": 115,
        "weight": 2700,
        "acceleration": 12.9,
        "modelyear": 79
    },
    {
        "mpg": 33.5,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 90,
        "weight": 2556,
        "acceleration": 13.2,
        "modelyear": 79
    },
    {
        "mpg": 41.5,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 76,
        "weight": 2144,
        "acceleration": 14.7,
        "modelyear": 80
    },
    {
        "mpg": 38.1,
        "cylinders": 4,
        "displacement": 89,
        "horsepower": 60,
        "weight": 1968,
        "acceleration": 18.8,
        "modelyear": 80
    },
    {
        "mpg": 32.1,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 70,
        "weight": 2120,
        "acceleration": 15.5,
        "modelyear": 80
    },
    {
        "mpg": 37.2,
        "cylinders": 4,
        "displacement": 86,
        "horsepower": 65,
        "weight": 2019,
        "acceleration": 16.4,
        "modelyear": 80
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 90,
        "weight": 2678,
        "acceleration": 16.5,
        "modelyear": 80
    },
    {
        "mpg": 26.4,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 88,
        "weight": 2870,
        "acceleration": 18.1,
        "modelyear": 80
    },
    {
        "mpg": 24.3,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 90,
        "weight": 3003,
        "acceleration": 20.1,
        "modelyear": 80
    },
    {
        "mpg": 19.1,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 90,
        "weight": 3381,
        "acceleration": 18.7,
        "modelyear": 80
    },
    {
        "mpg": 34.3,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 78,
        "weight": 2188,
        "acceleration": 15.8,
        "modelyear": 80
    },
    {
        "mpg": 29.8,
        "cylinders": 4,
        "displacement": 134,
        "horsepower": 90,
        "weight": 2711,
        "acceleration": 15.5,
        "modelyear": 80
    },
    {
        "mpg": 31.3,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 75,
        "weight": 2542,
        "acceleration": 17.5,
        "modelyear": 80
    },
    {
        "mpg": 37,
        "cylinders": 4,
        "displacement": 119,
        "horsepower": 92,
        "weight": 2434,
        "acceleration": 15,
        "modelyear": 80
    },
    {
        "mpg": 32.2,
        "cylinders": 4,
        "displacement": 108,
        "horsepower": 75,
        "weight": 2265,
        "acceleration": 15.2,
        "modelyear": 80
    },
    {
        "mpg": 46.6,
        "cylinders": 4,
        "displacement": 86,
        "horsepower": 65,
        "weight": 2110,
        "acceleration": 17.9,
        "modelyear": 80
    },
    {
        "mpg": 27.9,
        "cylinders": 4,
        "displacement": 156,
        "horsepower": 105,
        "weight": 2800,
        "acceleration": 14.4,
        "modelyear": 80
    },
    {
        "mpg": 40.8,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 65,
        "weight": 2110,
        "acceleration": 19.2,
        "modelyear": 80
    },
    {
        "mpg": 44.3,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 48,
        "weight": 2085,
        "acceleration": 21.7,
        "modelyear": 80
    },
    {
        "mpg": 43.4,
        "cylinders": 4,
        "displacement": 90,
        "horsepower": 48,
        "weight": 2335,
        "acceleration": 23.7,
        "modelyear": 80
    },
    {
        "mpg": 36.4,
        "cylinders": 5,
        "displacement": 121,
        "horsepower": 67,
        "weight": 2950,
        "acceleration": 19.9,
        "modelyear": 80
    },
    {
        "mpg": 30,
        "cylinders": 4,
        "displacement": 146,
        "horsepower": 67,
        "weight": 3250,
        "acceleration": 21.8,
        "modelyear": 80
    },
    {
        "mpg": 44.6,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 67,
        "weight": 1850,
        "acceleration": 13.8,
        "modelyear": 80
    },
    {
        "mpg": 40.9,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 67,
        "weight": 1835,
        "acceleration": 17.3,
        "modelyear": 80
    },
    {
        "mpg": 33.8,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 67,
        "weight": 2145,
        "acceleration": 18,
        "modelyear": 80
    },
    {
        "mpg": 29.8,
        "cylinders": 4,
        "displacement": 89,
        "horsepower": 62,
        "weight": 1845,
        "acceleration": 15.3,
        "modelyear": 80
    },
    {
        "mpg": 32.7,
        "cylinders": 6,
        "displacement": 168,
        "horsepower": 132,
        "weight": 2910,
        "acceleration": 11.4,
        "modelyear": 80
    },
    {
        "mpg": 23.7,
        "cylinders": 3,
        "displacement": 70,
        "horsepower": 100,
        "weight": 2420,
        "acceleration": 12.5,
        "modelyear": 80
    },
    {
        "mpg": 35,
        "cylinders": 4,
        "displacement": 122,
        "horsepower": 88,
        "weight": 2500,
        "acceleration": 15.1,
        "modelyear": 80
    },
    {
        "mpg": 23.6,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 80,
        "weight": 2905,
        "acceleration": 14.3,
        "modelyear": 80
    },
    {
        "mpg": 32.4,
        "cylinders": 4,
        "displacement": 107,
        "horsepower": 72,
        "weight": 2290,
        "acceleration": 17,
        "modelyear": 80
    },
    {
        "mpg": 27.2,
        "cylinders": 4,
        "displacement": 135,
        "horsepower": 84,
        "weight": 2490,
        "acceleration": 15.7,
        "modelyear": 81
    },
    {
        "mpg": 26.6,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 84,
        "weight": 2635,
        "acceleration": 16.4,
        "modelyear": 81
    },
    {
        "mpg": 25.8,
        "cylinders": 4,
        "displacement": 156,
        "horsepower": 92,
        "weight": 2620,
        "acceleration": 14.4,
        "modelyear": 81
    },
    {
        "mpg": 23.5,
        "cylinders": 6,
        "displacement": 173,
        "horsepower": 110,
        "weight": 2725,
        "acceleration": 12.6,
        "modelyear": 81
    },
    {
        "mpg": 30,
        "cylinders": 4,
        "displacement": 135,
        "horsepower": 84,
        "weight": 2385,
        "acceleration": 12.9,
        "modelyear": 81
    },
    {
        "mpg": 39.1,
        "cylinders": 4,
        "displacement": 79,
        "horsepower": 58,
        "weight": 1755,
        "acceleration": 16.9,
        "modelyear": 81
    },
    {
        "mpg": 39,
        "cylinders": 4,
        "displacement": 86,
        "horsepower": 64,
        "weight": 1875,
        "acceleration": 16.4,
        "modelyear": 81
    },
    {
        "mpg": 35.1,
        "cylinders": 4,
        "displacement": 81,
        "horsepower": 60,
        "weight": 1760,
        "acceleration": 16.1,
        "modelyear": 81
    },
    {
        "mpg": 32.3,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 67,
        "weight": 2065,
        "acceleration": 17.8,
        "modelyear": 81
    },
    {
        "mpg": 37,
        "cylinders": 4,
        "displacement": 85,
        "horsepower": 65,
        "weight": 1975,
        "acceleration": 19.4,
        "modelyear": 81
    },
    {
        "mpg": 37.7,
        "cylinders": 4,
        "displacement": 89,
        "horsepower": 62,
        "weight": 2050,
        "acceleration": 17.3,
        "modelyear": 81
    },
    {
        "mpg": 34.1,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 68,
        "weight": 1985,
        "acceleration": 16,
        "modelyear": 81
    },
    {
        "mpg": 34.7,
        "cylinders": 4,
        "displacement": 105,
        "horsepower": 63,
        "weight": 2215,
        "acceleration": 14.9,
        "modelyear": 81
    },
    {
        "mpg": 34.4,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 65,
        "weight": 2045,
        "acceleration": 16.2,
        "modelyear": 81
    },
    {
        "mpg": 29.9,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 65,
        "weight": 2380,
        "acceleration": 20.7,
        "modelyear": 81
    },
    {
        "mpg": 33,
        "cylinders": 4,
        "displacement": 105,
        "horsepower": 74,
        "weight": 2190,
        "acceleration": 14.2,
        "modelyear": 81
    },
    {
        "mpg": 34.5,
        "cylinders": 4,
        "displacement": 100,
        "horsepower": 75,
        "weight": 2320,
        "acceleration": 15.8,
        "modelyear": 81
    },
    {
        "mpg": 33.7,
        "cylinders": 4,
        "displacement": 107,
        "horsepower": 75,
        "weight": 2210,
        "acceleration": 14.4,
        "modelyear": 81
    },
    {
        "mpg": 32.4,
        "cylinders": 4,
        "displacement": 108,
        "horsepower": 75,
        "weight": 2350,
        "acceleration": 16.8,
        "modelyear": 81
    },
    {
        "mpg": 32.9,
        "cylinders": 4,
        "displacement": 119,
        "horsepower": 100,
        "weight": 2615,
        "acceleration": 14.8,
        "modelyear": 81
    },
    {
        "mpg": 31.6,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 74,
        "weight": 2635,
        "acceleration": 18.3,
        "modelyear": 81
    },
    {
        "mpg": 28.1,
        "cylinders": 4,
        "displacement": 141,
        "horsepower": 80,
        "weight": 3230,
        "acceleration": 20.4,
        "modelyear": 81
    },
    {
        "mpg": 30.7,
        "cylinders": 6,
        "displacement": 145,
        "horsepower": 76,
        "weight": 3160,
        "acceleration": 19.6,
        "modelyear": 81
    },
    {
        "mpg": 25.4,
        "cylinders": 6,
        "displacement": 168,
        "horsepower": 116,
        "weight": 2900,
        "acceleration": 12.6,
        "modelyear": 81
    },
    {
        "mpg": 24.2,
        "cylinders": 6,
        "displacement": 146,
        "horsepower": 120,
        "weight": 2930,
        "acceleration": 13.8,
        "modelyear": 81
    },
    {
        "mpg": 22.4,
        "cylinders": 6,
        "displacement": 231,
        "horsepower": 110,
        "weight": 3415,
        "acceleration": 15.8,
        "modelyear": 81
    },
    {
        "mpg": 26.6,
        "cylinders": 8,
        "displacement": 350,
        "horsepower": 105,
        "weight": 3725,
        "acceleration": 19,
        "modelyear": 81
    },
    {
        "mpg": 20.2,
        "cylinders": 6,
        "displacement": 200,
        "horsepower": 88,
        "weight": 3060,
        "acceleration": 17.1,
        "modelyear": 81
    },
    {
        "mpg": 17.6,
        "cylinders": 6,
        "displacement": 225,
        "horsepower": 85,
        "weight": 3465,
        "acceleration": 16.6,
        "modelyear": 81
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 112,
        "horsepower": 88,
        "weight": 2605,
        "acceleration": 19.6,
        "modelyear": 82
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 112,
        "horsepower": 88,
        "weight": 2640,
        "acceleration": 18.6,
        "modelyear": 82
    },
    {
        "mpg": 34,
        "cylinders": 4,
        "displacement": 112,
        "horsepower": 88,
        "weight": 2395,
        "acceleration": 18,
        "modelyear": 82
    },
    {
        "mpg": 31,
        "cylinders": 4,
        "displacement": 112,
        "horsepower": 85,
        "weight": 2575,
        "acceleration": 16.2,
        "modelyear": 82
    },
    {
        "mpg": 29,
        "cylinders": 4,
        "displacement": 135,
        "horsepower": 84,
        "weight": 2525,
        "acceleration": 16,
        "modelyear": 82
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 90,
        "weight": 2735,
        "acceleration": 18,
        "modelyear": 82
    },
    {
        "mpg": 24,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 92,
        "weight": 2865,
        "acceleration": 16.4,
        "modelyear": 82
    },
    {
        "mpg": 23,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 85,
        "weight": 3035,
        "acceleration": 20.5,
        "modelyear": 82
    },
    {
        "mpg": 36,
        "cylinders": 4,
        "displacement": 105,
        "horsepower": 74,
        "weight": 1980,
        "acceleration": 15.3,
        "modelyear": 82
    },
    {
        "mpg": 37,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 68,
        "weight": 2025,
        "acceleration": 18.2,
        "modelyear": 82
    },
    {
        "mpg": 31,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 68,
        "weight": 1970,
        "acceleration": 17.6,
        "modelyear": 82
    },
    {
        "mpg": 38,
        "cylinders": 4,
        "displacement": 105,
        "horsepower": 63,
        "weight": 2125,
        "acceleration": 14.7,
        "modelyear": 82
    },
    {
        "mpg": 36,
        "cylinders": 4,
        "displacement": 98,
        "horsepower": 70,
        "weight": 2125,
        "acceleration": 17.3,
        "modelyear": 82
    },
    {
        "mpg": 36,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 88,
        "weight": 2160,
        "acceleration": 14.5,
        "modelyear": 82
    },
    {
        "mpg": 36,
        "cylinders": 4,
        "displacement": 107,
        "horsepower": 75,
        "weight": 2205,
        "acceleration": 14.5,
        "modelyear": 82
    },
    {
        "mpg": 34,
        "cylinders": 4,
        "displacement": 108,
        "horsepower": 70,
        "weight": 2245,
        "acceleration": 16.9,
        "modelyear": 82
    },
    {
        "mpg": 38,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 67,
        "weight": 1965,
        "acceleration": 15,
        "modelyear": 82
    },
    {
        "mpg": 32,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 67,
        "weight": 1965,
        "acceleration": 15.7,
        "modelyear": 82
    },
    {
        "mpg": 38,
        "cylinders": 4,
        "displacement": 91,
        "horsepower": 67,
        "weight": 1995,
        "acceleration": 16.2,
        "modelyear": 82
    },
    {
        "mpg": 25,
        "cylinders": 6,
        "displacement": 181,
        "horsepower": 110,
        "weight": 2945,
        "acceleration": 16.4,
        "modelyear": 82
    },
    {
        "mpg": 38,
        "cylinders": 6,
        "displacement": 262,
        "horsepower": 85,
        "weight": 3015,
        "acceleration": 17,
        "modelyear": 82
    },
    {
        "mpg": 26,
        "cylinders": 4,
        "displacement": 156,
        "horsepower": 92,
        "weight": 2585,
        "acceleration": 14.5,
        "modelyear": 82
    },
    {
        "mpg": 22,
        "cylinders": 6,
        "displacement": 232,
        "horsepower": 112,
        "weight": 2835,
        "acceleration": 14.7,
        "modelyear": 82
    },
    {
        "mpg": 32,
        "cylinders": 4,
        "displacement": 144,
        "horsepower": 96,
        "weight": 2665,
        "acceleration": 13.9,
        "modelyear": 82
    },
    {
        "mpg": 36,
        "cylinders": 4,
        "displacement": 135,
        "horsepower": 84,
        "weight": 2370,
        "acceleration": 13,
        "modelyear": 82
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 151,
        "horsepower": 90,
        "weight": 2950,
        "acceleration": 17.3,
        "modelyear": 82
    },
    {
        "mpg": 27,
        "cylinders": 4,
        "displacement": 140,
        "horsepower": 86,
        "weight": 2790,
        "acceleration": 15.6,
        "modelyear": 82
    },
    {
        "mpg": 44,
        "cylinders": 4,
        "displacement": 97,
        "horsepower": 52,
        "weight": 2130,
        "acceleration": 24.6,
        "modelyear": 82
    },
    {
        "mpg": 32,
        "cylinders": 4,
        "displacement": 135,
        "horsepower": 84,
        "weight": 2295,
        "acceleration": 11.6,
        "modelyear": 82
    },
    {
        "mpg": 28,
        "cylinders": 4,
        "displacement": 120,
        "horsepower": 79,
        "weight": 2625,
        "acceleration": 18.6,
        "modelyear": 82
    },
    {
        "mpg": 31,
        "cylinders": 4,
        "displacement": 119,
        "horsepower": 82,
        "weight": 2720,
        "acceleration": 19.4,
        "modelyear": 82
    }
]