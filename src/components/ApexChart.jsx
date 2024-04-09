import React from "react";
import dates from "../assets/currensy.json";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

export default function ApexChart() {
  const [valutes, setValute] = useState("exchangeRatesEuro");
  
  return (
    <div className="container">
      <h1 className="valuta">Valuta Exchange</h1>
      <div>
        <div className="chart" id="chart">
          <ReactApexChart
            options={
              {
                chart: {
                  type: "line",
                  stacked: false,
                  height: 350,
                  zoom: {
                    type: "x",
                    enabled: true,
                    autoScaleYaxis: true,
                  },
                  toolbar: {
                    autoSelected: "zoom",
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                markers: {
                  size: 1,
                  colors:'red'
                },
                title: {
                  text: "Valuta exchanges with dollor $",
                  align: "left",
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 3,
                    opacityTo: 0,
                    stops: [0, 90, 100],
                  },
                },
                yaxis: {
                  labels: {
                    formatter: function (val) {
                      return val;
                    },
                  },
                  title: {
                    text: valutes === "exchangeRatesEuro" ? "EURO":
                    valutes === "exchangeRatesUzb" ? "SO'M" :
                    valutes === "exchangeRatesRus" ? "Рубль" :"DINAR",
                  },
                },
                xaxis: {
                  title: "Month",
                  type: "datetime",
                },
                tooltip: {
                  shared: false,
                  y: {
                    formatter: function (val) {
                      return val;
                    },
                  },
                },
              }
            }
            series={[
              {
                name:valutes === "exchangeRatesEuro" ? "USD, EUR => EXCHANGES":
                valutes === "exchangeRatesUzb" ? "USD, SO'M => EXCHANGES" :
                valutes === "exchangeRatesRus" ? "USD, Рубль => EXCHANGES" :"USD, DINAR => EXCHANGES",
                data:
                  valutes === "exchangeRatesEuro" ?
                  dates.timestamps.map((timestamp, index) => ({
                    x: timestamp,
                    y: parseFloat(dates.exchangeRatesEuro[index]),
                  })) :
                  valutes === "exchangeRatesUzb" ?
                  dates.timestamps.map((timestamp, index) => ({
                    x: timestamp,
                    y: parseFloat(dates.exchangeRatesUzb[index]),
                  })) :
                  valutes === "exchangeRatesRus" ?
                  dates.timestamps.map((timestamp, index) => ({
                    x: timestamp,
                    y: parseFloat(dates.exchangeRatesRus[index]),
                  })) :
                  dates.timestamps.map((timestamp, index) => ({
                    x: timestamp,
                    y: parseFloat(dates.exchangeRatesDinar[index]),
                  })),
                color:  valutes === "exchangeRatesEuro" ? "#0033ff" :
                valutes === "exchangeRatesUzb" ? "#d000ff" :
                valutes === "exchangeRatesRus" ? "#1aff00" :"#0b0b0f",
              },
            ]}
            type="area"
            height={350}
            width={1000}
          />
        </div>
        <div id="html-dist"></div>
      </div>
      <div>
        <ul className="listGroup">
          <input defaultChecked={true} type="radio" name="exchange" id="euro" />
          <li onClick={() => setValute("exchangeRatesEuro")}>
            <label htmlFor="euro">Euro</label>
          </li>
          <input type="radio" name="exchange" id="sum" />
          <li onClick={() => setValute("exchangeRatesUzb")}>
            <label htmlFor="sum">So'm</label>
          </li>
          <input type="radio" name="exchange" id="Rubl" />
          <li onClick={() => setValute("exchangeRatesRus")}>
            <label htmlFor="Rubl">Рубль</label>
          </li>
          <input type="radio" name="exchange" id="Dinor" />
          <li>
            <label
              onClick={() => setValute("exchangeRatesDinar")}
              htmlFor="Dinor"
            >
              Dinar
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
