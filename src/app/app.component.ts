import { Component } from "@angular/core";

const data = {
  chart: {
    caption: "Monthly recurring revenue",
    yaxisname: "Revenue",
    subcaption: "(On GAAP basis)",
    numberprefix: "$",
    yaxisminvalue: "-2000",
    showsum: "1",
    plottooltext:
      "$seriesName in $label was <b>$dataValue</b>  ($percentValue of monthly total)",
    decimals: "1",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2022-06-01"
        },
        {
          label: "2022-06-20"
        },
        {
          label: "2022-07-29"
        },
        {
          label: "2022-09-28"
        },
        {
          label: "2022-10-07"
        },
        {
          label: "2022-10-10"
        },
        {
          label: "2022-10-11"
        },
        {
          label: "2022-10-12"
        },
        {
          label: "2022-10-13"
        },
        {
          label: "2022-10-19"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "MRR",
      data: [
        {
          value: "810"
        },
        {
          value: "930"
        },
        {
          value: "1110"
        },
        {
          value: "1300"
        },
        {
          value: "1890"
        },
        {
          value: "2350"
        },
        {
          value: "2740"
        },
        {
          value: "3050"
        },
        {
          value: "3570"
        },
        {
          value: "4390"
        },
        {
          value: "5610"
        },
        {
          value: "7160"
        },
        {
          value: "7750"
        }
      ]
    },
    {
      seriesname: "New business",
      data: [
        {
          value: "380"
        },
        {
          value: "390"
        },
        {
          value: "420"
        },
        {
          value: "490"
        },
        {
          value: "900"
        },
        {
          value: "1160"
        },
        {
          value: "1350"
        },
        {
          value: "1510"
        },
        {
          value: "1790"
        },
        {
          value: "2140"
        },
        {
          value: "2660"
        },
        {
          value: "3850"
        },
        {
          value: "4070"
        }
      ]
    },
    {
      seriesname: "Upsell",
      data: [
        {
          value: "220"
        },
        {
          value: "240"
        },
        {
          value: "280"
        },
        {
          value: "350"
        },
        {
          value: "580"
        },
        {
          value: "630"
        },
        {
          value: "670"
        },
        {
          value: "740"
        },
        {
          value: "790"
        },
        {
          value: "920"
        },
        {
          value: "1050"
        },
        {
          value: "1290"
        },
        {
          value: "1320"
        }
      ]
    },
    {
      seriesname: "Consulting",
      data: [
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "20"
        },
        {
          value: "50"
        },
        {
          value: "50"
        },
        {
          value: "60"
        },
        {
          value: "60"
        },
        {
          value: "60"
        },
        {
          value: "80"
        },
        {
          value: "130"
        },
        {
          value: "170"
        },
        {
          value: "170"
        }
      ]
    },
    {
      seriesname: "Churn",
      data: [
        {
          value: "-50"
        },
        {
          value: "-50"
        },
        {
          value: "-70"
        },
        {
          value: "-90"
        },
        {
          value: "-100"
        },
        {
          value: "-110"
        },
        {
          value: "-150"
        },
        {
          value: "-260"
        },
        {
          value: "-320"
        },
        {
          value: "-350"
        },
        {
          value: "-500"
        },
        {
          value: "-630"
        },
        {
          value: "-650"
        }
      ]
    },
    {
      seriesname: "Downgrades",
      data: [
        {
          value: "-180"
        },
        {
          value: "-210"
        },
        {
          value: "-260"
        },
        {
          value: "-320"
        },
        {
          value: "-580"
        },
        {
          value: "-680"
        },
        {
          value: "-780"
        },
        {
          value: "-900"
        },
        {
          value: "-1060"
        },
        {
          value: "-1320"
        },
        {
          value: "-1520"
        },
        {
          value: "-1650"
        },
        {
          value: "-1660"
        }
      ]
    }
  ]
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  type = "stackedcolumn2d";
  dataFormat = "json";
  dataSource = data;
}
