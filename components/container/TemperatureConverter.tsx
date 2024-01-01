"use client"
import {ReactNode, useState} from "react";
import {FahrenheitProps, KelvinProps} from "@/components/presentational";

type TemperatureConverterProps = {
  renderFahrenheit: (props: FahrenheitProps) => ReactNode
  renderKelvin: (props: KelvinProps) => ReactNode
}

export const TemperatureConverter = (props: TemperatureConverterProps) => {
  const [value, setValue] = useState(0);

  return (
   <div className="card">
     <input
      className="card-input"
      type="number"
      placeholder="Degrees Celcius"
      onChange={(e) => {
        const value = e.target.value;

        setValue(parseInt(value) || 0)
      }}
     />
     {props.renderFahrenheit({value})}
     {props.renderKelvin({value})}
   </div>
  );
}
